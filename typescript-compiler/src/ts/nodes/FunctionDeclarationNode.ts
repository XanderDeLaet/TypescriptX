import { BlockNode } from "./BlockNode";
import { Node } from "./Node";
import { VarDeclarationNode } from "./VarDeclarationNode";

export type FunctionDeclarationNode = Node & {
    async: boolean;
    name: string;
    params: VarDeclarationNode[] | null;
    body: BlockNode;
}