var light = false;

$(window).mousemove(function(e){
    let w = $('.spotlight').innerWidth(),
    h = $('.spotlight').innerHeight(),
    t = e.pageY - $('.spotlight').offset().top,
    l = e.pageX - $('.spotlight').offset().left;
$('.spotlight').css('background', 'radial-gradient(circle at '+ (l / w * 100) +'% '+ (t / h * 100) +'%, transparent 80px, rgba(0, 0, 0, 1) 200px)');

});  


$('.slider').on('click' , function(){
	light = !light;
	if (light === true) {
		$('.spotlight').show();
	} else {
		$('.spotlight').hide();
	}
	console.log(light);
})


// let xMouse = -300,
// yMouse = -300,
// lastScrolledLeft = 0,
// lastScrolledTop = 0;
// $(window).mousemove(function(e){
//     updateSpotlight(e);
//     MousePosition(e);    
// });        
// function updateSpotlight(e, x, y) {
//     let w = $('.spotlight').innerWidth(),
//     h = $('.spotlight').innerHeight(),
//     t = e.pageY - $('.spotlight').offset().top,
//     l = e.pageX - $('.spotlight').offset().left;
//     x = x || l;
//     y = y || t;        
//     $('.spotlight').css('background', 'radial-gradient(circle at '+ (x / w * 100) +'% '+ (y / h * 100) +'%, transparent 80px, rgba(0, 0, 0, 1) 120px)');
// }    
// function MousePosition(e){
//     xMouse = e.pageX - $('.spotlight').offset().left;
//     yMouse = e.pageY - $('.spotlight').offset().top;
// }    
// $(window).scroll(function(e) {
//     if(lastScrolledLeft != $(document).scrollLeft()){
//         xMouse -= lastScrolledLeft;
//         lastScrolledLeft = $(document).scrollLeft();
//         xMouse += lastScrolledLeft;
//     }
//     if(lastScrolledTop != $(document).scrollTop()){
//         yMouse -= lastScrolledTop;
//         lastScrolledTop = $(document).scrollTop();
//         yMouse += lastScrolledTop;
//     }
//     updateSpotlight(e, xMouse, yMouse);
// });    