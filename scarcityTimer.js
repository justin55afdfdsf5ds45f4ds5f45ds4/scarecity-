document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById('counter');
    let count = parseInt(counterElement.innerText, 10);
    
    setInterval(function() {
        if (count > 0) {
            count--;
            counterElement.innerText = count;
        }
    }, 40000);
});
