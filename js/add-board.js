function addBoard() {
	var node = document.createElement('form')
	node.innerHTML =
		'<div class="newitem-title-wrapper">' +
		'<input id="trello-add-board-input" type="text">' +
		'<input id="trello-add-board-submit" type="submit" value="Add">' +
		'</div>'
	node.style.display = 'none'
	return node
}