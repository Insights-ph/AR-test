const openCam = document.querySelector("#get-access");

openCam.addEventListener("click", async function init(e) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
      facingMode: "environment",
      },
    });
    const videoTracks = stream.getVideoTracks();
    const track = videoTracks[0];
    alert(`Getting video from: ${track.label}`);
    document.querySelector("video").srcObject = stream;
    openCam.setAttribute("hidden", true);
  } catch (error) {
    alert(`${error.name}`);
    console.error(error);
  }
});
