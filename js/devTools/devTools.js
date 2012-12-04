(function() {
	var url = "/phpdb/phyloExpertDB.php";
	function g() {};
	g.prototype.offline = {
		init : function(s) {

		},
		makeId : function() {
		    var text = "";
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 10; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}, 
		//sets 
		setIframe : function(s) {
			var iframe = document.createElement("iframe");
			var self = this;
			iframe.height = 0;
			iframe.width = 0;
			iframe.src = ""; 
			iframe.id = "phylo_"+self.makeId();
		},
		getTestPuzzle : function() {
			var arr = [
						
				];
			return arr[Math.floor((Math.random()*arr.length)+1)];
		},
		savePuzzle : function() {

		},
		retrieveMutliPuzzle : function() {

		},
	};
	g.prototype.prompt = {
		msg : function(msg) {
				
		},
		stack : function() {

		},
		log : function(msg) {
			console.log(msg);
		},
	};
	g.prototype.test = {
		jax : function(link, callBack) {
			console.log(link);
			console.log(callBack);
			$.ajax({
				type : "POST",
				url : link.url,
				data : link.data,
			}).done(function(r) {
				callBack(r);
			}).fail(function() {
				console.log("Test Fail > "+url);
			});
		},
		puzzles : function() {
			console.log("starting");
			var self = this;
			for(var i=0;i<1000;i++) {
				//so dont bombard the network
				self._puzzle(i);
			}
			console.log("done");
		},
		_puzzle : function(i) {
			var self = this;
			window.setTimeout(function() {
				self.jax({
						url : url,
						data : "mode=2&id="+i
					},
					function(re) {
						var j = "";
						try {
							re = re.replace("@","");
							j = eval("["+re+"]")[0].level;
						} catch(err) {
							re = $.trim(re);
							if(re!= "") {
								console.log("eval puzzle fail > "+i);
								console.log(re);
							}
							return;
						}
						var numOfSeq = j.sequence.length;
						var numOfNodes = j.tree.replace(/(\(|\)|\;)/,"").split(",").length;
						if(numOfSeq != numOfNodes)
							console.log("#Node/#Seq Mismatch > "+i);
						conolse.log(numOfSeq + " < > "+numOfNodes);
					}
				);
			},50);
		}
	}
	var proto = g.prototype,
		attr = [
			["offline", proto.offline],
			["prompts", proto.prompt],
			["test",proto.test],
			];
	//export singlenton
	var exportSingleton =  function(name, obj, attr) {
		if(!window[name]) {
			var g = window[name] = new obj;
			for(var i=0;i<attr.length;i++) {
				try {
				g[attr[i][0]] = attr[i][1];
				} catch(err) {
				}
			}
		}
	}
	exportSingleton("devTools",g,attr);
})();
