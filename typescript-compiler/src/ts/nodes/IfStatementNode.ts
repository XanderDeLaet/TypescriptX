import { BlockNode } from "./BlockNode";
import { ConditionNode } from "./ConditionNode";
import { Node } from "./Node";
import { StatementNode } from "./StatementNode";

export type IfStatementNode = Node & {
    condition: ConditionNode;
    resultBody: BlockNode | StatementNode;

}
