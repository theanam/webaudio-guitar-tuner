var context = new AudioContext();
var osc = context.createOscillator(),
    gain = context.createGain();
    gain.gain.value=0.5;
osc.connect(gain);
var played = false;
playing =false;
function changeNote(e){
    var frequency = e.target.dataset.frequency;
    osc.frequency.value=+frequency;
    if(played){
        played = false;
        playing = true;
        return gain.connect(context.destination);
        }
    if(playing) return 0;
    osc.start(context.currentTime);
    gain.connect(context.destination);
    playing = true;
}
document.querySelector('.stop').addEventListener('click',stop);
function stop(){
    if(playing){
        gain.disconnect();
        played = true;
        playing = false;
    }
}
var notes = document.querySelectorAll('.string');
for(i=0;i<notes.length;i++){
    notes[i].addEventListener('click',changeNote);
}