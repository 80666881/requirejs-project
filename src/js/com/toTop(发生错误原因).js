define(['jquery'],function($) {
	function Totop(id){
		this.id = id;
		this.init();
	}
	Totop.prototype = {
		init: function(){
			if (this.id.length !== 0) {
				alert('该id名称已存在，请更换id');
			}else{
				this.$node = $('<a id="goTop" href="#" style="color:#fff;background: #6E7BF3; padding:10px 20px; display: inline-block; position: fixed;right: 10px;bottom: 10px;border: 1px solid red;">回到顶部</a>')
				this.bind();
			}
		},
		bind: function(){
			var loaded = false;
			var scrollTop  = $(window).scrollTop();
			if (scrollTop > 100 && loaded == false) {
/*				$('body').append(this.$node);
				this.$node.show();
				loaded = true;
				this.goTop();*/
				console.log(this.$node.text())
			}else{
				this.$node.hide();
				loaded = false;
			}
		},
		goTop: function(){
			this.$node.on('click',function(){
				$(window).scrollTop(0);
			})
		}
	}
})