import { FunctionCallStatementNode } from "./FunctionCallStatement";
import { Node } from "./Node";

export type ConditionNode = Node & {
    operator: string;
    firstValue: FunctionCallStatementNode | string;
    lastValue: FunctionCallStatementNode | string;
}