#!/bin/bash


# #### USAGE

# Goes to your test directory in the console
# cd /path-to-your-test/003_flagapi_v2_capital_check_all/

# Launch the test in the console
# sh newman_flagapi_v2_capital_check_all.sh






### CONFIG FOR MEZZO ####
### --- POSTMAN_COLLECTION --- ###
PATH_POSTMAN_COLLECTION="$PWD/coll/"
POSTMAN_COLLECTION="003_flagapi_v2_capital_check_all.postman_collection.json"; 


### --- POSTMAN_SAMPLE_DATA --- ###
PATH_POSTMAN_SAMPLE_DATA="$PWD/dat/"
POSTMAN_SAMPLE_DATA="dat_flagapi_v2_capital_check_all.postman_sample_data.json";

### --- POSTMAN_ENVIRONMENT --- ###
PATH_POSTMAN_ENVIRONMENT="$PWD/env/"
POSTMAN_ENVIRONMENT="env_flagapi_v2_capital_check_all.postman_environment.json";


### ---  FILENAME FOR REPORT --- ###
PATH_FILENAME_FOR_REPORT="$PWD/reports/"
FILENAME_FOR_REPORT="report_flagapi_v2_capital_check_all_$(date +%Y_%m_%d_%H_%M_%S).html"




### ---  SCRIPT --- ###

### CONFIG ####
echo "\n"
echo "\033[1;33m ### START ### \033[0m"
echo "\n"

#SHOW
echo "\033[1;33m ### NEWMAN_ENVIRONMENT ### \033[0m"
echo "\n"

echo "\033[1;31m POSTMAN_COLLECTION :: $POSTMAN_COLLECTION \033[0m"
echo "\033[1;31m POSTMAN_ENVIRONMENT :: $POSTMAN_ENVIRONMENT \033[0m"
echo "\n"

#SHOW
echo "\033[1;33m ### COMMAND OUTPUT ### \033[0m"
echo "\n"

echo "newman run $PATH_POSTMAN_COLLECTION$POSTMAN_COLLECTION -e $PATH_POSTMAN_ENVIRONMENT$POSTMAN_ENVIRONMENT -d $PATH_POSTMAN_SAMPLE_DATA$POSTMAN_SAMPLE_DATA --reporters html,cli --reporter-html-export $PATH_FILENAME_FOR_REPORT$FILENAME_FOR_REPORT"
echo "\n"

echo "\n"
echo "\033[1;33m ### LAUNCHING NEWMAN ### \033[0m"
echo "\n\n"

### ---  EXECUTE --- ###

#EXECUTE WITH REPORT
newman run $PATH_POSTMAN_COLLECTION$POSTMAN_COLLECTION -e $PATH_POSTMAN_ENVIRONMENT$POSTMAN_ENVIRONMENT -d $PATH_POSTMAN_SAMPLE_DATA$POSTMAN_SAMPLE_DATA --reporters html,cli --reporter-html-export $PATH_FILENAME_FOR_REPORT$FILENAME_FOR_REPORT

### ---  DONE --- ###
echo "\033[1;33m ### END ### \033[0m"
echo "\n\n"
echo "\033[1;33m ### IT IS DONE !!! ### \033[0m"
echo "\n\n"

exit 0;
