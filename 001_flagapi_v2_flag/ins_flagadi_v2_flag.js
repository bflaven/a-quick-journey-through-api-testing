 /**
 * Postman 001_flagadi_v2_flag
 * Script file : ins_flagadi_v2_flag.js
 * Version : 1.0
 * Description: Test the flag for flagadi v2 API
 * Collection : 001_flagadi_v2_flag.postman_collection.json
 * Method: GET
 */
/* ********* ENVIRONMENT *********** */

    var api_root_url = pm.environment.get("api_root_url");
    var api_get_callingcode = pm.environment.get("api_get_callingcode");
    var api_get_flag = pm.environment.get("api_get_flag");
    var SchemaJsonOutput = pm.environment.get("SchemaJsonOutput");
    
    /* GLOBALS */
    // var SchemaJsonOutput = pm.globals.get("SchemaJsonOutput");
    // var postmanBDD = pm.globals.get("postmanBDD");

    

    console.log ("ENVIRONMENT :: api_root_url :: "+api_root_url+" ");
    console.log ("ENVIRONMENT :: api_get_callingcode :: "+api_get_callingcode+" ");
    console.log ("ENVIRONMENT :: api_get_flag :: "+api_get_flag+" ");
    console.log ("ENVIRONMENT :: SchemaJsonOutput :: "+SchemaJsonOutput+" ");
    
    /* GLOBALS */
    // console.log ("GLOBALS :: SchemaJsonOutput :: "+SchemaJsonOutput+" ");
    // console.log ("GLOBALS :: postmanBDD :: "+postmanBDD+" ");

/* ********* // ENVIRONMENT *********** */


/* ********* JSON *********** */
var jsonData = JSON.parse(responseBody);
/* ********* // JSON *********** */

/* ********* VALUES *********** */

/* For FLAG  */
var FLAG_required_general_fields = ["name", "tld","cca2","ccn3","cca3","currency","flag","callingCode","capital","altSpellings","relevance","region","subregion","nativeLanguage","languages","translations","latlng","demonym","borders","area"];
     
/* ********* // VALUES *********** */

/* == STRUCTURE AND HTTP */

/* == JSON_SCHEMA =================================================================================================== */
/* Load the SchemaJsonOutput inside for commodity reason, id needed you can make it as a as ENV(environment) variable see line below */
/* Call the SchemaJsonOutput as ENV(environment) variable */
/* 
const SchemaJsonOutput = {
  "type": "object",
  "required": [
    "name",
    "area"
  ],
  "properties": {
    "name": {
      "type": "object",
      "required": [
        "common"
      ],
      "properties": {
        "common": {
          "type": "string",
          "minLength": 1,
          "maxLength": 100
        },
        "official": {
          "type": "string",
          "minLength": 1,
          "maxLength": 100
        },
        "native": {
          "type": "object",
          "properties": {
            "common": {
              "type": "string"
            },
            "official": {
              "type": "string"
            }
          }
        }
      }
    },
    "tld": {
      "type": "array"
    },
    "cca2": {
      "type": "string"
    },
    "ccn3": {
      "type": "string"
    },
    "cca3": {
      "type": "string"
    },
    "currency": {
      "type": "array"
    },
    "flag": {
      "type": "array"
    },
    "callingCode": {
      "type": "array"
    },
    "capital": {
      "type": "string"
    },
    "altSpellings": {
      "type": "array"
    },
    "relevance": {
      "type": "string"
    },
    "region": {
      "type": "string"
    },
    "subregion": {
      "type": "string"
    },
    "nativeLanguage": {
      "type": "string"
    },
    "languages": {
      "type": "object",
      "required": [],
      "properties": {
        "jpn": {
          "type": "string"
        },
        "eng": {
          "type": "string"
        },
        "fra": {
          "type": "string"
        },
        "prs": {
          "type": "string"
        },
        "pus": {
          "type": "string"
        },
        "tuk": {
          "type": "string"
        }
      }
    },
    "translations": {
      "type": "object",
      "required": [],
      "properties": {
        "jpn": {
          "type": "string"
        },
        "eng": {
          "type": "string"
        },
        "cym": {
          "type": "string"
        },
        "deu": {
          "type": "string"
        },
        "fra": {
          "type": "string"
        },
        "hrv": {
          "type": "string"
        },
        "ita": {
          "type": "string"
        },
        "nld": {
          "type": "string"
        },
        "por": {
          "type": "string"
        },
        "rus": {
          "type": "string"
        },
        "spa": {
          "type": "string"
        }
      }
    },
    "latlng": {
      "type": "array"
    },
    "demonym": {
      "type": "string"
    },
    "borders": {
      "type": "array"
    },
    "status": {
      "type": "string"
    },
    "area": {
      "type": "string"
    }
  }
};
*/

