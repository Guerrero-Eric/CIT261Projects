/*function addElement () { 
     // create a new div element 
    var newDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  

     // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
}
*/
  function appendFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("appendChild()");
    node.appendChild(textnode);
    document.getElementById("myAppendList").appendChild(node);
  }

  function insertFunction() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("insertBefore()");
    newItem.appendChild(textnode);
  
    var list = document.getElementById("myInsertList");
    list.insertBefore(newItem, list.childNodes[0]);
  }

  function removeFunction() {
    var list = document.getElementById("myRemoveList");
    list.removeChild(list.childNodes[0]);
  }