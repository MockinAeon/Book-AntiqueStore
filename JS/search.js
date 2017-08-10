$(".show-books").hide();
var searchtxt = localStorage.searchtext;
var str="A Russian Song Book Rose N.Rubin and Micheal Stillman a russian song book rose n.rubin and micheal stillman A RUSSIAN SONG BOOK ROSE N.RUBIN AND MICHEAL STILLMAN"
if(str.match(searchtxt)!=null){
	$("#searching-words").html("1 of 1 results for " + '"'+localStorage.searchtext+'"')
	$(".show-books").show();
}else{
	$("#searching-words").html("Your search "+ '"'+localStorage.searchtext+'"'+" did not match any products." )
}