window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let calc = require('./parts/calc.js'),
      form = require('./parts/form.js'),
      tabs = require('./parts/tabs.js'), 
      timer = require('./parts/timer.js'),
      modal = require('./parts/modal.js'),
      slider = require('./parts/slider.js');
      
      calc();
      form();
      tabs();
      timer();
      modal();
      slider();
  
});
