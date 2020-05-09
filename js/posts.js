function getCardHtml(creator, date, url) {
    return `<div class="col-12 col-md-6 col-lg-4">
        <article class="card">
            <img class="card-img-top"
                src="${url}"
                alt="Article Image">
            <div class="card-body">
            <div class="card-subtitle mb-2 text-muted">Enviada por ${creator}, ${date}.</div>
            </div>
        </article>
    </div>`;
}

function getImages() {
    fetch("../json/posts.json")
        .then(response => {
            response.json().then(json => {
                setImages(json)
            })

        });
}

function setImages(posts) {
    const container = document.getElementById("posts-container");

    posts.forEach(p => container.innerHTML += getCardHtml(p.creator, p.date, p.url))
}

getImages();