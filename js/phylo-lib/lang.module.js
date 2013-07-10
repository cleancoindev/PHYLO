(function() {
	$.lang = {

		//initialize and get the languages file, then executes call back function

		init : function(callBack) {
			//checks if language file is already loaded.
			//if not loaded, load it into the dom
            
            //moved hash to be outside so it can be used in all cases
            var hash;
            try {
                hash = $.helper.get("lang").toString().toUpperCase().replace(/!.*/,"");
                console.log("Language hash set " + hash);
            } catch(err) {
                hash = "EN";
                console.log("Error when trying to get lang. Set to default.");
            }
 
			if($("#langFile").length == 0) {
				var script = document.createElement("script");
				script.id = "langFile";
				script.src = "../lang/"+hash+".js";
				script.type = "text/javascript";
				document.getElementsByTagName("head")[0].appendChild(script);
				
				script.onload = function() {
					var available = function() {
						if(window[hash+"script"] != undefined) {
							window.langOpt = hash;
							window.lang = window[hash+"script"].lang[0];
							callBack();
						} else {
							window.setTimeout(function(){
								available();
							},50);
						}
					};
					available();
				};
				script.onerror = function() {
					console.log(">> Cannot connect to get language files");
					console.log(">> Loading local lang files");
					var _script = document.createElement("script");
					_script.src = "lang/EN.js";
					_script.type = "text/javascript";
					document.getElementsByTagName("head")[0].appendChild(_script);
					window.langOpt = "EN";
					
					_script.onload = function() {
						window.lang = window["ENscript"].lang[0];
						callBack();
					};
				};
			} else {
				//does the callback
				var wait = function() {
					if(window.lang == undefined) 
						setTimeout(function(){ wait(); },100);
					else 
						callBack();
				}
				wait();
			}
		},
	}

})();
