jQuery(document).ready(function ($) {

   /*---------------------------------
      CSS Helpers
   -----------------------------------*/

   /*Table*/
   $('table.tblstyle1').find('tr:even').addClass('alt');
   $('table.tblstyle2').find('tr:even').addClass('alt');
   $('table.tblstyle2').find('td:last-child').addClass('last');
   $('table.tblstyle2').find('th:last-child').addClass('last');

   /*ul alt*/
   $('ul.alt').find('li:last-child').addClass('last');

   /*hr*/
   $('hr').before('<div class="clear"></div>');


   /*---------------------------------
      Mega Menu
   -----------------------------------*/
   $("#navigation").navigation({
      showDuration: 300,
      effect: "slide",
      mobileBreakpoint: 1024,
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



   /*---------------------------------
      Footer and Sub Navi Accordion
   -----------------------------------*/
   if ($(window).width() < 801) {
      $('#accordion ul').addClass("hide");
      $("#accordion h1").on("click", function (e) {
         $(this).next('#accordion ul').slideToggle(200);
         $(this).toggleClass('collapsed');
      });
   } else {
      $('#accordion ul').removeClass("hide");
   }

   if ($(window).width() <= 1024) {
      $('.sub-navi ul').addClass("hide");
      $(".sub-navi h3").on("click", function (e) {
         $(this).next('.sub-navi ul').stop().slideToggle(200);
         $(this).toggleClass('collapsed');
      });
   } else {
      $('.sub-navi ul').removeClass("hide");
   }



   AOS.init({
      easing: 'ease-in-out-sine',
      disable: 'mobile'
   });
   window.addEventListener('load', AOS.refresh)



});