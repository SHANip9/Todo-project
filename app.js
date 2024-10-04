//change made
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function(){
   // console.log("clicked:");
   let item = document.createElement("li");
   item.innerText = inp.value;

   let delbtn = document.createElement("button");
   delbtn.innerText = "Delete";
   delbtn.classList.add("delete");
    console.log(inp.value);                           //new value won't be (event Delegation)

    item.appendChild(delbtn); //deleting the store val in ul
    ul.appendChild(item);   //appending to store valuue in ul after entering
inp.value ="";  //reseting inp to empty string in placeholder

//event bubbling
ul.addEventListener("click", function(event){
    
    console.dir(event.target.nodeName); //log or dir
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
        //  event.target.parentNode.remove(); //remove parent node
    }
});
})
