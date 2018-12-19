/**
 * Postman 002_flagapi_v2_get_all
  * Script file : ins_flagapi_v2_get_all.js
 * Version : 1.0
 * Description: Test the countries list in flagapi_v2 API
 * Collection :002_flagapi_v2_get_all.postman_collection.json
 * Method: GET
*/


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

// var SchemaJsonOutput = {};


/* Call the SchemaJsonOutput as ENV(environment) variable */
// const SchemaJsonOutput = JSON.parse(environment.SchemaJsonOutput);
/*
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
*/


/* == // JSON_SCHEMA =================================================================================================== */



/* == GENERAL =================================================================================================== */
        

        pm.test("V2 HTTP REQUEST :: "+api_get_all+" :: Response time is less than 1200ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(1200);
        });
        pm.test("V2 HTTP REQUEST :: "+api_get_all+" :: Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        /* GENERAL STRUCTURE */
        if ((typeof(jsonData)) === "object") {

              pm.test("V2 GENERAL STRUCTURE :: "+api_get_all+"  :: jsonData isObject :: OK", function () {
              pm.expect(((typeof(jsonData)))).to.equal('object');

              });

        } else {
            // false for sure
        }

        if ((typeof(jsonData)) === "array") {
              pm.test("V2 GENERAL STRUCTURE :: "+api_get_all+"  :: result isArray :: OK", function () {
              pm.expect(((typeof(jsonData)))).to.equal('array');

              });

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

        function itShouldTestFormat (required) {
                     pm.test("V2 GENERAL STRUCTURE  :: "+api_get_all+" :: "+data.requirements.general_required_fields[$i].field+" :: Field (required) \""+data.requirements.general_required_fields[$i].field+"\" :: PRESENT", function () {
                        pm.expect(pm.response.text()).to.include(""+data.requirements.general_required_fields[$i].field+"");
                    });
          }

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


     pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: cca2 :: "+jsonData[country].cca2+" | DATA :: "+data.result.countries[country].name.common+" :: cca2 :: "+data.result.countries[country].cca2+"", function () {
          pm.expect(''+jsonData[country].cca2+'').to.be.a("string").and.not.empty;
          pm.expect(''+jsonData[country].cca2+'').to.deep.equal(''+data.result.countries[country].cca2+'');
          pm.expect(jsonData[country].cca2).to.be.oneOf([data.result.countries[country].cca2]);
          });

    pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: ccn3 :: "+jsonData[country].ccn3+" | DATA :: "+data.result.countries[country].name.common+" :: ccn3 :: "+data.result.countries[country].ccn3+"", function () {
          pm.expect(''+jsonData[country].ccn3+'').to.be.a("string").and.not.empty;
          pm.expect(''+jsonData[country].ccn3+'').to.deep.equal(''+data.result.countries[country].ccn3+'');
          pm.expect(jsonData[country].ccn3).to.be.oneOf([data.result.countries[country].ccn3]);
          });
    
    pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: cca3 :: "+jsonData[country].cca3+" | DATA :: "+data.result.countries[country].name.common+" :: cca3 :: "+data.result.countries[country].cca3+"", function () {
          pm.expect(''+jsonData[country].cca3+'').to.be.a("string").and.not.empty;
          pm.expect(''+jsonData[country].cca3+'').to.deep.equal(''+data.result.countries[country].cca3+'');
          pm.expect(jsonData[country].cca3).to.be.oneOf([data.result.countries[country].cca3]);
          });
    

if (jsonData[country].currency[0] !== '' || data.result.countries[country].currency[0] !== '' ) {
       
      pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: currency[0] :: "+jsonData[country].currency[0]+" | DATA :: "+data.result.countries[country].name.common+" :: currency[0] :: "+data.result.countries[country].currency[0]+"", function () {
          pm.expect(jsonData[country].currency[0]).to.be.a("string").and.not.empty;
          pm.expect(jsonData[country].currency[0]).to.deep.equal(data.result.countries[country].currency[0]);
          pm.expect(jsonData[country].currency[0]).to.be.oneOf([data.result.countries[country].currency[0]]);
          });
      
        } else {

          var hey_sentence = "NO CURRENCY";
          console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');

        }//EOI


    pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: flag[0] :: "+jsonData[country].flag[0]+" | DATA :: "+data.result.countries[country].name.common+" :: flag[0] :: "+data.result.countries[country].flag[0]+" ", function () {
          pm.expect(jsonData[country].flag[0]).to.be.a("string").and.not.empty;
          pm.expect(jsonData[country].flag[0]).to.deep.equal(data.result.countries[country].flag[0]);
          pm.expect(jsonData[country].flag[0]).to.be.oneOf([data.result.countries[country].flag[0]]);
          });

    pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: flag[1] :: "+jsonData[country].flag[1]+" | DATA :: "+data.result.countries[country].name.common+" :: flag[1] :: "+data.result.countries[country].flag[1]+" ", function () {
          pm.expect(jsonData[country].flag[1]).to.be.a("string").and.not.empty;
          pm.expect(jsonData[country].flag[1]).to.deep.equal(data.result.countries[country].flag[1]);
          pm.expect(jsonData[country].flag[1]).to.be.oneOf([data.result.countries[country].flag[1]]);
          });

    pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: flag[2] :: "+jsonData[country].flag[2]+" | DATA :: "+data.result.countries[country].name.common+" :: flag[2] :: "+data.result.countries[country].flag[2]+" ", function () {
          pm.expect(jsonData[country].flag[2]).to.be.a("string").and.not.empty;
          pm.expect(jsonData[country].flag[2]).to.deep.equal(data.result.countries[country].flag[2]);
          pm.expect(jsonData[country].flag[2]).to.be.oneOf([data.result.countries[country].flag[2]]);
          });

