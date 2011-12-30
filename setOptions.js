function setOptions() {
	var db = window.localStorage;
				
	for(var j = 0; j < document.float.length; j++) {
		if(document.float.elements[j].value == db["float"])
			document.float.elements[j].checked = true;
	}
	/*for(var k = 0; k < document.getElementById('bgColor').length; k++) {
		if(document.getElementById('bgColor').options[k].value == db["bgColor"])
			document.getElementById('bgColor').options[k].selected = true;
	}*/
	
	document.getElementById('bgColor').value = db['bgColor'].substring(1);
	
	document.getElementById('lcColor').value = db["lcColor"].substring(1);
	document.getElementById('lcTColor').value = db["lcTColor"];
	document.getElementById('lcTTColor').value = db["lcTTColor"];
	
	document.getElementById('rcTColor').value = db["rcTColor"];
	document.getElementById('rcTTColor').value = db["rcTTColor"];
	document.getElementById('rcColor').value = db["rcColor"];

	document.getElementById('ccLColor').value = db["ccLColor"];
	document.getElementById('ccCColor').value = db["ccCColor"];
	document.getElementById('ccTColor').value = db["ccTColor"];
	document.getElementById('ccTTColor').value = db["ccTTColor"];
	document.getElementById('cColor').value = db["cColor"];
	
	document.getElementById('plcColor').value = db["plcColor"];
	document.getElementById('plctColor').value = db["plctColor"];
	document.getElementById('prcColor').value = db["prcColor"];
	document.getElementById('prcTTColor').value = db["prcTTColor"];
	document.getElementById('prcntColor').value = db["prcntColor"];
				
	document.getElementById('phlcColor').value = db["phlcColor"];
	document.getElementById('phccColor').value = db["phccColor"];
	document.getElementById('phtColor').value = db["phtColor"];
	document.getElementById('phhovColor').value = db["phhovColor"];
		
	document.getElementById('cbgColor').value = db["cbgColor"];
	document.getElementById('ctColor').value = db["ctColor"];
		
	document.getElementById('gbgColor').value = db["gbgColor"];
	document.getElementById('gtColor').value = db["gtColor"];
		
	document.getElementById('navbgColor').value = db["navbgColor"];
	document.getElementById('navtColor').value = db["navtColor"];
	document.getElementById('gpnavColor').value = db["gpnavColor"];
	
			
	if(db["scroll"] == "true")
		document.getElementById('scroll').checked = true;
	if(db["scroll2"] == "true") {
		document.getElementById('scroll').checked = false;
		document.getElementById('scroll2').checked = true;
	}
		
	if(db["uname"] == "true")
		document.getElementById('uname').checked = true;
	if(db["gmail"] == "true")
		document.getElementById('gmail').checked = true;
	if(db["cal"] == "true")
		document.getElementById('cal').checked = true;
	if(db["docs"] == "true")
		document.getElementById('docs').checked = true;
	if(db["photos"] == "true")
		document.getElementById('photos').checked = true;
	if(db["reader"] == "true")
		document.getElementById('reader').checked = true;
	if(db["web"] == "true")
		document.getElementById('web').checked = true;
	if(db["more"] == "true")
		document.getElementById('more').checked = true;
	if(db["images"] == "true")
		document.getElementById('images').checked = true;
	if(db["videos"] == "true")
		document.getElementById('videos').checked = true;
	if(db["map"] == "true")
		document.getElementById('map').checked = true;
	if(db["news"] == "true")
		document.getElementById('news').checked = true;
	if(db["shopping"] == "true")
		document.getElementById('shopping').checked = true;
		
	if(db["showGCount"] == "true")
		document.getElementById('showGCount').checked = true;
	if(db["showRCount"] == "true")
		document.getElementById('showRCount').checked = true;
		
	if(db["pPic"] == "true") 
		document.getElementById('pPic').checked = true;
	if(db["pName"] == "true") 
		document.getElementById('pName').checked = true;
	if(db["welcome"] == "true")
		document.getElementById('welcome').checked = true;
	if(db["stream"] == "true") {
		document.getElementById('stream').checked = true;
		db["incoming"] = "true";
		db["notif"] = "true";
	}
		
	if(db["incoming"] == "true") 
		document.getElementById('incoming').checked = true;
	if(db["notif"] == "true")
		document.getElementById('notif').checked = true;
	if(db["sparks"] == "true")
		document.getElementById('sparks').checked = true;
	if(db["chat"] == "true")
		document.getElementById('chat').checked = true;
	
	if(db["inCircs"] == "true")
		document.getElementById('inCircs').checked = true;
	if(db["suggest"] == "true")
		document.getElementById('suggest').checked = true;
	if(db["hText"] == "true")
		document.getElementById('hText').checked = true;
	if(db["hTitle"] == "true")
		document.getElementById('hTitle').checked = true;
	if(db["hButton"] == "true")
		document.getElementById('hButton').checked = true;
	if(db["invites"] == "true")
		document.getElementById('invites').checked = true;
	if(db["mobile"] == "true")
		document.getElementById('mobile').checked = true;
		
	if(db["feedback"] == "true")
		document.getElementById('feedback').checked = true;
	if(db["custTheme"] == "true") 
		document.getElementById('custTheme').checked = true;
	if(db["custWideTheme"] == "true") 
		document.getElementById('custWideTheme').checked = true;
	
	//background colors
	if(db["abgColor"] == "true") 
		document.getElementById('abgColor').checked = true;
	if(db["alcColor"] == "true") 
		document.getElementById('alcColor').checked = true;
	if(db["arcColor"] == "true") 
		document.getElementById('arcColor').checked = true;
	
	//left column home page
	if(db["alcTTColor"] == "true") 
		document.getElementById('alcTTColor').checked = true;
	if(db["alcTColor"] == "true") 
		document.getElementById('alcTColor').checked = true;
		
	//right column home page
	if(db["arcTColor"] == "true") 
		document.getElementById('arcTColor').checked = true;
	if(db["arcTTColor"] == "true") 
		document.getElementById('arcTTColor').checked = true;
	
	//center column home page
	if(db["accLColor"] == "true") 
		document.getElementById('accLColor').checked = true;
	if(db["accCColor"] == "true") 
		document.getElementById('accCColor').checked = true;
	if(db["accTColor"] == "true") 
		document.getElementById('accTColor').checked = true;
	if(db["accTTColor"] == "true") 
		document.getElementById('accTTColor').checked = true;
	if(db["acColor"] == "true") 
		document.getElementById('acColor').checked = true;
		
	//profile page left column
	if(db["aplcColor"] == "true") 
		document.getElementById('aplcColor').checked = true;
	if(db["aplctColor"] == "true") 
		document.getElementById('aplctColor').checked = true;
	
	//profile page right column
	if(db["aprcColor"] == "true") 
		document.getElementById('aprcColor').checked = true;
	if(db["aprcTTColor"] == "true") 
		document.getElementById('aprcTTColor').checked = true;
	if(db["aprcntColor"] == "true") 
		document.getElementById('aprcntColor').checked = true;
	
	//photos page
	if(db["aphlcColor"] == "true") 
		document.getElementById('aphlcColor').checked = true;
	if(db["aphccColor"] == "true") 
		document.getElementById('aphccColor').checked = true;
	if(db["aphtColor"] == "true") 
		document.getElementById('aphtColor').checked = true;
	if(db["aphhovColor"] == "true") 
		document.getElementById('aphhovColor').checked = true;
	
	//circles page
	if(db["acbgColor"] == "true") 
		document.getElementById('acbgColor').checked = true;
	if(db["actColor"] == "true") 
		document.getElementById('actColor').checked = true;
		
	//games page
	if(db["agbgColor"] == "true") 
		document.getElementById('agbgColor').checked = true;
	if(db["agtColor"] == "true") 
		document.getElementById('agtColor').checked = true;
			
	//nav bar
	if(db["anavbgColor"] == "true") 
		document.getElementById('anavbgColor').checked = true;
	if(db["anavtColor"] == "true") 
		document.getElementById('anavtColor').checked = true;
	if(db["agpnavColor"] == "true") 
		document.getElementById('agpnavColor').checked = true;
}
	
chrome.tabs.onUpdated.addListener(setOptions());