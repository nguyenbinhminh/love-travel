"use strict";$(document).ready(function(){$(".beach-slider-images").slick({arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:3e3})}),$('[data-toggle="datepicker"]').datepicker({format:"mm-dd-yyyy"});var slider=document.getElementById("filter-price-progress"),output=document.getElementById("filter-label--value");output.innerHTML=slider.value,slider.oninput=function(){output.innerHTML=this.value};