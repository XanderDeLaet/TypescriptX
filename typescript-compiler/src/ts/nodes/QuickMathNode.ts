import { Node } from "./Node";

export type QuickMathNode = Node & {

    variable: string;
    operator: string;

}