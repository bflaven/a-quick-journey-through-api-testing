# 03_testing_get_the_country_language
Feature: Flagapi Searching by countries by language
  As a user, I want to search in Flagapi, so that I can find the language for each country.

  Scenario: Get the country by language
    Given I have started Flagapi
    When I send and accept JSON
    And I send a GET request to "/api/v2/language/" with the value "<guid>"
    Then the response status should be "200"
    And the JSON response should contain the field "nativeLanguage"
    And the JSON response should have "$..nativeLanguage" with the value "<guid>"
    And the JSON response should have "$..nativeLanguage" with a length of 3


  Examples: Languages
  | guid |  
  | spa  |
  | hye  |