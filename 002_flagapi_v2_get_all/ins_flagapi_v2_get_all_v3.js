/**
 * Postman 002_flagapi_v2_get_all
  * Script file : ins_flagapi_v2_get_all.js
 * Version : 1.0
 * Description: Test the countries list in flagapi_v2 API
 * Collection :002_flagapi_v2_get_all.postman_collection.json
 * Method: GET
*/

/* ********* FUNCTIONS *********** */
  function ThrowTheErrorMessage (country, message) {
          console.log ('CAUTION :: '+country+' :: '+message+'');

  }//EOF

function itShouldTestTheResponseTime (required) {

      pm.test("V2 HTTP REQUEST :: "+api_get_all+" :: Response time is less than "+required+"ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(required);
      });

} //EOF

function itShouldTestTheStatus (required) {

       pm.test("V2 HTTP REQUEST :: "+api_get_all+" :: Status code is "+required+"", function () {
          pm.response.to.have.status(required);
        });

} //EOF

function itShouldTestTheTypeof (required) {
                pm.test("V2 GENERAL STRUCTURE :: "+api_get_all+"  :: jsonData is an "+required+" :: OK", function () {
                pm.expect(((typeof(jsonData)))).to.equal(required);
              });

        } //EOF

function itShouldTestFormat (required) {
                     pm.test("V2 GENERAL STRUCTURE  :: "+api_get_all+" :: "+data.requirements.general_required_fields[$i].field+" :: Field (required) \""+data.requirements.general_required_fields[$i].field+"\" :: PRESENT", function () {
                        pm.expect(pm.response.text()).to.include(""+data.requirements.general_required_fields[$i].field+"");
                    });
          }

  function itShouldTestaString (required, api_v, data_v) {
          
          pm.test("V6 GENERAL :: API :: "+jsonData[country].name.common+" :: "+required+" :: "+api_v+" | DATA :: "+data.result.countries[country].name.common+" :: "+required+" :: "+data_v+"", function () {
            pm.expect(api_v).to.be.a("string").and.not.empty;
            pm.expect(api_v).to.deep.equal(data_v);
            pm.expect(api_v).to.be.oneOf([data_v]);

          });
  }//EOF

function itShouldTestaMoreAdvancedString (required, api_v, data_v) {
        
      pm.test("V6 GENERAL :: API :: "+jsonData[country].name.common+" :: "+required+" ::  "+api_v+" | DATA :: "+data.result.countries[country].name.common+" :: "+required+" ::  "+data_v+" ", function () {

                      pm.expect(api_v).to.be.a("string").and.not.empty;
                      pm.expect(api_v).to.deep.equal(data_v);
                      pm.expect(api_v).to.be.oneOf([data_v]);
                      pm.expect((parseInt(api_v, 10))).to.be.a('number');
                      pm.expect((isNaN(parseInt(api_v, 10)))).to.be.false;
          });
  }//EOF

function itShouldTestaMoreAdvancedNumber (required, api_v, data_v) {

 pm.test("V6 GENERAL :: API :: "+jsonData[country].name.common+" :: "+required+" :: "+api_v+" | DATA :: "+data.result.countries[country].name.common+" :: "+required+" :: "+data_v+" ", function () {
                pm.expect(api_v).to.be.a('number').and.not.to.be.null;
                pm.expect((parseInt(api_v, 10))).to.be.a('number').and.not.to.be.null;
                pm.expect(api_v).to.deep.equal(data_v);
                pm.expect(api_v).to.be.oneOf([data_v]);           
                pm.expect((isNaN(parseInt(api_v, 10)))).to.be.false;
                pm.expect((typeof(api_v))).to.deep.equal('number');
      });



}//EOF

function itShouldTestaMoreAdvancedNumberBis (required, api_v, data_v) {

   pm.test("V6 GENERAL :: API :: "+jsonData[country].name.common+" :: "+required+" :: "+api_v+" | DATA :: "+data.result.countries[country].name.common+" :: "+required+" :: "+data.result.countries[country].area+"  ", function () {
                
                pm.expect(api_v).to.be.a('string').and.not.to.be.null;
                pm.expect((parseInt(api_v, 10))).to.be.a('number').and.not.to.be.null;
                pm.expect(typeof(parseInt(api_v, 10))).to.deep.equal('number');
                pm.expect(api_v).to.deep.equal(data_v);
                pm.expect(api_v).to.be.oneOf([data_v]);              
                pm.expect((isNaN(parseInt(api_v, 10)))).to.be.false;
                pm.expect((typeof(api_v))).to.deep.equal('string');

     });

}//EOF



