import { FunctionCallNode } from "./FunctionCallNode";
import { Node } from "./Node";
import { StringLiteralNode } from "./StringLiteralNode";

export type ArgumentNode = Node & {

    value: string | number | FunctionCallNode | StringLiteralNode;

}
