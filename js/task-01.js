const categoriesEl = document.getElementById("categories")

    console.log(categoriesEl.children.length)

const liItem = document.querySelectorAll(".item")
liItem.forEach(el => {
    console.log(el.firstElementChild.textContent)
    console.log(el.lastElementChild.children.length)
})