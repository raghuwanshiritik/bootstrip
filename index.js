// counter desing start

document.addEventListener("DOMContentLoaded",() => {
    function counter(id, start, end, duration ){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        time = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 2000);
    counter("count2", 0, 2587, 1000);
    counter("count3", 0, 1887, 1750);
    counter("count4", 0, 1287, 2000);
});

// counter desing start end