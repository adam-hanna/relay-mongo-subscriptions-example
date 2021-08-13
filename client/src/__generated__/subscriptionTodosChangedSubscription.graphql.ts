/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type subscriptionTodosChangedSubscriptionVariables = {};
export type subscriptionTodosChangedSubscriptionResponse = {
    readonly todosChanged: ReadonlyArray<{
        readonly doc: {
            readonly _id: string;
            readonly description: string;
            readonly completed: boolean;
        };
        readonly operationType: string;
    }>;
};
export type subscriptionTodosChangedSubscription = {
    readonly response: subscriptionTodosChangedSubscriptionResponse;
    readonly variables: subscriptionTodosChangedSubscriptionVariables;
};



/*
subscription subscriptionTodosChangedSubscription {
  todosChanged {
    doc {
      _id
      description
      completed
    }
    operationType
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TodoSubscription",
    "kind": "LinkedField",
    "name": "todosChanged",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoForSubscription",
        "kind": "LinkedField",
        "name": "doc",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "_id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "operationType",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "subscriptionTodosChangedSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "subscriptionTodosChangedSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "47cabe6ebde373e95241e63aebd93c37",
    "id": null,
    "metadata": {},
    "name": "subscriptionTodosChangedSubscription",
    "operationKind": "subscription",
    "text": "subscription subscriptionTodosChangedSubscription {\n  todosChanged {\n    doc {\n      _id\n      description\n      completed\n    }\n    operationType\n  }\n}\n"
  }
};
})();
(node as any).hash = '4171062aafd401fed25979c5e987cadb';
export default node;
