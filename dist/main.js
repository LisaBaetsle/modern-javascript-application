!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const a=new Date,r=a.getDay(),i=a.getDate(),o=a.getMonth(),d=a.getFullYear(),u=a.getHours(),m=r+1,s=r+2,c=r+3,l=r+4;function p(t){switch(t){case 1:case 8:return"Monday";case 2:case 9:return"Tuesday";case 3:case 10:return"Wednesday";case 4:case 11:return"Thursday";case 5:case 12:return"Friday";case 6:case 13:return"Saturday";case 7:case 14:return"Sunday"}}function y(t){!function(t){document.getElementById("cityCountryName").textContent=`${t.city.name}, ${t.city.country}`}(t),function(t){document.getElementById("temperature").textContent=Math.round(t.list[0].main.temp)+"°",document.getElementById("description").textContent=""+t.list[0].weather[0].description,document.getElementById("weatherIcon").src=`http://openweathermap.org/img/wn/${t.list[0].weather[0].icon}@4x.png`,document.getElementById("windSpeed").textContent=`Wind: ${Math.round(t.list[0].wind.speed)} km/h`,document.getElementById("humidity").textContent=`Humidity: ${t.list[0].main.humidity}%`}(t),function(t,e){let n;t<3?n=12:t<6?n=11:t<9?n=10:t<12?n=9:t<15?n=8:t<18?n=7:t<21?n=6:t<24&&(n=5),document.getElementById("dayOneIcon").src=`http://openweathermap.org/img/wn/${e.list[n].weather[0].icon}@2x.png`,document.getElementById("dayOneMinMaxTemp").textContent=`${Math.round(e.list[n-3].main.temp_min)}°C ${Math.round(e.list[n+1].main.temp_max)}°C`,n+=8,document.getElementById("dayTwoIcon").src=`http://openweathermap.org/img/wn/${e.list[n].weather[0].icon}@2x.png`,document.getElementById("dayTwoMinMaxTemp").textContent=`${Math.round(e.list[n-3].main.temp_min)}°C ${Math.round(e.list[n+1].main.temp_max)}°C`,n+=8,document.getElementById("dayThreeIcon").src=`http://openweathermap.org/img/wn/${e.list[n].weather[0].icon}@2x.png`,document.getElementById("dayThreeMinMaxTemp").textContent=`${Math.round(e.list[n-3].main.temp_min)}°C ${Math.round(e.list[n+1].main.temp_max)}°C`,n+=8,document.getElementById("dayFourIcon").src=`http://openweathermap.org/img/wn/${e.list[n].weather[0].icon}@2x.png`,document.getElementById("dayFourMinMaxTemp").textContent=`${Math.round(e.list[n-3].main.temp_min)}°C ${Math.round(e.list[n+1].main.temp_max)}°C`}(u,t),function(t,e){new Chart(t,{type:"line",data:{labels:[""+e.list[0].dt_txt.slice(10,16),""+e.list[1].dt_txt.slice(10,16),""+e.list[2].dt_txt.slice(10,16),""+e.list[3].dt_txt.slice(10,16),""+e.list[4].dt_txt.slice(10,16),""+e.list[5].dt_txt.slice(10,16),""+e.list[6].dt_txt.slice(10,16),""+e.list[7].dt_txt.slice(10,16),""+e.list[8].dt_txt.slice(10,16)],datasets:[{data:[Math.round(e.list[0].main.temp),Math.round(e.list[1].main.temp),Math.round(e.list[2].main.temp),Math.round(e.list[3].main.temp),Math.round(e.list[4].main.temp),Math.round(e.list[5].main.temp),Math.round(e.list[6].main.temp),Math.round(e.list[7].main.temp),Math.round(e.list[8].main.temp)],backgroundColor:"rgba(255, 66, 14, 0.7)",borderColor:"rgba(255, 66, 14, 1)",borderWidth:1}]},options:{legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{min:Math.round(e.list[0].main.temp)-15,max:Math.round(e.list[0].main.temp)+15,fontColor:"rgba(255, 255, 255, 0.6)",display:!1}}],xAxes:[{gridLines:{display:!1},ticks:{fontColor:"rgba(255, 255, 255, 0.6)"}}]},plugins:{datalabels:{color:"rgba(255, 66, 14, 1)",align:"top",labels:{title:{font:{size:"14"}}}}}}})}(document.getElementById("myChart"),t)}function g(){document.getElementById("spinner").style.display="block",document.getElementById("date").textContent=`${p(r)}, ${function(t){switch(t){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}}(o)} ${i}, ${d}`,document.getElementById("dayOneName").textContent=""+p(m),document.getElementById("dayTwoName").textContent=p(s),document.getElementById("dayThreeName").textContent=p(c),document.getElementById("dayFourName").textContent=p(l);let t=document.getElementById("cityInput").value;fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${t}&units=metric&appid=655a19af3d0a8572719255b11fb9c8d0`).then(t=>(document.getElementById("spinner").style.display="none",t.json())).then(y)}document.getElementById("submit").addEventListener("click",g),document.getElementById("cityInput").addEventListener("keyup",(function(t){13===t.keyCode&&(t.preventDefault(),g())}))}]);