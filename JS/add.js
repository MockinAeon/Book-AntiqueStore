$(".addbtn").bind("click", function () {
	var addquantity =parseInt($(this).parent().prev().children().val());
	
	var oldquantity=parseInt($(".cart-quantity").html());

	var newquantity = oldquantity+addquantity;

	$(".cart-quantity").html(newquantity);

	localStorage.quantity= newquantity;

	location.reload();
	
});

$(".popup-smimg").mouseover(function(){
	$(this).addClass("smimg2")
});
$(".popup-smimg").mouseout(function(){
	$(this).removeClass("smimg2")
});

$(".descriptionbtn").click(function(){
	$(this).parent().children().removeClass("description-btn-active");
	$(this).addClass("description-btn-active");
	var type = $(this).html();
	if(type=="Details"){
		$(".description-detail").show();
		$(".description-review").hide();
	}else if(type=="Reviews"){
		$(".description-review").show();
		$(".description-detail").hide();
	}
});