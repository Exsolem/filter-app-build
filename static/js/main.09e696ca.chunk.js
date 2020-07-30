(this["webpackJsonpfilter-app"]=this["webpackJsonpfilter-app"]||[]).push([[0],{57:function(e,t,r){e.exports=r(84)},84:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(26),o=r.n(c),s=r(16),i=r(29),u=r(52),l=r(43),d=r(44),p=r(45),g=r(53),m=r(51),h=r(20),f=r(17),b=r(24),v=r.n(b),y=r(25),E=r(7),O=r(19),C=r(23),P=r.n(C),x=v.a.mark(T),j=v.a.mark(k),w={isLoading:!1,loadSuccess:!1,errorOccurred:!1,products:[],filteredProducts:[],searchedProducts:[],categories:[],search:"",currentCategory:""},S=function(e){return{type:"REQUESTED_PRODUCTS",payload:e}},R={fetchProducts:function(){return{type:"FETCHED_PRODUCTS"}},getFilteredProducts:function(e){return{type:"GET_FILTERED_PRODUCTS",payload:e}},getSearchValue:function(e){return{type:"GET_SEARCH_VALUE",payload:e}},getSearchedProducts:function(){return{type:"GET_SEARCHED_PRODUCTS"}},getCurrentCategory:function(e){return{type:"GET_CURRENT_CATEGORY",payload:e}}};function T(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("FETCHED_PRODUCTS",k);case 2:case"end":return e.stop()}}),x)}function k(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.b)({type:"LOADING_PRODUCTS"});case 3:return t.next=5,Object(O.a)((function(){return fetch("../products.json").then((function(e){return e.json()}))}));case 5:return e=t.sent,t.next=8,Object(O.b)(S(e));case 8:return t.next=10,Object(O.b)({type:"GET_CATEGORIES"});case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(O.b)({type:"ERROR_OCCURRED"});case 16:case"end":return t.stop()}}),j,null,[[0,12]])}var D=r(12),_=r(13);function L(){var e=Object(D.a)(["\n  text-align: left;\n  border: 1px solid black;\n  text-align: center;\n  width: 20vw;\n  list-style-type: none;\n  background: #02a879;\n  font-size: 2.5vh;\n  @media (max-width: 575px) {\n    width: 100vw;\n    font-size: 2vh;\n    \n  }\n  &:hover { \n    background-color: rgba(0, 107, 54, 0.6);\n    text-decoration: none;\n    color: white;\n  };\n"]);return L=function(){return e},e}function U(){var e=Object(D.a)(["\n    max-width: 40vmin;  \n    padding: 0;\n    border-radius: 1vmin;\n    @media (max-width: 575px) {\n        margin-bottom: 1vmax;\n        max-width: 50vmin;  \n    }\n"]);return U=function(){return e},e}function N(){var e=Object(D.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1vmin;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 2vmin;\n"]);return N=function(){return e},e}function G(){var e=Object(D.a)(["\n    font-size: 3vmin;\n    line-height: 70%;   \n    color: black;\n    font-weight: bold;\n    @media (max-width: 575px) {\n    font-size: 2.5vmax;\n    margin: 2vmax;\n  }\n"]);return G=function(){return e},e}function A(){var e=Object(D.a)(["\n    font-size: 2.5vmin;\n    line-height: 70%;   \n    color: black;\n    @media (max-width: 575px) {\n    font-size: 2.5vmax;\n    padding: 10px;\n  }\n"]);return A=function(){return e},e}function F(){var e=Object(D.a)(["\n    margin: 0;\n    padding: 0;\n"]);return F=function(){return e},e}function V(){var e=Object(D.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]);return V=function(){return e},e}function I(){var e=Object(D.a)(["\nposition: absolute;\nborder-radius: 50%;\ntop: 40%;\nleft: 40%;\n"]);return I=function(){return e},e}function z(){var e=Object(D.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  text-align:left;\n  align-items: flex-start;\n  height: auto;\n  width: 20vw;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 1vh;\n  height:15vh;\n"]);return z=function(){return e},e}function H(){var e=Object(D.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  @media (max-width: 575px) {\n    flex-flow: column wrap;\n  }\n"]);return H=function(){return e},e}function M(){var e=Object(D.a)(['\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  background: rgba(0,130,117,1);\n  background: -moz-linear-gradient(top, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,130,117,1)), color-stop(100%, rgba(0,94,120,1)));\n  background: -webkit-linear-gradient(top, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);\n  background: -o-linear-gradient(top, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);\n  background: -ms-linear-gradient(top, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);\n  background: linear-gradient(to bottom, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#008275\', endColorstr=\'#005e78\', GradientType=0 );\n  color: white;\n  min-height: 100vh;\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n']);return M=function(){return e},e}var B=_.a.div(M());B.displayName="AppContainer";var J=_.a.div(H());J.displayName="AppDiv";var Q=_.a.menu(z());Q.displayName="AppMenu";var Y=_.a.img(I());Y.displayName="AppImg";var W=_.a.div(V());W.displayname="ProductsDiv";var X=_.a.ul(F());X.dispayName="ProductsUl";var q=_.a.span(A());q.displayName="ProductName";var K=_.a.span(G());K.displayName="ProductPrice";var Z=_.a.li(N());Z.displayName="ProductLi";var $=_.a.img(U());$.displayName="ProductImg";var ee=_.a.li(L());ee.displayName="CategoryLi";var te=r(85),re=r(86),ae=r(87),ne=r(6),ce=r.n(ne),oe=r(21),se=r.n(oe),ie=function(e){var t=e.product,r=t.img,a=t.price,c=t.name;return n.a.createElement(te.a,{style:{margin:0,padding:0}},n.a.createElement(re.a,null,n.a.createElement(ae.a,{xs:!0,sm:!0,md:12,lg:!0},n.a.createElement(Z,{key:se()(),className:"flex-column flex-sm-row flex-md-row"},n.a.createElement(ae.a,{xs:12,sm:5,md:5},n.a.createElement($,{src:r,alt:"product"})),n.a.createElement(ae.a,{xs:12,sm:2,md:2}," ",n.a.createElement(K,null,a," GBP")),n.a.createElement(ae.a,{xs:12,sm:5,md:5}," ",n.a.createElement(q,null,c))))))};ie.propsTypes={img:ce.a.string,price:ce.a.string,name:ce.a.string};var ue=ie,le=r(89),de=r(88),pe=Object(f.e)((function(e){var t=e.search,r=e.getSearchValue,a=e.getSearchedProducts,c=e.history,o=c.push,s=c.location.pathname;return n.a.createElement(le.a,{className:"mb-12",style:{margin:"2vmin 0",padding:0}},n.a.createElement(de.a,{onChange:function(e){r(e.target.value),a(),e.target.value?o("".concat(s,"?search=").concat(e.target.value)):o("".concat(s))},value:t}))})),ge=function(e){var t=e.searchedProducts,r=e.getCurrentCategory,a=e.search,c=e.filteredProducts,o=e.getSearchedProducts,s=e.getSearchValue,i=e.products;r(e.history.location.pathname);return n.a.createElement(W,{className:"col-md-9"},n.a.createElement(pe,{getSearchValue:s,getSearchedProducts:o,search:a}),n.a.createElement(X,{className:"col-md-12"},0!==a.length?t.map((function(e,t){return n.a.createElement(ue,{key:t,product:e})})):c.length>0?c.map((function(e,t){return n.a.createElement(ue,{key:t,product:e})})):i.map((function(e,t){return n.a.createElement(ue,{key:t,product:e})}))))},me=r(28),he=r.n(me),fe=function(e){var t=e.category,r=e.getCurrentCategory,a=e.getFilteredProducts,c=e.getSearchedProducts,o=e.getSearchValue,s=e.search,i=P()(t.toLowerCase());""!==s&&s.length>=1&&o(he.a.parse(s).search);return n.a.createElement(h.b,{to:{pathname:"/".concat(i),search:"".concat(s)},key:se()(),activeStyle:{color:"white",backgroundColor:"rgba(0, 107, 54, 0.6)"},style:{color:"black",textDecoration:"none",backgroundColor:"rgba(86, 125, 130, 1)"},onClick:function(){r(i),a(),c()}},n.a.createElement(ee,null,t))},be=Object(f.e)((function(e){var t=e.categories,r=e.getSearchValue,a=e.getSearchedProducts,c=e.getFilteredProducts,o=e.getCurrentCategory,s=e.location.search;if(s.length>0){var i=he.a.parse(s);r(i.search)}return n.a.createElement(n.a.Fragment,null,t.map((function(e,t){return n.a.createElement(fe,{index:t,key:se()(),category:e,getSearchValue:r,getCurrentCategory:o,getFilteredProducts:c,getSearchedProducts:a,search:s})})))})),ve=function(e){Object(g.a)(r,e);var t=Object(m.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"componentDidUpdate",value:function(e,t){this.props.currentCategory&&e.products.length!==this.props.products.length&&(this.props.getFilteredProducts(),this.props.getSearchedProducts()),this.props.search&&e.search.length!==this.props.search.length&&this.props.getSearchedProducts()}},{key:"render",value:function(){var e=this;return n.a.createElement(B,{className:"col-lg-12"},n.a.createElement(h.a,null,n.a.createElement(J,null,n.a.createElement(Q,null,n.a.createElement(be,{currentCategory:this.props.currentCategory,categories:this.props.categories,search:this.props.search,getSearchValue:this.props.getSearchValue,getCurrentCategory:this.props.getCurrentCategory,getFilteredProducts:this.props.getFilteredProducts,getSearchedProducts:this.props.getSearchedProducts})),this.props.isLoading?n.a.createElement(Y,{src:"https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif",alt:"loader"}):this.props.errorOccurred?n.a.createElement("p",null,"Error, try again"):n.a.createElement(f.a,{path:"/",render:function(t){return n.a.createElement(ge,Object.assign({},t,{getFilteredProducts:e.props.getFilteredProducts,filteredProducts:e.props.filteredProducts,searchedProducts:e.props.searchedProducts,search:e.props.search,products:e.props.products,getSearchValue:e.props.getSearchValue,getSearchedProducts:e.props.getSearchedProducts,getCurrentCategory:e.props.getCurrentCategory}))}}))))}}]),r}(n.a.Component),ye=Object(i.b)((function(e){return{products:e.products,isLoading:e.isLoading,errorOccurred:e.errorOccurred,filteredProducts:e.filteredProducts,categories:e.categories,search:e.search,currentCategory:e.currentCategory,searchedProducts:e.searchedProducts}}),R)(ve),Ee=Object(u.a)(),Oe=Object(s.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_PRODUCTS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0});case"REQUESTED_PRODUCTS":return Object(E.a)(Object(E.a)({},e),{},{products:t.payload.products,loadSuccess:!0,isLoading:!1});case"ERROR_OCCURRED":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,errorOccurred:!0});case"GET_CATEGORIES":var r=["All Products"];return Object(y.a)(e.products).forEach((function(e){var t=e.bsr_category;-1===r.indexOf(t)&&r.push(t)})),Object(E.a)(Object(E.a)({},e),{},{categories:r});case"GET_FILTERED_PRODUCTS":var a=Object(y.a)(e.products).filter((function(t){return P()(t.bsr_category.toLowerCase())===e.currentCategory||"all-products"===e.currentCategory}));return Object(E.a)(Object(E.a)({},e),{},{filteredProducts:a});case"GET_SEARCH_VALUE":return Object(E.a)(Object(E.a)({},e),{},{search:t.payload});case"GET_CURRENT_CATEGORY":var n=P()(t.payload.toLowerCase());return Object(E.a)(Object(E.a)({},e),{},{currentCategory:n});case"GET_SEARCHED_PRODUCTS":var c=[];return e.currentCategory&&"all-products"!==e.currentCategory?Object(y.a)(e.filteredProducts).forEach((function(t){var r=t.name.toLowerCase(),a=e.search.toLowerCase();r.indexOf(a)>=0&&c.push(t)})):Object(y.a)(e.products).forEach((function(t){var r=t.name.toLowerCase(),a=e.search.toLowerCase();r.indexOf(a)>=0&&c.push(t)})),Object(E.a)(Object(E.a)({},e),{},{searchedProducts:c});default:return e}}),Object(l.composeWithDevTools)(Object(s.applyMiddleware)(Ee)));Ee.run(T),o.a.render(n.a.createElement(i.a,{store:Oe},n.a.createElement(ye,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.09e696ca.chunk.js.map