#!/bin/bash


# #### USAGE
# cd /Volumes/old_disk/01_postman_book/gitlab_def/004_folder_countries_api/
# sh folder_countries_api_4.sh


### --- POSTMAN_COLLECTION --- ###
PATH_POSTMAN_COLLECTION="$PWD/coll/"
POSTMAN_COLLECTION="0000_folder_countries_api.postman_collection.json"

### --- POSTMAN_COLLECTION_FOLDERS --- ###
declare -a POSTMAN_COLLECTION_FOLDERS=(
	"001_flagadi_v2_flag"
	"002_flagapi_v2_get_all"
	"003_flagadi_v2_capital_check_all"
	)


### --- POSTMAN_SAMPLE_DATA --- ###
PATH_POSTMAN_SAMPLE_DATA="$PWD/dat/"
declare -a POSTMAN_SAMPLE_DATA=(
	"dat_flagadi_v2_flag.postman_sample_data.json"
	"dat_flagapi_v2_get_all.postman_sample_data.json"
	"dat_flagapi_v2_capital_check_all.postman_sample_data.json"
	)


### --- POSTMAN_ENVIRONMENT --- ###
PATH_POSTMAN_ENVIRONMENT="$PWD/env/"
POSTMAN_ENVIRONMENT="env_folder_countries_api.postman_environment.json";


### ---  FILENAME FOR REPORT --- ###
PATH_FILENAME_FOR_REPORT="$PWD/reports/"
#FILENAME_FOR_REPORT="report_folder_countries_api_$(date +%Y_%m_%d_%H_%M_%S).html"
declare -a FILENAME_FOR_REPORT=(
	"report_folder_countries_api_001_flagadi_v2_flag_$(date +%Y_%m_%d_%H_%M_%S).html"
	"report_folder_countries_api_002_flagapi_v2_get_all_$(date +%Y_%m_%d_%H_%M_%S).html"
	"report_folder_countries_api_003_flagadi_v2_capital_check_all_$(date +%Y_%m_%d_%H_%M_%S).html"
	)


# get length of an POSTMAN_COLLECTION_FOLDERS_length
POSTMAN_COLLECTION_FOLDERS_length=${#POSTMAN_COLLECTION_FOLDERS[@]}

# use for loop to read all values and indexes
for (( i=0; i<${POSTMAN_COLLECTION_FOLDERS_length}; i++ ));
do
	echo "\n"
	echo "\033[1;33m ### LAUNCHING NEWMAN [$i] ### \033[0m"
	echo "\n"
	echo "newman run $PATH_POSTMAN_COLLECTION$POSTMAN_COLLECTION --folder ${POSTMAN_COLLECTION_FOLDERS[$i]} -e $PATH_POSTMAN_ENVIRONMENT$POSTMAN_ENVIRONMENT -d $PATH_POSTMAN_SAMPLE_DATA${POSTMAN_SAMPLE_DATA[$i]}  --reporters html,cli $PATH_FILENAME_FOR_REPORT${FILENAME_FOR_REPORT[$i]}"
	echo "\n"

### ---  EXECUTE --- ###
newman run $PATH_POSTMAN_COLLECTION$POSTMAN_COLLECTION --folder ${POSTMAN_COLLECTION_FOLDERS[$i]} -e $PATH_POSTMAN_ENVIRONMENT$POSTMAN_ENVIRONMENT -d $PATH_POSTMAN_SAMPLE_DATA${POSTMAN_SAMPLE_DATA[$i]}  --reporters html,cli $PATH_FILENAME_FOR_REPORT${FILENAME_FOR_REPORT[$i]}

#END
done

### ---  DONE --- ###

echo "\033[1;33m ### IT IS DONE !!! ### \033[0m"
echo "\n\n"
exit 0;

