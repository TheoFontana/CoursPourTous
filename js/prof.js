//Make the selected prof standout
function makeBig(event) {
    event.stopPropagation();
    this.classList.add("active");
    for(var i=0;i<profs.length;i++){
        prof=document.getElementById(profs[i]);
        if( this != prof ){
            prof.classList.add("hide");
        }
    }
}

//Reduce the selected prof
function makeSmall(event) {
    event.stopPropagation(); 
    for(var i=0;i<profs.length;i++){
        prof=document.getElementById(profs[i]);
        if( prof.classList.contains("active") ){
            prof.classList.remove("active");
        }
        else{
            prof.classList.remove("hide");
        }
    }    
}

// Main
var profs = [];
var closes=[];
for (var i =0 ;i<3;i++) {
    profs[i]="prof-"+(i+1);
    closes[i]="close-"+(i+1);
}

for(i=0;i<profs.length;i++){
    document.getElementById(profs[i]).addEventListener("click", makeBig);
    document.getElementById(closes[i]).addEventListener("click", makeSmall);
}
