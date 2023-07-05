
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var joke = document.getElementById("create-joke").value;
    createJoke(joke);
    document.getElementById("create-form").reset();
});

function createJoke(joke) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.chucknorris.io/jokes", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log("Joke created:", response);
        }
    };
    var data = JSON.stringify({ value: joke });
    xhr.send(data);
}


function getRandomJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var joke = response.value;
            document.getElementById("read-joke").innerHTML = joke;
        }
    };
    xhr.send();
}


document.getElementById("update-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var id = document.getElementById("update-id").value;
    var joke = document.getElementById("update-joke").value;
    updateJoke(id, joke);
    document.getElementById("update-form").reset();
});

function updateJoke(id, joke) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://api.chucknorris.io/jokes/" + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log("Joke updated:", response);
        }
    };
    var data = JSON.stringify({ value: joke });
    xhr.send(data);
}


document.getElementById("delete-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var id = document.getElementById("delete-id").value;
    deleteJoke(id);
    document.getElementById("delete-form").reset();
});

function deleteJoke(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://api.chucknorris.io/jokes/" + id, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Joke deleted");
        }
    };
    xhr.send();
}
