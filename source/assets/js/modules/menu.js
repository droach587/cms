var menuJS = (function() {
    /**
     * Avoid Console Errors
     *
     *
     */
    (function() {
        var method;
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = (window.console = window.console || {});
        while (length--) {
            method = methods[length];
            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());
    /**
     * Simple Init Function
     *
     *
     */

    function init() {

      var mobiMenu = '.js-mobi-menu-wrap';
      var isVisible = 'isVisible';

      $('.js-nav-togg').on('click', function(e){
        $(mobiMenu).toggleClass(isVisible);
        e.preventDefault();
      });

      $('.js-nav-close').on('click', function(e){
        $(mobiMenu).toggleClass(isVisible);
        e.preventDefault();
      });

      $(window).on('scroll', function(){
        if($(document).scrollTop() >= 100){
          $('.header').addClass('isFixed');
          $('body').addClass('isFixed');
        }else{
          $('.header').removeClass('isFixed');
          $('body').removeClass('isFixed');
        }
      });

    }
    /**
     * Reveal All Methods here
     *
     *
     */
    return {
        init: init
    };
})();
