$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registerCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the API\u0027s",
  "description": "",
  "id": "testing-the-api\u0027s",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Get Customer",
  "description": "",
  "id": "testing-the-api\u0027s;get-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I create a new request with http://testingautomation.us-e2.cloudhub.io/ service",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I add the test endpoint to the service",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I send the GET request to the service",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I get the 200 response code",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I assert the following values in the response body",
  "rows": [
    {
      "cells": [
        "givenName",
        "vikas"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://testingautomation.us-e2.cloudhub.io/",
      "offset": 28
    }
  ],
  "location": "RegisterCustomerStepDefinition.createNewRequest(String)"
});
formatter.result({
  "duration": 243347990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 10
    }
  ],
  "location": "RegisterCustomerStepDefinition.addEndpoint(String)"
});
formatter.result({
  "duration": 163173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 11
    }
  ],
  "location": "RegisterCustomerStepDefinition.sendRequest(String)"
});
formatter.result({
  "duration": 3325451351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 10
    }
  ],
  "location": "RegisterCustomerStepDefinition.responseCodeValidation(int)"
});
formatter.result({
  "duration": 134890786,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCustomerStepDefinition.responseAttributeValidation(String,String\u003e)"
});
formatter.result({
  "duration": 1045204812,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Register Customer",
  "description": "",
  "id": "testing-the-api\u0027s;register-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I create a new request with http://posttestscript.us-e2.cloudhub.io/api/customers/registrations/ service",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I add the registerUser endpoint to the service",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I pass application/json as content type",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I send the following values in the request body",
  "rows": [
    {
      "cells": [
        "firstName",
        "Vikas"
      ],
      "line": 17
    },
    {
      "cells": [
        "lastName",
        "Puri"
      ],
      "line": 18
    },
    {
      "cells": [
        "phoneNumber",
        "999"
      ],
      "line": 19
    },
    {
      "cells": [
        "emailId",
        "vikas.puri@facebook.com"
      ],
      "line": 20
    },
    {
      "cells": [
        "password",
        "xxx"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I send the POST request to the service",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I get the 200 response code",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I assert the following values in the response body",
  "rows": [
    {
      "cells": [
        "message",
        "User registered successfully successfully."
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://posttestscript.us-e2.cloudhub.io/api/customers/registrations/",
      "offset": 28
    }
  ],
  "location": "RegisterCustomerStepDefinition.createNewRequest(String)"
});
formatter.result({
  "duration": 96735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "registerUser",
      "offset": 10
    }
  ],
  "location": "RegisterCustomerStepDefinition.addEndpoint(String)"
});
formatter.result({
  "duration": 80613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 7
    }
  ],
  "location": "RegisterCustomerStepDefinition.setContentType(String)"
});
formatter.result({
  "duration": 77039,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCustomerStepDefinition.setRequestBody(String,String\u003e)"
});
formatter.result({
  "duration": 3314711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 11
    }
  ],
  "location": "RegisterCustomerStepDefinition.sendRequest(String)"
});
formatter.result({
  "duration": 327684464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 10
    }
  ],
  "location": "RegisterCustomerStepDefinition.responseCodeValidation(int)"
});
formatter.result({
  "duration": 612406,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCustomerStepDefinition.responseAttributeValidation(String,String\u003e)"
});
formatter.result({
  "duration": 26066353,
  "status": "passed"
});
});