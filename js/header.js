function getRandomImage() {
    fetch("../json/headers.json")
        .then(response => {
            response.json().then(json => {
                const index = Math.floor(Math.random() * json.length);
                setHeaderImage(json[index]);
            })

        });

}


function setHeaderImage(imageUrl) {
    const header = document.getElementById("home");
    header.style.backgroundImage = `url('${imageUrl}')`;
}

getRandomImage();