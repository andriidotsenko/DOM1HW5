"use strict"

// 1. Задача на селектори

//  для елементу з текстом 'Навігація по DOM дереву'
const headerTwo = document.getElementById('headerTwo')

console.log(headerTwo)

//======================================================
// для першого елементу <section>
const section = document.getElementsByTagName('section')[0]

console.log(section)

//=======================================================
// для елементу списку з текстом 'Пункт 5'
function queryItemFive() {
	let listItems = document.querySelectorAll('li')
	let resultArr = []
	for (let i = 0; i < listItems.length; i++) {
		if (listItems[i].textContent === 'Пункт 5') {
			resultArr.push(listItems[i])
			return resultArr[0]
		}
	}
}

console.log(queryItemFive())

//========================================================
// для елементу з класом 'hatredLevelBlock'

const hatredLevelBlock = document.getElementsByClassName('hatredLevelBlock')[0]
console.log(hatredLevelBlock);