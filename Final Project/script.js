window.onload = function(){
    
    var head = document.getElementById("head");
    var img = document.getElementById("hidden");
    
    if (img != null){
        img.style.filter = "blur(4px)";
        img.addEventListener('mouseover', unblur);
        img.addEventListener('mouseout', blur);
    }

    function unblur(){
        this.style.filter = "blur(0)";
    }
    
    function blur(){
        this.style.filter = "blur(4px)";
    }

    var d = new Date();

    if (d.getDay() == 0){
        head.style.color = "yellow";
    }
    if (d.getDay() == 1){
        head.style.color = "red";
    }
    if (d.getDay() == 2){
        head.style.color = "green";
    }
    if (d.getDay() == 3){
        head.style.color = "blue";
    }
    if (d.getDay() == 4){
        head.style.color = "orange";
    }
    if (d.getDay() == 5){
        head.style.color = "black";
    }
    if (d.getDay() == 6){
        head.style.color = "violet";
    }
}