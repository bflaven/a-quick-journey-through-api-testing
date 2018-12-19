#!/bin/bash


# #### USAGE

# Goes to your test directory in the console
# cd /path-to-your-test/001_flagapi_v2_flag/

# Launch the test in the console
# sh newman_flagadi_v2_flag.sh



### --- POSTMAN_COLLECTION --- ###
PATH_POSTMAN_COLLECTION="$PWD/coll/"
POSTMAN_COLLECTION="001_flagadi_v2_flag.postman_collection.json"; 


### --- POSTMAN_SAMPLE_DATA --- ###
PATH_POSTMAN_SAMPLE_DATA="$PWD/dat/"
POSTMAN_SAMPLE_DATA="dat_flagadi_v2_flag.postman_sample_data.json";

### --- POSTMAN_GLOBALS --- ###
PATH_POSTMAN_GLOBALS="$PWD/env/"
POSTMAN_GLOBALS="globals_flagadi_v2_flag.postman_globals.json";


### --- POSTMAN_ENVIRONMENT --- ###
PATH_POSTMAN_ENVIRONMENT="$PWD/env/"
POSTMAN_ENVIRONMENT="env_flagadi_v2_flag.postman_environment.json";


### ---  FILENAME FOR REPORT --- ###
PATH_FILENAME_FOR_REPORT="$PWD/reports/"
FILENAME_FOR_REPORT="report_flagadi_v2_flag_$(date +%Y_%m_%d_%H_%M_%S).html"




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
# echo "\033[1;31m POSTMAN_GLOBALS :: $POSTMAN_GLOBALS \033[0m"
echo "\n"

### ---  SHOW --- ###
#SHOW THE COMMAND
echo "\033[1;33m ### COMMAND OUTPUT ### \033[0m"
echo "\n"

#SHOW THE COMMAND WITH GLOBALS
# echo "newman run $PATH_POSTMAN_COLLECTION$POSTMAN_COLLECTION -e $PATH_POSTMAN_ENVIRONMENT$POSTMAN_ENVIRONMENT -d $PATH_POSTMAN_SAMPLE_DATA$POSTMAN_SAMPLE_DATA -g $PATH_POSTMAN_GLOBALS$POSTMAN_GLOBALS --reporters html,cli --reporter-html-export $PATH_FILENAME_FOR_REPORT$FILENAME_FOR_REPORT"

#SHOW THE COMMAND WITHOUT GLOBALS
echo "newman run $PATH_POSTMAN_COLLECTION$POSTMAN_COLLECTION -e $PATH_POSTMAN_ENVIRONMENT$POSTMAN_ENVIRONMENT -d $PATH_POSTMAN_SAMPLE_DATA$POSTMAN_SAMPLE_DATA --reporters html,cli --reporter-html-export $PATH_FILENAME_FOR_REPORT$FILENAME_FOR_REPORT"


echo "\n"

echo "\n"
echo "\033[1;33m ### LAUNCHING NEWMAN ### \033[0m"
echo "\n\n"

### ---  EXECUTE --- ###
#EXECUTE THE COMMAND WITH GLOBALS
# newman run $PATH_POSTMAN_COLLECTION$POSTMAN_COLLECTION -e $PATH_POSTMAN_ENVIRONMENT$POSTMAN_ENVIRONMENT -d $PATH_POSTMAN_SAMPLE_DATA$POSTMAN_SAMPLE_DATA -g $PATH_POSTMAN_GLOBALS$POSTMAN_GLOBALS --reporters html,cli --reporter-html-export $PATH_FILENAME_FOR_REPORT$FILENAME_FOR_REPORT

#EXECUTE THE COMMAND WITHOUT GLOBALS
newman run $PATH_POSTMAN_COLLECTION$POSTMAN_COLLECTION -e $PATH_POSTMAN_ENVIRONMENT$POSTMAN_ENVIRONMENT -d $PATH_POSTMAN_SAMPLE_DATA$POSTMAN_SAMPLE_DATA --reporters html,cli --reporter-html-export $PATH_FILENAME_FOR_REPORT$FILENAME_FOR_REPORT

### ---  DONE --- ###
echo "\033[1;33m ### END ### \033[0m"
echo "\n\n"
echo "\033[1;33m ### IT IS DONE !!! ### \033[0m"
echo "\n\n"

exit 0;
