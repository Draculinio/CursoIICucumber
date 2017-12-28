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
  "duration": 13757797261,
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
  "duration": 9279935357,
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
  "duration": 73311260,
  "status": "passed"
});
formatter.match({
  "location": "Tourism.I_click_sign_in_button()"
});
formatter.result({
  "duration": 1460900677,
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
  "duration": 233804235,
  "status": "passed"
});
formatter.after({
  "duration": 1083789563,
  "status": "passed"
});
formatter.before({
  "duration": 6421169903,
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
  "duration": 105981543,
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
  "duration": 83193802,
  "status": "passed"
});
formatter.match({
  "location": "Tourism.I_click_sign_in_button()"
});
formatter.result({
  "duration": 3182557125,
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
  "duration": 36397871,
  "status": "passed"
});
formatter.after({
  "duration": 692217831,
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
  "duration": 6602032585,
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
  "duration": 718879652,
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
  "duration": 165877684,
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
  "duration": 89658531,
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
  "duration": 104485376,
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
  "duration": 126856505,
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
  "duration": 1042699,
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
  "duration": 86309,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_city_BsAs()"
});
formatter.result({
  "duration": 46186,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_state_BsAs()"
});
formatter.result({
  "duration": 36389,
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
  "duration": 118965,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_country_ARGENTINA()"
});
formatter.result({
  "duration": 36856,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_user_pepe()"
});
formatter.result({
  "duration": 23793,
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
  "duration": 94434883,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_enter_a_cPassword_peperoni()"
});
formatter.result({
  "duration": 41521,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_SUBMIT_button()"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "location": "Register.register_result_must_be_succes()"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.after({
  "duration": 799334446,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Reserve a flight",
  "description": "",
  "id": "curso-de-automation;reserve-a-flight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I log in with \u003cuser\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I select Flight type \u003cflight_type\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select quantity of passengers \u003cquantity_passengers\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select departure from: \u003cdeparturing\u003e on date \u003cdeparture_month\u003e, \u003cdeparture_day\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select arrival to: \u003carriving\u003e returning on date \u003carrival_month\u003e, \u003carrival_day\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select Service class \u003cservice_class\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select airline \u003cairline\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "curso-de-automation;reserve-a-flight;",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "flight_type",
        "quantity_passengers",
        "departing",
        "departure_month",
        "departure_day",
        "arriving",
        "arrival_month",
        "arrival_day",
        "service_class",
        "airline"
      ],
      "line": 50,
      "id": "curso-de-automation;reserve-a-flight;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury",
        "One Way",
        "2",
        "Portland",
        "May",
        "9",
        "Frankfurt",
        "February",
        "28",
        "First class",
        "Unified Airlines"
      ],
      "line": 51,
      "id": "curso-de-automation;reserve-a-flight;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6976832035,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Reserve a flight",
  "description": "",
  "id": "curso-de-automation;reserve-a-flight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "I log in with mercury and mercury",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I select Flight type One Way",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select quantity of passengers 2",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select departure from: \u003cdeparturing\u003e on date May, 9",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select arrival to: Frankfurt returning on date February, 28",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select Service class First class",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select airline Unified Airlines",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 881301735,
  "status": "passed"
});
});