let BASE_URL = 'http://localhost:3000/donutshops'
let COMMENMT_URL = 'http://localhost:3000/comments'

fetch(BASE_URL)

.then(function(response){
    return response.json()
})
.then(function(donutData){
    donutData.forEach((donuts) => renderDonuts((donuts)))
})


function renderDonuts(donutObj){
    let donutshops = document.getElementById("donut-shops")
    let donutImg = document.createElement('Img')
    donutImg.src = donutObj.image;


donutshops.appendChild(donutImg)


}

renderDonuts()


