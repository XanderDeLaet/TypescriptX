import { ArgumentNode } from "./ArgumentNode";
import { Node } from "./Node";
export type FunctionCallNode = Node & {
    function: string;
    args: ArgumentNode[] | null;
    call: boolean;
}