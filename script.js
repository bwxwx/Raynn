function btnkm() {
    var kmnum = document.getElementById('kminput').value;
document.getElementById('mileinput').value=kmnum/1.609344;
}
function btnmile() {
milenum = document.getElementById('mileinput').value;
document.getElementById('kminput').value=milenum*1.609344;
}
