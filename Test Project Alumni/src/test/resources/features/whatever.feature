Feature: Whatever happens to test project alumni

@whatever
 Scenario Outline: Simple test
    Given User is on the https://www.rsb.ru/ and clicks Internet-Bank option
    When User enters "<username>" and "<password>"
    Then Authentication is failed

   Examples:
    | username  | password |
    | MrSqueeze | whatever |
    | Peace     | forever  |
    | War       | never    |