
const noHover = () => {
  position(no.position);
}

const position = (position) => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(no.position + "    " + randomNumber);
    if (position == randomNumber) no.position = (randomNumber + 1) % 5;
    else no.position = randomNumber;
    switch (no.position) {
      case 0:
        no.style.top = '90px';
        no.style.left = '100px';
        break;
      case 1:
        no.style.top = '90px';
        no.style.left = '1000px';
        break;
      case 2:
        no.style.top = '150px';
        no.style.left = '100px';
        break;
      case 3:
        no.style.top = '400px';
        no.style.left = '360px';
        break;
      case 4:
        no.style.top = '500px';
        no.style.left = '500px';
        break;
    }
}

const no = document.getElementById('no');
no.addEventListener('mouseover',noHover);
no.position = 0;

const yes = document.getElementById('yes');
yes.addEventListener('click', (event) => {
  alert('Yes. You are right! ')
})
