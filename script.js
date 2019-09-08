//form submission functionality
$(function addItemToList() {
	$('#js-shopping-list-form').submit(function(e) {
		e.preventDefault();
		const inputValue = $('#js-shopping-list-form input').val();
		$('.shopping-list').append(`<li><span class="shopping-item">${inputValue}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
		$('#js-shopping-list-form input').val('');
	});
});

//"check" button functionality
$(function checkButton() {
	$('.shopping-list').on('click', '.shopping-item-toggle', function() {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
	})
});

//"delete" button functionality
$(function deleteButton() {
	$('.shopping-list').on('click', '.shopping-item-delete', function() {
		$(this).closest('li').remove();
	})
})