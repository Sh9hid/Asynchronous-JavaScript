document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('fetchBtn');
    const output = document.getElementById('output');
    let countdownInterval;

    btn.addEventListener('click', () => {
        // Clear any existing intervals
        if (countdownInterval) clearInterval(countdownInterval);
        
        // Initialize countdown
        let seconds = 5;
        output.textContent = `Please wait for ${seconds} seconds...`;
        
        // Start countdown timer
        countdownInterval = setInterval(() => {
            seconds--;
            output.textContent = `Please wait for ${seconds} seconds...`;
            
            if (seconds <= 0) {
                clearInterval(countdownInterval);
                // Start API fetch after countdown completes
                fetch('https://dummyjson.com/posts')
                    .then(response => {
                        if (!response.ok) throw new Error('Network response was not ok');
                        return response.json();
                    })
                    .then(data => {
                        const postsHtml = data.posts.map(post => 
                            `<div class="post-item">${post.title}</div>`
                        ).join('');
                        output.innerHTML = `<h3>Fetched Posts:</h3>${postsHtml}`;
                    })
                    .catch(error => {
                        output.textContent = `Error: ${error.message}`;
                    });
            }
        }, 1000);
    });
});
