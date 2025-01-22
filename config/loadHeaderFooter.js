document.addEventListener("DOMContentLoaded", function() {
    // Tải header
    fetch("header1.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header1").innerHTML = data;
      });
      
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      });

    // Tải footer
    fetch("views/footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer1").innerHTML = data;
      });

    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });

    fetch("views/media.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("media1").innerHTML = data;
      });

    fetch("media.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("media").innerHTML = data;
      });  
  });

