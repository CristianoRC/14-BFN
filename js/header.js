function getRandomImage() {
    fetch("https://raw.githubusercontent.com/CristianoRC/14-BFN/master/json/headers.json")
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