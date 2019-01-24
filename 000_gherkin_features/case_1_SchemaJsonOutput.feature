# case_1_SchemaJsonOutput.feature
Feature: Flagapi loading JSON schema from an environment variable
  As QA API Tester
  I want to smartly test my API, Flagapi, with the help of the JSON schema method

  Scenario: Create an environment variable "SchemaJsonOutput" for testing
    Given I want to create an environment variable named "SchemaJsonOutput"
    And load it like a regular environment variable
    Then I can test My API Flagapi output against this JSON schema's variable "SchemaJsonOutput"