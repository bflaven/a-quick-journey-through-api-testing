# 05_testing_get_the_country_area
Feature: Flagapi Searching by countries by area
  As a user, I want to search in Flagapi, so that I can find the area for each country.

  Scenario: Get the country by area
  Given I have started Flagapi
    When I send and accept JSON
    And I send a GET request to "/api/v2/area/" with the value "<guid>"
    Then the response status should be "200"
    And the JSON response should contain the field "area"
    And the JSON response should have "$..area" as a string and not empty
    And the JSON response should have "$..area" with the value "<guid>"


  Examples: Area
  | guid      |  
  | 17098242  |


