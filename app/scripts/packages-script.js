// Accordion
//<![CDATA[

jQuery(document).ready(function () {
	//Day 1
	jQuery(".package-program-day-1-close").click(function () {
		jQuery(".package-program-detail-day-1").show("slow", function () {
			jQuery(".package-program-day-1-close").css("display", "none");
			jQuery(".package-program-day-1-open").css("display", "flex");
		});
	});
	jQuery(".package-program-day-1-open").click(function () {
		jQuery(".package-program-detail-day-1").hide("slow", function () {
			jQuery(".package-program-day-1-open").css("display", "none");
			jQuery(".package-program-day-1-close").css("display", "flex");
		});
	});
	// Day 2
	jQuery(".package-program-day-2-close").click(function () {
		jQuery(".package-program-detail-day-2").show("slow", function () {
			jQuery(".package-program-day-2-close").css("display", "none");
			jQuery(".package-program-day-2-open").css("display", "flex");
		});
	});
	jQuery(".package-program-day-2-open").click(function () {
		jQuery(".package-program-detail-day-2").hide("slow", function () {
			jQuery(".package-program-day-2-open").css("display", "none");
			jQuery(".package-program-day-2-close").css("display", "flex");
		});
	});
	// Day 3
	jQuery(".package-program-day-3-close").click(function () {
		jQuery(".package-program-detail-day-3").show("slow", function () {
			jQuery(".package-program-day-3-close").css("display", "none");
			jQuery(".package-program-day-3-open").css("display", "flex");
		});
	});
	jQuery(".package-program-day-3-open").click(function () {
		jQuery(".package-program-detail-day-3").hide("slow", function () {
			jQuery(".package-program-day-3-open").css("display", "none");
			jQuery(".package-program-day-3-close").css("display", "flex");
		});
	});
	// Day 4
	jQuery(".package-program-day-4-close").click(function () {
		jQuery(".package-program-detail-day-4").show("slow", function () {
			jQuery(".package-program-day-4-close").css("display", "none");
			jQuery(".package-program-day-4-open").css("display", "flex");
		});
	});
	jQuery(".package-program-day-4-open").click(function () {
		jQuery(".package-program-detail-day-4").hide("slow", function () {
			jQuery(".package-program-day-4-open").css("display", "none");
			jQuery(".package-program-day-4-close").css("display", "flex");
		});
	});
	// Day 5
	jQuery(".package-program-day-5-close").click(function () {
		jQuery(".package-program-detail-day-5").show("slow", function () {
			jQuery(".package-program-day-5-close").css("display", "none");
			jQuery(".package-program-day-5-open").css("display", "flex");
		});
	});
	jQuery(".package-program-day-5-open").click(function () {
		jQuery(".package-program-detail-day-5").hide("slow", function () {
			jQuery(".package-program-day-5-open").css("display", "none");
			jQuery(".package-program-day-5-close").css("display", "flex");
		});
	});
});

//]]>
