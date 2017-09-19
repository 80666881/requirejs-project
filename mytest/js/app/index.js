//加载模块
require(['jquery','com/carousel'],function($,Carousel){
	new Carousel($('.carousel').eq(0));
	new Carousel($('.carousel').eq(1));
})