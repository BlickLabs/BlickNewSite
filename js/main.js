/* ==========================================================================
   FULL SCREEN HEADER 
   ========================================================================== */

function level_up_min_height() {
  var window_height = $(window).height();
  $(".lavel-up-header, .lavel-up-color-overlay").css('min-height', window_height); 
  
}

$(document).ready(function() {
  level_up_min_height();
  $(window).bind('resize', level_up_min_height);
});




/* ==========================================================================
   STELLAR   
   ========================================================================== */

$(window).stellar({ 
	horizontalScrolling: false 
});



/* ==========================================================================
   Countdown
   ========================================================================== */

$(function() {
	var endDate = "April 12, 2016 20:39:00";
	$('.lu-countdown').countdown({
		date: endDate,
		render: function(data) {
			$(this.el).html('<div class="col-xs-6 col-sm-6 col-md-3 lu-countdown-item lu-days"><div class="lu-square"><span>' + this.leadingZeros(data.days, 2) + '</span><span>Días</span></div></div><div class="col-xs-6 col-sm-6 col-md-3 lu-countdown-item lu-hours"><div class="lu-square"><span>' + this.leadingZeros(data.hours, 2) + '</span><span>Horas</span></div></div><div class="col-xs-6 col-sm-6 col-md-3 lu-countdown-item lu-minutes"><div class="lu-square"><span>' + this.leadingZeros(data.min, 2) + '</span><span>Minutos</span></div></div><div class="col-xs-6 col-sm-6 col-md-3 lu-countdown-item lu-seconds"><div class="lu-square"><span>' + this.leadingZeros(data.sec, 2) + '</span><span>Segundos</span></div></div>');
		}
	});
});
$("#myNavbarWeb a,#myNavbarMobile a, .click-scrolling ").on('click', function (event) {
    event.preventDefault();
    var pageRef = $(this).attr("href");
    var offset = 80;
    if(pageRef[0] != '#') {
        $('#navbar-collapse').removeClass('in');
        window.location.href = pageRef;
    }
    else{
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top -0
        }, 800, function () {
            $('#navbar-collapse').removeClass('in');
            window.location.hash = hash;
        });
    }
});
$('.header-container, .borders, .click-scrolling').click(function () {
    $('#navbar-collapse').removeClass('in');
});
$('#navbar-trigger').click(function () {
    $('#navbar-collapse').addClass('in');
});




