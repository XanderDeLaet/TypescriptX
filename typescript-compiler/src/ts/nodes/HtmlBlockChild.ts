import { HtmlBlockNode } from "./HtmlBlockNode";
import { Node } from "./Node";

export type HtmlBlockChildNode = Node & {

    value: HtmlBlockNode | string | null

}