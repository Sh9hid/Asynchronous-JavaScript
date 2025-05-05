document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('callbackBtn'); 
    const output = document.getElementById('output');
    
    btn.addEventListener('click', () => {
        output.textContent = "Waiting for callback ... ";
        
        setTimeout(() => {
            output.textContent = `Callback executed after ${5} seconds`
        }, 5000);
    });
});