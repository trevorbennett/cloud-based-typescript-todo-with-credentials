function addTodo(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById("button").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "http://localhost:8080", true);
xhttp.send();

}
