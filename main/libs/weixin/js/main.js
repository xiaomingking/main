var mySwiper = new Swiper("#swiper",{
	direction:"vertical",
	onInit:function(swiper){
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd:function(swiper){
		swiperAnimate(swiper);
	}
});

var isPlay = true;
var musicBtn = document.getElementById("musicBtn");
var ado = document.getElementById("ado");

musicBtn.onclick = function(){
	if(isPlay){
		ado.play();
		isPlay = false;
		musicBtn.src = "images/musicBtn.png"
	}else{
		ado.pause();
		isPlay = true;
		musicBtn.src = "images/musicBtnOff.png"
		
	}
}
musicBtn.click();