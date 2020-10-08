Feature: Login functionality

  @smoke
  Scenario Outline: Positive scenario
  Given: User enters htts://www.amazon.com and clicks login button
  When: User enters "<username>" and "<password>" keywords
  And: User clicks "Enter" button
  Then: User enters to his private page

    Examples:
      | username  | password |
      | MrSqueeze | whatever |
      | Peace     | forever  |
      | War       | never    |