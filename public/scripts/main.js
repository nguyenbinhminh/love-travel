"use strict";$(document).ready(function(){$(".beach-slider-images").slick({arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:3e3})}),$('[data-toggle="datepicker"]').datepicker({format:"mm-dd-yyyy"}),$(document).ready(function(){for(var e=document.getElementsByClassName("package-content-program-header"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"})}),$(document).ready(function(){var e=document.getElementById("filter-price-progress"),t=document.getElementById("filter-label--value");t.innerHTML=e.value,e.oninput=function(){t.innerHTML=this.value}});