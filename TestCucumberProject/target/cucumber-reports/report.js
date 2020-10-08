$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive scenario",
  "description": "  Given: User enters htts://www.amazon.com and clicks login button\n  When: User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" keywords\n  And: User clicks \"Enter\" button\n  Then: User enters to his private page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "MrSqueeze",
        "whatever"
      ]
    },
    {
      "cells": [
        "Peace",
        "forever"
      ]
    },
    {
      "cells": [
        "War",
        "never"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive scenario",
  "description": "  Given: User enters htts://www.amazon.com and clicks login button\n  When: User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" keywords\n  And: User clicks \"Enter\" button\n  Then: User enters to his private page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Positive scenario",
  "description": "  Given: User enters htts://www.amazon.com and clicks login button\n  When: User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" keywords\n  And: User clicks \"Enter\" button\n  Then: User enters to his private page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Positive scenario",
  "description": "  Given: User enters htts://www.amazon.com and clicks login button\n  When: User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" keywords\n  And: User clicks \"Enter\" button\n  Then: User enters to his private page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
});