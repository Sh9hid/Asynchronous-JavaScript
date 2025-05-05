document.getElementById("fetchBtn").addEventListener("click", () => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "Loading...";
  
    // Create the fetch promise
    const fetchPromise = fetch("https://dummyjson.com/posts")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      });
  
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Operation timed out"));
      }, 5000); // 5 seconds
    });
  
    // Race both promises
    Promise.race([fetchPromise, timeoutPromise])
      .then((data) => {
        outputDiv.innerHTML = `
          <strong>Top 3 Posts:</strong><br><br>
          ${data.posts.slice(0, 3).map(post => `<div><strong>${post.title}</strong><br>${post.body}</div><br>`).join("")}
        `;
      })
      .catch((error) => {
        outputDiv.textContent = `Error: ${error.message}`;
      });
  });
  