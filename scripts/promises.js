document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('fetchBtn');
  const output = document.getElementById('output');
  let countdownInterval;
  let startTime;

  btn.addEventListener('click', () => {
      // Clear existing interval if any
      if (countdownInterval) clearInterval(countdownInterval);
      
      output.classList.add('visible');
      startTime = Date.now();
      
      // Create fetch promise
      const fetchPromise = fetch('https://dummyjson.com/posts')
          .then(response => {
              if (!response.ok) throw new Error('Network response was not ok');
              return response.json();
          });

      // Create timeout promise
      const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => {
              reject(new Error('Operation timed out'));
          }, 5000);
      });

      // Immediate first update
      updateCountdown();

      // Start countdown timer with faster updates
      countdownInterval = setInterval(updateCountdown, 100);

      function updateCountdown() {
          const elapsed = Date.now() - startTime;
          const timeLeft = Math.max(0, 5 - Math.floor(elapsed / 1000));
          const millisecondsLeft = 5000 - elapsed;
          
          // Update display with remaining time
          output.innerHTML = `
              Promise resolving in 
              <span style="font-weight: bold">${Math.floor(millisecondsLeft/1000)}.${Math.floor((millisecondsLeft%1000)/100)}s</span>
          `;
          
          if (millisecondsLeft <= 0) clearInterval(countdownInterval);
      }

      // Race promises
      Promise.race([fetchPromise, timeoutPromise])
          .then(data => {
              clearInterval(countdownInterval);
              const elapsed = (Date.now() - startTime) / 1000;
              output.innerHTML = `
                  <strong>Data fetched in ${elapsed.toFixed(2)}s:</strong><br><br>
                  ${data.posts.slice(0, 3).map(post => `
                      <div style="margin-bottom: 15px;">
                          <strong>${post.title}</strong><br>
                          ${post.body}
                      </div>
                  `).join('')}
              `;
          })
          .catch(error => {
              clearInterval(countdownInterval);
              output.innerHTML = `
                  <strong style="color: red;">Error:</strong> ${error.message}<br>
                  ${error.message === 'Operation timed out' ? '(Timeout after 5 seconds)' : ''}
              `;
          });
  });
});