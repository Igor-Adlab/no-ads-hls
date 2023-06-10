import { LitElement } from "lit";
export declare class WidgetContent extends LitElement {
    opened: boolean;
    title: string;
    description: string;
    toggle(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "widget-content": WidgetContent;
    }
}
