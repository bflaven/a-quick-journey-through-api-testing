# 02_testing_get_the_country_capital
Feature: Flagapi Searching by countries by capital
  As a user, I want to search in Flagapi, so that I can find the capital for each country.

  Scenario: Get the country by capital
    Given I have started Flagapi
    When I send and accept JSON
    And I send a GET request to "/api/v2/capital/" with the value "<guid>"
    Then the response status should be "200"
    And the JSON response should contain the field "capital"
    And the JSON response should have "$..capital" with the value "<guid>"

  Examples: Capitals
  | guid        |  
  | Kabul       |
  | CapitalName |
  