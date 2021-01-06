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
for (var i =0 ;i<6;i++) {
    profs[i]="prof-"+(i+1);
    closes[i]="close-"+(i+1);
}

for(i=0;i<profs.length;i++){
    document.getElementById(profs[i]).addEventListener("click", makeBig);
    document.getElementById(closes[i]).addEventListener("click", makeSmall);
}


// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 900px)');
const media = window.matchMedia('(min-width: 901px)');

function handleDesktopChange(e){

    if (e.matches){
        for(var i=0;i<profs.length;i++){
        
            prof=document.getElementById(profs[i]);
            prof.addEventListener("click", makeBig)
            prof.classList.remove("active");
        }
        console.log('Desktop');
    }

}

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {

    for(var i=0;i<profs.length;i++){
        
        prof=document.getElementById(profs[i]);
        prof.removeEventListener("click", makeBig)
        prof.classList.add("active");
    }
    // Then log the following message to the console
    console.log('Tablet');
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);
media.addListener(handleDesktopChange);

// Initial check
handleTabletChange(mediaQuery);
handleDesktopChange(media);