var progressContainer = document.createElement("div");
progressContainer.id = "extension-progress-container";
progressContainer.style.width = "100%";
progressContainer.style.height = "8px";
progressContainer.style.background = "#ccc";
progressContainer.style.zIndex = 9999;
progressContainer.style.position = "fixed";
progressContainer.style.top = 0;

var scrollbar = document.createElement("div");
scrollbar.id = "extension-scrollbar";
scrollbar.style.height = "8px";
scrollbar.style.background = "#4caf50";
scrollbar.style.width = "0%";
scrollbar.style.zIndex = 9999;

progressContainer.appendChild(scrollbar);

document.getElementsByTagName("body")[0].prepend(progressContainer);