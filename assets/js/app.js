"use strict";var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");function deactivateItems(s){var n;return s.each(function(e,a){$(a).hasClass("block")&&(n=e,s.removeClass("block").addClass("none"))}),n}navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))}),$(function(){var e=$("a[href='"+location.pathname.replace("/","")+"']");e&&($(".site-list__item").removeClass("site-list__item--active"),e.addClass("site-list__item--active"))}),$(".news__to-all").click(function(){$(".news__item").show("slow",function(){$(".news__to-all").addClass("none")})}),$(".user-list__login").click(function(e){e.preventDefault(),$(".login-form").removeClass("none")}),$(".login-form__closed").click(function(e){e.preventDefault(),$(".login-form").addClass("none")}),$(".form__button").click(function(e){e.preventDefault(),$(".form__item").removeClass("empty-field");var a=$(".form__item"),s=!1;a.each(function(e,a){$(a).val()||(s=!0,$(".fail-pop-up").removeClass("none"),$(".success-pop-up").addClass("none"),$(a).addClass("empty-field"))}),s||($(".success-pop-up").removeClass("none"),$(".form__item").removeClass("empty-field"))}),$(".fail-pop-up__button").click(function(e){e.preventDefault(),$(".fail-pop-up").addClass("none")}),$(".success-pop-up__button").click(function(e){e.preventDefault(),$(".success-pop-up").addClass("none")}),$(".slider-arrow--left").click(function(e){e.preventDefault();var a=$(".reviews__body"),s=deactivateItems(a);s-1<0?$(a[a.length-1]).addClass("block"):$(a[s-1]).addClass("block")}),$(".slider-arrow--right").click(function(e){e.preventDefault();var a=$(".reviews__body"),s=deactivateItems(a);s+1>a.length-1?$(a[0]).addClass("block"):$(a[s+1]).addClass("block")}),$(".reviews__toggles.slider__toggles span").click(function(){var e=$(".reviews__body");deactivateItems(e),$(".reviews__toggles.slider__toggles span").removeClass("active-second"),$(e[parseInt(this.innerText,10)]).addClass("block"),$(this).addClass("active-second")}),$(".advantages__toggles.slider__toggles span").click(function(){var e=$(".advantages__item");deactivateItems(e),$(".advantages__toggles.slider__toggles span").removeClass("active"),$(e[parseInt(this.innerText,10)]).addClass("block"),$(this).addClass("active")});