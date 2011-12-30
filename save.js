function saveAndRefresh() {
	var db = window.localStorage;
			
	for(var i = 0; i < document.float.length; i++) {
		if(document.float.elements[i].checked)
			db["float"] = document.float.elements[i].value;
	}
			
	db["bgColor"] = "#" + document.getElementById('bgColor').value;
	db["abgColor"] = document.getElementById('abgColor').checked;
	db["lcColor"] = "#" + document.getElementById('lcColor').value;
	db["alcColor"] = document.getElementById('alcColor').checked;
	db["rcColor"] = "#" + document.getElementById('rcColor').value;
	db["arcColor"] = document.getElementById('arcColor').checked;
	
	db["lcTColor"] = "#" + document.getElementById('lcTColor').value;
	db["alcTColor"] = document.getElementById('alcTColor').checked;
	db["lcTTColor"] = "#" + document.getElementById('lcTTColor').value;
	db["alcTTColor"] = document.getElementById('alcTTColor').checked;
		
	db["rcTColor"] = "#" + document.getElementById('rcTColor').value;
	db["arcTColor"] = document.getElementById('arcTColor').checked;
	db["rcTTColor"] = "#" + document.getElementById('rcTTColor').value;
	db["arcTTColor"] = document.getElementById('arcTTColor').checked;
	
	db["ccLColor"] = "#" + document.getElementById('ccLColor').value;
	db["accLColor"] = document.getElementById('accLColor').checked;
	db["ccCColor"] = "#" + document.getElementById('ccCColor').value;
	db["accCColor"] = document.getElementById('accCColor').checked;
	db["ccTColor"] = "#" + document.getElementById('ccTColor').value;
	db["accTColor"] = document.getElementById('accTColor').checked;
	db["ccTTColor"] = "#" + document.getElementById('ccTTColor').value;
	db["accTTColor"] = document.getElementById('accTTColor').checked;
	db["cColor"] = "#" + document.getElementById('cColor').value;
	db["acColor"] = document.getElementById('acColor').checked;
	
	db["plcColor"] = "#" + document.getElementById('plcColor').value;
	db["aplcColor"] = document.getElementById('aplcColor').checked;
	db["prcColor"] = "#" + document.getElementById('prcColor').value;
	db["aprcColor"] = document.getElementById('aprcColor').checked;
	db["plctColor"] = "#" + document.getElementById('plctColor').value;
	db["aplctColor"] = document.getElementById('aplctColor').checked;
	db["prcTTColor"] = "#" + document.getElementById('prcTTColor').value;
	db["aprcTTColor"] = document.getElementById('aprcTTColor').checked;
	//db["prcltColor"] = "#" + document.getElementById('prcltColor').value;
	db["prcntColor"] = "#" + document.getElementById('prcntColor').value;
	db["aprcntColor"] = document.getElementById('aprcntColor').checked;
	//db["prctColor"] = "#" + document.getElementById('prctColor').value;
	
	db["phlcColor"] = "#" + document.getElementById('phlcColor').value;
	db["aphlcColor"] = document.getElementById('aphlcColor').checked;
	db["phccColor"] = "#" + document.getElementById('phccColor').value;
	db["aphccColor"] = document.getElementById('aphccColor').checked;
	db["phtColor"] = "#" + document.getElementById('phtColor').value;
	db["aphtColor"] = document.getElementById('aphtColor').checked;
	db["phhovColor"] = "#" + document.getElementById('phhovColor').value;
	db["aphhovColor"] = document.getElementById('aphhovColor').checked;
	
	db["cbgColor"] = "#" + document.getElementById('cbgColor').value;
	db["acbgColor"] = document.getElementById('acbgColor').checked;
	db["ctColor"] = "#" + document.getElementById('ctColor').value;
	db["actColor"] = document.getElementById('actColor').checked;
	
	db["gbgColor"] = "#" + document.getElementById('gbgColor').value;
	db["agbgColor"] = document.getElementById('agbgColor').checked;
	db["gtColor"] = "#" + document.getElementById('gtColor').value;
	db["agtColor"] = document.getElementById('agtColor').checked;
		
	db["navbgColor"] = "#" + document.getElementById('navbgColor').value;
	db["anavbgColor"] = document.getElementById('anavbgColor').checked;
	db["navtColor"] = "#" + document.getElementById('navtColor').value;
	db["anavtColor"] = document.getElementById('anavtColor').checked;
		
	db["gpnavColor"] = "#" + document.getElementById('gpnavColor').value;
	db["agpnavColor"] = document.getElementById('agpnavColor').checked;
	
	db["scroll2"] = document.getElementById('scroll2').checked;
	if(db["scroll2"] == "false")
		db["scroll"] = document.getElementById('scroll').checked;
		
	db["uname"] = document.getElementById('uname').checked;
	db["gmail"] = document.getElementById('gmail').checked;
	db["cal"] = document.getElementById('cal').checked;
	db["docs"] = document.getElementById('docs').checked;
	db["photos"] = document.getElementById('photos').checked;
	db["reader"] = document.getElementById('reader').checked;
	db["web"] = document.getElementById('web').checked;
	db["more"] = document.getElementById('more').checked;
	db["images"] = document.getElementById('images').checked;
	db["videos"] = document.getElementById('videos').checked;
	db["map"] = document.getElementById('map').checked;
	db["news"] = document.getElementById('news').checked;
	db["shopping"] = document.getElementById('shopping').checked;

	db["showGCount"] = document.getElementById('showGCount').checked;
	db["showRCount"] = document.getElementById('showRCount').checked;

	db["pPic"] = document.getElementById('pPic').checked;
	db["pName"] = document.getElementById('pName').checked;
	db["welcome"] = document.getElementById('welcome').checked;
	db["stream"] = document.getElementById('stream').checked;
	db["incoming"] = document.getElementById('incoming').checked;
	db["notif"] = document.getElementById('notif').checked;
	db["sparks"] = document.getElementById('sparks').checked;
	db["chat"] = document.getElementById('chat').checked;
	
	db["inCircs"] = document.getElementById('inCircs').checked;
	db["suggest"] = document.getElementById('suggest').checked;
	db["hText"] = document.getElementById('hText').checked;
	db["hTitle"] = document.getElementById('hTitle').checked;
	db["hButton"] = document.getElementById('hButton').checked;
	db["mobile"] = document.getElementById('mobile').checked;
	db["invites"] = document.getElementById('invites').checked;
	
	db["feedback"] = document.getElementById('feedback').checked;
	db["custTheme"] = document.getElementById('custTheme').checked;
	db["custWideTheme"] = document.getElementById('custWideTheme').checked;
	chrome.windows.getCurrent(function(win) {
		var cwin = win.id;
		chrome.tabs.getAllInWindow(cwin, function(tabs) {
			for (var i = 0; i < tabs.length; i++) {	
				var t = tabs[i].url;
				if (t.match('google.com')) {
					var tab = tabs[i];
					chrome.tabs.update(tab.id, {url: tab.url, selected: tab.selected}, null);
				}
			}
		});
	});
}