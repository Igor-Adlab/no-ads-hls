import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';

import '../../../widget/dist/widget';

import { EVENTS } from './events';

(function main() {
    let cache = [];
    const url = window.location.toString();
    console.log('[NO_ADS_HLS] - INIT', {url});
    if(!url || url?.includes(process.env.WEB_URL) || url.includes('http://localhost')) {
        return;
    }

    const onMessageListener = (request, sender, sendResponse) => {
        if (request.event == EVENTS.VIDEO_FOUND) {
            const widget = document.querySelector('noadshls-widget');
            console.log("[NO_ADS_HLS]: VIDEO", { widget });
            if(!!widget && widget.isConnected) {
                try {
                    const event = new CustomEvent('add-video', {
                        bubbles: true,
                        composed: true,
                        detail: request.url,
                    });

                    widget.dispatchEvent(event);
                } catch(err) {
                    console.log('NO_ADS_HLS: error', err);
                }
                console.log("[NO_ADS_HLS]: Add to mounted")
            } else {
                console.log("[NO_ADS_HLS]: Add cache: ")
                cache.push(request.url);
            }

            setTimeout(() => sendResponse('ok'), 1);
        }
        
        return true;
    };
    
    chrome.runtime.onMessage.addListener(onMessageListener);

    Promise.resolve(process.env.WIDGET_URL)
        .then(() => {
            console.log('[NO_ADS_HLS]: Widget loaded!')
            const title = document.querySelector('title');
            const widget = document.createElement('noadshls-widget');
            
            widget.setAttribute('url', url);
            widget.setAttribute('title', document.title || title.innerText || "");
            
            document.body.appendChild(widget);

        }).catch((err) => console.error(`[NO_ADS_HLS]: error ${JSON.stringify(err)}`));
})();
