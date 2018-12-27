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
  | XX      | CountryName | FlagUrl                             |

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


  Examples: Top-level domains
  | guid      |  
  | 17098242  |

# 06_testing_get_the_country_borders
Feature: Flagapi Searching by countries by borders
  As a user, I want to search in Flagapi, so that I can find the area for each country.

  Scenario: Get the country by area
    Given I have started Flagapi
    When I send and accept JSON
    And I send a GET request to "/api/v2/area/" with the value "<guid>"
    Then the response status should be "200"
    And the JSON response should contain the field "area"
    And the JSON response should have "$..area" with the value "<guid>"

  Examples: Top-level domains
  | guid      |  
  | 17098242  |




