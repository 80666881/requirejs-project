require(['jquery','com/gotop','com/carousel','com/waterfall','com/ajax-append'],function($,goTop,Carousel,Waterfall,GetImg) {
	new goTop('gotop');
	new Carousel($('.carousel'));
	new Waterfall($('.ct'));
	new GetImg();
})