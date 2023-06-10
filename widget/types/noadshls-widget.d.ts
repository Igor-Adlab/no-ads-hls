import { LitElement } from "lit";
import './videos-list';
import "./widget-content";
export declare class NoAdsHlsWidget extends LitElement {
    connectedCallback(): void;
    disconnectedCallback(): void;
    url: string;
    title: string;
    videos: never[];
    opened: boolean;
    addVideo: ({ detail }: {
        detail: any;
    }) => void;
    toggle(): void;
    reset(): void;
    get isVisible(): number;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "noadshls-widget": NoAdsHlsWidget;
    }
}
