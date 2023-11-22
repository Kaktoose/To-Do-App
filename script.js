const str = localStorage.getItem('array');
const reminders = str ? JSON.parse(str) : [];

renderListItems()


 let reminderBox = document.getElementById("reminderBox");
 


reminderBox.addEventListener("submit", (e) => {
    e.preventDefault();

   
  
    let reminderText = document.getElementById("reminder").value;
    reminders.splice(0, 0, reminderText)
    renderListItems()
    console.log(reminders)

 

    

 

    let jsonArray = JSON.stringify(reminders)


    // save to localStorage using "array" as the key and jsonArray as the value
    localStorage.setItem('array', jsonArray);
    console.log('stored')

 


});


// get the JSON string from localStorage

// convert JSON string to relevant object

console.log(reminders);

function renderListItems(){
    
    var ul = document.getElementById("list");
    ul.innerHTML='';
    for(let i=0;i<reminders.length;i++){
        var li = document.createElement("li");
        var span = document.createElement("span")
        
        span.appendChild(document.createTextNode(reminders[i]));
        li.appendChild(span) 
        
        li.setAttribute("data-index", i) 
        
        ul.appendChild(li);
    }
    let listItems = document.getElementsByTagName('li')
    for (const li of Array.from(listItems)){
        
        li.addEventListener("click", () =>{
            const index=li.getAttribute("data-index")
            li.remove(index)
            console.log(index)
            reminders.splice(index, 1,)
            localStorage.setItem('array', JSON.stringify(reminders))
            renderListItems()
        
        
        })
    }
    
}







/*listItems.forEach(item => {
    item.addEventListener('click', ()=> {
        
    
        console.log('item removed')
    })

})
*/
