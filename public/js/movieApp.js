console.log('samat')

let generalDiv = function(){
	// create an element div
	const $div = $('<div>')
	// set the size
	$div.css({
		'width': '500px',
		'height': '500px',
		'border': '1px solid black',
		'border-radius': '10px',
		'background-color': 'purple'
	})
	$div.appendTo($('body'))
	// append to div conatiner
}