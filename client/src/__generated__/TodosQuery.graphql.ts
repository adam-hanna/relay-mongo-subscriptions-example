/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type TodosQueryVariables = {};
export type TodosQueryResponse = {
    readonly todos: ReadonlyArray<{
        readonly _id: string;
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
    _id
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
    "cacheID": "8f596b021703e119e757847791a5a9f0",
    "id": null,
    "metadata": {},
    "name": "TodosQuery",
    "operationKind": "query",
    "text": "query TodosQuery {\n  todos {\n    _id\n    description\n    completed\n  }\n}\n"
  }
};
})();
(node as any).hash = '54e525435b384a469087ca7574e6d840';
export default node;
