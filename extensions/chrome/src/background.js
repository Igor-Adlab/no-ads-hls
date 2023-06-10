const { EVENTS } = require("./events");

function sendVideoToActiveTab(videoUrl, tabId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            chrome.tabs.sendMessage(tabId, { action: EVENTS.VIDEO_FOUND, url: videoUrl });
        }, 500);
    });
}

async function resourceWatcher(info) {
    if (info.url.includes('.m3u8')) {
        console.log('Found video: ', { url: info.url, tabId: info.tabId });
        try {
            chrome.tabs.sendMessage(info.tabId, { event: EVENTS.VIDEO_FOUND, url: info.url }, console.log);
        } catch(e) {
            console.log('Error: ', e);
        };
    }
}

chrome.webRequest.onCompleted.addListener(
    resourceWatcher,
    { urls: ["<all_urls>"] },
    ["extraHeaders", "responseHeaders"],
);
