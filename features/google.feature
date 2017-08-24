Feature: Google Title
  @smoke
  Scenario: Search hotels with an invaild city
    Given As a google user I open google
    When I search google with "protractor"
    Then I should see page title "protractor - Google Search"