!function(){function t(o,e,n){function i(a,s){if(!e[a]){if(!o[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=e[a]={exports:{}};o[a][0].call(c.exports,function(t){var e=o[a][1][t];return i(e||t)},c,c.exports,t,o,e,n)}return e[a].exports}for(var r="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}return t}()({1:[function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var r=t("./Pages/common"),a=n(r),s=function(){function t(){i(this,t),this.init()}return t.prototype.init=function(){new a["default"]},t}();new s},{"./Pages/common":2}],2:[function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=t("./../tools/noScript"),a=(n(r),t("./../tools/verifyWidth")),s=(n(a),t("./../tools/isMobile")),l=(n(s),function(){function t(){i(this,t),this.init()}return t.prototype.DOMReady=function(){var t=this;$(document).ready(function(){t.sliderHome(),t.newsletter(),t.prateleiraDinamica(),t.byButton()})},t.prototype.onLoad=function(){var t=this;$(window).on("load",function(){setTimeout(function(){t.carousellHome()},1e3)})},t.prototype.ajaxStop=function(){$(document).ajaxStop(function(){})},t.prototype.sliderHome=function(){$(".c-sliderHome__sliders").owlCarousel({items:1,margin:0,lazyLoad:!0,nav:!1,loop:!0,touchDrag:!0,autoplayHoverPause:!0,mouseDrag:!0,rewind:!0,autoplay:3e3})},t.prototype.carousellHome=function(){$(".listProdutos").owlCarousel({loop:!0,touchDrag:!0,mouseDrag:!0,margin:10,nav:!0,autoplay:3e3,responsiveClass:!0,responsive:{0:{items:2,nav:!1},1366:{items:4}}})},t.prototype.newsletter=function(){$(document).on("click",".c-news button",function(t){function o(t){var o=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return o.test(t)}t.preventDefault();var e=$(".c-news").find(".name"),n=$(".c-news").find(".email"),i=""==e.val(),r=""==n.val()||!o(n.val());if(i)return void e.addClass("erro");if(r)return e.removeClass("erro"),void n.addClass("erro");var a={name:e.val(),email:n.val()};if(console.log(a),!i&&!r){$(".c-news").find(".erro").removeClass("erro"),$(".sucesso").show(),$("form, h2").hide();var s={url:"https://corebiz-test.herokuapp.com/api/v1/newsletter",data:JSON.stringify(a),method:"POST",timeout:0};$.ajax(s).done(function(t){console.log(t)})}}),$(document).on("click",".sucesso button",function(){location.reload()})},t.prototype.prateleiraDinamica=function(){var t={url:"https://corebiz-test.herokuapp.com/api/v1/products",method:"GET",timeout:0};$.ajax(t).done(function(t){console.log(t),t.forEach(function(t,o){var e='\n                \n                <li class="listProdutos__item">\n                <a href="#" class="listProdutos__item--link">\n                  <div class="listProdutos__item--flag">\n                    <span class="off">Off</span>\n                  </div>\n                  <img class="listProdutos__item--image" src="'+t.imageUrl+'" alt="produto">\n                  \n                  <div class="listProdutos__item--wrapper">\n                    <span class="listProdutos__item--name">'+t.productName+'</span>\n    \n                    <ul class="listProdutos__item--avaliacoes">\n                      <li></li>\n                      <li></li>\n                      <li></li>\n                      <li></li>\n                      <li></li>\n                    </ul>\n    \n                    <span class="listProdutos__item--precoDe">de R$ 299,00</span>\n                    <span class="listProdutos__item--precoPor">por R$ 199,00</span>  \n                    <span class="listProdutos__item--parcelado">ou em 4x de R$ 49,75</span>   \n                    <span class="listProdutos__item--btnComprar" title="Comprar">Comprar</span> \n                  </div>\n                </a>\n              </li>\n                \n                ';$(".listProdutos").append(e)})})},t.prototype.byButton=function(){$(document).on("click",".listProdutos__item--btnComprar",function(){var t=Number($(".circle span").text());t+=1,localStorage.setItem("miniCart",t),$(".circle span").text(localStorage.getItem("miniCart"))}),$(".circle span").text(localStorage.getItem("miniCart"))},t.prototype.init=function(){this.DOMReady(),this.onLoad(),this.ajaxStop()},t}());e["default"]=l},{"./../tools/isMobile":3,"./../tools/noScript":4,"./../tools/verifyWidth":5}],3:[function(t,o,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=navigator.userAgent.toLowerCase();if(t.search(/(android|avantgo|blackberry|iemobile|nokia|lumia|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!=-1)return!0};e["default"]=n},{}],4:[function(t,o,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){$(window).width()>1170?$(".d-desk").find("noscript").replaceWith(function(){return this.textContent||this.innerText}):$(".d-mob").find("noscript").replaceWith(function(){return this.textContent||this.innerText})};e["default"]=n},{}],5:[function(t,o,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return $(window).width()<=1170?($("body").addClass("isMobile"),$("body").removeClass("notMobile"),!0):($("body").removeClass("isMobile"),$("body").addClass("notMobile"),!1)};e["default"]=n},{}]},{},[1]);
//# sourceMappingURL=00-Corebiz-2021-Scripts.js.map