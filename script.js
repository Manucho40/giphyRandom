 const img = document.getElementById('img');
 const but = document.getElementById('but');
const varImg = 'https://api.giphy.com/v1/gifs/trending?api_key=SMROQVzzXdjKlBRbLT8KD4Zeuf6SuAxf&limit=25&rating=g';
function fetchImg (){
    fetch(varImg)
        .then(res => res.json())
        .then(data => {
            but.addEventListener('click', imgRand(data))   
            // console.log(data.data)
        })
        .catch((err) => console.log("error"))
}


fetchImg()


const imgRand = (tab) => {
        let randomNumb = Math.round(Math.random() * ((tab.data.length - 1) - 0) + 0);
        img.setAttribute('src', tab.data[randomNumb].images.downsized.url);
    // console.log(randomNumb)
    // console.log(tab.data[randomNumb].images.downsized.url)
    
}

// data[0].images.downsized.url