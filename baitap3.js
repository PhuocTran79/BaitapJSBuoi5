var hoTenEl = document.getElementById("hoTen");
var thuNhapEl = document.getElementById("thuNhap");
var nguoiPhuThuocEl = document.getElementById("nguoiPhuThuoc");
var thongBao3El = document.getElementById("thongBao3");

function tongTien() {
  var hoTen = hoTenEl.value;
  var thuNhap = thuNhapEl.value * 1;
  var nguoiPhuThuoc = nguoiPhuThuocEl.value * 1;
  var tienThue;

  if (thuNhap <= 60) {
    tienThue = (thuNhap - 4 - nguoiPhuThuoc * 1.6) * 0.05;
  }
  if (thuNhap > 60 && thuNhap <= 120) {
    tienThue = (thuNhap - 4 - nguoiPhuThuoc * 1.6) * 0.1;
  }
  if (thuNhap > 120 && thuNhap <= 210) {
    tienThue = (thuNhap - 4 - nguoiPhuThuoc * 1.6) * 0.15;
  }
  if (thuNhap > 210 && thuNhap <= 384) {
    tienThue = (thuNhap - 4 - nguoiPhuThuoc * 1.6) * 0.2;
  }
  if (thuNhap > 384 && thuNhap <= 624) {
    tienThue = (thuNhap - 4 - nguoiPhuThuoc * 1.6) * 0.25;
  }
  if (thuNhap > 624 && thuNhap <= 960) {
    tienThue = (thuNhap - 4 - nguoiPhuThuoc * 1.6) * 0.3;
  }
  if (thuNhap > 960) {
    tienThue = (thuNhap - 4 - nguoiPhuThuoc * 1.6) * 0.35;
  }
  var tienThue = Math.round(tienThue * 100) / 100;
  thongBao3El.innerText =
    "Số tiền thuế khách hàng " + hoTen + " phải trả là " + tienThue + " triệu VND";
}
