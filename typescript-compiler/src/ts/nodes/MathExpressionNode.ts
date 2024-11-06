import { Node } from "./Node";
import { StringLiteralNode } from "./StringLiteralNode";

export type MathExpressionNode = Node & {
    variable: string;
    operator: string;
    value: string | number | StringLiteralNode;
}