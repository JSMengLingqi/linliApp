$(function () {
	/*引导页*/
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$('.guid').height(windowHeight);
	$('.full-background').height(windowHeight);
	$('.guid-2').height(windowHeight-32*2);/*上下边距*/
	$('.guid-background-1 .word').css('top', (windowHeight-150)/2+20);
	var guidWord4 = $('.guid-background-4 .word img').height();
	if (guidWord4 == 0) {
		guidWord4=125;
	}
	
	$('.guid-background-4 .guid-content').css('top', ((windowHeight-32*2)-(100+guidWord4+100))/2);
	
		/*首页中间图片*/
		$('.index-content .menu .menu-content img').click(function(){
			$('.index-content .menu .menu-content img').css('opacity','1');
			$(this).css('opacity','0.8');
		});
		
		/*类别列表*/
		$('.choose-content .choose-row').click(function(){
			var rightEle = $(this).find('.right');
			var isHidden = rightEle.is(":hidden");/*要把是否隐藏状态存储起来，下方操作会影响其值*/
			
			/*先设置下所有内容和箭头的默认状态*/
			$('.choose-content .choose-row .content').hide();
			$('.choose-content .choose-row .choose-right img.down').hide();
			$('.choose-content .choose-row .choose-right img.right').show();
			
			if (isHidden) {
				rightEle.show();
				$(this).find('.down').hide();
				$(this).find('.content').hide();
			} else {
				rightEle.hide();
				$(this).find('.down').show();
				$(this).find('.content').show();
			}
		});
	
});