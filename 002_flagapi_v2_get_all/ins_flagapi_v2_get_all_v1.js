/**
 * Postman flagapi_v2_get_all
 * Script file : ins_flagapi_v2_get_all_v1.js
 * Version : 1.0
 * Description: Test the countries list in flagapi v2 API
 * Collection : 002_flagapi_v2_get_all.postman_collection.json
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

        /* HTTP TESTS  */
        tests["HTTP REQUEST :: "+api_get_all+" :: Response time is less than 1200ms"] = responseTime < 1200;
        tests["HTTP REQUEST :: "+api_get_all+" :: Status code is 200"] = responseCode.code === 200;




      /* GENERAL STRUCTURE */
        tests["GENERAL STRUCTURE :: "+api_get_all+"  :: jsonData is object and not null"] = (typeof(jsonData) === "object") && ((jsonData) !== null)

                

        for (var i=0; i<data.requirements.general_required_fields.length; i++) {
                tests["GENERAL STRUCTURE  :: "+api_get_all+" :: "+data.requirements.general_required_fields[i].field+" :: Field (required) \""+data.requirements.general_required_fields[i].field+"\" :: PRESENT"] = responseBody.has(""+data.requirements.general_required_fields[i].field+"");
            }

       
/* == // GENERAL =================================================================================================== */

/* == // STRUCTURE AND HTTP */

