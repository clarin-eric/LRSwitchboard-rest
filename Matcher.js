// -------------------------------------------
// The CLARIN Language Resource Switchboard
// 2016-18 Claus Zinn, University of Tuebingen
// 
// File: Matcher.js (for rest-based service)
// Time-stamp: <2018-07-12 13:36:36 (zinn)>
// -------------------------------------------

import uuid from 'node-uuid';
import Registry from './Registry.js';

// todo: might be filter similar to language and mimetype
import {inclToolsReqAuth} from './util';

export default class Matcher {

    constructor() {
	this.registeredTools = Registry;
//	this.groupTools = this.groupTools.bind(this);
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

	    // default is yes
	    if (key == "sortTools" ) {
		if (query[key] == "no" ) {
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
