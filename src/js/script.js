//require('es6-promise').polyfill(); // or import in webpack module (plugins: ["es6-promise"])
require('nodelist-foreach-polyfill');

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
