/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type TodosToggleTodoMutationVariables = {
    _id: string;
};
export type TodosToggleTodoMutationResponse = {
    readonly toggleTodo: {
        readonly _id: string;
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
  $_id: String!
) {
  toggleTodo(_id: $_id) {
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
    "name": "_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
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
    "cacheID": "9e5041f566f68253d147b7d523331266",
    "id": null,
    "metadata": {},
    "name": "TodosToggleTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodosToggleTodoMutation(\n  $_id: String!\n) {\n  toggleTodo(_id: $_id) {\n    _id\n    description\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = '259bcfae18082146116520827dd6f0c4';
export default node;
