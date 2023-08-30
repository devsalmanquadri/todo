// src =
//   'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
// integrity =
//   'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz'
// crossorigin = 'anonymous'

let Date1
let Time
let a
setTimeout(() => {
  setInterval(() => {
    a = new Date()
    Date1 = a.toDateString()
    Time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
    document.getElementById('time').innerHTML = Time + ' on ' + Date1
  }, 1000)
  setInterval(() => {
    document.getElementById('time').innerHTML = 'Hello'
  }, 10000)
}, 1000)

let clr1 = document.getElementById('btn1').style.backgroundColor

function mouseup () {
  document.getElementById('btn1').style.backgroundColor = clr1
}
function mouseup1 () {
  document.getElementById('btn2').style.backgroundColor = clr1
}
function mouseup2 () {
  document.getElementsById('btn3').style.backgroundColor = clr1
}

function mousedown () {
  document.getElementById('btn1').style.backgroundColor = 'Grey'
}
function mousedown1 () {
  document.getElementById('btn2').style.backgroundColor = 'Grey'
}
function mousedown2 () {
  document.getElementsById('btn3').style.backgroundColor = 'Grey'
}

function clicked () {
  let name1 = document.getElementById('input2').value
  let age1 = document.getElementById('input3').value
  if (localStorage.getItem('ItemsJson') == null) {
    ItemJsonArray = []
    ItemJsonArray.push([name1, age1])
    localStorage.setItem('ItemsJson', JSON.stringify(ItemJsonArray))
  } else {
    ItemJsonArraystr = localStorage.getItem('ItemsJson')
    ItemJsonArray = JSON.parse(ItemJsonArraystr)
    ItemJsonArray.push([name1, age1])
    localStorage.setItem('ItemsJson', JSON.stringify(ItemJsonArray))
  }
  update()
}

function update () {
  if (localStorage.getItem('ItemsJson') == null) {
    ItemJsonArray = []
    localStorage.setItem('ItemsJson', JSON.stringify(ItemJsonArray))
  } else {
    ItemJsonArrayStr = localStorage.getItem('ItemsJson')
    ItemJsonArray = JSON.parse(ItemJsonArrayStr)
  }
  let tableBody = document.getElementById('tableBody')
  let str1 = ''
  ItemJsonArray.forEach((element, index) => {
    str1 += `
    <tr>
    <td scope="row">${index + 1}</td>
    <td>${element[0]}</td>
    <td>${element[1]}</td> 
    <td><button class="btn3" id="btn3" onmouseup="mouseup2()"
    onmousedown="mousedown2()" onclick="deleted(${index})">Delete</button></td> 
    </tr>`
  })
  tableBody.innerHTML = str1
}
add = document.getElementById('btn1')
add.addEventListener('click', update)
update()

function deleted (itemIndex) {
  console.log('Delete', itemIndex)
  ItemJsonArrayStr = localStorage.getItem('ItemsJson')
  ItemJsonArray = JSON.parse(ItemJsonArrayStr)
  ItemJsonArray.splice(itemIndex, 1)
  localStorage.setItem('ItemsJson', JSON.stringify(ItemJsonArray))
  update()
}
function clearStorage () {
  if (confirm('Do you areally want to clear?')) {
    console.log('Clearing the storage')
    localStorage.clear()
    update()
  }
}
