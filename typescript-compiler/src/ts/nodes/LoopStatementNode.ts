import { BlockNode } from "./BlockNode";
import { ConditionNode } from "./ConditionNode";
import { MathExpressionNode } from "./MathExpressionNode";
import { Node } from "./Node";
import { QuickMathNode } from "./QuickMathNode";
import { VarDeclarationNode } from "./VarDeclarationNode";

export type LoopStatementNode = Node & {
    varDeclaration: VarDeclarationNode;
    condition: ConditionNode;
    iterator: QuickMathNode;
    loopBody: BlockNode;
}