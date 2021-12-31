var diemChuanEl = document.getElementById("diemHoiDong");
var diemThi1El = document.getElementById("mon1");
var diemThi2El = document.getElementById("mon2");
var diemThi3El = document.getElementById("mon3");

var thongBao1El = document.getElementById("thongBao1");

function ketQua() {
  var diemChuan = diemChuanEl.value * 1;
  var diemThi1 = diemThi1El.value * 1;
  var diemThi2 = diemThi2El.value * 1;
  var diemThi3 = diemThi3El.value * 1;

  var doiTuong = document.getElementById("doiTuong").value;

  switch (doiTuong) {
    case "1":
      doiTuong = 2.5;
      break;
    case "2":
      doiTuong = 1.5;
      break;
    case "3":
      doiTuong = 1;
      break;
    default:
      doiTuong = 0;
  }

  var khuVuc = document.getElementById("khuVuc").value;

  switch (khuVuc) {
    case "dt1":
      khuVuc = 2;
      break;
    case "dt2":
      khuVuc = 1;
      break;
    case "dt3":
      khuVuc = 0.5;
      break;
    default:
      khuVuc = 0;
  }

  var diemTongKet = diemThi1 + diemThi2 + diemThi3 + doiTuong + khuVuc;

  if (diemChuan <= diemTongKet) {
    thongBao1El.innerText =
      " Bạn đã đậu với số điểm là :  " + diemTongKet + " điểm";
  } else {
    thongBao1El.innerText =
      " Bạn đã rớt với số điểm là :  " + diemTongKet + " điểm";
  }
}
