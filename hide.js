document.addEventListener("yt-page-data-updated", function() {
    if (document.location.href.substring(0, 29) != "https://www.youtube.com/watch") {
        return;
    }

    run();
});

function run() {
    setTimeout(function() {
        document.querySelectorAll("tp-yt-iron-overlay-backdrop")[0].style.display = "none"
        document.querySelectorAll("ytd-popup-container")[0].style.display = "none"
        document.querySelectorAll("video.video-stream")[0].play()
    }, 2000);
}
