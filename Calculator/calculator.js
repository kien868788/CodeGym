const insert = ({innerHTML}) => {
  console.log(innerHTML);
    var inputTag = document.getElementById('input');
    inputTag.value = innerHTML + inputTag.value;
}
