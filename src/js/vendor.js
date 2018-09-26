import 'babel-polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('owl.carousel');

require('ninelines-ua-parser');
