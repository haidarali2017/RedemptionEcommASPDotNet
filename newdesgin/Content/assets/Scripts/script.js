$(window).scroll(function () {
   if ($(this).scrollTop() > 1) {
      $('.category-navi, .sec-category-navi').addClass("sticky");
   }
   else {
      $('.category-navi, .sec-category-navi').removeClass("sticky");
   }
});


jQuery(document).ready(function ($) {

   /*---------------------------------
      Mega Menu
   -----------------------------------*/
   $("#navigation").navigation({
      showDuration: 300,
      effect: "slide",
      mobileBreakpoint: 767,
      submenuIndicator: true,
      offCanvasSide: "right",

   });


   $(function () {
      $(".dashboard-link").on("click touchstart", function (n) {
         $(".dashboard-link").addClass("open"), n.stopPropagation()
      }), $(".dashboard-link").on("blur", function () {
         $(".dashboard-link").removeClass("open")
      }), $(document).on("click touchstart", function (n) {
         !1 === $(n.target).is(".dashboard-link") && $(".dashboard-link").removeClass("open")
      })
   });



   AOS.init({
      easing: 'ease-in-out-sine',
      disable: 'mobile'
   });
   window.addEventListener('load', AOS.refresh)



});