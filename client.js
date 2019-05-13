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

    let score = parseFloat(document.getElementById('post').value);

    fetch('http://localhost:3003/', {
        method: 'POST',
        headers: {
            'Content-Type':"application/json; charset=utf-8"
        },
        body: JSON.stringify({
            score:score
        })
    }).then(()=>{alert(score);})
}
