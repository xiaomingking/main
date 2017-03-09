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

