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
  "duration": 6572544515,
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
  "duration": 213515704,
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
  "duration": 82846702,
  "status": "passed"
});
formatter.match({
  "location": "Tourism.I_click_sign_in_button()"
});
formatter.result({
  "duration": 1200546589,
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
  "duration": 53988916,
  "status": "passed"
});
formatter.after({
  "duration": 750004782,
  "status": "passed"
});
formatter.before({
  "duration": 5804174246,
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
  "duration": 162425816,
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
  "duration": 92569223,
  "status": "passed"
});
formatter.match({
  "location": "Tourism.I_click_sign_in_button()"
});
formatter.result({
  "duration": 3220608851,
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
  "duration": 55716950,
  "status": "passed"
});
formatter.after({
  "duration": 712694841,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Register a new user in the site",
  "description": "",
  "id": "curso-de-automation;register-a-new-user-in-the-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "click the REGISTER button",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter a firstname \u003cfirstname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter a lastname \u003clastname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter a phone \u003cphone\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter a email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter a adress1 \u003cadress1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter a adress2 \u003cadress2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a city \u003ccity\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter a state \u003cstate\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter a postalCode \u003cpostalCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter a country \u003ccountry\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter a user \u003cuser\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter a password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter a cPassword \u003ccPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click SUBMIT button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "register result must be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "curso-de-automation;register-a-new-user-in-the-site;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "phone",
        "email",
        "adress1",
        "adress2",
        "city",
        "state",
        "postalCode",
        "country",
        "user",
        "password",
        "cPassword",
        "result"
      ],
      "line": 36,
      "id": "curso-de-automation;register-a-new-user-in-the-site;;1"
    },
    {
      "cells": [
        "carlos",
        "perez",
        "42289758",
        "jg@gmail.com",
        "Abalbin1",
        "balbin2",
        "BsAs",
        "BsAs",
        "1888",
        "ARGENTINA",
        "pepe",
        "peperoni",
        "peperoni",
        "succes"
      ],
      "line": 37,
      "id": "curso-de-automation;register-a-new-user-in-the-site;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5035252536,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Register a new user in the site",
  "description": "",
  "id": "curso-de-automation;register-a-new-user-in-the-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "click the REGISTER button",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter a firstname carlos",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter a lastname perez",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter a phone 42289758",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter a email jg@gmail.com",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter a adress1 Abalbin1",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter a adress2 balbin2",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a city BsAs",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter a state BsAs",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter a postalCode 1888",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter a country ARGENTINA",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter a user pepe",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter a password peperoni",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter a cPassword peperoni",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click SUBMIT button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "register result must be succes",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Register.click_the_REGISTER_button()"
});
formatter.result({
  "duration": 921071231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carlos",
      "offset": 20
    }
  ],
  "location": "Register.i_enter_a_firstname(String)"
});
formatter.result({
  "duration": 200257339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "perez",
      "offset": 19
    }
  ],
  "location": "Register.i_enter_a_lastname(String)"
});
formatter.result({
  "duration": 148438262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "42289758",
      "offset": 16
    }
  ],
  "location": "Register.i_enter_a_phone(String)"
});
formatter.result({
  "duration": 210708582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jg@gmail.com",
      "offset": 16
    }
  ],
  "location": "Register.i_enter_a_email(String)"
});
formatter.result({
  "duration": 198673464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "Register.i_enter_a_adress_Abalbin(int,int)"
});
formatter.result({
  "duration": 1936107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Register.i_enter_a_adress_balbin(int,int)"
});
formatter.result({
  "duration": 200609,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_city_BsAs()"
});
formatter.result({
  "duration": 61583,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_state_BsAs()"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1888",
      "offset": 21
    }
  ],
  "location": "Register.i_enter_a_postalCode(int)"
});
formatter.result({
  "duration": 171684,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_country_ARGENTINA()"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_user_pepe()"
});
formatter.result({
  "duration": 55984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peperoni",
      "offset": 19
    }
  ],
  "location": "Tourism.I_enter_a_password(String)"
});
formatter.result({
  "duration": 139071704,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_cPassword_peperoni()"
});
formatter.result({
  "duration": 48519,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_SUBMIT_button()"
});
formatter.result({
  "duration": 38722,
  "status": "passed"
});
formatter.match({
  "location": "Register.register_result_must_be_succes()"
});
formatter.result({
  "duration": 28459,
  "status": "passed"
});
formatter.after({
  "duration": 776782303,
  "status": "passed"
});
});