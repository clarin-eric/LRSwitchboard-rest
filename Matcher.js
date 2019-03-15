// -------------------------------------------
// The CLARIN Language Resource Switchboard
// 2016-18 Claus Zinn, University of Tuebingen
// 
// File: Matcher.js (for rest-based service)
// Time-stamp: <2019-03-15 16:16:44 (zinn)>
// -------------------------------------------

import uuid from 'node-uuid';
import Registry from './Registry.js';

export default class Matcher {

    constructor() {
	this.registeredTools = Registry;
    }

    collectSupportedMimetypes() {
	const tools = this.registeredTools;
	let mimetypeSet = new Set();
	
	for (var i = 0; i<tools.length; i++) {
	    const toolMimetypes = tools[i].mimetypes;
	    console.log('checking', tools[i].name);
	    for (var j = 0; j<toolMimetypes.length; j++) {
		console.log("--> adding", toolMimetypes[j]);
		mimetypeSet.add( toolMimetypes[j] );
	    }
	}

	return mimetypeSet;
    }

    collectSupportedLanguages() {
	const tools = this.registeredTools;
	let languageSet = new Set();
	
	for (var i = 0; i<tools.length; i++) {
	    const toolLanguages = tools[i].languages;
	    console.log('checking', tools[i].name);
	    for (var j = 0; j<toolLanguages.length; j++) {
		console.log("--> adding", toolLanguages[j]);
		languageSet.add( toolLanguages[j] );
	    }
	}

	return languageSet;
    }    
    
    // construct a dictionary to group all tools in terms of the tasks they can perform
    // key: task, value: tools
    groupTools( tools ){

	var toolGroups = {};

	for (var i = 0; i<tools.length; i++) {
	    const entry = tools[i];

	    // defines the registry entries visible to the outside
	    const toolInfo = [ {
		name            : entry.name,
		logo            : entry.logo,
		description     : entry.description,
		homepage        : entry.homepage,
		url             : entry.url,
		location        : entry.location,
		authentication  : entry.authentication,
		id              : entry.id,
		email           : entry.contact.email,
		parameters      : entry.parameters,
		langEncoding    : entry.langEncoding,
		output          : entry.output,
		softwareType    : entry.softwareType,
		lifecycle       : entry.lifecycle,		
		requestType     : entry.requestType,
		mapping         : entry.mapping,
	    } ];

	    if (entry.task in toolGroups) {
		toolGroups[ entry.task ] = toolGroups[ entry.task ].concat( toolInfo );
	    } else {
		toolGroups[ entry.task ] = [].concat( toolInfo );		
	    }
	}
	return toolGroups;
    }

    // todo, see comments in index.js

    /*
    getTool( query ) {
	var selectedTools = this.registeredTools;
	for (var key in query){
	    
	    console.log('key/val', key, query[key]);
	    if ( key == "id" ) {
		selectedTools = selectedTools.filter(
		    (tool) =>  {
			if (tool.id.indexOf(query[key]) != -1) {
			    return tool;
			}
		    });
	    }
	}
	return selectedTools;
    }
    */
	    
    findApplicableTools( query ) {
	
	var selectedTools = this.registeredTools;
	var sortToolsP    = true;

	console.log('----- new query', query);	
	for (var key in query){
	    
	    console.log('key/val', key, query[key]);

	    if ( key == "mimetype" ) {
		selectedTools = selectedTools.filter(
		    (tool) =>  {
			if (tool.mimetypes.indexOf(query[key]) != -1) {
			    tool.id = uuid.v4();			
			    return tool;
			}
		    });
	    }
	    
	    if ( key == "language" ) {
		selectedTools = selectedTools.filter(
		    (tool) =>   {
			if ( (tool.languages.indexOf(query[key]) != -1) ||
			     (tool.languages.indexOf("generic")  != -1)) {
			    tool.id = uuid.v4();
			    console.log('found tool', tool.name);
			    return tool;
			} 
		    });
	    }

	    if (key == "deployment" ) {
		if (query[key] == "production" ) {
		    // only allow tools ready for production
		    selectedTools = selectedTools.filter(
			(tool) =>   {
			    if (tool.deployment == "production") {
				tool.id = uuid.v4();			    
				return tool;
			    }
			});		
		}
	    }
	    
	    if (key == "includeWS" ) {
		if (query[key] == "no" ) {
		    selectedTools = selectedTools.filter(
			(tool) =>   {
			    if ((tool.softwareType == undefined) ||
				(! (tool.softwareType == "webService")) ) {
				tool.id = uuid.v4();			    
				return tool;
			    }
			});		
		}
	    }

	    if (key == "includeBetaSoftware" ) {
		if (query[key] == "no" ) {
		    selectedTools = selectedTools.filter(
			(tool) =>   {
			    if ((tool.lifecycle == undefined) ||
				(! (tool.lifecycle == "beta")) ) {
				tool.id = uuid.v4();			    
				return tool;
			    }
			});		
		}
	    }

	    if (key == "includeToolsReqAuth" ) {
		if (query[key] == "no" ) {
		    selectedTools = selectedTools.filter(
			(tool) =>   {
			    if (! (tool.authentication == "yes")) {
				tool.id = uuid.v4();			    
				return tool;
			    }
			});		
		}
	    }	    

	    // default is tasks
	    if (key == "sortBy" ) {
		if (query[key] == "tools" ) {
		    sortToolsP = false;
		}
	    }
	}

	// after all filtering operations, do the grouping
	if (sortToolsP) {
	    selectedTools = this.groupTools(selectedTools);
	}

	return selectedTools;
    }
}
