import { BlockNode } from "./BlockNode";
import { FunctionCallNode } from "./FunctionCallNode";
import { VarDeclarationNode } from "./VarDeclarationNode";
import { Node } from "./Node";
import { FunctionCallStatementNode } from "./FunctionCallStatement";
import { ImportStatementNode } from "./ImportStatementNode";
import { FunctionDeclarationNode } from "./FunctionDeclarationNode";
import { IfStatementNode } from "./IfStatementNode";
import { LoopStatementNode } from "./LoopStatementNode";
import { AsyncCallNode } from "./AsyncCallNode";
export type StatementNode = Node & {
    value: VarDeclarationNode | BlockNode | FunctionCallStatementNode | ImportStatementNode | IfStatementNode | FunctionDeclarationNode | FunctionCallNode | LoopStatementNode | AsyncCallNode;
}