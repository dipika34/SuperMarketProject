function register() { 
    // 1. Fixed: Added missing quotes around the ID strings
    const user = document.getElementById('name').value; 
    const Pwd = document.getElementById('pwd').value; 

    // 2. Fixed: Added missing quotes around string values ('Dipika' and '123')
    if (user == 'Dipika' && Pwd == '123') { 
        // 3. Fixed: Added missing quotes around the alert text
        alert('Logged in successfully'); 
        
        // 4. Fixed: window.location.href is a property, not a function
        
    } else { 
        // 5. Fixed: Added missing quotes around the console message
        console.log('Invalid username or password'); 
    } 
}
// function DIV(){
//     const div=document.getElementById("div");
//     div.innerHTML="hello!";
// }
