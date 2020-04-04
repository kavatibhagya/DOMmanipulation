const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');

form.addEventListener('submit' , addItem);

 function addItem(e){
     e.preventDefault();
     const newItem = document.querySelector('#item').value;
     const li = document.createElement('li');
     li.className = "list-group-item";
     li.appendChild(document.createTextNode(newItem));
     itemList.appendChild(li);

     


 }