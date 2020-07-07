var counter = 1
var list  = document.querySelector('#list')
var button = document.querySelector('#button')
var headline = document.querySelector('#headline')
var listItems = document.querySelectorAll('#list li')

list.addEventListener('click', activateItem)


function activateItem(e) {
	if(e.target.nodeName == "LI"){
		headline.innerHTML = e.target.innerHTML;
		for (i = 0; i< e.target.parentNode.children.length; i++){
			e.target.parentNode.children[i].classList.remove('active')
		}
		e.target.classList.add('active');
	}

}

button.addEventListener('click', createNewItem)

function createNewItem(){
	list.innerHTML += `<li>New Item ${counter}</li>`
	counter++
}