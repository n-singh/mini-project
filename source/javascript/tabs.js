openTab("Description");
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("description-box");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
