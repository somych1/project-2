//Switch between login and register tabs on login page
$('#tabs h4').on('click',(e) => {
	let tabs = $('#tabs h4');
	let tab;
	for (let i = 0; i < tabs.length; i++) {
		tab = tabs.eq(i);
		tab.removeClass('highlighted');
	}
	let currTab = $(e.currentTarget)
	currTab.addClass('highlighted');
	let action = $('form').attr('action')
	action = "/"+currTab.text().toLowerCase()
	$('form').attr('action',action);
	$('#error').remove();
})

//Show/hide showtimes for a theatre
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

//Load current location
function getLocation() {
	if ($('#zipcode input').val() === "Using current location") {
		$('#zipcode input').val('');
	}

	if ($('input[name="lat"]').val() && $('input[name="long"]').val()) {
		enablePosition();
	}
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(setPosition)
	}
}

function setPosition(position) {

	let lat = $('input[name="lat"]');
	lat.val(position.coords.latitude);
	let long = $('input[name="long"]');
	long.val(position.coords.longitude);

	$('#zipcode a').off('click');
	enablePosition();
}

function enablePosition() {
	$('#zipcode a').on('click',useCurrentLoc)
	$('#zipcode a').removeClass('hidden');
}

function useCurrentLoc(e) {

	let useCurr = $('input[name="useCurr"]');
	useCurr.val('true');

	$(e.currentTarget).off('click');
	$(e.currentTarget).on('click',useOtherLoc);
	$(e.currentTarget).text('Use a different location');

	$('#zipcode input[name="zipcode"]').val('Using current location');
	$('#zipcode input[name="zipcode"]').prop('disabled',true);
}

function useOtherLoc(e) {
	$('input[name="useCurr"]').val('false');

	$(e.currentTarget).off('click');
	$(e.currentTarget).on('click',useCurrentLoc);
	$(e.currentTarget).text('Use current location');

	$('#zipcode input[name="zipcode"]').val('');
	$('#zipcode input[name="zipcode"]').prop('disabled',false);
}

getLocation();
