var img = document.getElementById('img');

var slides = ['images/agri2.jpg', 'images/agri3.jpg', 'images/agri4.jpg', 'images/agri1.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img class='imgstyle' src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);
