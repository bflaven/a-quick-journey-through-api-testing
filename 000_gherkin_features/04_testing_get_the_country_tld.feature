# 04_testing_get_the_country_tld
Feature: Flagapi Searching by countries by tld
  As a user, I want to search in Flagapi, so that I can find the Top-level domain (tld) for each country.

  Scenario: Get the country by tld
    Given I have started Flagapi
    When I send and accept JSON
    And I send a GET request to "/api/v2/tld/" with the value "<guid>"
    Then the response status should be "200"
    And the JSON response should contain the field "tld"
    And the JSON response should have "$..tld" as a string and not empty
    And the JSON response should have "$..tld" with a length of 3
    And the JSON response should have "$..tld" with the value "<guid>"

  Examples: Top-level domains
  | guid |  
  | .ar  |
  | .bo  |