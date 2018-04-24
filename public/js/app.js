$('#tabs h4').on('click',(e) => {
	let tabs = $('#tabs h4');
	let tab;
	for (let i = 0; i < tabs.length; i++) {
		tab = tabs.eq(i);
		tab.removeClass('highlighted');
	}
	let currTab = $(e.currentTarget)
	currTab.addClass('highlighted');
	let action = "/"+currTab.text().toLowerCase();
	$('form').attr('action',action);
	$('#error').remove();
})

$('select').on('change',(e) => {
	if ($(e.currentTarget)[0].value === "new") {
		$('#author-select').append($('<label for="newAuthor">Author Name:</label>'))
		$('#author-select').append($('<input id="newAuthor" name="newAuthor">'))
	}
	else {
		$('input[name="newAuthor"]').remove();
	}
})

$('.showtime-controls').on('click',(e) => {

	let target = $(e.currentTarget)
	let id = target.attr('id');
	let text = "Showtimes for this theatre ";

	if (target.html() === text+'▼') {
		target.html(text+'&#9650;');
	}
	else {
		target.html(text+'&#9660;');
	}

	$('#showtimes'+id).toggleClass('hidden');
})