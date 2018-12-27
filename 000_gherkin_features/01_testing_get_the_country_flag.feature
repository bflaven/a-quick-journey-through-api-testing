Feature: Testing countries REST API FlagApi

Background:
    * url demoBaseUrl


# 01_testing_get_the_country_flag
Feature: Flagapi Searching by countries by flag
  As a user, I want to search in Flagapi, so that I can find flag for each country.

    Scenario: Get the country by flag
    Given I have started Flagapi
    When I send and accept JSON
    And I send a GET request to "/api/v2/flag/" with the value "<guid>"
    Then the response status should be "200"
    And the JSON response should contain the field "flag"
    And the JSON response should have "$..flag[0]" with the value "<guid>"
    And the JSON response should include "<name>"
    And the JSON response should include "<url>"

  Examples: Flags
  | guid    | name        | url                                 |
  | AF      | Afghanistan | http://localhost:3000/images/af.png |
  | XX      | CountryName | FlagUrl     