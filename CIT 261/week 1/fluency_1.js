
function myloop() {
    var i;
    for (i = 0; i < 10; i++) {
        document.write("Hello World!\n");
     }
    
    }
    
    var time = new Date();
    var hour = time.getHours();
   
    function myifFunction() {
        if (time < 10) {
            document.write("Good Morning\n");
            }
            else if (time < 20) {
                document.write("Good Day\n");
                }
        else{
            document.write("Good Evening\n");
        }
    }

    function myFunction() {
        document.getElementById("message").innerHTML = "Hello World";
    }
