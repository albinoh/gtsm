//Global style, since this is the entry component lets put it here
import './../../global/style/style.scss';
//Style specific for this component
import style from './component1.scss';
//Any other modules that are required by this component
import stuffs from './../component2/component2';

document.write('Stuff is coming:<br>');

for(var stuff of stuffs){
  document.write('<span class="stuff">' + stuff + '</span>');
  document.write('<br/>');
}
