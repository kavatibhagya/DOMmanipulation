// console.log(document.head);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.all[10]);
// console.log(document.all);
// getElementById //
//console.log(document.getElementById('header-title'));
//  const headertitle = document.getElementById('header-title');
//  console.log(headertitle);
 
//  headertitle.innerText = 'good';
//  headertitle.textContent = 'hello';
// console.log(headertitle.innerText);
// console.log(headertitle.textContent);

// getElemenetsByclassname //

// const Items = document.getElementsByClassName('list-group-item');
// console.log(Items);
// console.log(Items[1]);
// Items[0].innerText = 'hello';
// console.log(Items[0]);
// Items[0].style.backgroundColor = 'red';
// Items[1].style.fontFamily = 'italian';
// for(i=0; i<Items.length; i++){
//     Items[i].style.backgroundColor = 'lightgrey';


//Queryselector //

// const header = document.querySelector('#header-title');
// header.style.borderBottom = ' solid  5px lightgrey';
// const input = document.querySelector('input');
// input.style.color = 'blue';
// input.value ='hello baby';
// const submit = document.querySelector('input[type= "submit"]');
// submit.value = 'send';
// const item = document.querySelector('.list-group-item');
// item.style.color = 'green';
// const lastitem = document.querySelector('.list-group-item:last-child')
// lastitem.style.color = 'violet';
// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'purple';




// querySelectorAll //

//  const titles = document.querySelectorAll('.title');
//  console.log(titles);
//  titles[1].innerText = 'hello babe';
//  const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
//  const even = document.querySelectorAll('.list-group-item:nth-child(even)');
//  for(i=0; i< odd.length; i++){
//      odd[i].style.backgroundColor = '#ccc';
//      even[i].style.backgroundColor = '#f4f4f4';    
//  }

// parent node //

 //const itemList = document.querySelector('#items');
// console.log(itemList);
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.style.fontFamily = 'italian';

// parentelement //


// const itemList = document.querySelector('#items');
// console.log(itemList);
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.style.fontFamily = 'italian';


// childnode //
// console.log(itemList.childNodes)


// children //

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';


// firstchild //
// console.log(itemList.firstChild);

// firstChildElement //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'bhagya';

// lastChild //
// console.log(itemList.lastChild);
   
// lastElementChild //
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'raju';

// previous sibling
// console.log(itemList.previousSibling);

// previous Elementsibling
//  console.log(itemList.previousElementSibling);
//  itemList.previousElementSibling.style.color = 'purple';

//createElement
// create div 
//  var newDiv = document.createElement('div');
//  console.log(newDiv);
// //  adding className
//  newDiv.className = 'hello';

// //  adding id
//  newDiv.id = 'helloId';

// // adding attribute
//  newDiv.setAttribute('title' , 'helloDiv');

// //  create text node
//  var newDivText = document.createTextNode('hello world');

// // adding text to node
//  newDiv.appendChild(newDivText);
//  console.log(newDiv);
 
// var container = document.querySelector('header .container' );
// var h1 = document.querySelector('header h1');
// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);
 
// // EVENTS //
// const button = document.querySelector('#button').addEventListener('click', buttonclick);
// function buttonclick(){

//       document.querySelector('#header-title').textContent = 'Changed';
//       document.querySelector('#main').style.backgroundColor = '#758484';
//     // console.log('button clcicked');
//}
// RUN EVENTS //
//const button = document.querySelector('#button');
//const box = document.querySelector('#box');
// addEventListener('click', runEvent);

// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
//  box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mouseleave', runEvent);
//const itemInput = document.querySelector('input[type="text"]');
 const form = document.querySelector('form');
// itemInput.addEventListener('input', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// const select = document.querySelector('select');
// select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);


function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE:' +e.type);
  // console.log(e.target.value);
  // const box = document.querySelector('#box');
  // document.getElementById('box').innerText = e.target.value;
}






