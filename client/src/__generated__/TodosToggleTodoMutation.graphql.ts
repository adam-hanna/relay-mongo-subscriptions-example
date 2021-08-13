/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type TodosToggleTodoMutationVariables = {
    id: string;
};
export type TodosToggleTodoMutationResponse = {
    readonly toggleTodo: {
        readonly id: string;
        readonly description: string;
        readonly completed: boolean;
    };
};
export type TodosToggleTodoMutation = {
    readonly response: TodosToggleTodoMutationResponse;
    readonly variables: TodosToggleTodoMutationVariables;
};



/*
mutation TodosToggleTodoMutation(
  $id: String!
) {
  toggleTodo(id: $id) {
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
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "toggleTodo",
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
    "name": "TodosToggleTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodosToggleTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e4e699901a45ed4d95fa8bf188fe4ed1",
    "id": null,
    "metadata": {},
    "name": "TodosToggleTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodosToggleTodoMutation(\n  $id: String!\n) {\n  toggleTodo(id: $id) {\n    id\n    description\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = '25837f0d87efaff92e7fd4befc9aacbf';
export default node;
