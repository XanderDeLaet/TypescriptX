import { Node } from "./Node";

export type StringLiteralNode = Node & {
    value: string;
}