const container = {
  buttons : ['red','green','blue'],
  currentPicked: [],
  pick: function(type) {
    if (this.currentPicked.includes(type)){
      const index = this.currentPicked.indexOf(type);
      this.currentPicked.splice(index,1);
    }
    else if (this.currentPicked.length < 2)
              this.currentPicked.push(type);
         else {
           this.currentPicked.shift();
           this.currentPicked.push(type);
         }
    this.display();
  },
  display: function() {
    this.buttons.forEach(e => {
      if (this.currentPicked.includes(e)) {
        document.getElementById(e).style.backgroundColor = e;
      } else {
        document.getElementById(e).style.backgroundColor = '#fff';
      }
    })
  }
}

const buttons = document.querySelector('.container');
buttons.addEventListener('click',(event) => {
    const {value} = event.target;
    container.pick(value);
})