/* ********* ENVIRONMENT *********** */

    var api_root_url = pm.environment.get("api_root_url");
    var api_get_all = pm.environment.get("api_get_all");


    console.log ("ENVIRONMENT :: api_root_url :: "+api_root_url+" ");
    console.log ("ENVIRONMENT :: api_get_all :: "+api_get_all+" ");

/* ********* // ENVIRONMENT *********** */


/* ********* JSON *********** */
var jsonData = JSON.parse(responseBody);
/* ********* // JSON *********** */
     

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

        itShouldTestTheResponseTime (500);

        itShouldTestTheStatus (200);        

         if ((typeof(jsonData)) === "object") {
          itShouldTestTheTypeof ("object");
        } else {
            // false for sure
        }



        if ((typeof(jsonData)) === "array") {
              itShouldTestTheTypeof ("array");
        } else {
            // false for sure
        }

        // example using pm.response.to.be*
        pm.test("V2 GENERAL STRUCTURE :: "+api_get_all+"  :: response must be valid and have a body", function () {
        // info, success, redirection, clientError,  serverError, are other variants
        pm.response.to.be.ok; 
        // assert that the response has a valid JSON body
        pm.response.to.be.withBody;
        // this assertion also checks if a body  exists, so the above check is not needed
        pm.response.to.be.json; 
        });

        

          for ($i=0;$i<data.requirements.general_required_fields.length;$i++) {
                  var required = $i;
                  itShouldTestFormat($i);
            }

       
/* == // GENERAL =================================================================================================== */

/* == // STRUCTURE AND HTTP */

