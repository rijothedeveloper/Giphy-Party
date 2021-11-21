console.log("Let's get this party started!");

async function getRandomImgFromApi(searchString) {
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", { params: {
        q: searchString, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }});
    console.log(res);
    addImageToHtml(res.data.data[0].images.downsized.url);
    return res;
}

function addImageToHtml(imgUrl) {
    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', imgUrl);
    imgTag.style.margin = "5px"
    const imgArea= document.querySelector("#image-area");
    imgArea.append(imgTag);
}

const form = document.querySelector("#query-form");
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    getRandomImgFromApi(evt.currentTarget[0].value);
})