if (jsonData[country].callingCode[0] !=='' && data.result.countries[country].callingCode[0]  !=='' ) {
  pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: callingCode[0] :: "+jsonData[country].callingCode[0]+" | DATA :: "+data.result.countries[country].name.common+" :: callingCode[0] :: "+data.result.countries[country].callingCode[0]+" ", function () {
  pm.expect(jsonData[country].callingCode[0]).to.be.a("string").and.not.empty;
  pm.expect(jsonData[country].callingCode[0]).to.deep.equal(data.result.countries[country].callingCode[0]);
  pm.expect(jsonData[country].callingCode[0]).to.be.oneOf([data.result.countries[country].callingCode[0]]);
  });
 } else {

          var hey_sentence = "NO CALLINGCODE";
          console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');

        }//EOI

if (jsonData[country].capital !=='' && data.result.countries[country].capital  !=='' ) {
pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: capital :: "+jsonData[country].capital+" | DATA  :: "+data.result.countries[country].name.common+" ::  capital :: "+data.result.countries[country].capital+" ", function () {
  pm.expect(jsonData[country].capital).to.be.a("string").and.not.empty;
  pm.expect(jsonData[country].capital).to.deep.equal(data.result.countries[country].capital);
  pm.expect(jsonData[country].capital).to.be.oneOf([data.result.countries[country].capital]);
  });

} else {

          var hey_sentence = "NO CAPITAL";
          console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');

        }//EOI

pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: altSpellings[0] :: "+jsonData[country].altSpellings[0]+" | DATA  :: "+data.result.countries[country].name.common+" ::  altSpellings[0] :: "+data.result.countries[country].altSpellings[0]+" ", function () {
  pm.expect(jsonData[country].altSpellings[0]).to.be.a("string").and.not.empty;
  pm.expect(jsonData[country].altSpellings[0]).to.deep.equal(data.result.countries[country].altSpellings[0]);
  pm.expect(jsonData[country].altSpellings[0]).to.be.oneOf([data.result.countries[country].altSpellings[0]]);
  });

if (jsonData[country].altSpellings[1] !== undefined && data.result.countries[country].altSpellings[1]  !== undefined ) {
        pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: altSpellings[1] :: "+jsonData[country].altSpellings[1]+" | DATA  :: "+data.result.countries[country].name.common+" ::  altSpellings[1] :: "+data.result.countries[country].altSpellings[1]+" ", function () {
  pm.expect(jsonData[country].altSpellings[1]).to.be.a("string").and.not.empty;
  pm.expect(jsonData[country].altSpellings[1]).to.deep.equal(data.result.countries[country].altSpellings[1]);
  pm.expect(jsonData[country].altSpellings[1]).to.be.oneOf([data.result.countries[country].altSpellings[1]]);
  });
        } else {
          var hey_sentence = "NO ALTERNATIVE SPELLING";
          console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');

        }//EOI  



if (jsonData[country].relevance !== null || data.result.countries[country].relevance !== null ) {
       
      pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: relevance :: "+jsonData[country].relevance+" | DATA :: "+data.result.countries[country].name.common+" :: relevance :: "+data.result.countries[country].relevance+" ", function () {
                pm.expect(jsonData[country].relevance).to.be.a("string").and.not.empty;
                pm.expect(jsonData[country].relevance).to.deep.equal(data.result.countries[country].relevance);
                pm.expect(jsonData[country].relevance).to.be.oneOf([data.result.countries[country].relevance]);
                pm.expect((parseInt(data.result.countries[country].relevance, 10))).to.be.a('number');
                pm.expect((isNaN(parseInt(data.result.countries[country].relevance, 10)))).to.be.false;
      });
      
        } else {

          var hey_sentence = "NO RELEVANCE";
          console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');

        }//EOI

