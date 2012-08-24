dependencies = {
	basePath: './',
	optimize:"shrinksafe",
	stripConsole: "all",
	releaseDir: "./my-ws-basic",	
	action: "release", 
	selectorEngine: "acme",
	
	packages:[ 
        { 
            name: "dojo", 
            location: "../../dojo" 
        }, 

        { 
            name: "dijit", 
            location: "../../dijit" 
        }, 

        { 
            name: "dojox", 
            location: "../../dojox" 
        } 
    ],
	
	

	layers: [
		{
			name: "dojo.js",
			customBase: true,
			dependencies: [
				"dojo.main",
				"dojo.dojo", 				
                "dojo.dom",
				"dojox.socket",
				"dojo.domReady",				
				"dojo/_base/declare",
				"dojo/json"
			]
		}
	],
	
	
	staticHasFeatures: {
        // The trace & log APIs are used for debugging the loader,
        // so we don�t need them in the build
        'dojo-trace-api': 0,
        'dojo-log-api': 0,
        // This causes normally private loader data to be exposed for debugging,
        // so we don�t need that either
        'dojo-publish-privates': 0,
        // We�re fully async, so get rid of the legacy loader
        'dojo-sync-loader': 0,
        // We aren�t loading tests in production
        'dojo-test-sniff': 0
    },

	prefixes: [
		[ "dijit", "../dijit" ],
		[ "dojox", "../dojox" ]
	]
}
