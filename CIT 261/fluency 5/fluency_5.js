
 const testObject = {
  name: "Eric Guerrero",
  location: "Rexburg, Idaho",
  major: "Software Engineering",
}
// Check browser support
if (typeof(Storage) !== "undefined") {

    // Store
    localStorage.setItem('user', JSON.stringify(testObject));

    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem('user');

    localStorage.removeItem('name');

  } 

  else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  





