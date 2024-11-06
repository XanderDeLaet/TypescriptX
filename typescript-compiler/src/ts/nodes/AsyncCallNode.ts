import { FunctionCallNode } from "./FunctionCallNode";
import { Node } from "./Node";

export type AsyncCallNode = Node & {

    asyncFunc: FunctionCallNode;

}