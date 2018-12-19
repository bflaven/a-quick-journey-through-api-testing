# case_3_SchemaJsonOutput.feature
Feature: Flagapi loading JSON schema from a global variable in an external file
  As QA API Tester
  I want to smartly test my API, Flagapi, with the help of the JSON schema method

  Scenario: Create an global variable "SchemaJsonOutput" and an external ressource named "SchemaJsonOutput.json"
    Given I want to create an global variable named "SchemaJsonOutput" and an external ressource for the JSON schema named "SchemaJsonOutput.json" in a directory named "schema"
    And load it like a regular global variable
    And the JSON schema's file "SchemaJsonOutput.json" will be served by the node application itself at http://localhost:3000/schema/SchemaJsonOutput.json
    Then I can test My API Flagapi output against this JSON schema's variable "SchemaJsonOutput"