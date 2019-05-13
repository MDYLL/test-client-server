function get() {
    alert("Get");
    fetch('http://localhost:3003/')
        .then((response) => {
            alert("step 1");
            return response.json();
        })
        .then((data) => {
            let number = parseFloat(data);
            alert(number);
        })
        .catch(() => {
            alert("error");
        })
}

function post() {
    alert("Post");
    let score = parseFloat(document.getElementById('post').value);
    fetch('/', {
        method: 'POST',
        body: JSON.stringify({
            score:score
        })
    }).then(()=>{alert(score);})
}
