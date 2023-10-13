document.addEventListener("DOMContentLoaded", function() {
    var stop_button = document.getElementById("stop_button");
    var freeze_button = document.getElementById("freeze_button");
    var resume_button = document.getElementById("resume_button");

    step = 0;
    keys = new Array(16).fill(false);

    function toggleLed() {
        bar.children[step].children[0].classList.toggle("active-led");
    }

    function ledON() {
        bar.children[step].children[0].classList.add("active-led");
    }

    function ledOFF() {
        bar.children[step].children[0].classList.remove("active-led");
    }

    // Controller
    function nextStep() {
        step = (step + 1) % bar.children.length;
        render();
    };

    stop = function () {
        step = 0;
        clearInterval(t);
        t = setInterval(nextStep, 1000);
    };

    freeze = function () {
        clearInterval(t);
    };

    resume = function () {
        clearInterval(t);
        t = setInterval(nextStep, 1000);
    };


    freeze_button.onclick = freeze;
    resume_button.onclick = resume;
    stop_button.onclick = stop;

    // Controller
    t = setInterval(nextStep, 1000);
    setInterval(render, 30);

    function render() {
        for (k of bar.children) {
            k.children[0].classList.remove("active-led");
        }
        ledON();
    }

    for (let i = 0; i < bar.children.length; i++) {
        bar.children[i].onclick = function () {
            keys[i] = !keys[i];
            bar.children[i].classList.toggle("active-key", keys[i]);
            console.log(keys);
        };
    }
    
});