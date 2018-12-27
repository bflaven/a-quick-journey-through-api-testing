# 06_testing_get_the_country_borders
Feature: Flagapi Searching by countries by borders
  As a user, I want to search in Flagapi, so that I can find the area for each country.

  Scenario: Get the country by area
    Given I have started Flagapi
    When I send and accept JSON
    And I send a GET request to "/api/v2/area/" with the value "<guid>"
    Then the response status should be "200"
    And the JSON response should contain the field "borders"
    And the JSON response should have "$..borders" with the value "<guid>"

  Examples: Borders
  | guid      | borders                                           | 
  | RU        | ["AZE", "BLR", "CHN", "EST", "FIN", "GEO", "KAZ", |
              |  "PRK", "LVA", "LTU", "MNG", "NOR", "POL", "UKR"] | 

  

