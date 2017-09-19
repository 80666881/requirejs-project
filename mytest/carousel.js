//轮播模块，AMD写法		

	define(['jquery'],function($){
		function Carousel($ct){
			this.$ct = $ct;
			this.init();
			this.bind();
		}
		
		Carousel.prototype = {
			init: function(){
				var $imgList = this.$imgList = this.$ct.find('.imgList');
				var $imgs = this.$imgs = this.$ct.find('.imgList>li');
				var imgNum = this.imgNum = $imgs.length;
				var $nextPage = this.$nextPage = this.$ct.find('.nextPage');
				var $prePage = this.$prePage = this.$ct.find('.prePage');
				var imgWidth = $imgs.width();
				var curIndex = this.curIndex = 0;
				var $bullets = this.$bullets = this.$ct.find('.bullet>li');
				this.loaded = true;

				$imgList.append($imgs.eq(0).clone());
				$imgList.prepend($imgs.eq(imgNum-1).clone());
				$imgList.css({
					left: '-500px',
					width:(imgNum+2)*imgWidth
				})	
			},
			bind: function(){
				var _this = this;
				this.$nextPage.on('click',function(e){
					e.preventDefault();
					_this.playNext();
				});
				this.$prePage.on('click',function(e){
					e.preventDefault();
					_this.playPre();
				})
			},
			playNext: function(){
				var _this = this;
				if (!this.loaded) {return}
				this.loaded = false;
				this.curIndex++;
				this.$imgList.animate({
					left: '-=500px'
				},function(){
					if (_this.curIndex == _this.imgNum) {
						_this.$imgList.css({
							left: '-500px'
						})
						_this.curIndex = 0;
					}
					_this.$bullets.siblings().removeClass('active');
					_this.$bullets.eq(_this.curIndex).addClass('active');
					_this.loaded = true;
				})
			},
			playPre: function(){
				var _this = this;
				if (!this.loaded) {return}
				this.loaded = false;
				this.curIndex--;
				this.$imgList.animate({
					left: '+=500px'
				},function(){
					if (_this.curIndex < 0) {
						_this.$imgList.css({
							left: '-2000px'
						})
						_this.curIndex =_this.imgNum-1;
					}
					_this.$bullets.siblings().removeClass('active');
					_this.$bullets.eq(_this.curIndex).addClass('active');
					_this.loaded = true;
				})
			}
		}

		return Carousel;
	})
		