$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/tourism.feature");
formatter.feature({
  "line": 1,
  "name": "Curso de automation",
  "description": "",
  "id": "curso-de-automation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Log in to the system",
  "description": "",
  "id": "curso-de-automation;log-in-to-the-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter a username \u003cusername\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click  Sign-In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "login result must be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "curso-de-automation;log-in-to-the-system;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 11,
      "id": "curso-de-automation;log-in-to-the-system;;1"
    },
    {
      "cells": [
        "pepe",
        "pepe",
        "badLogin"
      ],
      "line": 12,
      "id": "curso-de-automation;log-in-to-the-system;;2"
    },
    {
      "cells": [
        "mercury",
        "mercury",
        "goodLogin"
      ],
      "line": 13,
      "id": "curso-de-automation;log-in-to-the-system;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11035909913,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Log in to the system",
  "description": "",
  "id": "curso-de-automation;log-in-to-the-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter a username pepe",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a password pepe",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click  Sign-In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "login result must be badLogin",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pepe",
      "offset": 19
    }
  ],
  "location": "Tourism.I_enter_a_username(String)"
});
formatter.result({
  "duration": 194587760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pepe",
      "offset": 19
    }
  ],
  "location": "Tourism.I_enter_a_password(String)"
});
formatter.result({
  "duration": 72004572,
  "status": "passed"
});
formatter.match({
  "location": "Tourism.I_click_sign_in_button()"
});
formatter.result({
  "duration": 7495954933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "badLogin",
      "offset": 21
    }
  ],
  "location": "LogOn.login_results_must_be(String)"
});
formatter.result({
  "duration": 10100049219,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat pageObjects.ReservationPage.verifyreservationPage(ReservationPage.java:21)\r\n\tat steps.LogOn.login_results_must_be(LogOn.java:29)\r\n\tat ✽.Then login result must be badLogin(src/test/java/features/tourism.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 786429046,
  "status": "passed"
});
formatter.before({
  "duration": 10184772391,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Log in to the system",
  "description": "",
  "id": "curso-de-automation;log-in-to-the-system;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I enter a username mercury",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a password mercury",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click  Sign-In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "login result must be goodLogin",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 19
    }
  ],
  "location": "Tourism.I_enter_a_username(String)"
});
formatter.result({
  "duration": 95356372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 19
    }
  ],
  "location": "Tourism.I_enter_a_password(String)"
});
formatter.result({
  "duration": 81293694,
  "status": "passed"
});
formatter.match({
  "location": "Tourism.I_click_sign_in_button()"
});
formatter.result({
  "duration": 7685805992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "goodLogin",
      "offset": 21
    }
  ],
  "location": "LogOn.login_results_must_be(String)"
});
formatter.result({
  "duration": 36823849,
  "status": "passed"
});
formatter.after({
  "duration": 691879308,
  "status": "passed"
});
});