if (jsonData[country].region !=='' && data.result.countries[country].region  !=='' ) {

pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: region :: "+jsonData[country].region+" | DATA  :: "+data.result.countries[country].name.common+" ::  region :: "+data.result.countries[country].region+" ", function () {
    pm.expect(jsonData[country].region).to.be.a("string").and.not.empty;
    pm.expect(jsonData[country].region).to.deep.equal(data.result.countries[country].region);
    pm.expect(jsonData[country].region).to.be.oneOf([data.result.countries[country].region]);
});
} else {
  var hey_sentence = "NO REGION DEFINED, MUST BE MARS, Mister Musk";
  console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
}//EOI


if (jsonData[country].subregion !=='' && data.result.countries[country].subregion  !=='' ) {

pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: subregion :: "+jsonData[country].subregion+" | DATA  :: "+data.result.countries[country].name.common+" ::  subregion :: "+data.result.countries[country].subregion+"  ", function () {
    pm.expect(jsonData[country].subregion).to.be.a("string").and.not.empty;
    pm.expect(jsonData[country].subregion).to.deep.equal(data.result.countries[country].subregion);
    pm.expect(jsonData[country].subregion).to.be.oneOf([data.result.countries[country].subregion]);
});

 } else {
          var hey_sentence = "NO SUBREGION DEFINED, MUST BE MARS, Mister Musk";
          console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
        }//EOI

if (jsonData[country].nativeLanguage !== '' && data.result.countries[country].nativeLanguage  !== '' ) {

            pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: nativeLanguage :: "+jsonData[country].nativeLanguage+" | DATA  :: "+data.result.countries[country].name.common+" ::  nativeLanguage :: "+data.result.countries[country].nativeLanguage+"", function () {
            pm.expect(jsonData[country].nativeLanguage).to.be.a("string").and.not.empty;
            pm.expect(jsonData[country].nativeLanguage).to.deep.equal(data.result.countries[country].nativeLanguage);
            pm.expect(jsonData[country].nativeLanguage).to.be.oneOf([data.result.countries[country].nativeLanguage]);
            });


        } else {
          var hey_sentence = "NO NATIVELANGUAGE DEFINED, MUST BE USA, Mister Trumpi";
          console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
        }//EOI

        if (jsonData[country].nativeLanguage !== '' && data.result.countries[country].nativeLanguage  !== '' ) {

            pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: nativeLanguage :: "+jsonData[country].nativeLanguage+" | DATA  :: "+data.result.countries[country].name.common+" ::  nativeLanguage :: "+data.result.countries[country].nativeLanguage+"", function () {
            pm.expect(jsonData[country].nativeLanguage).to.be.a("string").and.not.empty;
            pm.expect(jsonData[country].nativeLanguage).to.deep.equal(data.result.countries[country].nativeLanguage);
            pm.expect(jsonData[country].nativeLanguage).to.be.oneOf([data.result.countries[country].nativeLanguage]);
            });


        } else {
          var hey_sentence = "NO NATIVELANGUAGE DEFINED, MUST BE USA, Mister Trumpi";
          console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
        }//EOI


 for (var LangAbbr in jsonData[country].languages){        
  if (jsonData[country].languages[LangAbbr] !== undefined && data.result.countries[country].languages[LangAbbr] !== undefined ) {
                            
pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: languages :: "+LangAbbr+" :: "+jsonData[country].languages[LangAbbr]+" | DATA  :: :: "+data.result.countries[country].name.common+" :: languages :: "+LangAbbr+" :: "+data.result.countries[country].languages[LangAbbr]+" ", function () {
pm.expect(jsonData[country].languages[LangAbbr]).to.be.a("string").and.not.empty;
pm.expect(jsonData[country].languages[LangAbbr]).to.deep.equal(data.result.countries[country].languages[LangAbbr]);
pm.expect(jsonData[country].languages[LangAbbr]).to.be.oneOf([data.result.countries[country].languages[LangAbbr]]);
});


                            } else {
                            var HEY_SENTENCE = "NO LANGUAGES DEFINED";
                            console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
                            }//EOI
                    }//EOF

