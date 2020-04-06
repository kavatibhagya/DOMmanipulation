const form = document.querySelector('#addForm');
const itemList = document.querySelector('#itemsUl');
const filter = document.querySelector('#filter');

form.addEventListener('submit' , addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup' , filterItem);

 function addItem(e){
     e.preventDefault();
     const ele = document.querySelector('#itemIp');
     const newItem = ele.value;
     const li = document.createElement('li');
     li.className = "list-group-item";
     li.appendChild(document.createTextNode(newItem)); 

     const deleteBtn = document.createElement('button');
     deleteBtn.className = "btn btn-danger btn-sm float-right delete";
     deleteBtn.appendChild(document.createTextNode('X'));
     li.appendChild(deleteBtn);
    
     itemList.appendChild(li);
     ele.value = ' ';

     
    

     


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
 function filterItem(e){
     var text = e.target.value.toLowerCase();
     const items = itemList.getElementsByTagName('li');
     Array.from(items).forEach(function(item){
         var itemName = item.firstChild.textContent;
         if(itemName.toLowerCase().indexOf(text) != -1){
             item.style.display = 'block';

         }else{
             item.style.display = 'none';
         }
     })
     

 }