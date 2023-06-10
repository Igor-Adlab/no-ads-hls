import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import './videos-list';
import "./widget-content";

import { xmark, tv } from "./icons";
import { tailwind } from "./utils/tailwind";

@customElement("noadshls-widget")
export class NoAdsHlsWidget extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('add-video', this.addVideo);
  }
  
  disconnectedCallback() {
    this.removeEventListener('add-video', this.addVideo);
    super.disconnectedCallback();
  }
  
  @property({ type: String })
  url = ''

  @property({ type: String })
  title = ''

  @property({ type: Array })
  videos = []

  @property({ type: Boolean })
  opened = false;

  @property({ type: Boolean })
  preview = false;

  addVideo = ({ detail }: any) => {
    console.log("NO_ADS_HLS WIDGET - Add video", detail);
    this.videos = this.videos.concat(detail);
  }

  toggle() {
    if(!this.isVisible) {
      return;
    }

    this.opened = !this.opened;
  }

  reset() {
    this.videos = [];
  }

  get isVisible() {
    return this.preview || this.videos?.length;
  }

  render() {
    return html`
      <div style="z-index:9999;" class="font-light transition-all duration-500 right-5 fixed font-sans flex ${this.isVisible ? 'bottom-5' : '-bottom-48'}">
        <div class="fixed right-5 bottom-24">
          <widget-content
            @toggle=${this.toggle}
            ?opened=${this.opened || this.preview}
            title=${this.title}
            description=${this.url}
          >
            <videos-list .videos=${this.videos}></videos-list>
          </widget-content>
        </div>
        <div class="text-right">
          <button
            @click="${this.toggle}"
            class="w-16 p-3 bg-blue-700 text-2xl h-16 rounded-full shadow-xl focus:outline-none outline-none"
          >
            <div
              class="text-slate-200 flex flex-col items-center justify-center"
            >
              ${this.opened || this.preview ? html`<i class="ib mi-close"></i>` : html`<i class="ib mi-play"></i>`}
            </div>
          </button>
        </div>
      </div>
    `;
  }

  static styles = [tailwind];
}

declare global {
  interface HTMLElementTagNameMap {
    "noadshls-widget": NoAdsHlsWidget;
  }
}
