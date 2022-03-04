Feature: Login

    Try login with valid,invalid,empty
  # The second example has three steps
  @smoke
  Scenario: Login empty
    Given the user open website
    When the user click on login
    Then the user get error message
