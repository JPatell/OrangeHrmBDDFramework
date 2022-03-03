$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Jay/QA course/Selenium_WorkSpace/OrangeHrmBDDFramework/src/main/java/Features/taggedhooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tagged Hooks",
  "description": "",
  "id": "test-tagged-hooks",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Orange HRM Login Test Scenario",
  "description": "",
  "id": "test-tagged-hooks;orange-hrm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-tagged-hooks;orange-hrm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "email"
      ],
      "line": 14,
      "id": "test-tagged-hooks;orange-hrm-login-test-scenario;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Tom",
        "Peter",
        "tp@abc.com"
      ],
      "line": 15,
      "id": "test-tagged-hooks;orange-hrm-login-test-scenario;;2"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "David",
        "Dsouza",
        "dd@abs.com"
      ],
      "line": 16,
      "id": "test-tagged-hooks;orange-hrm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4623804400,
  "status": "passed"
});
formatter.before({
  "duration": 48100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Orange HRM Login Test Scenario",
  "description": "",
  "id": "test-tagged-hooks;orange-hrm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 950794200,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 5624300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "TaggedHooksStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 43626400,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1396323800,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2103900,
  "status": "passed"
});
formatter.after({
  "duration": 23400,
  "status": "passed"
});
formatter.after({
  "duration": 511872700,
  "status": "passed"
});
formatter.before({
  "duration": 4243093900,
  "status": "passed"
});
formatter.before({
  "duration": 49700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Orange HRM Login Test Scenario",
  "description": "",
  "id": "test-tagged-hooks;orange-hrm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 752647400,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 2104300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "TaggedHooksStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 34274800,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1387491500,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3647100,
  "status": "passed"
});
formatter.after({
  "duration": 19200,
  "status": "passed"
});
formatter.after({
  "duration": 777123100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user moves to candidates page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user moves to new candidate page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "email"
      ],
      "line": 33,
      "id": "test-tagged-hooks;this-is-second-test;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Tom",
        "Peter",
        "tp@abc.com"
      ],
      "line": 34,
      "id": "test-tagged-hooks;this-is-second-test;;2"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "David",
        "Dsouza",
        "dd@abs.com"
      ],
      "line": 35,
      "id": "test-tagged-hooks;this-is-second-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3736695600,
  "status": "passed"
});
formatter.before({
  "duration": 45400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user moves to candidates page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user moves to new candidate page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"tp@abc.com\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 759462100,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 2387300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "TaggedHooksStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 39752000,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1534318700,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 4043400,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_moves_to_candidates_page()"
});
formatter.result({
  "duration": 478807200,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_moves_to_new_candidates_page()"
});
formatter.result({
  "duration": 439847700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "tp@abc.com",
      "offset": 51
    }
  ],
  "location": "TaggedHooksStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 546525900,
  "status": "passed"
});
formatter.after({
  "duration": 42700,
  "status": "passed"
});
formatter.after({
  "duration": 538066900,
  "status": "passed"
});
formatter.before({
  "duration": 4242876300,
  "status": "passed"
});
formatter.before({
  "duration": 23900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user moves to candidates page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user moves to new candidate page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enters contact details \"David\" and \"Dsouza\" and \"dd@abs.com\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 775048600,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 3708200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "TaggedHooksStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 33693200,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1498388200,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2107100,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_moves_to_candidates_page()"
});
formatter.result({
  "duration": 524630200,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_moves_to_new_candidates_page()"
});
formatter.result({
  "duration": 312875600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Dsouza",
      "offset": 41
    },
    {
      "val": "dd@abs.com",
      "offset": 54
    }
  ],
  "location": "TaggedHooksStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 523404700,
  "status": "passed"
});
formatter.after({
  "duration": 31900,
  "status": "passed"
});
formatter.after({
  "duration": 610275100,
  "status": "passed"
});
});