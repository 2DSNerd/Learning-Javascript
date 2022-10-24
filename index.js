// Import stylesheets
import './style.css';

// Write Javascript code!
var x;
var y;
var a;

a = x / y;

if ((a = x / y)) {
  confirm('Hit Ok To See');
  document.getElementById('demo').innerHTML = x + ' / ' + y + ' = ' + a;
} else {
  document.getElementById('demo').innerHTML = 'No Numbers Found';
}
