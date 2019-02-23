
const puzzles = document.querySelectorAll('.img');

const images = [
        ['cat1','cat2','cat3','cat4','cat5'],
        ['monkey1','monkey2','monkey3','monkey4','monkey5'],
        ['panda1','panda2','panda3','panda4','panda5']
      ];

(function() {
  puzzles.forEach((e,i) => {
    const randomNumber = Math.floor(Math.random() * 3);
    e.src = "./img/" + images[randomNumber][i] + ".jpg";
  });
}());

const checkImage = () => {
  const firstElemetValue = puzzles[0].src.replace('.jpg','');
  for (let i = 1; i < 5; i++) {
    if (puzzles[i].src != firstElemetValue.substring(0,firstElemetValue.length-1) + (i + 1) + '.jpg') return false;
  }
  return true;
}

const changeImage = (id) => {
  const randomNumber = Math.floor(Math.random() * 3);
  puzzles[id].src = './img' + images[randomNumber][id] + '.jpg';
  console.log(puzzles[id].src = './img/' + images[randomNumber][id] + '.jpg');
}


const onClick = function({target}) {
  const {id} = target;
  changeImage(id-1);
  if (checkImage()) {
    puzzles.forEach(e => {
      e.style.boxShadow = 'red 4px 4px 9px';
    })
  } else {
    puzzles.forEach(e => {
      e.style.boxShadow = '';
    })
  }
}

puzzles.forEach(e => {
  e.addEventListener('click', onClick);
});
