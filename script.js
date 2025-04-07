// Toggle the Chatbox when the GIF is clicked
function toggleChatbox() {
  var chatbox = document.getElementById("cbox");
  var chatboxToggle = document.getElementById("chatbox-toggle");

  // If the chatbox is hidden, show it and place it just below the GIF
  if (chatbox.style.display === "none" || chatbox.style.display === "") {
    chatbox.style.display = "block"; // Show the chatbox

    // Position the chatbox below the GIF
    var rect = chatboxToggle.getBoundingClientRect();
    chatbox.style.top = rect.bottom + "px"; // Place chatbox just below the GIF
    chatbox.style.left = rect.left + "px"; // Align chatbox with the GIF
  } else {
    chatbox.style.display = "none"; // Hide the chatbox
  }
}
// Toggle the note visibility when "Songs" is clicked
document
  .getElementById("songs-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link

    var note = document.getElementById("song-note");

    // Toggle the visibility of the note
    if (note.style.display === "none" || note.style.display === "") {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  });
// Toggle the song note when "Songs" is clicked
function toggleSongNote(event) {
  event.preventDefault(); // Stop it from trying to open a new page

  var note = document.getElementById("song-note");

  // Toggle the 'active' class to show/hide the note
  note.classList.toggle("active");
}
