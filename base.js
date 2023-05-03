// HEY! Make sure to use this as the bookmark URL as it
// provides automatic updates so you can use the most
// up-to-date version of the bookmarklet base! :)
// javascript:fetch("https://raw.githubusercontent.com/rsxlnn/base-bookmarklet/main/base.js").then(r%20=>%20r.text()).then(r%20=>%20eval(r));

if (localStorage.getItem("hasExecutedBMBase") == "true") { console.log("The bookmarklet base has already been executed!"); alert("You've already executed the base!"); } else {
    console.log("Starting the bookmarklet base...");
    alert("Bookmarklet base by azaelreo\nUse freely with permission.");
    var base = document.createElement("div");
    var closeBtn = document.createElement("button");
    
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
    closeBtn.style.bottom = "2.5%";
    closeBtn.style.left = "1.75%";
    closeBtn.style.border = "1px solid";
    closeBtn.style.borderRadius = "3px";
    closeBtn.style.paddingLeft = "15px";
    closeBtn.style.paddingRight = "15px";
    closeBtn.style.paddingTop = "7px";
    closeBtn.style.paddingBottom = "7px";
    closeBtn.onClick = function() {
        alert("test");
    }
    
    document.body.appendChild(base);
    document.body.appendChild(closeBtn);
    localStorage.setItem("hasExecutedBMBase", "true");
}

window.onbeforeunload = function() {
    console.log("Unloading, setting hasExecutedBMBase to \"false\".");
    localStorage.setItem("hasExecutedBMBase", "false");
}
