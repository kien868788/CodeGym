const tiengAnh = [
  'dog','cat','fish','bird','monkey'
];

const tiengViet = [
  'chó','mèo','cá','chim','khỉ'
];


const output = document.getElementById('result');
const display = () => {
  const input = document.getElementById('tu').value;
  if (tiengAnh.indexOf(input) != -1) {
    output.innerHTML = `Nghĩa :  ${tiengViet[tiengAnh.indexOf(input)]}`;
  } else {
    output.innerHTML = `Không tìm thấy từ`;
  }
}
