// Add your code here
function submitData (name, email) {
    let message = "hello world"
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
        })
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(body => newObj(body.id))
    
    .catch(function (error) {
        document.body.innerHTML = error
        alert("Unauthorized Access");
        // console.log(error.message)
    })
}
function newObj (newId) {
    document.getElementsByTagName("body")[0].innerHTML = newId;
}
