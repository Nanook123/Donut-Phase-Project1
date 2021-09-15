let BASE_URL = 'http://localhost:3000/donutshops'
let COMMENMT_URL = 'http://localhost:3000/comments'

fetch(BASE_URL)

.then(function(response){
    return response.json()
})
.then((donutData) => donutData.forEach((donutObj) => renderDonuts(donutObj)))



function renderDonuts(donutObj){
    let donutShops = document.getElementById("donut-shops")
    let donutImg = document.createElement('Img')
    donutImg.className = "donutimages"
    donutImg.src = donutObj.image;
console.log(donutObj)








donutImg.addEventListener('click', function (e){
    // e.preventDefault()
    const placeDonut = document.querySelector('#placeholdernut')
    placeDonut.src = donutObj.image

    const shopName = document.querySelector('.shopname')
    shopName.innerText = donutObj.name

    const locale = document.querySelector('.location')
    locale.innerText = donutObj.Location

    const rate = document.querySelector('#star-rating')
    const starRating = document.createElement('img')
    starRating.src = donutObj.rating
    //resets image to nothing - populates with new stars on each click
    rate.innerHTML = ""

    rate.appendChild(starRating)

})

donutShops.appendChild(donutImg)
}


// function reset()