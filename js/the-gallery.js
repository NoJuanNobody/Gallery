$(document).ready(function(){
//when page is loaded, 'the gallery should fade into view'
$('.pink').hide().fadeIn(3000);

$(window).scroll(function(){
//when the page scroll is engaged, change the opacity of the nav bar
if ($('.navbar').offset().top > 10){
	 $(".navbar-the-gallery").addClass("top-nav-collapse");

}	else{
		$(".navbar-the-gallery").removeClass("top-nav-collapse");
				}
			});

});

