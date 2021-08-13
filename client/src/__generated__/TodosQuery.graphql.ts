/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type TodosQueryVariables = {};
export type TodosQueryResponse = {
    readonly todos: ReadonlyArray<{
        readonly id: string;
        readonly description: string;
        readonly completed: boolean;
    }>;
};
export type TodosQuery = {
    readonly response: TodosQueryResponse;
    readonly variables: TodosQueryVariables;
};



/*
query TodosQuery {
  todos {
    id
    description
    completed
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todos",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "def264acdbb63edbb8b9b9af42daebcb",
    "id": null,
    "metadata": {},
    "name": "TodosQuery",
    "operationKind": "query",
    "text": "query TodosQuery {\n  todos {\n    id\n    description\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a37e19e2c53b88d513332b3ddd5ae572';
export default node;
