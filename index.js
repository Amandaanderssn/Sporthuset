// const googleMapsImg = document.getElementById('googleMaps');
const mainContent = document.querySelector('.mainContent-hittaHit')

const googleMapsImg = document.createElement('img');
googleMapsImg.classList.add('googleMaps')
googleMapsImg.src = "../Media/googleMaps.png"

mainContent.append(googleMapsImg)

console.log("hej")

googleMapsImg.addEventListener('click', () => {
    if (googleMapsImg.src = "../Media/googleMaps.png") {
        googleMapsImg.src = "../Media/googleMapsZoom.png";
    } else
        googleMapsImg.src = "../Media/googleMaps.png";

})
