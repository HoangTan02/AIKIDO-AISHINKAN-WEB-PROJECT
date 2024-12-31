document.addEventListener("DOMContentLoaded", function() {
    // Tải header
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      });
  
    // Tải footer
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });
    fetch("media.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("media").innerHTML = data;
      });
  });
  