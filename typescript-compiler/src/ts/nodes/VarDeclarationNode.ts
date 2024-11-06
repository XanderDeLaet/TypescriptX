import { ClassNode } from './ClassNode';
import { FunctionCallStatementNode } from './FunctionCallStatement';
import { HtmlBlockNode } from './HtmlBlockNode';
import { MathExpressionNode } from './MathExpressionNode';
import {Node} from './Node';
export type VarDeclarationNode = Node & {
    varType: string | null;
    name: string;
    type: string | null;
    value: string | number | HtmlBlockNode | FunctionCallStatementNode | ClassNode | MathExpressionNode | null;
}