//adding functionality to form submission
$(function addItemToList() {
	$('#js-shopping-list-form').submit(function(e) {
		e.preventDefault();
		const inputValue = $('#js-shopping-list-form input').val();
		$('.shopping-list').append(`<li><span class="shopping-item">${inputValue}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
		$('#js-shopping-list-form input').val('');
	});
});

$(function checkButton() {
	$('ul').on('click', '.shopping-item-toggle', function() {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
	})
});