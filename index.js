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

donutShops.appendChild(donutImg)


}



donutImg.addEventListener('click')
