const accuweather=document.getElementById("accuweather");
const flexBox=document.getElementById("flex-box");


accuweather.addEventListener("click",()=>{
flexBox.classList.toggle("collapse");

});
 

const timer=setInterval(()=>{
     const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();

    document.getElementById("time").innerHTML=`${hours} : ${minutes} ${hours>=12?"PM":"AM"}`;

},1000);
