if (localStorage.getItem("alreadyRanBase") == "true") { alert("You have already ran this bookmarklet!"); } else {
    var baseBackground = document.createElement("div");
    var closeButton = document.createElement("button");
    var baseTitle = document.createElement("label");
    
    baseBackground.style.position = "fixed";
    baseBackground.style.left = "0%";
    baseBackground.style.top = "0%";
    baseBackground.style.zIndex = "100000";
    baseBackground.style.width = "100%";
    baseBackground.style.height = "100%";
    baseBackground.style.backgroundColor = "rgb(220, 220, 220)";
    
    closeButton.textContent = "Close";
    closeButton.style.zIndex = "100001";
    closeButton.style.backgroundColor = "white";
    closeButton.style.position = "fixed";
    closeButton.style.bottom = "20px";
    closeButton.style.left = "20px";
    closeButton.style.border = "1px solid";
    closeButton.style.borderRadius = "3px";
    closeButton.style.padding = "7px 15px 7px 15px";
    closeButton.style.fontFamily = "Arial, sans-serif";
    closeButton.style.cursor = "pointer";
    closeButton.style.userSelect = "none";
    closeButton.onclick = function() {
        document.body.removeChild(baseBackground);
        document.body.removeChild(closeButton);
        document.body.removeChild(baseTitle);
        localStorage.setItem("alreadyRanBase", "false");
    };

    baseTitle.textContent = "Bookmarklet Base";
    baseTitle.style.zIndex = "100002";
    baseTitle.style.color = "black";
    baseTitle.style.fontFamily = "Arial, sans-serif";
    baseTitle.style.fontSize = "16px";
    baseTitle.style.position = "fixed";
    baseTitle.style.left = "15px";
    baseTitle.style.top = "20px";
    baseTitle.style.userSelect = "none";
    
    document.body.appendChild(baseBackground);
    document.body.appendChild(closeButton);
    document.body.appendChild(baseTitle);
    localStorage.setItem("alreadyRanBase", "true");
}

window.onbeforeunload = function() { localStorage.setItem("alreadyRanBase", "false"); }
