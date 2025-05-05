const btn = document.getElementById("fetchBtn");
const output = document.getElementById("output");

// Animation functions
function showOutputWithAnimation(text) {
  output.classList.remove("animated-text");
  void output.offsetWidth;
  output.textContent = text;
  output.classList.add("animated-text");
}

function showGlitchOutput(text) {
  output.classList.remove("glitch");
  void output.offsetWidth;
  output.textContent = text;
  output.classList.add("glitch");
}

function showGlowingOutput(text) {
  output.classList.remove("glow");
  void output.offsetWidth;
  output.textContent = text;
  output.classList.add("glow");
}

// Example Callback-based API Fetch
function fetchDataCallback(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback("Error fetching data");
    }
  };
  xhr.send();
}

// Use the button to fetch data and animate the output
btn.addEventListener("click", () => {
  fetchDataCallback((err, data) => {
    if (err) {
      showGlitchOutput("⚠️ Error: " + err);
    } else {
      // Use any of the three
      // showOutputWithAnimation(data.title);
      // showGlowingOutput(data.title);
      showGlitchOutput(data.title);  // ← Choose one to activate
    }
  });
});
