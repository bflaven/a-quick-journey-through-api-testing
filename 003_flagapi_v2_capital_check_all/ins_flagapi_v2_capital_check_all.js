/**
 * Postman 003_flagapi_v2_capital_check_all
 * Script file : ins_flagapi_v2_capital_check_all.js
 * Version : 1.0
 * Description: API flagadi V2 Check the capitals of all the countries
 * Collection : 003_flagapi_v2_capital_check_all.postman_collection.json
 * Method: GET
*/


/* ********* ENVIRONMENT *********** */

    var api_root_url = pm.environment.get("api_root_url");
    var api_get_capital = pm.environment.get("api_get_capital");


    console.log ("ENVIRONMENT :: api_root_url :: "+api_root_url+" ");
    console.log ("ENVIRONMENT :: api_get_capital :: "+api_get_capital+" ");

    

/* ********* // ENVIRONMENT *********** */


/* ********* JSON *********** */
var jsonData = JSON.parse(responseBody);
/* ********* // JSON *********** */
     

/* == STRUCTURE AND HTTP */
/* == STRUCTURE AND HTTP */

/* == JSON_SCHEMA =================================================================================================== */
/* Load the SchemaJsonOutput inside for commodity reason, id needed you can make it as a as ENV(environment) variable see line below */

var SchemaJsonOutput = {
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "name",
      "tld",
      "cca2",
      "ccn3",
      "cca3",
      "currency"
    ],
    "properties": {
      "name": {
        "type": "object",
        "required": [
          "common",
          "official",
          "native"
        ],
        "properties": {
          "common": {
            "type": "string"
          },
          "official": {
            "type": "string"
          },
          "native": {
            "type": "object",
            "required": [
              "common",
              "official"
            ],
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
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "cca2": {
        "type": "string",
        "minLength": 0,
        "maxLength": 3
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
          "afr": {
            "type": "string"
          },
          "amh": {
            "type": "string"
          },
          "ara": {
            "type": "string"
          },
          "arc": {
            "type": "string"
          },
          "aym": {
            "type": "string"
          },
          "aze": {
            "type": "string"
          },
          "bel": {
            "type": "string"
          },
          "ben": {
            "type": "string"
          },
          "ber": {
            "type": "string"
          },
          "bis": {
            "type": "string"
          },
          "bos": {
            "type": "string"
          },
          "bul": {
            "type": "string"
          },
          "bwg": {
            "type": "string"
          },
          "cal": {
            "type": "string"
          },
          "cat": {
            "type": "string"
          },
          "ces": {
            "type": "string"
          },
          "cha": {
            "type": "string"
          },
          "cmn": {
            "type": "string"
          },
          "crs": {
            "type": "string"
          },
          "dan": {
            "type": "string"
          },
          "deu": {
            "type": "string"
          },
          "div": {
            "type": "string"
          },
          "dzo": {
            "type": "string"
          },
          "ell": {
            "type": "string"
          },
          "eng": {
            "type": "string"
          },
          "est": {
            "type": "string"
          },
          "eus": {
            "type": "string"
          },
          "fao": {
            "type": "string"
          },
          "fas": {
            "type": "string"
          },
          "fij": {
            "type": "string"
          },
          "fil": {
            "type": "string"
          },
          "fin": {
            "type": "string"
          },
          "fra": {
            "type": "string"
          },
          "gil": {
            "type": "string"
          },
          "gle": {
            "type": "string"
          },
          "glg": {
            "type": "string"
          },
          "glv": {
            "type": "string"
          },
          "grn": {
            "type": "string"
          },
          "hat": {
            "type": "string"
          },
          "heb": {
            "type": "string"
          },
          "her": {
            "type": "string"
          },
          "hgm": {
            "type": "string"
          },
          "hif": {
            "type": "string"
          },
          "hin": {
            "type": "string"
          },
          "hmo": {
            "type": "string"
          },
          "hrv": {
            "type": "string"
          },
          "hun": {
            "type": "string"
          },
          "hye": {
            "type": "string"
          },
          "ind": {
            "type": "string"
          },
          "isl": {
            "type": "string"
          },
          "ita": {
            "type": "string"
          },
          "jam": {
            "type": "string"
          },
          "jpn": {
            "type": "string"
          },
          "kal": {
            "type": "string"
          },
          "kat": {
            "type": "string"
          },
          "kaz": {
            "type": "string"
          },
          "kck": {
            "type": "string"
          },
          "khi": {
            "type": "string"
          },
          "khm": {
            "type": "string"
          },
          "kin": {
            "type": "string"
          },
          "kir": {
            "type": "string"
          },
          "kon": {
            "type": "string"
          },
          "kor": {
            "type": "string"
          },
          "kur": {
            "type": "string"
          },
          "kwn": {
            "type": "string"
          },
          "lao": {
            "type": "string"
          },
          "lat": {
            "type": "string"
          },
          "lav": {
            "type": "string"
          },
          "lin": {
            "type": "string"
          },
          "lit": {
            "type": "string"
          },
          "loz": {
            "type": "string"
          },
          "ltz": {
            "type": "string"
          },
          "lua": {
            "type": "string"
          },
          "mah": {
            "type": "string"
          },
          "mey": {
            "type": "string"
          },
          "mfe": {
            "type": "string"
          },
          "mkd": {
            "type": "string"
          },
          "mlg": {
            "type": "string"
          },
          "mlt": {
            "type": "string"
          },
          "mon": {
            "type": "string"
          },
          "mri": {
            "type": "string"
          },
          "msa": {
            "type": "string"
          },
          "mya": {
            "type": "string"
          },
          "nau": {
            "type": "string"
          },
          "nbl": {
            "type": "string"
          },
          "ndc": {
            "type": "string"
          },
          "nde": {
            "type": "string"
          },
          "ndo": {
            "type": "string"
          },
          "nep": {
            "type": "string"
          },
          "niu": {
            "type": "string"
          },
          "nld": {
            "type": "string"
          },
          "nno": {
            "type": "string"
          },
          "nob": {
            "type": "string"
          },
          "nor": {
            "type": "string"
          },
          "nso": {
            "type": "string"
          },
          "nya": {
            "type": "string"
          },
          "nzs": {
            "type": "string"
          },
          "oci": {
            "type": "string"
          },
          "pap": {
            "type": "string"
          },
          "pau": {
            "type": "string"
          },
          "pih": {
            "type": "string"
          },
          "pol": {
            "type": "string"
          },
          "por": {
            "type": "string"
          },
          "prs": {
            "type": "string"
          },
          "pus": {
            "type": "string"
          },
          "que": {
            "type": "string"
          },
          "rar": {
            "type": "string"
          },
          "roh": {
            "type": "string"
          },
          "ron": {
            "type": "string"
          },
          "run": {
            "type": "string"
          },
          "rus": {
            "type": "string"
          },
          "sag": {
            "type": "string"
          },
          "sin": {
            "type": "string"
          },
          "slk": {
            "type": "string"
          },
          "slv": {
            "type": "string"
          },
          "smo": {
            "type": "string"
          },
          "sna": {
            "type": "string"
          },
          "som": {
            "type": "string"
          },
          "sot": {
            "type": "string"
          },
          "spa": {
            "type": "string"
          },
          "sqi": {
            "type": "string"
          },
          "srp": {
            "type": "string"
          },
          "ssw": {
            "type": "string"
          },
          "swa": {
            "type": "string"
          },
          "swe": {
            "type": "string"
          },
          "tam": {
            "type": "string"
          },
          "tet": {
            "type": "string"
          },
          "tgk": {
            "type": "string"
          },
          "tha": {
            "type": "string"
          },
          "tir": {
            "type": "string"
          },
          "tkl": {
            "type": "string"
          },
          "toi": {
            "type": "string"
          },
          "ton": {
            "type": "string"
          },
          "tpi": {
            "type": "string"
          },
          "tsn": {
            "type": "string"
          },
          "tso": {
            "type": "string"
          },
          "tuk": {
            "type": "string"
          },
          "tur": {
            "type": "string"
          },
          "tvl": {
            "type": "string"
          },
          "ukr": {
            "type": "string"
          },
          "urd": {
            "type": "string"
          },
          "uzb": {
            "type": "string"
          },
          "ven": {
            "type": "string"
          },
          "vie": {
            "type": "string"
          },
          "xho": {
            "type": "string"
          },
          "zdj": {
            "type": "string"
          },
          "zho": {
            "type": "string"
          },
          "zib": {
            "type": "string"
          },
          "zul": {
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
  }
};

/* Call the SchemaJsonOutput as ENV(environment) variable */
// const SchemaJsonOutput = JSON.parse(environment.SchemaJsonOutput);

pm.test("JSON_SCHEMA :: Check console if needed and change SchemaJsonOutput in ENV", function() {
  var jsonData = JSON.parse(responseBody);
  var validitionStatus = tv4.validate(jsonData, SchemaJsonOutput, false, true);
  if (validitionStatus !== true) {
        // console.log(tv4.error);
        console.log ("JSON_SCHEMA :: ERREUR :: message :: "+tv4.error.message+" ");
        console.log ("JSON_SCHEMA :: ERREUR :: name :: "+tv4.error.name+" ");
        console.log ("JSON_SCHEMA :: ERREUR :: dataPath :: "+tv4.error.dataPath+" ");
         console.log ("JSON_SCHEMA :: ERREUR :: schemaPath :: "+tv4.error.schemaPath+" ");
  }
  pm.expect(validitionStatus).to.be.true;
  console.log ("JSON_SCHEMA :: NO ERRORS :: SchemaJsonOutput in ENV :: VALID");
});



/* == // JSON_SCHEMA =================================================================================================== */



/* == GENERAL =================================================================================================== */


        tests["HTTP REQUEST :: "+api_get_capital+" :: Response time is less than 1200ms"] = responseTime < 1200;
        tests["HTTP REQUEST :: "+api_get_capital+" :: Status code is 200"] = responseCode.code === 200;
        tests["GENERAL STRUCTURE :: "+api_get_capital+"  :: jsonData is object and not null"] = (typeof(jsonData) === "object") && ((jsonData) !== null)


                for (var i=0; i<jsonData.length; i++) {
                            tests["GENERAL :: API :: "+jsonData[i].name.common+" :: capital :: "+jsonData[i].capital+" | DATA :: capital :: "+data.capital+" "] = jsonData[i].capital.indexOf(data.capital) !== -1;
                }


/* == // GENERAL =================================================================================================== */







