// -------------------------------------------
// The CLARIN Language Resource Switchboard
// 2018- Claus Zinn, University of Tuebingen
// 
// File: index.js (for rest-based service)
// Time-stamp: <2019-03-06 21:05:52 (zinn)>
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

app.get('/doc/exampleJSON_page1.png', function (req, res) {
    res.sendfile('./exampleJSON_page1.png');    
})

app.get('/doc/exampleJSON_page2.png', function (req, res) {
    res.sendfile('./exampleJSON_page2.png');    
})

app.get('/doc/exampleResult.json', function (req, res) {
    res.sendfile('./exampleResult.json');    
})

app.get('/', function (req, res) {
    res.sendfile('./index.html');
})
    
app.get('/api', function (req, res) {
    res.sendfile('./index.html');    
})

// localhost:4511/api/tools?language=eng&includeWS=true&mimetype=application%2Fpdf&sortBy=tasks&includeToolsReqAuth=true

/* parameters:

   language:   ISO 639-3
   mimetype:   following mimetype classification given in [REF]
   includeWS:  include web services: yes or no (default=yes)
   includeToolsReqAuto: include tools (or web services) that require authentication: yes or no (default=yes)
   sortBy:     sort results by tasks (task-oriented view) or tools (tool-oriented view). (defaults=tasks)

 */

app.get('/api/tools/', function(req, res) {
    console.log('/api/tools', req);    
    res.send( new Matcher().findApplicableTools( req.query ) );    
});

/* to get a whitelist of all mediatypes that the registry's tool space can process */
app.get('/api/mimetypes/', function(req, res) {
    console.log('/api/mimetypes', req);    
    res.send( new Matcher().collectSupportedMimetypes( ));    
});

/* to get a whitelist of all languages that the registry's tool space can process */
app.get('/api/languages/', function(req, res) {
    console.log('/api/languages', req);    
    res.send( new Matcher().collectSupportedLanguages( ));
});

/*

Tool ids are assigned during matching. They are not persistent. Might want to give each tool
a hardwired id when registered with the registry (todo)

app.get('/api/tool/', function(req, res) {
    console.log('/api/tools', req);    
    res.send( new Matcher().findApplicableTools( req.query ) );    
});
*/

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);


/* Example for path parameters (not supported)

app.get('/api/tools/:language-:mediatype',function(req,res){
    const resourceDescription =
	{
	    language: {
		threeLetterCode: req.params.language },
	    mimetype: req.params.mediatype
	};
    console.log('tools', resourceDescription);
    const matcher = new Matcher();
    const applicableTools = matcher.findApplicableTools( resourceDescription, false);
    console.log('tools', applicableTools);
    res.send( applicableTools )
});

*/