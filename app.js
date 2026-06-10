let likes = 0;

function likePost() {
  likes++;
  document.getElementById("likes").innerText =
    likes + " curtidas";
}
