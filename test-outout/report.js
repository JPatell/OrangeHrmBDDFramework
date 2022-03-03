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
  "comments": [
    {
      "line": 12,
      "value": "#\tExamples:"
    },
    {
      "line": 13,
      "value": "#\t| username | password   |"
    },
    {
      "line": 14,
      "value": "#\t| Admin    | admin123   |"
    },
    {
      "line": 15,
      "value": "#\t| Admin    | admin123   |"
    }
  ],
  "line": 17,
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
      "line": 18,
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
      "line": 19,
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
      "line": 20,
      "id": "test-tagged-hooks;orange-hrm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4672929200,
  "status": "passed"
});
formatter.before({
  "duration": 49600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
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
  "duration": 812497800,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 3548300,
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
  "duration": 42688900,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1374122100,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3305500,
  "status": "passed"
});
formatter.after({
  "duration": 42400,
  "status": "passed"
});
formatter.after({
  "duration": 632116900,
  "status": "passed"
});
formatter.before({
  "duration": 3764768700,
  "status": "passed"
});
formatter.before({
  "duration": 28700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
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
  "duration": 739576000,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 2412900,
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
  "duration": 37725900,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1383354000,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3209300,
  "status": "passed"
});
formatter.after({
  "duration": 18300,
  "status": "passed"
});
formatter.after({
  "duration": 781637000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#| username | password   |"
    },
    {
      "line": 29,
      "value": "#\t| Admin    | admin123   |"
    },
    {
      "line": 30,
      "value": "#\t| Admin    | admin123   |"
    }
  ],
  "line": 31,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user moves to candidates page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user moves to new candidate page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 36,
      "value": "#\t | firstname | lastname | email       |"
    },
    {
      "line": 37,
      "value": "#\t | Tom \t  | Peter       | tp@abc.com  |"
    },
    {
      "line": 38,
      "value": "#\t | David \t  | Dsouza  | dd@abs.com  |"
    }
  ],
  "line": 41,
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
      "line": 42,
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
      "line": 43,
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
      "line": 44,
      "id": "test-tagged-hooks;this-is-second-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3763079200,
  "status": "passed"
});
formatter.before({
  "duration": 38800,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#| username | password   |"
    },
    {
      "line": 29,
      "value": "#\t| Admin    | admin123   |"
    },
    {
      "line": 30,
      "value": "#\t| Admin    | admin123   |"
    }
  ],
  "line": 31,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user moves to candidates page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user moves to new candidate page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
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
  "duration": 819732900,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 4625800,
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
  "duration": 38484800,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1438986100,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3162700,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_moves_to_candidates_page()"
});
formatter.result({
  "duration": 547837700,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_moves_to_new_candidates_page()"
});
formatter.result({
  "duration": 460272900,
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
  "duration": 456516700,
  "status": "passed"
});
formatter.after({
  "duration": 41500,
  "status": "passed"
});
formatter.after({
  "duration": 781517900,
  "status": "passed"
});
formatter.before({
  "duration": 4275130000,
  "status": "passed"
});
formatter.before({
  "duration": 31000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "This is Second test",
  "description": "",
  "id": "test-tagged-hooks;this-is-second-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of login page is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#| username | password   |"
    },
    {
      "line": 29,
      "value": "#\t| Admin    | admin123   |"
    },
    {
      "line": 30,
      "value": "#\t| Admin    | admin123   |"
    }
  ],
  "line": 31,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user moves to candidates page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user moves to new candidate page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
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
  "duration": 770075700,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.title_of_login_page_is_OrangeHRM()"
});
formatter.result({
  "duration": 4048500,
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
  "duration": 34195700,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1614060200,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2074200,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_moves_to_candidates_page()"
});
formatter.result({
  "duration": 485326600,
  "status": "passed"
});
formatter.match({
  "location": "TaggedHooksStepDefinition.user_moves_to_new_candidates_page()"
});
formatter.result({
  "duration": 378416900,
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
  "duration": 524843500,
  "status": "passed"
});
formatter.after({
  "duration": 31800,
  "status": "passed"
});
formatter.after({
  "duration": 678935900,
  "status": "passed"
});
});