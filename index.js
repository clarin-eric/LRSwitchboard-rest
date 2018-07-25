// -------------------------------------------
// The CLARIN Language Resource Switchboard
// 2018- Claus Zinn, University of Tuebingen
// 
// File: index.js (for rest-based service)
// Time-stamp: <2018-07-25 09:32:19 (zinn)>
// -------------------------------------------


/* expose rest-based interface to the Registry/Matcher 

   several options for parameter passing:
   - query parameters: ?language=eng
   - path parameters:  :language
   - post request carrying JSON structure with parameter information

   "primary parameters": 
           mimetype of resource
           language of resource
	   authentication for tool access

   "secondary parameters", how to present content 
           order by task
	   order by toolName

 */

const express = require('express')
const app = express()
const Matcher = require("./Matcher.js").default;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', function (req, res) {
    res.sendfile('./index.html');
})
    
app.get('/api', function (req, res) {
    res.sendfile('./index.html');    
})

/* for getAllTools, we allow same parameters than getApplicableTools, with default values as follows:

   sortBy=tasks
   includeToolsReqAuto=yes
   includeWS=no

*/

app.get('/api/getAllTools',function(req,res){
    res.send( new Matcher().findApplicableTools( req.query ) );
});

// localhost:4511/api/getTools?language=eng&includeWS=true&mimetype=application%2Fpdf&sortBy=tasks&includeToolsReqAuth=true

/* parameters:

   language:   ISO 639-3
   mimetype:   following mimetype classification given in [REF]
   includeWS:  include web services: yes or no (default=yes)
   includeToolsReqAuto: include tools (or web services) that require authentication: yes or no (default=yes)
   sortBy:     sort results by tasks (task-oriented view) or tools (tool-oriented view). (defaults=tasks)

 */

app.get('/api/getTools/', function(req, res) {
    console.log('/api/getTools', req);    
    res.send( new Matcher().findApplicableTools( req.query ) );    
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);


/* Example for path parameters (not supported)

app.get('/api/getTools/:language-:mediatype',function(req,res){
    const resourceDescription =
	{
	    language: {
		threeLetterCode: req.params.language },
	    mimetype: req.params.mediatype
	};
    console.log('getTools', resourceDescription);
    const matcher = new Matcher();
    const applicableTools = matcher.findApplicableTools( resourceDescription, false);
    console.log('getTools', applicableTools);
    res.send( applicableTools )
});

*/