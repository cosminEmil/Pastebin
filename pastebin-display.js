let value = localStorage.getItem('text');        
var output = document.getElementById('value-output');
output.innerText = value;

function closeWindow() {
    localStorage.clear();
    window.close();
}