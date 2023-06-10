import { LitElement, html } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { customElement, property } from "lit/decorators.js";

import { tailwind } from "./utils/tailwind";

@customElement("videos-list")
export class VideosList extends LitElement {
  @property({ type: Array, reflect: true })
  videos = [];

  render() {
    return html`
      <ul>
        ${this.videos.map((videoUrl) => (
          html`
            <li class="px-3 py-2 border-b border-slate-300 flex flex-row items-center w-full overflow-hidden">
              <i class="ib ei-link text-xl leading-none cursor-pointer"></i>
              <p class="mx-1 text-sm flex-grow whitespace-nowrap overflow-ellipsis overflow-hidden">
                <a target="_blank" class="block" href="${import.meta.env.VITE_APP_WEB_URL}/view/${window.btoa(videoUrl)}">${videoUrl}</a>
              </p>

              <!-- TODO: Add firebase to vote for video playlist  -->
              <!-- <span class="ml-1 whitespace-nowrap flex flex-row items-center">
                <span class="text-sm text-slate-500">${"2 x "}</span>
                <i class="ib ei-like leading-none cursor-pointer" style="font-size: 20px;"></i>
              </span> -->
            </li>
          `
        ))}
      </ul>
    `;
  }

  static styles = [tailwind];
}

declare global {
  interface HTMLElementTagNameMap {
    "videos-list": WidgetContent;
  }
}
