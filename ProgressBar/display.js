var drawn = false;
var created = false;

function draw() {
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (!drawn) {
        if (height > 0) {
            if (!created) {
                var progressContainer = document.createElement("div");
                progressContainer.id = "exentsion-progress-container";
                progressContainer.style.width = "100%";
                progressContainer.style.height = "8px";
                progressContainer.style.background = "#ccc";
                progressContainer.style.zIndex = 9999;
                progressContainer.style.position = "fixed";
                progressContainer.style.top = 0;
                progressContainer.style.visibility = 'visible';

                var scrollbar = document.createElement("div");
                scrollbar.id = "extension-scrollbar";
                scrollbar.style.height = "8px";
                scrollbar.style.background = "#4caf50";
                scrollbar.style.width = "0%";
                scrollbar.style.zIndex = 9999;

                progressContainer.appendChild(scrollbar);

                document.body.prepend(progressContainer);
                created = true;
                drawn = true;
            }
            else {
                var progressContainer = document.getElementById('exentsion-progress-container');
                progressContainer.style.visibility = 'visible';
                drawn = true;
            }
        }
    }
    else {
        if (created) {
            if (height <= 0) {
                var progressContainer = document.getElementById('exentsion-progress-container');
                progressContainer.style.visibility = 'hidden';
                drawn = false;
            }
        }
    }
}

draw();
window.addEventListener('resize', draw);