import { Node } from "./Node";

export type ImportStatementNode = Node & {
    id: string;
    path: string;
}