/* == DATA */



    // country
    for (var country in jsonData) {

/* == COUNTRIES =================================================================================================== */

            itShouldTestaString ("cca2", jsonData[country].cca2, data.result.countries[country].cca2);
            itShouldTestaString ("ccn3", jsonData[country].ccn3, data.result.countries[country].ccn3);
            itShouldTestaString ("cca3", jsonData[country].cca3, data.result.countries[country].cca3);
     

    for ($i=0;$i<jsonData[country].currency.length;$i++) {
        if (jsonData[country].currency[$i] !== '' || data.result.countries[country].currency[$i] !== '' ) {
        itShouldTestaString ("currency["+$i+"]", jsonData[country].currency[$i], data.result.countries[country].currency[$i]);
    } else {
          ThrowTheErrorMessage (jsonData[country].name.common, "NO CURRENCY");          
        }//EOI
    }//EOL


      for ($i=0;$i<jsonData[country].flag.length;$i++) {
            itShouldTestaString ("flag["+$i+"]", jsonData[country].flag[$i], data.result.countries[country].flag[$i]);
            }//EOL
         
      if (jsonData[country].callingCode[0] !=='' || data.result.countries[country].callingCode[0]  !=='' ) {

        for ($i=0;$i<jsonData[country].callingCode.length;$i++) {
            itShouldTestaString ("callingCode["+$i+"]", jsonData[country].callingCode[$i], data.result.countries[country].callingCode[$i]);
            }//EOL

        
       } else {

         ThrowTheErrorMessage (jsonData[country].name.common, "NO CALLINGCODE");          

              }//EOI

      if (jsonData[country].capital !=='' || data.result.countries[country].capital  !=='' ) {
      itShouldTestaString ("capital", jsonData[country].capital, data.result.countries[country].capital);
      } else {
                ThrowTheErrorMessage (jsonData[country].name.common, "NO CAPITAL");        

              }//EOI

      for ($i=0;$i<jsonData[country].altSpellings.length;$i++) {
        if (jsonData[country].altSpellings[$i] !=='' || data.result.countries[country].altSpellings[$i]  !=='' ) {
          itShouldTestaString ("altSpellings["+$i+"]", jsonData[country].altSpellings[$i], data.result.countries[country].altSpellings[$i]); 
        } else {

            ThrowTheErrorMessage (jsonData[country].name.common, "NO ALTERNATIVE SPELLINGS");
        }//EOI

    }  

    if (jsonData[country].relevance !== '' || data.result.countries[country].relevance !== '' ) {
      itShouldTestaMoreAdvancedString ("relevance", jsonData[country].relevance, data.result.countries[country].relevance);
        } else {
           ThrowTheErrorMessage (jsonData[country].name.common, "NO RELEVANCE");

        }//EOI  

    if (jsonData[country].region !=='' || data.result.countries[country].region  !=='' ) {
      itShouldTestaString ("region", jsonData[country].region, data.result.countries[country].region);
    } else {
      ThrowTheErrorMessage (jsonData[country].name.common, "NO REGION DEFINED, MUST BE MARS, Mister Musk");
    }//EOI 


    if (jsonData[country].subregion !=='' || data.result.countries[country].subregion  !=='' ) {
      itShouldTestaString ("subregion", jsonData[country].subregion, data.result.countries[country].subregion);
     } else {
                 ThrowTheErrorMessage (jsonData[country].name.common, "NO SUBREGION DEFINED, MUST BE MARS, Mister Musk");
            }//EOI   

if (jsonData[country].nativeLanguage !== '' || data.result.countries[country].nativeLanguage  !== '' ) {
        itShouldTestaString ("nativeLanguage", jsonData[country].nativeLanguage, data.result.countries[country].nativeLanguage);
        } else {

          ThrowTheErrorMessage (jsonData[country].name.common, "NO NATIVELANGUAGE DEFINED, MUST BE USA, Mister Trump");


        }//EOI

      for (var LangAbbr in jsonData[country].languages){        
        if (jsonData[country].languages[LangAbbr] !== '' || data.result.countries[country].languages[LangAbbr] !== '' ) {
           itShouldTestaString ("languages", jsonData[country].languages[LangAbbr], data.result.countries[country].languages[LangAbbr]);
        } else {
        
        ThrowTheErrorMessage (jsonData[country].name.common, "NO LANGUAGES DEFINED");


        }//EOI
      }//EOF

      for (var TransLangAbbr in jsonData[country].translations){        
                    if (jsonData[country].translations[TransLangAbbr] !== '' || data.result.countries[country].translations[TransLangAbbr] !== '' ) {                    
                    itShouldTestaString ("translations", jsonData[country].translations[TransLangAbbr], data.result.countries[country].translations[TransLangAbbr]);
                    } else {
                    
                    ThrowTheErrorMessage (jsonData[country].name.common, "NO TRANSLATIONS DEFINED");


                    }//EOI
              }//EOF

      for ($i=0;$i<jsonData[country].latlng.length;$i++) {
        itShouldTestaMoreAdvancedNumber ("latlng["+$i+"]", jsonData[country].latlng[$i], data.result.countries[country].latlng[$i]);
      }//EOL

      if (jsonData[country].demonym !== '' || data.result.countries[country].demonym  !== '' ) {
        itShouldTestaString ("demonym", jsonData[country].demonym, data.result.countries[country].demonym);
              } else {

                ThrowTheErrorMessage (jsonData[country].name.common, "NO DEMONYM DEFINED, MUST BE MARS, Mister Musk");


              }//EOI

      if ((jsonData[country].borders.length !== 0) || (data.result.countries[country].borders.length !== 0) ) {
          for ($i=0;$i<jsonData[country].borders.length;$i++){
            itShouldTestaString ("borders["+$i+"]", jsonData[country].borders[$i], data.result.countries[country].borders[$i]);
          }
      } else {
            ThrowTheErrorMessage (jsonData[country].name.common, "NO BORDERS AROUND, THIS AN ISLAND, MUST BE FOR YOU, Mister Trump");
      }//EOI


        if ( (jsonData[country].area !== '') || (data.result.countries[country].area !== '') ) {
                            itShouldTestaMoreAdvancedNumberBis ("area", jsonData[country].area, data.result.countries[country].area);
                          } else {
                            var hey_sentence = "NO AREA";
                            console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
                          }//EOI
    
/* == // COUNTRIES =================================================================================================== */

}//EOL country

/* == // DATA */


