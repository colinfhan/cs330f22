function playPause(){
    let play=document.getElementById("play-button");
    let pause=document.getElementById("pause-button");
    if (play && pause){
        play.classList.toggle("hidden");
        pause.classList.toggle("hidden");
    
    }
}
function recordStop(){
    let record=document.getElementById("record-button");
    let stop=document.getElementById("stop-button");
    if (record && stop){
        record.classList.toggle("hidden");
        stop.classList.toggle("hidden");
    
    }
}
