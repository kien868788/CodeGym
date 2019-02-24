const chiaHet = () => {
  var a1 = parseInt(document.getElementById('a1').value);
  var b1 = parseInt(document.getElementById('b1').value);
  var result = document.getElementById('result1');
  if (b1 == 0) {
    result.innerHTML = `Không thể chia cho 0`;
    return;
  }
  if (!(a1%b1)) {
    result.innerHTML = `${a1} chia hết cho ${b1}`;
  } else {
    result.innerHTML = `${a1} không chia hết cho ${b1}`;
  }
}

const tuoiVaoLop10 = () => {
  var tuoi = parseInt(document.getElementById('tuoi').value);
  var result2 = document.getElementById('result2');
  if (tuoi >= 15) {
    result2.innerHTML = 'Đủ tuổi vào lớp 10';
  } else {
    result2.innerHTML = 'Không đủ tuổi vào lớp 10';
  }
}

const lonHon10 = () => {
  var so = parseInt(document.getElementById('so').value);
  var result3 = document.getElementById('result3');
  if (so >= 10) {
    result3.innerHTML = 'Lớn hơn 10';
  } else {
    result3.innerHTML = 'Nhỏ hơn 10';
  }
}

const timSoLonNhat = () => {
  var a = parseInt(document.getElementById('a4').value);
  var b = parseInt(document.getElementById('b4').value);
  var c = parseInt(document.getElementById('c4').value);
  const ketQua = a >= b ? (a >=c ? a : c)  : (b >= c ? b : c);
  var result4 = document.getElementById('result4');
  result4.innerHTML = `Số  lớn nhất là ${ketQua}`;
}

const hocluc = () => {
  var kiemtra = parseInt(document.getElementById('a5').value);
  var giuaky = parseInt(document.getElementById('b5').value);
  var cuoiky = parseInt(document.getElementById('c5').value);
  var result5 = document.getElementById('result5');
  const tongDiem = kiemtra*0.2 + giuaky*0.2 + cuoiky*0.6;
  const ketQua = tongDiem >= 8 ? 'Giỏi' : (tongDiem >= 6) ? 'Khá' : (tongDiem >= 4) ? 'Trung Bình' : 'Yếu';
  result5.innerHTML = `Học lực : ${ketQua}`;
}
