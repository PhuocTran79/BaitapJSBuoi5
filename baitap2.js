var nhapDienEl = document.getElementById("nhapDien");
var nhapTenEl = document.getElementById("nhapTen");
var thongBao2El = document.getElementById("thongBao2");

function tinhTien() {
  var tienPhaiTra;
  var nhapTen = nhapTenEl.value;
  var nhapTienDien = nhapDienEl.value * 1;

  if (nhapTienDien <= 50) {
    tienPhaiTra = nhapTienDien * 500;
  }
  if (nhapTienDien > 50 && nhapTienDien <= 100) {
    tienPhaiTra = 500 * 50 + (nhapTienDien - 50) * 650;
  }
  if (nhapTienDien > 100 && nhapTienDien <= 200) {
    tienPhaiTra = 500 * 50 + 50 * 650 + (nhapTienDien - 100) * 850;
  }
  if (nhapTienDien > 200 && nhapTienDien <= 350) {
    tienPhaiTra = 500 * 50 + 50 * 650 + 100 * 850 + (nhapTienDien - 200) * 1100;
  }
  if (nhapTienDien > 350) {
    tienPhaiTra =
      500 * 50 +
      50 * 650 +
      100 * 850 +
      150 * 1100 +
      (nhapTienDien - 350) * 1300;
  }
  thongBao2El.innerHTML =
    "Số tiền khách hàng " +
    nhapTen +
    "  phải thanh toán là :  " +
    tienPhaiTra +
    "  VND";
}