pm.test("JSON_SCHEMA :: Check console if needed and change SchemaJsonOutput in ENV", function() {
  var jsonData = JSON.parse(responseBody);
  /*
tv4.validate(data, schema, checkRecursive, true);
tv4.validateResult(data, schema, checkRecursive, true);
tv4.validateMultiple(data, schema, checkRecursive, true);
*/
  var validitionStatus = tv4.validate(jsonData, SchemaJsonOutput, false, true);

  
  if (validitionStatus !== true) {
        // console.log(tv4.error);
        console.log ("JSON_SCHEMA :: ERROR :: message :: "+tv4.error.message+" ");
        console.log ("JSON_SCHEMA :: ERROR :: name :: "+tv4.error.name+" ");
        console.log ("JSON_SCHEMA :: ERROR :: dataPath :: "+tv4.error.dataPath+" ");
        console.log ("JSON_SCHEMA :: ERROR :: schemaPath :: "+tv4.error.schemaPath+" ");
  }
  pm.expect(validitionStatus).to.be.true;
  console.log ("JSON_SCHEMA :: NO ERRORS :: SchemaJsonOutput in ENV :: VALID");
});

/* == // JSON_SCHEMA =================================================================================================== */


/* == GENERAL =================================================================================================== */

        /* HTTP TESTS  */

        /* V1 before the 2017/10/25 */
        // tests["V1 HTTP REQUEST :: "+api_get_callingcode+" :: "+api_get_flag+" :: Response time is less than 1200ms"] = responseTime < 1200;

        /* V2 after the 2017/10/25 */
        pm.test("V2 HTTP REQUEST :: "+api_get_callingcode+" :: "+api_get_flag+" :: Response time is less than 1200ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(1200);
        });

        /* V1 before the 2017/10/25 */
        // tests["V1 HTTP REQUEST :: "+api_get_callingcode+" :: "+api_get_flag+" :: Status code is 200"] = responseCode.code === 200;

        /* V2 after the 2017/10/25 */
        pm.test("V2 HTTP REQUEST :: "+api_get_callingcode+" :: "+api_get_flag+" :: Status code is 200", function () {
          pm.response.to.have.status(200);
        });


        /* V1 before the 2017/10/25 */
        // tests["V1 STRUCTURE GENERAL :: result :: OK"] = typeof(jsonData) === "object" && ((jsonData) !== null)
        // tests["V1 HTTP REQUEST :: result is an Object"] = Object.isObject(jsonData);

        /* V2 after the 2017/10/25 */
        pm.test("V2 STRUCTURE GENERAL :: result :: OK", function () {
            // assert that the status code is 200
            pm.response.to.be.ok; // info, success, redirection, clientError,  serverError, are other variants
            // assert that the response has a valid JSON body
            pm.response.to.be.withBody; // this assertion also checks if a body  exists, so the above check is not needed
            pm.response.to.be.json;
            pm.response.to.not.be.error;
            pm.response.to.have.jsonBody(""); 
            pm.response.to.not.have.jsonBody("error"); 
            pm.expect(jsonData).to.not.be.empty;
        });
      
            /* V1 before the 2017/10/25 */
            /*
            for ($i=0;$i<FLAG_required_general_fields.length;$i++) {
                tests["V1 STRUCTURE GENERAL :: "+api_get_callingcode+" :: "+api_get_flag+" :: \""+FLAG_required_general_fields[$i]+"\" :: Field (required) :: PRESENT"] = responseBody.has(""+FLAG_required_general_fields[$i]+"");
            } 
            */  

          
            /* V2 after the 2017/10/25 */
            function itShouldTestFormat (required) {
            pm.test("V2 STRUCTURE GENERAL :: "+api_get_callingcode+" :: "+api_get_flag+" :: \""+FLAG_required_general_fields[$i]+"\" :: Field (required) :: PRESENT", function () {
                pm.expect(pm.response.text()).to.include(""+FLAG_required_general_fields[$i]+"");
            });  
          }

          for ($i=0;$i<FLAG_required_general_fields.length;$i++) {
                  var required = $i;
                  itShouldTestFormat(required);

            }
        
       
/* == // GENERAL =================================================================================================== */
   

