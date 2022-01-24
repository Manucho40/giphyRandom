 const img = document.getElementById('img');
const varImg = 'https://api.giphy.com/v1/gifs/trending?api_key=SMROQVzzXdjKlBRbLT8KD4Zeuf6SuAxf&limit=25&rating=g';
function fetchImg (){
    fetch(varImg)
        .then(res => res.json())
        .then(data => {
            imgRand(data)
            // console.log(data.data)
        })
        .catch((err) => console.log("error"))
}


fetchImg()


const imgRand = (tab) => {
    setInterval(() => {
        let randomNumb = Math.round(Math.random() * ((tab.data.length - 1) - 0) + 0);
        console.log(randomNumb)
        img.setAttribute('src', tab.data[randomNumb].images.downsized.url)
    }, 1000)
    // console.log(randomNumb)
    // console.log(tab.data[randomNumb].images.downsized.url)
    
}

// data[0].images.downsized.url