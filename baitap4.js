var thongBao4El = document.getElementById("thongBao4");


function tienCuoc123() {
  var phanLoai = document.getElementById("phanLoai").value;
  var kenhCaoCap = document.getElementById("caoCap").value * 1;
  var congKetNoi = document.getElementById("congKetNoi1").value * 1;
  var ketNoi = document.getElementById("ketNoi").value * 1;
  var maKhachEl = document.getElementById("maKhach").value;
  var tongKetNoi;
  var tongTien;

  switch (phanLoai) {
    case "nhaDan":
      tongTien = 4.5 + 20.5 + kenhCaoCap * 7.5;
      break;
    default:
      if (ketNoi <= 10) {
        tongKetNoi = ketNoi * 7.5;
      }
      if (ketNoi > 10) {
        tongKetNoi = ketNoi * 5;
      }
      tongTien = 15 + tongKetNoi + kenhCaoCap * 50;
  }
  thongBao4El.innerText = "Số tiền cước của mã " + maKhachEl + " là :  " + tongTien + "$"
}
