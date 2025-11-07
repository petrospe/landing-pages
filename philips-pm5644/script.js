// dreadful biiiiiiiiip (1000hz)
var context = new AudioContext();
var playNote = function (frequency, vol, startTime, duration) {
    var osc = context.createOscillator(),
    volume = context.createGain();
    volume.gain.value = vol;
    volume.gain.setValueAtTime(vol, startTime + duration - 0.05);
    volume.gain.linearRampToValueAtTime(0, startTime + duration);
    osc.frequency.value = frequency;
    osc.type = 'sine';
    osc.connect(volume);
    volume.connect(context.destination);
    osc.start(startTime);
};
//uncomment this line above if you like-it! ;-)
//playNote(1000, 0.5, context.currentTime, 60);