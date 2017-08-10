var quantity = parseInt(localStorage.quantity);
if(quantity==0){
	$(".shopping-cart-body").hide();
	$(".checkout-part").hide();
	$(".empty-info").show();
}else{
	$(".shopping-cart-body").show();
	$(".checkout-part").show();
	$(".empty-info").hide();
}
$("#placeorder-btn").click(function(){
	localStorage.quantity=0;
	setTimeout(function(){window.location.reload();},1500);
});