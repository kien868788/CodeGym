const data = "Tôi là một thằng đần!!!";
const textArea = document.getElementById('textarea');
var i = 0;
textArea.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (i == data.length) {
    i = 0;
    textArea.value = "";
  }
  textArea.value += data[i++];
});
