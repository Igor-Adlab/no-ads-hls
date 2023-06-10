import { LitElement } from 'lit';

export declare class NoAdsHlsWidget extends LitElement {
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    static styles: import("lit").CSSResult;
}

declare global {
    interface HTMLElementTagNameMap {
        'noadshls-widget': NoAdsHlsWidget;
    }
}
