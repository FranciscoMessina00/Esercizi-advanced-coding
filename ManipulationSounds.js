const c = new AudioContext();
const o = c.createOscillator();
const a = c.createAnalyser();
o.connect(a);
a.connect(c.destination);

o.frequency.value = 440;

var dataArray = new Uint8Array(a.frequencyBinCount);

const canvas = document.getElementById("soundVisual");
const ctx = canvas.getContext('2d');


function drawSamples(){
    var samples = new Uint8Array(a.frequencyBinCount);
    a.getByteTimeDomainData(samples);

    var start = 0;
    for(;start<samples.length;start+=1){
        if(samples[start] < 3 && samples[start-2] > 5) break;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.moveTo(0, 0);
    ctx.beginPath();
    for(var i = start; i < samples.length; i++){
        ctx.lineTo(i - start, canvas.height*samples[i]/255)
    }
    ctx.stroke();
    requestAnimationFrame(drawSamples);
}
drawSamples();