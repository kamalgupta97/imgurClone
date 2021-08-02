let pageCount =1
let postCount=1
const getPost=()=>{
    let fetchURL = `https://api.unsplash.com/photos?page=${pageCount}&per_page=8&client_id=0HexvSXsxFNjKOsv5IC-7OV_XZRODiDbLOJzPHRdfZI`;
var Imageurls=[]
let myheaders = {
  
    "client": "createClient 563492ad6f9170000100000127e4364dc0a943818a60c80ce6965329"
  }

  fetch(fetchURL,{
    method: "GET",
 
  })
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    Imageurls=JSON.parse(body).map((item,i)=>{
        item.urls.raw
        var imageCards =document.querySelector('.images_cards')
        var card =document.createElement('div')
        card.classList.add("card");
        var image =document.createElement('img')
        image.src = item.urls.raw;
      
      
        
        // card.innerHTML =postCount++
      
        imageCards.appendChild(card)
        card.appendChild(image)

    })
    console.log(Imageurls.length)

 
    
 
  })
}

getPost()

  window.addEventListener('scroll',()=>{
      const {scrollHeight,scrollTop,clientHeight}=document.documentElement;

      console.log(scrollTop+clientHeight,scrollHeight)
      if(scrollTop+clientHeight>=(scrollHeight-1)){
          console.log("I am at Bottom")
          showData()
      }
  })



  const showData=()=>{
      setTimeout(()=>{
          pageCount++;
          getPost()
      },300)
  }
 


 