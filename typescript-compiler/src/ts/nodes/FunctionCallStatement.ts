import { FunctionCallNode } from "./FunctionCallNode";
import { Node } from "./Node";

export type FunctionCallStatementNode = Node & {
    functionCalls: FunctionCallNode[];
    id: string;
}