/* == DATA */

    // country
    for (var country in jsonData) {

/* == COUNTRIES =================================================================================================== */
      
      tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: cca2 :: "+jsonData[country].cca2+" | DATA :: "+data.result.countries[country].name.common+" :: cca2 :: "+data.result.countries[country].cca2+" "] = jsonData[country].cca2.indexOf(data.result.countries[country].cca2) !== -1;

      tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: ccn3 :: "+jsonData[country].ccn3+" | DATA :: "+data.result.countries[country].name.common+" :: ccn3 :: "+data.result.countries[country].ccn3+" "] = jsonData[country].ccn3.indexOf(data.result.countries[country].ccn3) !== -1;

      tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: cca3 :: "+jsonData[country].cca3+" | DATA :: "+data.result.countries[country].name.common+" :: cca3 :: "+data.result.countries[country].cca3+" "] = jsonData[country].cca3.indexOf(data.result.countries[country].cca3) !== -1;

    
      for ($i=0;$i<jsonData[country].currency.length;$i++) {
              tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: currency["+$i+"] :: "+jsonData[country].currency[$i]+" | DATA :: "+data.result.countries[country].name.common+" :: currency["+$i+"] :: "+data.result.countries[country].currency[0]+" "] = jsonData[country].currency[$i].indexOf(data.result.countries[country].currency[$i]) !== -1;
    }//EOL


          for ($i=0;$i<jsonData[country].flag.length;$i++) {

            tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: flag[0] :: "+jsonData[country].flag[$i]+" | DATA :: "+data.result.countries[country].name.common+" :: flag[0] :: "+data.result.countries[country].flag[$i]+" "] = jsonData[country].flag[$i].indexOf(data.result.countries[country].flag[$i]) !== -1;


            }//EOL

       for ($i=0;$i<jsonData[country].callingCode.length;$i++) {

              tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: callingCode["+$i+"] :: "+jsonData[country].callingCode[$i]+" | DATA :: "+data.result.countries[country].name.common+" :: callingCode["+$i+"] :: "+data.result.countries[country].callingCode[$i]+" "] = jsonData[country].callingCode[$i].indexOf(data.result.countries[country].callingCode[$i]) !== -1

            }//EOL


       tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: capital :: "+jsonData[country].capital+" | DATA  :: "+data.result.countries[country].name.common+" ::  capital :: "+data.result.countries[country].capital+" "] = jsonData[country].capital.indexOf(data.result.countries[country].capital) !== -1

        for ($i=0;$i<jsonData[country].altSpellings.length;$i++) {

       tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: altSpellings["+$i+"] :: "+jsonData[country].altSpellings[$i]+" | DATA  :: "+data.result.countries[country].name.common+" ::  altSpellings["+$i+"] :: "+data.result.countries[country].altSpellings[$i]+" "] = jsonData[country].altSpellings[$i].indexOf(data.result.countries[country].altSpellings[$i]) !== -1

       }

        tests["GENERAL :: API :: "+jsonData[country].name.common+" :: relevance :: "+jsonData[country].relevance+" | DATA :: "+data.result.countries[country].name.common+" :: relevance :: "+data.result.countries[country].relevance+" "] = !isNaN(parseInt(data.result.countries[country].relevance, 10)) && data.result.countries[country].relevance === jsonData[country].relevance;


        tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: region :: "+jsonData[country].region+" | DATA  :: "+data.result.countries[country].name.common+" ::  region :: "+data.result.countries[country].region+" "] = jsonData[country].region.indexOf(data.result.countries[country].region) !== -1

        tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: subregion :: "+jsonData[country].subregion+" | DATA  :: "+data.result.countries[country].name.common+" ::  subregion :: "+data.result.countries[country].subregion+" "] = jsonData[country].subregion.indexOf(data.result.countries[country].subregion) !== -1

      tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: nativeLanguage :: "+jsonData[country].nativeLanguage+" | DATA  :: "+data.result.countries[country].name.common+" ::  nativeLanguage :: "+data.result.countries[country].nativeLanguage+" "] = jsonData[country].nativeLanguage.indexOf(data.result.countries[country].nativeLanguage) !== -1
        
                $counter=0;
                for (var LangAbbr in jsonData[country].languages){
                $counter++;
                tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: languages["+$counter+"] :: "+LangAbbr+" :: "+jsonData[country].languages[LangAbbr]+" | DATA  :: :: "+data.result.countries[country].name.common+" :: languages["+$counter+"] :: "+LangAbbr+" :: "+data.result.countries[country].languages[LangAbbr]+" "] = jsonData[country].languages[LangAbbr].indexOf(data.result.countries[country].languages[LangAbbr]) !== -1;
                }//EOF

                $counter=0;
                for (var TransLangAbbr in jsonData[country].translations){   
                $counter++;
                tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: translations["+$counter+"] :: "+TransLangAbbr+" :: "+jsonData[country].translations[TransLangAbbr]+" | DATA  :: :: "+data.result.countries[country].name.common+" :: translations["+$counter+"] :: "+TransLangAbbr+" :: "+data.result.countries[country].translations[TransLangAbbr]+" "] = jsonData[country].translations[TransLangAbbr].indexOf(data.result.countries[country].translations[TransLangAbbr]) !== -1
                }//EOF

            for ($i=0;$i<jsonData[country].latlng.length;$i++) {
                                      tests["GENERAL :: API :: "+jsonData[country].name.common+" :: latlng["+$i+"] (latitude) :: "+jsonData[country].latlng[$i]+" | DATA :: "+data.result.countries[country].name.common+" :: latlng["+$i+"] (latitude) :: "+data.result.countries[country].latlng[$i]+" "] = !isNaN(parseInt(data.result.countries[country].latlng[$i], 10)) && data.result.countries[country].latlng[$i] === jsonData[country].latlng[$i];
                      }//EOL

        tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: demonym :: "+jsonData[country].demonym+" | DATA  :: "+data.result.countries[country].name.common+" ::  demonym :: "+data.result.countries[country].demonym+" "] = jsonData[country].demonym.indexOf(data.result.countries[country].demonym) !== -1

if ((jsonData[country].borders.length !== 0) || (data.result.countries[country].borders.length !== 0) ) {
          for ($i=0;$i<jsonData[country].borders.length;$i++){
                  tests[" GENERAL :: API :: "+jsonData[country].name.common+" :: borders["+$i+"] :: "+jsonData[country].borders[$i]+" | DATA  :: "+data.result.countries[country].name.common+" ::  borders["+$i+"] :: "+data.result.countries[country].borders[$i]+" "] = jsonData[country].borders[$i].indexOf(data.result.countries[country].borders[$i]) !== -1
          }
      } else {
              var hey_sentence = "NO BORDERS AROUND, MUST BE FOR YOU, Mister Trump";
              console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');
      }//EOI

                          if ((jsonData[country].area.length !== 0) && (data.result.countries[country].area.length !== 0)) {
                          // if (jsonData[country].area !== undefined || data.result.countries[country].area !== undefined ) {
                          // if (jsonData[country].area !== null || data.result.countries[country].area !== null ) {
                              tests["GENERAL :: API :: "+jsonData[country].name.common+" :: area :: "+jsonData[country].area+" | DATA :: "+data.result.countries[country].name.common+" :: area :: "+data.result.countries[country].area+" "] = !isNaN(parseInt(data.result.countries[country].area, 10)) && data.result.countries[country].area === jsonData[country].area;
                          } else {

                            var hey_sentence = "NO AREA";
                            console.log (''+jsonData[country].name.common+' :: '+hey_sentence+'');

                          }//EOI

   /* == // COUNTRIES =================================================================================================== */
}//EOL country

/* == // DATA */



