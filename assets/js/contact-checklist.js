$(".btnCheck").click(function(event) {
    if ($('.beforeCall input[type="checkbox"]').not(':checked').length == 0) {
        document.getElementById("check-message").innerHTML = '<div class="alert alert-success"><p>You are ready to call</p></div>';
    } else {
        document.getElementById("check-message").innerHTML = '<div class="alert alert-warning"><p>You need all of the above to call about an account</p></div>';

    }
});


// need more calls when multi phone lines are on a single page

$(".btnCheck2").click(function(event) {
    if ($('.beforeCall2 input[type="checkbox"]').not(':checked').length == 0) {
        document.getElementById("check-message2").innerHTML = '<div class="alert alert-success"><p>You are ready to call</p></div>';
    } else {
        document.getElementById("check-message2").innerHTML = '<div class="alert alert-warning"><p>You need all of the above to call about an account</p></div>';

    }
});

$(".btnCheck3").click(function(event) {
    if ($('.beforeCall3 input[type="checkbox"]').not(':checked').length == 0) {
        document.getElementById("check-message3").innerHTML = '<div class="alert alert-success"><p>You are ready to call</p></div>';
    } else {
        document.getElementById("check-message3").innerHTML = '<div class="alert alert-warning"><p>You need all of the above to call about an account</p></div>';

    }
});


$(".btnCheck4").click(function(event) {
    if ($('.beforeCall4 input[type="checkbox"]').not(':checked').length == 0) {
        document.getElementById("check-message4").innerHTML = '<div class="alert alert-success"><p>You are ready to call</p></div>';
    } else {
        document.getElementById("check-message4").innerHTML = '<div class="alert alert-warning"><p>You need all of the above to call about an account</p></div>';

    }
});

$(".btnCheck5").click(function(event) {
    if ($('.beforeCall5 input[type="checkbox"]').not(':checked').length == 0) {
        document.getElementById("check-message5").innerHTML = '<div class="alert alert-success"><p>You are ready to call</p></div>';
    } else {
        document.getElementById("check-message5").innerHTML = '<div class="alert alert-warning"><p>You need all of the above to call about an account</p></div>';

    }
});



		$('span[data-json-replace]').on("wb-contentupdated", function (event, data) {
		 let obj;
			switch (wb.lang) {
			case "en":
			obj = {
				"wt": "Wait times are",
			"na": "Not available",
				"--": ["#waittime-lbx", "Not available", ""],
				"lineFull": ["#linefull-lbx", "Directing calls to automated service"],
				"lineClosed": ["#lineclosed-lbx", "Outside service hours"]
			  };
			  break;
			case "fr":
			  obj = {
			 "wt": "Temps d’attente",
			 "na": "Non disponible",
				"--": ["#waittime-lbx", "Temps d’attente", ""],
				"lineFull": ["#linefull-lbx", "Acheminement d'appels au service automatisé"],
				"lineClosed": ["#lineclosed-lbx", "En dehors des heures de service"]
			  };
		  }
		  const key = $(this).text();
		  if (key in obj) {
			$(this).replaceWith('<a href="' + obj[key][0] + '" class="wb-lbx"><span class="wb-inv">'+ obj.wt + ' </span>' + obj.na + '<span class="wb-inv"> - ' + obj[key][1] + '</span></a>');
			$(".wb-lbx").trigger("wb-init.wb-lbx");
		  }
		});
