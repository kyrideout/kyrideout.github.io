

function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
  document.getElementById(lightboxID).classList.remove('hidden');
}


function unhideLightbox1() {
	unhideLightbox("death")
}
document.getElementById("one").onclick = unhideLightbox1;


function unhideLightbox2() {
	unhideLightbox("tomb-fact")
}
document.getElementById("two").onclick = unhideLightbox2;

function unhideLightbox3() {
	unhideLightbox("post")
}
document.getElementById("three").onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox("church-fact")
}
document.getElementById("four").onclick = unhideLightbox4;

function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
}

function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
