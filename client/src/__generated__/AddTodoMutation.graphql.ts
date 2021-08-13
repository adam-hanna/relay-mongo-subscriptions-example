/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AddTodoMutationVariables = {
    description: string;
};
export type AddTodoMutationResponse = {
    readonly newTodo: {
        readonly id: string;
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
    id
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
        "name": "id",
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
    "cacheID": "ba7ef0df523c79fbdaa6a73916843b63",
    "id": null,
    "metadata": {},
    "name": "AddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AddTodoMutation(\n  $description: String!\n) {\n  newTodo(description: $description) {\n    id\n    description\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = '2d3e9316d5f700ca110d376a514627fc';
export default node;
