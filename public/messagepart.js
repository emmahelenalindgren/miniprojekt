 $(function () {
    var socket = io();
    socket.on("vallokal", (msg) =>{
          $("#place").append($("<li>").text(msg));
      })
      socket.on("parti", (msg) =>{
          $("#gang").append($("<li>").text(msg));
      })
      socket.on("roster", (msg) =>{
          $("#antal").append($("<li>").text(msg));
      })
  });




