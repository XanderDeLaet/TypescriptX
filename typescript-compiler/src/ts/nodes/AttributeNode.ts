import { FunctionCallNode } from "./FunctionCallNode";
import { Node } from "./Node";
export type AttributeNode = Node & {
    name: string;
    value: FunctionCallNode | string;
}