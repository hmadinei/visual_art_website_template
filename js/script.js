// JavaScript Document
$(document).ready(function(){
	new WOW().init();
	$("#carouselContent").carousel();
	$("#envelope").mouseenter(function(){
		$(this).css({
			backgroundColor:"#9FAE37",
			transitionDuration:"0.5s"
		});
		$(this).children("i").css("color","#fff");
	});
	$("#envelope").mouseleave(function(){
		$(this).css("backgroundColor","transparent");
		$(this).children("i").css("color","black");
	});
	$("#dribbble").mouseenter(function(){
		$(this).css({
			backgroundColor:"#E44885",
			transitionDuration:"0.5s"
		});
		$(this).children("i").css("color","#fff");
	});
	$("#dribbble").mouseleave(function(){
		$(this).css("backgroundColor","transparent");
		$(this).children("i").css("color","black");
	});
	$("#twitter").mouseenter(function(){
		$(this).css({
			backgroundColor:"#46D4FE",
			transitionDuration:"0.5s"
		});
		$(this).children("i").css("color","#fff");
	});
	$("#twitter").mouseleave(function(){
		$(this).css("backgroundColor","transparent");
		$(this).children("i").css("color","black");
	});
	$("button").click(function(){
		$("input").each(function(index,element){
			var mytype = $(element).attr("type");
			if($("input[type="+mytype+"]").val().length <1){
				$("input[type="+mytype+"]").css("border","2px solid red")
			}
			else{
				$("input[type="+mytype+"]").css("border","2px solid #9AA600")
			}
		})
		if($("textarea").val().length <1){
			$("textarea").css("border","2px solid red")
		}
		else{
			$("textarea").css("border","2px solid #9AA600")
		}
	})
	$(".triple").click(function(){
		$(".modal-body").children("a").addClass("wow fadeInUp");
		new WOW().init();
	})
})
function myFunction(x) {
	x.classList.toggle("change");
} 
window.onscroll = function() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		document.getElementById("top_btn").style.display = "block";
    } 
	else {
		document.getElementById("top_btn").style.display = "none";
	}
};
function topFunction() {
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}