; (function ($) {
   $(function () {
      $('a[data-rel^=lightcase]').lightcase({ transition: 'elastic' });

      $(".inline").each(function (index) {
         var currentElement = $(this);
         var customWidth = "custom-width";
         var customHeight = "custom-height";
         var width = currentElement.attr(customWidth) ? currentElement.attr(customWidth) : 1000;
         var height = currentElement.attr(customHeight) ? currentElement.attr(customHeight) : 500;
         currentElement.lightcase({
            iframe: {
               width: width,
               height: height,
               frameborder: 0
            },
            transition: 'elastic'
         });
      });
      /*$('.inline').lightcase({
         iframe: {
            width: 500,
            height: 500,
            frameborder: 0
         },
         transition: 'elastic'
      });*/

      $('a[data-rel="lightcase:myCollection"]').lightcase({ transition: 'scrollHorizontal' });
   });
})(jQuery);