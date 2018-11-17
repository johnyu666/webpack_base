import './css/main.css'
import a1 from './images/a1.gif'
import users from './model/users'
import 'expose-loader?$!jquery'
import 'expose-loader?jQuery!jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import {m} from './myMath'
console.log(m)
window.onload=function () {
   $("#root").addClass("hi");
    let img=new Image();
    img.src=a1;
    document.getElementById("root").appendChild(img);
 
}