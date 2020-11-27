if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
  console.log("Camera is accessible");
  navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
    //video.src = window.URL.createObjectURL(stream);
    video.srcObject = stream;
    video.play();
  });
}
