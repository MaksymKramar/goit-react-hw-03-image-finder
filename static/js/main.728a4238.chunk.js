(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Container:"Button_Container__2V67y"}},12:function(e,t,a){e.exports={Spiner:"Loader_Spiner__2_iXo"}},17:function(e,t,a){},18:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(3),c=a.n(o),s=(a(17),a(9)),i=a(4),l=a(5),u=a(7),m=a(6),d=(a(18),a(0));var h=function(e){var t=e.onSearch;return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:function(e){var a=e.target.elements.searchName.value.toLowerCase();if(e.preventDefault(),""===a.trim())return alert("Enter valid name,please!");t(a)},children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",name:"searchName",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};var p=function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("21756599-0afd71203aca16b66ad6b1f5f","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("There is no images with name ".concat(e)))}))};var j=function(e){var t=e.tags,a=e.webformatURL,n=e.openModal;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:n,children:Object(d.jsx)("img",{src:a,alt:t,className:"ImageGalleryItem-image"})})};var b=function(e){var t=e.images,a=e.openModal;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(d.jsx)(j,{tags:o,webformatURL:n,openModal:function(){return a(r,o)}},t)}))})},f=a(10),g=a.n(f);var O=function(e){var t=e.onClick;return Object(d.jsx)("div",{className:g.a.Container,children:Object(d.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})},v=(a(20),a(11)),S=a.n(v),x=a(12),N=a.n(x);function y(){return Object(d.jsx)("div",{className:N.a.Spiner,children:Object(d.jsx)(S.a,{type:"ThreeDots",color:"#00BFFF",height:120,width:120,timeout:3e5})})}var k=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).backdrop=Object(n.createRef)(),e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){e.backdropRef.current&&t.target!==e.backdropRef.current||e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.image;return Object(o.createPortal)(Object(d.jsx)("div",{className:"Overlay",ref:this.backdropRef,onClick:this.props.onClose,role:"presentation",children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:e.src,alt:e.alt})})}),k)}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchName:"",images:[],selectedImage:null,reqStatus:"idle",pageNumber:1},e.resetState=function(){e.setState({searchName:"",pageNumber:1,images:[],selectedImage:null,status:"idle"})},e.handleFormSubmit=function(t){e.resetState(),e.setState({searchName:t})},e.openModal=function(t,a){e.setState({modalIsOpen:!0,selectedImage:{src:t,alt:a}})},e.closeModal=function(){return e.setState({modalIsOpen:!1})},e.onLoadMore=function(){e.setState((function(e){return{pageNumber:e.pageNumber+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.searchName,o=n.pageNumber,c=n.images;t.searchName===r&&t.pageNumber===o||(this.setState({reqStatus:"pending"}),p(r,o).then((function(e){return e.hits})).then((function(e){return a.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(e)),reqStatus:"resolved"}}))})).catch((function(e){return a.setState({error:e,reqStatus:"rejected"})}))),t.images!==c&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.reqStatus,r=e.selectedImage,o=e.modalIsOpen;return"idle"===n?Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{onSearch:this.handleFormSubmit})}):"pending"===n?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{onSearch:this.handleFormSubmit}),Object(d.jsx)(b,{openModal:this.openModal,images:t}),Object(d.jsx)(y,{}),t.length>0&&Object(d.jsx)(O,{onClick:this.onLoadMore})]}):"rejected"===n?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{onSearch:this.handleFormSubmit}),Object(d.jsx)("h1",{children:a.message})]}):"resolved"===n?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{onSearch:this.handleFormSubmit}),Object(d.jsx)(b,{images:t,openModal:this.openModal}),t.length>0&&Object(d.jsx)(O,{onClick:this.onLoadMore}),o&&Object(d.jsx)(w,{image:r,onClose:this.closeModal})]}):void 0}}]),a}(n.Component);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.728a4238.chunk.js.map