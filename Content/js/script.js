
chrome.extension.sendRequest({method: "getData"}, function(data) {
 	if (data["enabled"] == "false")
 		return;

	var curtime = new Date().getTime();

	var timeout = parseInt(data["timeout"]);
	


	if (localStorage.lastVisit && (curtime - localStorage.lastVisit < (timeout * 60 * 1000)))
	{
		localStorage.lastVisit = curtime;
		window.location = "http://en.wikipedia.org/wiki/Special:Random";
		return;
	}

	localStorage.lastVisit = curtime;
});