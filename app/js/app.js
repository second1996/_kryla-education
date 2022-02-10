// Import jQuery module
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Import vendor jQuery plugin (not module)
require('../../node_modules/bootstrap/js/dist/util.js'); // Bootstrap Util lib
require('../../node_modules/bootstrap/js/dist/modal.js'); // Bootstrap Modal
require('../../node_modules/bootstrap/js/dist/collapse.js'); // Bootstrap Collapse (Accordion)
require('../../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'); // jQuery Mask

// Import Fancybox
require('../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js'); // Fancybox
$.fancybox.defaults.animationEffect = 'fade';
$.fancybox.defaults.buttons = ['zoom', 'thumbs', 'close'];

document.addEventListener('DOMContentLoaded', () => {
  /**
   *-------------------------------------------------------------------------------------------------------------------------------------------
   * Import files
   *-------------------------------------------------------------------------------------------------------------------------------------------
   */
  require('./_scripts.js');
  require('./_sliders.js');
});
