$(function() {
	if (readKey("timeout") == null)
		updateKey("timeout", 10);

	$(".timeout-input > option[value="+readKey("timeout").toString()+"]").attr("selected", true);
	$(".enabled-input").attr("checked", readKey("enabled") == "true");

	$(".timeout-input").change(function() {
		updateKey("timeout", $(this).val());
		flashSaved();
	})
	$(".enabled-input").change(function() {
		updateKey("enabled", $(this).attr("checked") == "checked");
		flashSaved();
	})
});

function flashSaved() {
		$(".saved-label").fadeIn(200).delay(1000).fadeOut(200);
}

function updateKey(key, val) {
	localStorage[key] = val;
}

function readKey(key) {
	return localStorage[key];
}