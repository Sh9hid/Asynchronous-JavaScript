const output = document.getElementById("output");

function showOutputWithAnimation(text) {
  output.classList.remove("animated-text"); // Reset
  void output.offsetWidth; // Trigger reflow to restart animation
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
  
