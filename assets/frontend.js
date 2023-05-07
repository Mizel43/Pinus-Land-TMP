$(document).on('click', '._js-input', function(){
	let input = $(this).find('input');
	let inputInserted = '<input type="hidden" name="' + input.attr('name') + '" value="' + input.val() + '">';
	$('#form-4401').append(inputInserted);
});
