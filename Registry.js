// -------------------------------------------
// The CLARIN Language Resource Switchboard
// 2016-18 Claus Zinn, University of Tuebingen
//
// File: Registry.js
// Time-stamp: <2019-03-15 16:00:23 (zinn)>
// -------------------------------------------

const Registry = [
    { "task": "Shallow Parsing",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "Iobber",
      "logo": "clarin-pl.png",
      "homepage": "https://ws.clarin-pl.eu",
      "location": "Wrocław, Poland",
      "creators": "Clarin-PL",
      "contact": {
	  "person": "Tomasz Walkowiak",
	  "email": "tomasz.walkowiak@pwr.edu.pl"
      },
      "version": "1.0",
      "authentication": "no",		  	    
      "licence": "public",
      "description": "Chunker for Polish. It recognises shallow syntactic structure (up to three levels) of phrases (chunks) in Polish texts.",
      "languages": ["pol"],
      "langEncoding": "639-1",
      "mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
      "output": ["application/xml"],
      "url": "https://ws.clarin-pl.eu/weblicht.html",
      "parameters": {
	  "input": "self.linkToResource",
	  "lang": "pl",
	  "analysis": "chunker"
      }
    },
    
    { "task": "Constituency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Const-Parsing-DE",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Constituency Parsing (German). The pipeline makes use of WebLicht's TCF converter, the tokenizer and sentence boundary detector of the IMS/Stuttgart , and the constituent parser from the Berkeley NLP project. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["deu"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],
      // old PATH      "url": "http://tuebingen.weblicht.sfs.uni-tuebingen.de:8080/weblicht/",
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "de",			      
	  "analysis":   "const-parsing"
      }
    },

    { "task": "Constituency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Const-Parsing-EN",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Constituency Parsing (English). The pipeline makes use of WebLicht's TCF converter, the Stanford tokenizer, and the statistical BLLIP/Charniak parser. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["eng"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		        
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "en",			      
	  "analysis":   "const-parsing"
      }
    },		
    
    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "MaltParser",
      "logo": "clarin-pl.png",
      "homepage": "https://ws.clarin-pl.eu",
      "location": "Wrocław, Poland",
      "creators": "Clarin-PL",
      "contact": {
	  "person": "Tomasz Walkowiak",
	  "email": "tomasz.walkowiak@pwr.edu.pl"
      },
      "version": "1.0",
      "licence": "public",
      "authentication": "no",	    	    
      "description": "A language dependency parser chain for Polish. The used tools include Morfeusz-2 with SGJP dictionary (for morphological analysis), wcrft2 (for tagging), and the MaltParser with a model for Polish. The CONLL output can be visualised with DepSVG, a dependency tree and predicate-argument structure visualizer.",
      "languages": ["pol"],
      "langEncoding": "639-1",
      "mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
      "output" : ["CoNLL Format"],      
      "url": "https://ws.clarin-pl.eu/weblicht.html",
      "parameters": {
	  "input": "self.linkToResource",
	  "lang": "pl",
	  "analysis": "parser"
      }
    },
    
    { "task": "Coreference Resolution",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "Concraft -> Bartek",
      "logo": "zil.png",		  		  		  
      "homepage": "http://zil.ipipan.waw.pl/Bartek",
      "location": "Warsaw, Poland",		  		  		  
      "creators": "Institute of Computer Science, Polish Academy of Sciences, Poland",
      "contact": {
	  "person": "MultiService",
	  "email": "rjawor@amu.edu.pl"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "A statistical tool chain for performing Coreference Resolution. Part of: Multiservice, a robust  linguistic  Web service for Polish.",
      "languages": ["pol"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/html"],
      "output": ["application/json", "CoNLL format", "Visualization"],            
      "url": "http://multiservice.nlp.ipipan.waw.pl/en/clrs",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "analysis":   "5"
      }
    },			

    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "Concraft -> DependencyParser",
      "logo": "zil.png",		  		  		  
      "homepage": "http://zil.ipipan.waw.pl/DependencyParser",
      "location": "Warsaw, Poland",		  		  		  
      "creators": "Institute of Computer Science, Polish Academy of Sciences, Poland",
      "contact": {
	  "person": "MultiService",
	  "email": "rjawor@amu.edu.pl"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "The Polish dependency parser is trained on the extended version of the Polish dependency treebank (Składnica zależnościowa) with the publicly available parsing systems – MaltParser or MateParser. MaltParser is a transition-based dependency parser that uses a deterministic parsing algorithm. The deterministic parsing algorithm builds a dependency structure of an input sentence based on transitions (shift-reduce actions) predicted by a classifier. The classifier learns to predict the next transition given training data and the parse history. MateParser, in turn, is a graph-based parser that defines a space of well-formed candidate dependency trees for an input sentence, scores them given an induced parsing model, and selects the highest scoring dependency tree as a correct analysis of the input sentence. Part of: Multiservice, a robust  linguistic  Web service for Polish.",
      "languages": ["pol"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/html"],
      "output": ["application/json", "CoNLL format", "Visualization"],		            
      "url": "http://multiservice.nlp.ipipan.waw.pl/en/clrs",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "analysis":   "4"
      }
    },
    
    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Dep-Parsing-DE",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Dependency Parsing (German). The pipeline makes use of WebLicht's TCF converter, the IMS tokenizer, the POS Tagger from the OpenNLP projet, and the MaltParser, a system for data-driven dependency parsing. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["deu"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],      
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "de",			      
	  "analysis":   "dep-parsing"
      }
    },
    
    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Dep-Parsing-NL-ALPINO",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Dependency Parsing (Dutch). The pipeline makes use of WebLicht's TCF converter, the tokenizer and sentence splitter from Alpino, and the Alpino dependency parser for Dutch. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["nld"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],            
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "nl",			      
	  "analysis":   "dep-parsing"
      }
    },
    
    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Dep-Parsing-EN",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Dependency Parsing (English). The pipeline makes use of WebLicht's TCF converter, the Stanford tokenizer, the Jitar POS Tagger, and TurboParser, a multilingual dependency parser based on linear programming relaxations. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["eng"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],            
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "en",			      
	  "analysis":   "dep-parsing"
      }
    },

    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Dep-Parsing-SL (RELDI)",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Dependency Parsing (Slovenian). The easy-chain makes use of the RELDI software (see https://github.com/clarinsi), which tokenizes and lemmatizes the text, performs part-of-speech tagging, and subsequently, does dependency parsing. For RELDI specific inquiries, please contact nljubesi@gmail.com.",
      "languages": ["slv"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],                  
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "sl",			      
	  "analysis":   "dep-parsing"
      }
    },
    
    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Dep-Parsing-HR (RELDI)",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Dependency Parsing (Croatian). The easy-chain makes use of the RELDI software (see https://github.com/clarinsi), which tokenizes and lemmatizes the text, performs part-of-speech tagging, and subsequently, does dependency parsing. For RELDI specific inquiries, please contact nljubesi@gmail.com.",
      "languages": ["hrv"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],                        
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "hr",			      
	  "analysis":   "dep-parsing"
      }
    },
    
    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Dep-Parsing-SR (RELDI)",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Dependency Parsing (Serbian). The easy-chain makes use of the RELDI software (see https://github.com/clarinsi), which tokenizes and lemmatizes the text, performs part-of-speech tagging, and subsequently, does dependency parsing. For RELDI specific inquiries, please contact nljubesi@gmail.com.",
      "languages": ["srp"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],                        
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "sr",			      
	  "analysis":   "dep-parsing"
      }
    },
    
    { "task": "Dependency Parsing",
      "deployment": "development",      
      "softwareType": "qualitative",
      "name": "Alpino",
      "logo": "alpino.jpg",		  
      "homepage": "http://www.let.rug.nl/vannoord/alp/Alpino/",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public", 
      "description": "Alpino is a dependency parser for Dutch, developed in the context of the PIONIER Project Algorithms for Linguistic Processing, developed by Gertjan van Noord at the University of Groningen. You can upload either tokenised or untokenised files (which will be automatically tokenised for you using ucto), the output will consist of a zip file containing XML files, one for each sentence in the input document.",
      "languages": ["nld"], 
      "langEncoding": "639-1",
      // tokenized vs. untokenized input (currently set to untokenized input)
      "mimetypes": ["text/plain"],      
      "output": ["alpinooutput", "text/folia+xml", "tokoutput"], 
      "url": "https://webservices-lst.science.ru.nl/alpino/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "untokinput_url"
      }
    },

    { "task": "Dependency Parsing",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "UDPipe",
      "logo": "lindat.jpg",
      "homepage": "http://ufal.mff.cuni.cz/udpipe",
      "location": "Charles University, Prague, Czech Republic",      
      "creators": "Milan Straka, Jana Straková",
      "contact": {
	  "person": "Milan Straka",
	  "email": "straka@ufal.mff.cuni.cz"
      },
      "version": "v1.2",
      "authentication": "no",		  
      "licence": "UDPipe is a free software under Mozilla Public Licence 2.0 and the linguistic models are free for non-commercial use and distributed under CC BY-NC-SA licence, although for some models the original data used to create the model may impose additional licensing conditions. UDPipe is versioned using Semantic Versioning.", 
      "description":  "UDPipe is an trainable pipeline for tokenization, tagging, lemmatization and dependency parsing of CoNLL-U files. UDPipe is language-agnostic and can be trained given only annotated data in CoNLL-U format. Trained models are provided for nearly all UD treebanks.",
      "langEncoding": "639-1",
      "languages": ["grc", "ara", "bel", "bul", "cat", "cop", "hrv", "ces", "dan", "nld", "eng", "eus", "est", "fin", "fra", "glg", "deu", "got", "ell", "heb", "hin", "hun", "ind", "gle", "ita", "jpn", "kaz", "kor", "lat", "lav", "lit", "nor", "nno", "nob", "chu", "fas", "pol", "por", "ron", "rus", "san", "slk", "slv", "spa", "swe", "tam", "tur", "ukr", "urd", "uig", "vie", "zho"],
      "mimetypes": ["text/plain"],
      "output" : ["CoNLL-U Format"],
      "url": "https://lindat.mff.cuni.cz/services/udpipe/",
      "parameters": {
	  "input"   : "self.linkToResource", 
	  "lang"    : "self.linkToResourceLanguage"
      },		  
      "mapping": {
	  "input"   : "data",
	  "lang"    : "model"
      }
    },

    { "task": "Extraction of Polish terminology",
      "deployment": "production",	
      "softwareType": "quantitative",
      "name": "TermoPL",
      "logo": "clarin-pl.png",
      "homepage": "https://ws.clarin-pl.eu",
      "location": "Wrocław, Poland",
      "creators": "Clarin-PL",
      "contact": {
	  "person": "Tomasz Walkowiak",
	  "email": "tomasz.walkowiak@pwr.edu.pl"
      },
      "version": "1.0",
      "licence": "public",
      "authentication": "no",	    	    
      "description": "TermoPL is a tool for automated extraction of terminology from Polish texts.",
      "languages": ["pol"],
      "langEncoding": "639-1",
      "mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
      "output": ["application/json"],
      "url": "https://ws.clarin-pl.eu/weblicht.html",
      "parameters": {
	  "input": "self.linkToResource",
	  "lang": "pl",
	  "analysis": "termopl"
      }
    },
    
    {
	"task": "Inclusion detection",
	"deployment": "production",	
	"softwareType": "quantitative",
	"name": "Inkluz",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    
	"description": "Inkluz - detects foreign language inclusions in Polish texts.",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/octet-stream"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "inkluz"
	}
    },

    {
	"task": "Keyword Extractor",
	"deployment": "production",	
	"softwareType": "quantitative",
	"name": "ReSpa",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    
	"description": "Keywords extraction for Polish by ReSpa based on the representation of text documents as word graphs.",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "respa"
	}
    },

    { "task": "Lemmatization",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Lemmas-DE",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Lemmatization (German). The pipeline makes use of WebLicht's TCF converter, the IMS tokenizer, and the IMS TreeTagger. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["deu"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "de",			      
	  "analysis":   "lemma"
      }
    },

    { "task": "Lemmatization",
      "deployment": "production",      
      "softwareType": "qualitative",
      "name": "WebLicht-Lemmas-EN",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Lemmatization (English). The pipeline makes use of WebLicht's TCF converter, the Stanford tokenizer, the Jitar POS Tagger, and the lemmatizer service from MorphAdorner. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["eng"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],      
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "en",			      
	  "analysis":   "lemma"
      }
    },		

    {
	"task": "Lemmatization",
	"deployment": "production",	
	"softwareType": "qualitative",
	"name": "CSTLemma (hosted by D4Science)",
	"logo": "d4science.png",		  	    
	"homepage": "https://www.d4science.org",
	"location": "Pisa, Italy",		  		  		  
	"creators": "Bart Jongejan (tool), D4Science staff (WAR upload)",
	"contact": {
	    "person": "D4Science Support",
	    "email": "claus.zinn@sfs.uni-tuebingen.de, bartj@hum.ku.dk"
	},	    
	"version": "v1.0",
	"authentication": "no",		  
	"licence": "public",
	"description": "This is an experimental integration of a D4Science NLP processing service (CSTLemma). The CSTLemma Lemmatizer for English reduces all words in a text to their base form, the lemma.",
	"languages": ["eng"],
	"langEncoding": "639-1",		  
	"mimetypes": ["text/plain"],
	"output": ["text/csv"],
	"url": "https://next.d4science.org/nlp-hub-cstlemma/",		  
	"parameters": {
	    "input" :     "self.linkToResource",
	    "token":      "27061e4d-3567-482d-9f12-3a1af5e42ab9-843339462"
	}
    },
    
    
    {
	"task": "Morphological Analysis",
	"deployment": "production",	
	"softwareType": "qualitative",
	"name": "Morfeusz 2",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    
	"description": "Morphological analysis of Polish texts by Morfeusz 2 (based on the SGJP dictionary)",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "morpho"
	}
    },

    {
	"task": "Morpho-syntactic tagger",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "WCRFT2",
	"logo": "clarin-pl.png",
	"homepage": "http://nlp.pwr.wroc.pl/redmine/projects/wcrft/wiki/",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    	    
	"description": "Morpho-syntactic tagger for Polish - WCRFT2",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "tagger"
	}
    },

    {
	"task": "Named Entity Recognition",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "WebLicht-NamedEntities-SL",
	"logo": "weblicht.jpg",		  	    
	"homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
	"location": "Tuebingen, Germany",		  		  		  
	"creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
	"contact": {
	    "person": "CLARIN WebLicht Support",
	    "email": "wlsupport@sfs.uni-tuebingen.de"
	},	    
	"version": "v1.0",
	"authentication": "no",		  
	"licence": "public",
	"description": "WebLicht Easy Chain for Named Entity Recognition (Slovenian). The easy-chain makes use of the ReLDI tag, NER JSI software, which performs NER without a parse.",
	"languages": ["slv"],
	"langEncoding": "639-1",		  
	"mimetypes": ["text/plain",
		      "text/rtf",			     
		      "application/pdf",
		      "application/msword",
		      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
	"output": ["application/tcf+xml"],                        
	"url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
	"parameters": {
	    "input" :     "self.linkToResource",
	    "lang":       "sl",			      
	    "analysis":   "ne"
	}
    },

    {
	"task": "Named Entity Recognition",
	"deployment": "development",      	
	"softwareType": "qualitative",
	"name": "D4Science NER (GATE's Annie)",
	"logo": "d4science.png",		  	    
	"homepage": "https://www.d4science.org",
	"location": "Pisa, Italy",		  		  		  
	"creators": "D4Science staff",
	"contact": {
	    "person": "D4Science Support",
	    "email": "claus.zinn@sfs.uni-tuebingen.de"
	},	    
	"version": "v1.0",
	"authentication": "no",		  
	"licence": "public",
	"description": "This is an experimental integration of a D4Science NLP processing service (based on GATE's ANNIE). This service identifies names of persons, locations, organizations, as well as money amounts, time and date expressions in English texts automatically.",
	"languages": ["eng"],
	"langEncoding": "639-1",		  
	"mimetypes": ["text/plain"],
	"output": ["application/xml"],
	"url": "https://next.d4science.org/nlp-hub/",		  
	"parameters": {
	    "input" :     "self.linkToResource",
	    "token":       "a92dc66c-bf09-48cb-9a96-8e765f11e7b1-843339462"			      
	}
    },

    {
	"task": "Named Entity Recognition",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "NLP-HUB (multiple NER tools)",
	"logo": "d4science.png",		  	    
	"homepage": "https://www.d4science.org",
	"location": "Pisa, Italy",		  		  		  
	"creators": "D4Science staff",
	"contact": {
	    "person": "D4Science Support",
	    "email": "claus.zinn@sfs.uni-tuebingen.de"
	},	    
	"version": "v1.0",
	"authentication": "no",		  
	"licence": "public",
	"description": "This is an experimental integration of a D4Science NLP processing service hub. This service runs a number of NER tools in parallel, and merges their results. It identifies names of persons, locations, organizations, as well as money amounts, time and date expressions -- and other expressions -- in English, French, Italian, Spanish and German texts automatically.",
	"languages": ["eng", "fra", "ita", "spa", "deu"],
	"langEncoding": "639-1",		  
	"mimetypes": ["text/plain"],
	"output": ["application/xml"],
	"url": "https://nlp.d4science.org/hub",		  
	"parameters": {
	    "input" :     "self.linkToResource",
	    "token":       "a92dc66c-bf09-48cb-9a96-8e765f11e7b1-843339462"			      	    
	}
    },
    
    {
	"task": "Named Entity Recognition",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Liner2 (hosted by D4Science)",
	"logo": "d4science.png",		  	    
	"homepage": "https://www.d4science.org",
	"location": "Pisa, Italy",		  		  		  
	"creators": "D4Science staff",
	"contact": {
	    "person": "D4Science Support",
	    "email": "claus.zinn@sfs.uni-tuebingen.de"
	},	    
	"version": "v1.0",
	"authentication": "no",		  
	"licence": "public",
	"description": "This is an experimental integration of a D4Science NLP processing service (NER Liner 2). This service identifies names of persons, locations, organizations, as well as money amounts, time and date expressions in Polish texts automatically.",
	"languages": ["pol"],
	"langEncoding": "639-1",		  
	"mimetypes": ["text/plain"],
	"output": ["application/xml"],
	"url": "https://next.d4science.org/nlp-hub-liner2/",		  
	"parameters": {
	    "input" :     "self.linkToResource",
	    "token":      "27061e4d-3567-482d-9f12-3a1af5e42ab9-843339462"
	}
    },

    {
	"task": "Dependency Parsing",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Spacy (hosted by D4Science)",
	"lifecycle": "beta",
	"logo": "d4science.png",		  	    
	"homepage": "https://www.d4science.org",
	"location": "Pisa, Italy",		  		  		  
	"creators": "D4Science staff",
	"contact": {
	    "person": "D4Science Support",
	    "email": "claus.zinn@sfs.uni-tuebingen.de"
	},	    
	"version": "v1.0",
	"authentication": "no",		  
	"licence": "public",
	"description": "This is an experimental integration of a D4Science NLP processing service (spaCy). This service identifies performs dependency parsing for plain German text. For more information on spaCy, see https://spacy.io.",
	"languages": ["deu"],
	"langEncoding": "639-1",		  // not used
	"mimetypes": ["text/plain"],
	"output": ["text/tab-separated-values"],
	"url": "https://next.d4science.org/nlp-hub-spacyGerman/",		  
	"parameters": {
	    "input" :     "self.linkToResource",
	    "token":      "27061e4d-3567-482d-9f12-3a1af5e42ab9-843339462"
	}
    },

    {
	"task": "Dependency Parsing",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Spacy (hosted by D4Science)",
	"lifecycle": "beta",
	"logo": "d4science.png",		  	    
	"homepage": "https://www.d4science.org",
	"location": "Pisa, Italy",		  		  		  
	"creators": "D4Science staff",
	"contact": {
	    "person": "D4Science Support",
	    "email": "claus.zinn@sfs.uni-tuebingen.de"
	},	    
	"version": "v1.0",
	"authentication": "no",		  
	"licence": "public",
	"description": "This is an experimental integration of a D4Science NLP processing service (spaCy). This service identifies performs dependency parsing for plain English text. For more information on spaCy, see https://spacy.io.",
	"languages": ["eng"],
	"langEncoding": "639-1",		  // not used
	"mimetypes": ["text/plain"],
	"output": ["text/tab-separated-values"],
	"url": "https://next.d4science.org/nlp-hub-spacyEnglish/",		  
	"parameters": {
	    "input" :     "self.linkToResource",
	    "token":      "27061e4d-3567-482d-9f12-3a1af5e42ab9-843339462"
	}
    },

    {
	"task": "Named Entity Recognition",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Liner2",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    
	"description": "Name Entity and Temporal Expression recognition",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "ner"
	}
    },

    { "task": "Machine Translation",
      "deployment": "development",            
      "softwareType": "qualitative",
      "name": "Oersetter (NLD-FRY)",
      "logo": "oersetter.jpg",		  
      "homepage": "http://oersetter.nl/",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public",
      "description": "Oersetter is a statistical machine translation (SMT) system for Frisian to Dutch and Dutch to Frisian. A parallel training corpus has been established, which has subsequently been used to automatically learn a phrase-based SMT model. The translation system is built around the open-source SMT software Moses.",
      "languages": ["nld"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/plain"], 
      "output": ["text/plain"], 
      "url": "https://webservices-lst.science.ru.nl/oersetter/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "input-nl_url" 
      }
    },

    { "task": "Machine Translation",
      "deployment": "development",            
      "softwareType": "qualitative",
      "name": "Oersetter (FRY-NLD)",
      "logo": "oersetter.jpg",		  
      "homepage": "http://oersetter.nl/",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public", 
      "description": "Oersetter is a Frisian-Dutch Machine Translation system.",
      "languages": ["fry"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/plain"], 
      "output": ["text/plain"], 
      "url": "https://webservices-lst.science.ru.nl/oersetter/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "input-fy_url" 
      }
    },		
    
    { "task": "Morphological Analysis",      
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-Morphology-DE",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",
      "licence": "public",
      "description": "WebLicht Easy Chain for Morphological Analysis (German). The pipeline makes use of WebLicht's TCF converter, the IMS tokenizer, and the IMS tool on German morphology. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["deu"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],            
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "de",			      
	  "analysis":   "morphology"
      }
    },
    
    { "task": "Morphological Analysis",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-Morphology-EN",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Morphological Analysis (English). The pipeline makes use of WebLicht's TCF converter, the Stanford tokenizer, and the morphology analysis service from MorphAdorner. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["eng"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],            
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "en",			      
	  "analysis":   "morphology"
      }
    },

    { "task": "Named Entity Recognition",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "Concraft -> Nerf",
      "logo": "zil.png",		  		  		  
      "homepage": "http://zil.ipipan.waw.pl/Nerf",
      "location": "Warsaw, Poland",		  		  		  
      "creators": "Institute of Computer Science, Polish Academy of Sciences, Poland",
      "contact": {
	  "person": "MultiService",
	  "email": "rjawor@amu.edu.pl"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "Statistical named entity recognition tool based on linear-chain conditional random fields. Part of: Multiservice, a robust linguistic Web service for Polish.",
      "languages": ["pol"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/html"],
      "output": ["application/json", "CoNLL format", "Visualization"],		                  
      "url": "http://multiservice.nlp.ipipan.waw.pl/en/clrs",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "analysis":   "2"
      }
    },
    { "task": "Named Entity Recognition",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-NamedEntities-DE",
      "logo": "weblicht.jpg",		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for German Named Entity Recognition (German). The pipeline makes use of WebLicht's TCF converter, the IMS tokenizer, the IMS TreeTagger, and a German Named Entity Recognizer that has been trained based on a maximum entropy approach using the OpenNLP maxent library. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["deu"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		        
      "parameters": {
	  "input"   :  "self.linkToResource", 
	  "lang"    : "de",                   
	  "analysis": "ne"                    
      }
    },

    { "task": "Named Entity Recognition",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-NamedEntities-EN",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for Named Entity Recognition (English). The pipeline makes use of WebLicht's TCF converter, the Stanford tokenizer, and the Illinois Named Entity Recognizer. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["eng"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		        
      "parameters": {
	  "input"   : "self.linkToResource", 
	  "lang"    : "en",                   
	  "analysis": "ne"                    
      }
    },				
    
    {
	"task": "Named Entity Recognition",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "NER NLTK",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    
	"description": "Name Entity Recogniser for English by NLTK.",
	"languages": ["eng"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain",
		      "application/msword",
		      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
		      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		      "application/vnd.oasis.opendocument.text",
		      "application/pdf",
		      // "text/html", // not yet supported
		      "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "en",
	    "analysis": "nerNLTK"
	}
    },
    
    { "task": "N-Gramming",
      "deployment": "development",
      "softwareType": "quantitative",
      "name": "FoLiA-stats",
      "logo": "foliastats.jpg",		  		  
      "homepage": "https://github.com/LanguageMachines/foliautils",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Ko van der Sloot (TiCC, Tilburg University)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "0.2",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public", 
      "description": "N-gram frequency list generation on FoLiA input.",
      "languages": ["nld", "generic"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/folia+xml"],		  
      "output": ["wordfreqlist", "lemmafreqlist", "lemmaposfreqlist"], 		  		  
      "url": "https://webservices-lst.science.ru.nl/foliastats/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "foliainput_url"
      }
    },		

    { "task": "N-Gramming",
      "deployment": "development",
      "softwareType": "quantitative",
      "name": "Colibri Core (plain text)",
      "logo": "colibriCore.jpg",		  		  
      "homepage": "https://github.com/proycon/colibri-core",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public", 
      "description": "Colibri core is an NLP tool as well as a C++ and Python library for working with basic linguistic constructions such as n-grams and skipgrams (i.e patterns with one or more gaps, either of fixed or dynamic size) in a quick and memory-efficient way.",
      "languages": ["nld", "eng", "deu", "fra", "spa", "por", "fry"],  // "generic"
      "langEncoding": "639-1",
      "mimetypes": ["text/plain"],
      "output": ["Tadpole Columned Output Format",
		 "text/folia+xml"], 		  
      "url": "https://webservices-lst.science.ru.nl/colibricore/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource",
	  "lang"         : "self.linkToResourceLanguage",                 			       
	  "sentenceperline_input" : "false",
	  "sentenceperline_output" : "false"
      },
      "mapping":   {
	  "input"        : "textinput_untok_url",
	  "lang"         : "textinput_untok_language"
      }
    },

    { "task": "N-Gramming",
      "deployment": "development",
      "softwareType": "quantitative",
      "name": "Colibri Core (folia+xml)",
      "logo": "colibriCore.jpg",		  
      "homepage": "https://github.com/proycon/colibri-core",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public", 
      "description": "Colibri core is an NLP tool as well as a C++ and Python library for working with basic linguistic constructions such as n-grams and skipgrams (i.e patte rns with one or more gaps, either of fixed or dynamic size) in a quick and memory-efficient way.",
      "languages": ["nld", "eng", "deu", "fra", "spa", "por", "fry"],  // "generic"
      "langEncoding": "639-1",
      "mimetypes": ["text/folia+xml"],
      "output": ["Tadpole Columned Output Format",
		 "text/folia+xml"], 		  		  
      "url": "https://webservices-lst.science.ru.nl/colibricore/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource",
	  "lang"         : "self.linkToResourceLanguage",                 			       
	  "sentenceperline_input" : "false",
	  "sentenceperline_output" : "false"
      },
      "mapping":   {
	  "input"        : "foliainput_url",
	  "lang"         : "textinput_untok_language"	  
      }
    },				
    
    { "task": "NLP suite for Dutch",
      "deployment": "development",
      "softwareType": "qualitative",
      "name": "Frog (plain text)",
      "logo": "frog.jpg",		  
      "homepage": "https://languagemachines.github.io/frog/",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public", 
      "description": "Frog's current version will tokenize, tag, lemmatize, and morphologically segment word tokens in Dutch text files, will assign a dependency graph to each sentence, will identify the base phrase chunks in the sentence, and will attempt to find and label all named entities.",
      "languages": ["nld"],
      "langEncoding": "639-1",
      "mimetypes": ["text/plain"],
      "output": ["Tadpole Columned Output Format", "text/folia+xml"], 		  		  
      "url": "https://webservices-lst.science.ru.nl/frog/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "maininput_url"
      }
    },		

    { "task": "NLP suite for Dutch",
      "deployment": "development",
      "softwareType": "qualitative",
      "name": "Frog (folia+xml)",
      "logo": "frog.jpg",		  
      "homepage": "https://languagemachines.github.io/frog/",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public", 
      "description": "Frog's current version will tokenize, tag, lemmatize, and morphologically segment word tokens in Dutch text files, will assign a dependency graph to each sentence, will identify the base phrase chunks in the sentence, and will attempt to find and label all named entities.",
      "languages": ["nld"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/folia+xml"],
      "output": ["Tadpole Columned Output Format", "text/folia+xml"], 		  		  
      "url": "https://webservices-lst.science.ru.nl/frog/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "foliainput_url"
      }
    },
    
    { "task": "Part-Of-Speech Tagging",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-POSTags-Lemmas-DE",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for POS Tagging and Lemmatization (German). The pipeline makes use of WebLicht's TCF converter, the IMS tokenizer, and the IMS TreeTagger. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["deu"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "de",			      
	  "analysis":   "pos"
      }
    },

    { "task": "Part-Of-Speech Tagging",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-POSTags-Lemmas-FR",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for POS Tagging and Lemmatization (French). The pipeline makes use of WebLicht's TCF converter, the IMS tokenizer, and the IMS TreeTagger. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["fra"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "fr",			      
	  "analysis":   "pos"
      }
    },		

    { "task": "Part-Of-Speech Tagging",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-POSTags-Lemmas-IT",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for POS Tagging and Lemmatization (Italian). The pipeline makes use of WebLicht's TCF converter, the IMS tokenizer, and the POS Tagger from the OpenNLP project. The model for Italian is trained on a relatively small training corpus (MIDT) and should therefore be considered experimental. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["ita"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],      
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "it",			      
	  "analysis":   "pos"
      }
    },				

    { "task": "Part-Of-Speech Tagging",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-POSTags-Lemmas-EN",
      "logo": "weblicht.jpg",		  		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for POS Tagging and Lemmatization (English). The pipeline makes use of WebLicht's TCF converter, the Stanford tokenizer, the Jitar POS Tagger, and the lemmatizer service from MorphAdorner. WebLicht's Tundra can be used to visualize the result.",
      "languages": ["eng"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      "output": ["application/tcf+xml"],      
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "lang":       "en",			      
	  "analysis":   "pos"
      }
    },
    
    { "task": "Part-Of-Speech Tagging",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "Concraft",
      "logo": "zil.png",		  		  		  
      "homepage": "http://zil.ipipan.waw.pl/Concraft",
      "location": "Warsaw, Poland",		  		  		  
      "creators": "Institute of Computer Science, Polish Academy of Sciences, Poland",
      "contact": {
	  "person": "MultiService",
	  "email": "rjawor@amu.edu.pl"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "Morphosyntactic tagger for Polish based on constrained conditional random fields. Part of: Multiservice, a robust  linguistic Web service for Polish.",
      "languages": ["pol"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/html"],
      "output": ["application/json", "CoNLL format", "Visualization"],		                  
      "url": "http://multiservice.nlp.ipipan.waw.pl/en/clrs",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "analysis":   "0"
      }
    },		
    
    {
	"task": "Relation between name entities detection",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Serel",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    	    
	"description": "Detection of semantic relations between Named Entities in Polish texts by Serel.",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "serel"
	}
    },

    { "task": "Sentiment Analysis",
      "deployment": "production",
      "softwareType": "quantitative",
      "name": "Concraft -> Sentipejd",
      "logo": "zil.png",		  		  		  
      "homepage": "http://iis.ipipan.waw.pl/2008/proceedings/iis08-20.pdf",
      "location": "Warsaw, Poland",		  		  		  
      "creators": "Institute of Computer Science, Polish Academy of Sciences, Poland",
      "contact": {
	  "person": "MultiService",
	  "email": "rjawor@amu.edu.pl"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": " A morphosyntactic tagger extended with a semantic category, expressing properties of positive or negative  sentiment. Part of: Multiservice, a robust  linguistic  Web service for Polish.",
      "languages": ["pol"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/html"],
      "output": ["application/json", "CoNLL format", "Visualization"],
      "url": "http://multiservice.nlp.ipipan.waw.pl/en/clrs",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "analysis":   "3"
      }
    },
    
    { "task": "Shallow Parsing",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "Concraft->Spejd",
      "logo": "zil.png",		  		  		  
      "homepage": "http://zil.ipipan.waw.pl/Spejd",
      "location": "Warsaw, Poland",		  		  		  
      "creators": "Institute of Computer Science, Polish Academy of Sciences, Poland",
      "contact": {
	  "person": "MultiService",
	  "email": "rjawor@amu.edu.pl"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "Tool for partial parsing and rule-based morphosyntactic disambiguation. Part of: Multiservice, a robust  linguistic  Web service for Polish.",
      "languages": ["pol"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/html"],
      "output": ["application/json", "CoNLL format", "Visualization"],      
      "url": "http://multiservice.nlp.ipipan.waw.pl/en/clrs",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "analysis":   "1"
      }
    },		
    
    {
	"task": "Shallow Parsing",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Spejd",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    	    
	"description": "Spejd - a partial, shallow parser for Polish with rule-based morphosyntactic disambiguation.",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "spejd"
	}
    },

    {
	"task": "Spatial expression detection",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Spatial",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    
	"description": "Recognition of spatial expressions in Polish texts.",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/json"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "spatial"
	}
    },

    { "task": "Spelling correction",
      "deployment": "development",
      "softwareType": "qualitative",
      "name": "Valkuil (plain text)",
      "logo": "valkuil.jpg",		  
      "homepage": "http://valkuil.net",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public", 
      "description": "Valkuil is a Dutch spelling correction system.",
      "languages": ["nld"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/plain"], 
      "output": ["text/folia+xml"], 		  
      "url": "https://webservices-lst.science.ru.nl/valkuil/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "textinput_url"
      }
    },
    
    { "task": "Spelling correction",
      "deployment": "development",
      "softwareType": "qualitative",
      "name": "Valkuil (folia+xml)",
      "logo": "valkuil.jpg",		  		  
      "homepage": "https://languagemachines.github.io/Valkuil/",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public",       
      "description": "Valkuil is a Dutch spelling correction system.",
      "languages": ["nld"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/folia+xml"],
      "output": ["text/folia+xml"], 
      "url": "https://webservices-lst.science.ru.nl/valkuil/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "foliainput_url"
      }
    },
    
    { "task": "Spelling correction",
      "deployment": "development",
      "softwareType": "qualitative",
      "name": "Fowlt (plain text)",
      "logo": "fowlt.jpg",		  
      "homepage": "http://fowlt.net",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public",
      "description": "Fowlt is an online, free-to-use context-sensitive English spelling checker. It follows the setup of the Dutch spelling checker Valkuil.net. Both Valkuil and Fowlt are unlike the typical spelling checkers: whereas the latter mostly try to find errors by comparing all words to a built-in dictionary and flag the word as an error if they can't find a match, Fowlt is context sensitive, taking into account the words around every word. Fowlt makes use of language models. These models are created by giving lots of texts to machine learning software (TiMBL and WOPR).",
      "languages": ["eng"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/plain"],
      "output": ["text/folia+xml"], 
      "url": "https://webservices-lst.science.ru.nl/fowlt/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "textinput_url"
      }
    },

    { "task": "Spelling correction",
      "deployment": "development",
      "softwareType": "qualitative",
      "name": "Fowlt (xml+folia)",
      "logo": "fowlt.jpg",		  
      "homepage": "http://fowlt.net",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public",
      "description": "Fowlt is an online, free-to-use context-sensitive English spelling checker. It follows the setup of the Dutch spelling checker Valkuil.net. Both Valkuil and Fowlt are unlike the typical spelling checkers: whereas the latter mostly try to find errors by comparing all words to a built-in dictionary and flag the word as an error if they can't find a match, Fowlt is context sensitive, taking into account the words around every word. Fowlt makes use of language models. These models are created by giving lots of texts to machine learning software (TiMBL and WOPR).",
      "languages": ["eng"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/folia+xml"],
      "output": ["text/folia+xml"], 
      "url": "https://webservices-lst.science.ru.nl/fowlt/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "foliainput_url"
      }
    },
    
    {
	"task": "Morpho-syntactic tagger",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "MorphoDiTa",
	"logo": "clarin-pl.png",	
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": ["Clarin-PL"],
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"authentication": "no",
	"licence": "public",
	"description": "Morphological dictionary and tagger for the analysis of natural language texts in Polish.",
	"languages": ["pol"],
	"lang_encoding": "639-1",
	"mimetypes": ["text/plain",
		      "application/msword",
		      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
		      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		      "application/vnd.oasis.opendocument.text",
		      "application/pdf",
		      "text/html",
		      "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"pid": "",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "morphoDiTa"
	}
    },
    
    {
	"task": "Morpho-syntactic tagger",	
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Tagger NLTK",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    	    
	"description": "Morpho-syntactic tagger for English texts.",
	"languages": ["eng"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain",
		      "application/msword",
		      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
		      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		      "application/vnd.oasis.opendocument.text",
		      "application/pdf",
		      // "text/html", (not yet supported)
		      "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "en",
	    "analysis": "tagerNLTK"
	}
    },
    
    { "task": "Distant Reading",
      "deployment": "production",
      "softwareType": "quantitative",
      "name": "Voyant Tools",
      "logo": "voyant-tools.jpg",		  
      "homepage": "http://voyant-tools.org",
      "location": "Canada (Quebec)",		  
      "creators": "Stéfan Sinclair (McGill Alberta) and Geoffrey Rockwell (U Alberta)",
      "contact": {
	  "person": "Unknown Person",
	  "email": "Unknown email"
      },
      "version": "v2.1",
      "authentication": "no",		  
      "licence": "public", // but webservice is protected with (free) registration
      "description": "Use it to learn how computers-assisted analysis works. Check out our examples that show you how to do real academic tasks with Voyant. Use it to study texts that you find on the web or texts that you have carefully edited and have on your computer. Use it to add functionality to your online collections, journals, blogs or web sites so others can see through your texts with analytical tools. Use it to add interactive evidence to your essays that you publish online. Add interactive panels right into your research essays (if they can be published online) so your readers can recapitulate your results. Use it to develop your own tools using our functionality and code.",
      // virtually any language
      "languages": ["eng", "deu", "spa", "nld", "fra", "generic"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		    "text/tei+xml;format-variant=tei-dta"
		   ], 
      "output": ["none"], 
      "url": "https://voyant-tools.org/",
      "parameters": { 
	  "input"        : "self.linkToResource"
      }
    },

    {   "task": "Stylometry",
	"deployment": "production",
	"softwareType": "quantitative",
	"name": "WebSty",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    	    
	"description": "Similarity and clustering of texts in Polish. The tools used include: Morfeusz 2 with SGJP dictionary (for morphological analysis), wcrft2 (for tagging), Liner2 (for named entities recognition), Fextor (for extraction of feaures from texts); Cluto (for clustering), result visualisation: D3.js, D3-tip. For zip files with content in English, German, Russian, Hungarian, and Spanish, users are redirected to WebStyML.",
	"languages": ["pol", "eng", "deu", "rus", "hun", "spa"],	
	"langEncoding": "639-1",
	"mimetypes": ["application/zip"],
	"output": ["application/octet-stream"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang":  "self.linkToResourceLanguage",
	    "analysis": "websty",
	    "batch": "true"
	}
    },

    {   "task": "Topic Modelling",
	"deployment": "production",
	"softwareType": "quantitative",
	"name": "Topic",
	"logo": "clarin-pl.png",
	"homepages": "http://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    	    
	"description": "Topic modelling of texts in Polish. The tools used include: Morfeusz 2 with SGJP dictionary (for morphological analysis), wcrft2 (for tagging), gensim and mallet (for topic modelling), and D3.js plus D3-tip (for result visualisation).",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["application/zip"],
	"output": ["application/octet-stream"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "topic",
	    "batch": "true"
	}
    },
    
    {
	"task": "Text Summarization",
	"deployment": "production",
	"softwareType": "quantitative",
	"name": "Summarize",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    	    
	"description": "Automated word graph based summarisation of Polish texts.",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/octet-stream"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "summarize"
	}
    },

    {
	"task": "TF, IDF, TF-IDF calculation",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "TF-IDF",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    	    
	"description": "TF, IDF, TF-IDF calculation.",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["text/csv"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "tfidf"
	}
    },
    
    { "task": "Tokenisation",
      "deployment": "development",
      "softwareType": "qualitative",
      "name": "Ucto",
      "logo": "YourLogoComesHere.png",		  
      "homepage": "https://languagemachines.github.io/ucto/",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "0.8.3",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public",      
      "description": "Ucto is a unicode-compliant tokeniser. It takes input in the form of one or more untokenised texts, and subsequently tokenises them. Several languages are supported, but the software is extensible to other languages.",
      "languages": ["swe", "rus", "spa", "por", "nld", "eng", "deu", "fra", "ita"],
      "langEncoding": "639-3",
      "mimetypes": [
	  "text/plain"
	  // , "application/xml",		      
	  // , "application/pdf",
	  // , "application/msword"
      ],
      "output": ["Tadpole Columned Output Format", "text/folia+xml"], 		  		  		  
      "url": "https://webservices-lst.science.ru.nl/ucto/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource",
	  "lang"         : "self.linkToResourceLanguage"
      },
      "mapping":   {
	  "input"        : "untokinput_url",
	  "lang"         : "untokinput_language"
      }
    },
    
    { "task": "Tokenisation",
      "deployment": "production",
      "softwareType": "qualitative",
      "name": "WebLicht-Tokenization-TUR",
      "logo": "weblicht.jpg",		  
      "homepage": "https://weblicht.sfs.uni-tuebingen.de/weblichtwiki/index.php/Main_Page",
      "location": "Tuebingen, Germany",		  		  		  
      "creators": "CLARIN-D Centre at the University of Tuebingen, Germany",
      "contact": {
	  "person": "CLARIN WebLicht Support",
	  "email": "wlsupport@sfs.uni-tuebingen.de"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "WebLicht Easy Chain for tokenization of Turkish texts. The pipeline makes use of WebLicht's TCF converter, and the tokenizer from the OpenNLP project. The 'newlineBounds' parameter treats newlines as a hard break (a sentence boundary). WebLicht's built-in viewer for annotations can be used to visualize the processing result.",
      "languages": ["tur"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/rtf",			     
		    "application/pdf",
		    "application/msword",
		    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
		   ],
      "output": ["application/tcf+xml"],
      "url": "https://weblicht.sfs.uni-tuebingen.de/weblicht-switchboard/",		        
      "parameters": {
	  "input"   :  "self.linkToResource", 
	  "lang"    : "tr",                   
	  "analysis": "token"                    
      }
    },
    
    { "task": "Text Analytics",
      "deployment": "development",
      "softwareType": "quantitative",
      "name": "T-scan",
      "logo": "tscan.jpg",		  
      "homepage": "https://github.com/proycon/tscan",
      "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
      "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
      "contact": {
	  "person": "Maarten van Gompel",
	  "email": "proycon@anaproy.nl"
      },
      "version": "x.y.z",
      "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
      "licence": "public",
      "description": "T-Scan is a new tool for analyzing Dutch text. It aims at extracting text features that are theoretically interesting, in that they relate to genre and text complexity, as well as practically interesting, in that they enable users and text producers to make text-specific diagnoses. T-Scan derives it features from tools such as Frog and Alpino, and resources such as SoNaR, SUBTLEX-NL and Referentie Bestand Nederlands.",
      "languages": ["nld"], 
      "langEncoding": "639-1",
      "mimetypes": ["text/plain"],
      // todo: just say csv
      "output": ["text/folia+xml", "xsl", "text/csv"
		 // "word-csv", "sen-csv", "par-csv", "doc-csv",
		 // "total-word-csv", "total-sen-csv", "total-par-csv", "total-doc-csv"
		],
      "url": "https://webservices-lst.science.ru.nl/tscan/",
      "parameters": {
	  "project"      : "new",
	  "input"        : "self.linkToResource"
      },
      "mapping":   {
	  "input"        : "textinput_url" 
      }
    },

    // NEEDS MOR TESTING BEFORE INCLUSION
    
    // { "task": "OCR Engine",
    //   "name": "PICCL",
    //   "logo": "tscan.jpg",		  
    //   "homepage": "https://webservices-lst.science.ru.nl/piccl/info/",
    //   "location": "Nijmegen, The Netherlands (CLAM Webservices)",		  
    //   "creators": "Maarten van Gompel, Ko van der Sloot (CLST, Radboud University Nijmegen)",
    //   "contact": {
    // 	  "person": "Maarten van Gompel",
    // 	  "email": "proycon@anaproy.nl",
    //   },
    //   "version": "Early version",
    //   "authentication": "Yes. Before tool use, please register at https://webservices-lst.science.ru.nl/register.",
    //   "licence": "public",
    //   "description": "An OCR (Tesseract) and OCR post-correction pipeline (TICCL).",
    //   "languages": ["nld"], 
    //   "langEncoding": "639-1",
    //   "mimetypes": ["application/pdf"],
    //   // todo: just say csv
    //   "output": ["text/folia+xml"],
    //   "url": "https://webservices-lst.science.ru.nl/piccl/",
    //   "parameters": {
    // 	  "project"      : "new",
    // 	  "input"        : "self.linkToResource"
    //   },
    //   "mapping":   {
    // 	  "input"        : "pdftext_url" 
    //   }
    // },    

    {
	"task": "Text Enhancement",
	"deployment": "development",
	"softwareType": "qualitative",
	"name": "Apache Stanbol Enhancer",
	"logo": "acdh.png",		  		
	"homepage": "http://www.oeaw.ac.at/acdh",
	"location": "Vienna, Austria",		    
	"creators": "Apache Foundation (software), Austrian Centre of Digital Humanities (enhancement chains and configuration)",
	"contact": {
	    "person": "Matej Durco",
	    "email": "acdh-tech@oeaw.ac.at <mailto:acdh-tech@oeaw.ac.at>"
	},
	"version": "v1.0",
	"authentication": "no",		
	"licence": "public",
	"description": "Apache Stanbol provides a set of reusable components for semantic content management. A number of EnhancementEngines extract features from passed content, for details see https://stanbol.apache.org. The resulting RDF enhancements are returned in JSON format.",
	"languages": ["eng"],
	"langEncoding": "639-1",		
	"mimetypes": ["text/plain"],
	"output": ["application/json"],
	"url": "https://enrich-lrs.acdh.oeaw.ac.at/StanbolWrapper",		
	"parameters": {
	    "input"     : "self.linkToResource",
	    "outFormat" : "application%2Fjson"
	},
	"mapping":   {
	    "input"     : "resourceUri" 
	}
    },

    {
	"task": "Text Enhancement",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "Distanbol",
	"logo": "acdh.png",		  		
	"homepage": "http://www.oeaw.ac.at/acdh",
	"location": "Vienna, Austria",		    
	"creators": "Apache Foundation (software), Austrian Centre of Digital Humanities (enhancement chains and configuration)",
	"contact": {
	    "person": "Matej Durco",
	    "email": "acdh-tech@oeaw.ac.at <mailto:acdh-tech@oeaw.ac.at>"
	},
	"version": "v1.0",
	"authentication": "no",		
	"licence": "public",
	"description": "Distanbol analyses texts semantically. For this, it passes the input text to an Apache Stanbol web service that executes a NLP chain yielding named entities. This is followed by Entity Linking on the text. The resulting enhancements are rendered as human-readable HTML-page. In short, Distanbol is adding a human-readable rendering to the JSON-LD output produced by Stanbol.",
	"languages": ["eng"],
	"langEncoding": "639-1",		
	"mimetypes": ["text/plain"],
	"output": ["application/xhtml+xml"],
	"url": "https://distanbol.acdh.oeaw.ac.at/convert",		
	"parameters": {
	    "input"     : "self.linkToResource",
	    "confidence" : "confidence"
	},
	"mapping":   {
	    "input"     : "URL" 
	}
    },

    { "task": "Text Summarization",
      "deployment": "production",
      "softwareType": "quantitative",
      "name": "Concraft -> Bartek -> NicolasSummarizer",
      "logo": "zil.png",		  		  		  
      "homepage": "http://zil.ipipan.waw.pl/Nicolas",
      "location": "Warsaw, Poland",		  		  		  
      "creators": "Institute of Computer Science, Polish Academy of Sciences, Poland",
      "contact": {
	  "person": "MultiService",
	  "email": "rjawor@amu.edu.pl"
      },	    
      "version": "v1.0",
      "authentication": "no",		  
      "licence": "public",
      "description": "Java coreference-based summarization tool; its creation was cofunded by the European Union from resources of the European Social Fund -- Project PO KL 'Information technologies: Research and their interdisciplinary applications'. Part of: Multiservice, a robust  linguistic  Web service for Polish.",
      "languages": ["pol"],
      "langEncoding": "639-1",		  
      "mimetypes": ["text/plain",
		    "text/html"],
      "output": ["application/json", "CoNLL format", "Visualization"],      
      "url": "http://multiservice.nlp.ipipan.waw.pl/en/clrs",		  
      "parameters": {
	  "input" :     "self.linkToResource",
	  "analysis":   "6"
      }
    },
    
    {
	"task": "Word sense disambiguation",
	"deployment": "production",
	"softwareType": "qualitative",
	"name": "WoSeDon",
	"logo": "clarin-pl.png",
	"homepage": "https://ws.clarin-pl.eu",
	"location": "Wrocław, Poland",
	"creators": "Clarin-PL",
	"contact": {
	    "person": "Tomasz Walkowiak",
	    "email": "tomasz.walkowiak@pwr.edu.pl"
	},
	"version": "1.0",
	"licence": "public",
	"authentication": "no",	    
	"description": "Word Sense Disambiguation for Polish texts based on plWordNet - the Polish wordnet (weakly supervised, for all words).",
	"languages": ["pol"],
	"langEncoding": "639-1",
	"mimetypes": ["text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.text", "application/pdf", "text/html", "text/rtf"],
	"output": ["application/xml"],
	"url": "https://ws.clarin-pl.eu/weblicht.html",
	"parameters": {
	    "input": "self.linkToResource",
	    "lang": "pl",
	    "analysis": "wsd"
	}
    }
];

export default Registry;
