var quantity = parseInt(localStorage.quantity);
if (quantity) {
	$(".cart-quantity").html(quantity);
}
if (localStorage.username) {
	$("#login p").html("Hello " + localStorage.username);
} else {
	$("#login p").html("Sign in");
}
$("#login").click(function () {
	if (localStorage.username) {

		$("#logout-part").toggle(500);
	} else {
		$("#login-part").toggle(500, function () {
			$("#username").focus();
		});

	}
});

$("#login-btn").click(function (event) {
	event.preventDefault();
	var username = $("#username").val();
	var password = $("#password").val();
	if (username == "admin" && password == "admin") {
		localStorage.username = "admin";
		$("#login-part").hide(500, function () {
			location.reload(500);
		});

	} else {
		$(".errormsg").show(200);
	};

});

$("#logout-btn").click(function (event) {
	event.preventDefault();
	localStorage.clear();
	$("#logout-part").hide(500, function () {
		window.location.href = "index.html";
	});

});

$(".account-txt").focusin(function () {
	$(this).css({
		"border": "1px solid lightgray"
	});
});

$(".account-txt").focusin(function () {


});
$(".account-txt").focusout(function () {
	if ($(this).val() == "") {
		$(this).css({
			"border": "1px solid red"
		});
		$("#create-btn").attr('disabled', true);
	}
});
$("input[name=password]").focusin(function () {
	$(".notmatch").hide(500);
	if ($("input[name=password]").val() != "") {
		$("input[name=password],input[name=password2]").css({
			"border": "1px solid lightgray"
		});
	}

});
$("input[name=password2]").focusin(function () {
	$(".notmatch").hide(500);
	if ($("input[name=password]").val() != "") {
		$("input[name=password],input[name=password2]").css({
			"border": "1px solid lightgray"
		});
	}

});
$("input[name=password2]").focusout(function () {
	if ($("input[name=password]").val() != "") {
		if ($("input[name=password2]").val() == $("input[name=password]").val()) {
			var notgood = 0;
			$(".account-txt").each(function () {
				if ($(this).val() == "") {
					notgood = notgood + 1;
					$(this).css({
						"border": "1px solid red"
					});
				}
			});
			if (notgood == 0) {
				$("#create-btn").attr('disabled', false);
			}
		} else {
			$(".notmatch").show(500);
			$("#create-btn").attr('disabled', true);
			$("input[name=password],input[name=password2]").css({
				"border": "1px solid red"
			});
		}
	}
});

$("#create-btn").click(function () {

			var notgood = 0;
			$(".account-txt").each(function () {
				if ($(this).val() == "") {
					notgood = notgood + 1;
					$(this).css({
						"border": "1px solid red"
					});
				}
			});
			if (notgood == 0) {
				var useranme = $("input[name=fullname]").val();
				if (useranme == "admin") {
					$("#createbutton").click();
					localStorage.username = "admin";
					setTimeout(function () {
						window.location.reload();
					}, 1500);
				} else if (useranme == "1") {
					$(".exist").show(500);
					setTimeout(function () {
						$(".exist").hide(500);
					}, 1500);

				}


			}
});

		$(".create-link").click(function () {
			$("#login-part").hide(500);
		});

		$(".icon-part-icon").mousemove(function () {
			$(this).children().children().css({
				"color": "#2e7d32",
				"transition": "color 0.5s ease"
			});

			$(this).children().css({
				"color": "#2e7d32",
				"transition": "color 0.5s ease"
			});



		});

		$(".icon-part-icon").mouseout(function () {
			$(this).children().children().css({
				"color": "black",
				"transition": "color 0.5s ease"
			});

			$(this).children().css({
				"color": "black",
				"transition": "color 0.5s ease"
			});



		});

		$("#search").next().children().click(function (event) {
			event.preventDefault();
			var searchtext = $("#search").val();

			if (searchtext != "") {
				localStorage.searchtext = searchtext;
				window.location.href = "search.html";
			}
		}); $("#search").keypress(function (event) {

			if (event.keyCode == 13) {
				event.preventDefault();
				var searchtext = $("#search").val();

				if (searchtext != "") {
					localStorage.searchtext = searchtext;
					window.location.href = "search.html";
				}
			};

		});