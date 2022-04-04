alert("jbkuhg");
function disp_w_h() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  document.querySelector(
    "#red_1"
  ).innerHTML = `<p id="display_width_height">${w}*${h}></p>`;
  console.log(info_w_h);
}
window.onresize = disp_w_h;
