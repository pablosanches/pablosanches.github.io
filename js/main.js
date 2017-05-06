window.onscroll = function(ev) {
	var top  = window.scrollY,
		$header = document.querySelector('.site-header');

	if (top > 52) {
		$header.classList.remove('top');
		$header.classList.add('notTop');
	} else {
		$header.classList.remove('notTop');
		$header.classList.add('top');
	}
};