//Switch between login and register tabs on login page
$('#tabs h4').on('click',(e) => {
	//grab the registration tabs and remove the highlighted class from all of them
	let tabs = $('#tabs h4');
	let tab;
	for (let i = 0; i < tabs.length; i++) {
		tab = tabs.eq(i);
		tab.removeClass('highlighted');
	}

	//add the highlighted class to the selected tab
	let currTab = $(e.currentTarget)
	currTab.addClass('highlighted');

	//change the form action to match the selected tab's name
	let action = $('form').attr('action')
	action = "/"+currTab.text().toLowerCase()
	$('form').attr('action',action);

	//remove any errors that were showing
	$('#error').remove();
})

//Show/hide showtimes for a theatre
$('.showtime-controls').on('click',(e) => {

	//grab the id of the showtime link
	let target = $(e.currentTarget)
	let id = target.attr('id');

	//the default text for the link - this won't change
	let text = "Showtimes for this theatre ";

	//switch between a down and an up arrow in the showtime link
	if (target.html() === text+'▼') {
		target.html(text+'&#9650;');
	}
	else {
		target.html(text+'&#9660;');
	}

	//toggle whether the showtimes are hidden or not
	$('#showtimes'+id).toggleClass('hidden');
})

//Show/hide zipcode input for wishlist
$('.other-zip').on('click',(e) => {
	let form = $($(e.currentTarget).parent()[0]);
	let id = form.attr('id');

	$('form#'+id+' .zip').toggleClass('hidden');
})

//Load current location
function getLocation() {
	//clear out the zipcode box when we get to a page
	if ($('#zipcode input').val() === "Using current location") {
		$('#zipcode input').val('');
	}

	//if the user's location is cached, enable using the current location for searches
	if ($('input[name="lat"]').val() && $('input[name="long"]').val()) {
		enablePosition();
	}
	
	//use HTML5's geolocation to get the user's latitude and longitude
	//if it's successful, enable using the current location for searches
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(setPosition)
	}
}

//set the user's current position
//this gets saved in invisible input boxes on the page
//once this is done, we'll enable searching with the current location
function setPosition(position) {

	let lat = $('input[name="lat"]');
	lat.val(position.coords.latitude);
	let long = $('input[name="long"]');
	long.val(position.coords.longitude);

	$('#zipcode p').off('click');
	enablePosition();

	$('.movie-showtime .currLoc').off('click');
	enablePosition();
}

//enable searching with the current location
function enablePosition() {
	//enable the click event to use current location on the relevant link
	//and show the link
	$('#zipcode p').on('click',useCurrentLoc);
	$('#zipcode p').removeClass('hidden');

	//do the same thing but for each item in the user's wish list
	$('.movie-showtime .currLoc').on('click',useCurrLocForShow);
	$('.movie-showtime .currLoc').removeClass('hidden');
}

//this will fire when the user clicks use current location in the header
function useCurrentLoc(e) {

	let useCurr = $('input[name="useCurr"]');
	useCurr.val('true');

	//add a click event to the use current location link that will stop using the current location
	//change the text to 'Use a different location'
	$(e.currentTarget).off('click');
	$(e.currentTarget).on('click',useOtherLoc);
	$(e.currentTarget).text('Use a different location');
	
	//set the value of the zipcode input to 'Using current location' and disable it
	$('#zipcode input[name="zipcode"]').val('Using current location');
	$('#zipcode input[name="zipcode"]').prop('disabled',true);
}

//this will fire when a user clicks use a different location in the header
function useOtherLoc(e) {
	$('input[name="useCurr"]').val('false');

	//add back the old use current location click event on the use current location link
	//rename it back to 'Use current location'
	$(e.currentTarget).off('click');
	$(e.currentTarget).on('click',useCurrentLoc);
	$(e.currentTarget).text('Use current location');

	//clear out the zipcode box and enable it
	$('#zipcode input[name="zipcode"]').val('');
	$('#zipcode input[name="zipcode"]').prop('disabled',false);
}

//this will fire when the user clicks use current location for a movie on the wish list
function useCurrLocForShow(e) {

	//set useCurr (a hidden input) to true
	let form = $($(e.currentTarget).parent());
	let id = form.attr('id');

	let useCurr = $('form#'+id+' input[name="useCurrForShow"]');
	useCurr.val('true');

	//submit the showtime search request for the movie on the user's wish list
	//it goes to the /movie/:id route in the search controller
	form.submit();
}

getLocation();