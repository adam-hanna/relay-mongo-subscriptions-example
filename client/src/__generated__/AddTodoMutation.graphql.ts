/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AddTodoMutationVariables = {
    description: string;
};
export type AddTodoMutationResponse = {
    readonly newTodo: {
        readonly _id: string;
        readonly description: string;
        readonly completed: boolean;
    };
};
export type AddTodoMutation = {
    readonly response: AddTodoMutationResponse;
    readonly variables: AddTodoMutationVariables;
};



/*
mutation AddTodoMutation(
  $description: String!
) {
  newTodo(description: $description) {
    _id
    description
    completed
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "description"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "newTodo",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d9f30f0aaff8cbc314b49bad2ecd596d",
    "id": null,
    "metadata": {},
    "name": "AddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AddTodoMutation(\n  $description: String!\n) {\n  newTodo(description: $description) {\n    _id\n    description\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f95f689d649aafcd0d1e5f36903f625d';
export default node;
