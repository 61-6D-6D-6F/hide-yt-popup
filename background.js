browser.tabs.onActivated.addListener(handleActivated);

function handleActivated(_activeInfo) {
    browser.tabs.get(_activeInfo.tabId).then(function(_tabInfo) {
        if (_tabInfo.url.substring(0, 29) === "https://www.youtube.com/watch") {
            browser.scripting.executeScript({
                target: {
                    tabId: _activeInfo.tabId
                },
                files: ["/run.js"]
            }).then(onExecuted, onError);
        }
    }, onError);
}

function onExecuted(_result) {
    console.log(`Executed result: ${_result}`);
}

function onError(_error) {
    console.log(`Error: ${_error}`);
}
