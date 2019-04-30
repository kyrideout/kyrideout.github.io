
function unhideSidebox(sideboxID) {
  closeAllSideboxes()
  document.getElementById(sideboxID).classList.remove('hidden');
  document.getElementById(sideboxID).classList.remove('hidden1');
}

function unhideSidebox1() {
	unhideSidebox("one")
  unhideSidebox("One")
}
document.getElementById("one1").onclick = unhideSidebox1;

function unhideSidebox2() {
	unhideSidebox("two")
  unhideSidebox("Two")
}
document.getElementById("two2").onclick = unhideSidebox2;

function unhideSidebox3() {
	unhideSidebox("three")
  unhideSidebox("Three")
}
document.getElementById("three3").onclick = unhideSidebox3;

function unhideSidebox4() {
	unhideSidebox("four")
  unhideSidebox("Four")
}
document.getElementById("four4").onclick = unhideSidebox4;

function closeSidebox(sideboxID) {
	document.getElementById(sideboxID).classList.add('hidden');
}

function closeAllSideboxes() {
	var sideboxElements = document.getElementsByClassName('side-box');

	for (var i = 0; i < sideboxElements.length; i++) {
		var id = sideboxElements[i].id;
		closeSidebox(id);
	}
}
