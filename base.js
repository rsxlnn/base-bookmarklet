if (localStorage.getItem("hasExecutedBMBase") == "true") { alert("You've already executed the base!"); } else {
    var base = document.createElement("div");
    var closeBtn = document.createElement("button");
    var bmTitle = document.createElement("label");
    
    base.style.position = "fixed";
    base.style.left = "0%";
    base.style.top = "0%";
    base.style.zIndex = "100000";
    base.style.width = "100%";
    base.style.height = "100%";
    base.style.backgroundColor = "rgb(220, 220, 220)";
    
    closeBtn.textContent = "Close";
    closeBtn.style.zIndex = "100001";
    closeBtn.style.backgroundColor = "white";
    closeBtn.style.position = "fixed";
    closeBtn.style.bottom = "20px";
    closeBtn.style.left = "20px";
    closeBtn.style.border = "1px solid";
    closeBtn.style.borderRadius = "3px";
    closeBtn.style.padding = "7px 15px 7px 15px";
    closeBtn.style.fontFamily = "Arial, sans-serif";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.userSelect = "none";
    closeBtn.onclick = function() {
        document.body.removeChild(base);
        document.body.removeChild(closeBtn);
        document.body.removeChild(bmTitle);
        localStorage.setItem("hasExecutedBMBase", "false");
    };

    bmTitle.textContent = "Bookmarklet Base";
    bmTitle.style.zIndex = "100002";
    bmTitle.style.color = "black";
    bmTitle.style.fontFamily = "Arial, sans-serif";
    bmTitle.style.fontSize = "16px";
    bmTitle.style.position = "fixed";
    bmTitle.style.left = "15px";
    bmTitle.style.top = "20px";
    bmTitle.style.userSelect = "none";
    
    document.body.appendChild(base);
    document.body.appendChild(closeBtn);
    document.body.appendChild(bmTitle);
    localStorage.setItem("hasExecutedBMBase", "true");
}

window.onbeforeunload = function() { localStorage.setItem("hasExecutedBMBase", "false"); }
