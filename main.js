const form = document.querySelector('#addForm');
const itemList = document.querySelector('#itemsUl');

form.addEventListener('submit' , addItem);

itemList.addEventListener('click', removeItem);


 function addItem(e){
     e.preventDefault();
     const newItem = document.querySelector('#itemIp').value;
     const li = document.createElement('li');
     li.className = "list-group-item";
     li.appendChild(document.createTextNode(newItem)); 

     const deleteBtn = document.createElement('button');
     deleteBtn.className = "btn btn-danger btn-sm float-right delete";
     deleteBtn.appendChild(document.createTextNode('X'));
     li.appendChild(deleteBtn);
    
     itemList.appendChild(li);


     


 }
 function removeItem(e){
  
     if(e.target.classList.contains('delete'))
     {
         if(confirm('Are you sure?')) 
         {
              const li = e.target.parentElement;
              itemList.removeChild(li);
             
         }
     }
 }