for (var LangAbbr in jsonData[country].translations){        
                    if (jsonData[country].translations[LangAbbr] !== '' && data.result.countries[country].translations[LangAbbr] !== '' ) {
                    

                    pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: translations :: "+LangAbbr+" :: "+jsonData[country].translations[LangAbbr]+" | DATA  :: :: "+data.result.countries[country].name.common+" :: translations :: "+LangAbbr+" :: "+data.result.countries[country].translations[LangAbbr]+" ", function () {
pm.expect(jsonData[country].translations[LangAbbr]).to.be.a("string").and.not.empty;
pm.expect(jsonData[country].translations[LangAbbr]).to.deep.equal(data.result.countries[country].translations[LangAbbr]);
pm.expect(jsonData[country].translations[LangAbbr]).to.be.oneOf([data.result.countries[country].translations[LangAbbr]]);
});
                    } else {
                    var HEY_SENTENCE = "NO TRANSLATIONS DEFINED";
                    console.log (''+jsonData[country].name.common+' :: '+HEY_SENTENCE+'');
                    }//EOI
              }//EOF


          for ($i=0;$i<jsonData[country].latlng.length;$i++) {
          

                  pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: latlng["+$i+"] :: "+jsonData[country].latlng[$i]+" | DATA :: "+data.result.countries[country].name.common+" :: latlng["+$i+"] :: "+data.result.countries[country].latlng[$i]+" ", function () {
                
                pm.expect(jsonData[country].latlng[$i]).to.be.a('number').and.not.to.be.null;
                pm.expect((parseInt(jsonData[country].latlng[$i], 10))).to.be.a('number').and.not.to.be.null;
                pm.expect(jsonData[country].latlng[$i]).to.deep.equal(data.result.countries[country].latlng[$i]);
                pm.expect(jsonData[country].latlng[$i]).to.be.oneOf([data.result.countries[country].latlng[$i]]);
                pm.expect((isNaN(parseInt(data.result.countries[country].latlng[$i], 10)))).to.be.false;
                pm.expect((typeof(jsonData[country].latlng[$i]))).to.deep.equal('number');
      });

        }

if (jsonData[country].demonym !== '' && data.result.countries[country].demonym  !== '' ) {

              pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: demonym :: "+jsonData[country].demonym+" | DATA  :: "+data.result.countries[country].name.common+" ::  demonym :: "+data.result.countries[country].demonym+" ", function () {
            pm.expect(jsonData[country].demonym).to.be.a("string").and.not.empty;
            pm.expect(jsonData[country].demonym).to.deep.equal(data.result.countries[country].demonym);
            pm.expect(jsonData[country].demonym).to.be.oneOf([data.result.countries[country].demonym]);
            });



              } else {
                var hey_sentence = "NO DEMONYM DEFINED, MUST BE MARS, Mister Musk";
                console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
              }//EOI

              if ((jsonData[country].borders.length !== 0) && (data.result.countries[country].borders.length !== 0) ) {

                  for ($i=0;$i<jsonData[country].borders.length;$i++){

                    pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: borders["+$i+"] :: "+jsonData[country].borders[$i]+" | DATA  :: "+data.result.countries[country].name.common+" ::  borders["+$i+"] :: "+data.result.countries[country].borders[$i]+" ", function () {
                                pm.expect(jsonData[country].borders[$i]).to.be.a("string").and.not.empty;
                                pm.expect(jsonData[country].borders[$i]).to.have.lengthOf(3);
                                pm.expect(jsonData[country].borders[$i]).to.deep.equal(data.result.countries[country].borders[$i]);
                                pm.expect(jsonData[country].borders[$i]).to.be.oneOf([data.result.countries[country].borders[$i]]);
            });

                  }

        } else {

                      var hey_sentence = "NO BORDERS 1 AROUND, THIS AN ISLAND, MUST BE FOR YOU, Mister Trump";
                      console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
        }//EOI

        if (jsonData[country].area !== '' || data.result.countries[country].area !== '' ) {
                              
                            
                               pm.test("V2 GENERAL :: API :: "+jsonData[country].name.common+" :: area :: "+jsonData[country].area+" | DATA :: "+data.result.countries[country].name.common+" :: area :: "+data.result.countries[country].area+"  ", function () {
                
                pm.expect(jsonData[country].area).to.be.a('string').and.not.to.be.null;
                pm.expect((parseInt(jsonData[country].area, 10))).to.be.a('number').and.not.to.be.null;
                pm.expect(typeof(parseInt(jsonData[country].area, 10))).to.deep.equal('number');
                pm.expect(jsonData[country].area).to.deep.equal(data.result.countries[country].area);
                pm.expect(jsonData[country].area).to.be.oneOf([data.result.countries[country].area]);              
                pm.expect((isNaN(parseInt(jsonData[country].area, 10)))).to.be.false;
                pm.expect((typeof(jsonData[country].area))).to.deep.equal('string');
      });

                          } else {

                            var hey_sentence = "NO AREA";
                            console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');

                          }//EOI
         
/* == // COUNTRIES =================================================================================================== */

}//EOL country

/* == // DATA */


