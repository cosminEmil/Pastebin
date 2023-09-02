function addText() {
    let text = document.getElementById("textBox").value;
    let list = document.getElementById("myList");
    let link = document.createElement("a");
    link.style.maxWidth = "20ch";
    let li = document.createElement("li");
    link.setAttribute('href', "pastebin-display.html");
    link.setAttribute("target", "_blank");
    link.textContent = text.substring(0, 20);
    link.addEventListener("click", function() {
        localStorage.clear();
        localStorage.setItem("text", text);
    });
    li.appendChild(link);
    list.appendChild(li); 
}

