var add = document.getElementById("addElem");
var list = document.getElementById("Lista");

addAnother = function() {
    var li = document.createElement("li");
    var itemsCount = document.getElementsByTagName("li").length;
    // funkcja prócz dodawania elementów, dodaje im unikalne id
    li.setAttribute("id", "item "+itemsCount)
    li.appendChild(document.createTextNode("item "+itemsCount));
    list.appendChild(li)
}

add.addEventListener('click', function() {
	addAnother()
});
