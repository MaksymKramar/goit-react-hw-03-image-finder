import React, { Component } from 'react';
import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar/Searchbar';
import  fetchImages  from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import LoaderSpiner from './components/Loader/Loader';
import Modal from './components/Modal/Modal';



export default class App extends Component {
  state={
    searchName: '',
    images: [],
    selectedImage: null,
    reqStatus: 'idle',
    pageNumber: 1,

  }


  componentDidUpdate(_, prevState) {
    const { searchName,pageNumber,images } = this.state;

    if (prevState.searchName !== searchName || prevState.pageNumber !== pageNumber) {
      this.setState({ reqStatus: 'pending' });

      fetchImages(searchName, pageNumber)
        .then(data => data.hits)
        .then(pictures =>
          this.setState(prevState => ({
            images: [...prevState.images, ...pictures],
            reqStatus: 'resolved',
          })),
        )
        .catch(error => this.setState({ error, reqStatus: 'rejected' }));
    };
    if (prevState.images !== images) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

   resetState = () => {
    this.setState({
      searchName: '',
      pageNumber: 1,
      images: [],
      selectedImage: null,
      status: 'idle',
    });
  };

  handleFormSubmit = searchName => {
    this.resetState();
    this.setState({ searchName })
  };


  openModal = (src, alt) => {
    this.setState({
      modalIsOpen: true,
      selectedImage: { src, alt },
    });
  };
  closeModal = () => this.setState({ modalIsOpen: false });

  onLoadMore = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };


  render() {
    const { images, error, reqStatus, selectedImage, modalIsOpen } = this.state;


      if (reqStatus === 'idle') {
      return (
        <div className="App">
          <Searchbar onSearch={this.handleFormSubmit} />
        </div>
      );
    }
    if (reqStatus === 'pending') {
      return (
        <div className="App">
          <Searchbar onSearch={this.handleFormSubmit} />
          <ImageGallery openModal={this.openModal} images={images} />
          <LoaderSpiner />
          {images.length > 0 && <Button onClick={this.onLoadMore} />}
        </div>
      );
    }
    if (reqStatus === 'rejected') {
      return (
        <div className="App">
          <Searchbar onSearch={this.handleFormSubmit} />
          <h1>{error.message}</h1>
        </div>
      );
    }


    if (reqStatus === 'resolved') {
     return (
        <div className="App">
          <Searchbar onSearch={this.handleFormSubmit}></Searchbar>
          <ImageGallery images={images} openModal={this.openModal}></ImageGallery>
          {images.length > 0 && <Button onClick={this.onLoadMore} />}
          {modalIsOpen && (
            <Modal image={selectedImage} onClose={this.closeModal} />
          )}
        </div>
      )
    }

    
  }
}

