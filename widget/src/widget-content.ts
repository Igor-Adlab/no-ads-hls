import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { tailwind } from "./utils/tailwind";

@customElement("widget-content")
export class WidgetContent extends LitElement {
  @property({ type: Boolean, reflect: true })
  opened = false;

  @property({ type: String })
  title = "";

  @property({ type: String })
  description = "";

  toggle() {
    this.dispatchEvent(new Event("toggle"));
  }

  render() {
    return html`
      <div
        style="max-height: 500px; height: ${this.opened ? "100%" : "50px"}"
        class="transition-all flex flex-col duration-200 mb-0 w-80 bg-slate-200 overflow-hidden shadow rounded-md ${this
          .opened
          ? "opacity-100"
          : "h-1/2 invisible opacity-0"}"
      >
        <div
          class="bg-blue-600 py-3 px-4 text-base flex flex-row w-full items-center"
        >
          <div class="flex-grow overflow-hidden">
            <p
              class="text-slate-200 text-ellipsis overflow-hidden whitespace-nowrap"
            >
              ${this.title || "Video list"}
            </p>
            ${this.description
              ? html` <p
                  class="text-xs text-slate-300 whitespace-nowrap text-ellipsis overflow-hidden"
                >
                  <button>
                    <i class="ib mi-copy mr-1 cursor-pointer"></i>
                  </button>
                  ${this.description}
                </p>`
              : ""}
          </div>
          <div>
            <button @click="${this.toggle}" class="text-lg text-white">
              <i class="ib mi-close"></i>
            </button>
          </div>
        </div>
        <!-- py-3 px-4 -->
        <div class="text-slate-700 flex-grow overflow-y-auto">
          <slot></slot>
        </div>
        <div class="bg-gray-200 px-4 py-2 border-t border-gray-300">
          <p
            style="font-size: 11px;"
            class="flex flex-row items-center justify-around w-full"
          >
            <span class="flex flex-row items-center">
              <i class="ib ei-question text-base mr-1 leading-none"></i>
              <a target="_blank" href="${import.meta.env.VITE_APP_WEB_URL}/about" class="underline">How it works</a>
            </span>
            <span class="flex flex-row items-center">
              <i class="ib ei-envelope text-base mr-1 leading-none"></i>
              <a class="underline" href="mailto:${import.meta.env.VITE_APP_CONTACT_MAIL}"
                >Email support</a>
            </span>
          </p>
        </div>
      </div>
    `;
  }

  static styles = [tailwind];
}

declare global {
  interface HTMLElementTagNameMap {
    "widget-content": WidgetContent;
  }
}
