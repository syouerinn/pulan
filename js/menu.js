// JavaScript Document
$(function () {
	$('.sp_nav').click(function () {
		$('.sp_nav').toggleClass('sp_nav_se');
		$('.sjj_nav').toggleClass('nav_show');
		$('.links').toggleClass('links_show');
	});
	
	$('.sjj_nav ul li i').click(function () {
		$(this).parent().children('ul').slideToggle().parent().siblings().children('ul').slideUp();
		$(this).toggleClass('sjj_nav_i_se');
		$(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
	});
});

$('.sjj_nav_ul li ul').prev("a").stop().after('<i class="sp_nav_xjb"></i>');