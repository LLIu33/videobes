navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { video: true, audio: true },
    (stream) => {
      const localVideo = document.getElementById('local-video');
      console.log(localVideo);
      if (localVideo) {
        localVideo.srcObject = stream;
      }
    },
    (error) => {
      console.warn(error.message);
    }
  );
}
