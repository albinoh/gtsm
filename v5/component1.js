import stuffs from './component2';
import "./style.css";

document.write('Stuff is coming:<br>');

for(var stuff of stuffs){
    document.write('<span class="stuff">' + stuff + '</span>');
    document.write('<br/>');
};
