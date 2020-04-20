var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i< acc.length; i++){
    acc[i].onclick = function(){

    this.classlist.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display ==="block"){
       panel.styel.display = "none";
    }else{
      panel.styel.display = "block";
    }
}

}
