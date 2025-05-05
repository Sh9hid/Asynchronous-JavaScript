document.getElementById('fetchBtn').addEventListener('click', async () => {
    const outputDiv = document.getElementById('output');
    
    try {
        outputDiv.textContent = 'Loading...';
        
        // Create timeout promise
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('Operation timed out'));
            }, 5000);
        });

        // Fetch data with timeout race
        const response = await Promise.race([
            fetch('https://dummyjson.com/posts'),
            timeoutPromise
        ]);

        // Handle network errors
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();

        // Display formatted results
        outputDiv.innerHTML = `
            <strong>Top 3 Posts:</strong><br><br>
            ${data.posts.slice(0, 3).map(post => `
                <div style="margin-bottom: 15px;">
                    <strong>${post.title}</strong><br>
                    ${post.body}
                </div>
            `).join('')}
        `;

    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
});