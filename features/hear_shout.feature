Feature: Hear Shout

  Shouts have a range of approximately 1000m

  Scenario Outline: only hear in-range shouts
    Given Lucy is at 0, 0
    And Sean is at <Seans-location>
    When Sean shouts
    Then Lucy should hear <what-Lucy-hears>

    Examples: some simple examples
      | Seans-location  | what-Lucy-hears |
      | 0, 900          | Sean            |
      | 800, 800        | nothing         |

  Scenario: Multiple shouters
    Given Lucy is at 0, 0
    And Sean is at 0, 500
    And Oscar is at 1100, 0
    When Sean shouts
    And Oscar shouts
    Then Lucy should not hear Oscar
    But Lucy should hear Sean

  Scenario: Shouter does not hear their shout
    When Lucy shouts
    Then she should not hear herself