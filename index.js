let key=document.getElementById('key')
let modal=document.getElementById('modal')
let p=document.getElementById('p')

let container=document.getElementById('container')
key.addEventListener('keydown',function(event){
    // console.log(event)
    if(event.code=="Enter"){
    // console.log(key.value)
    let promise=fetch('https://api.unsplash.com/search/photos?query=%27'+key.value+'%27&per_page=33&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
promise.then(data=>data.json()).then(promise=>{
    all(promise)
})

    }
})
let button=document.getElementById('button')
button.onclick=function(){
    // console.log(key.value)
    let promise=fetch('https://api.unsplash.com/search/photos?query=%27'+key.value+'%27&per_page=33&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
promise.then(data=>data.json()).then(promise=>{
    all(promise)
})

}


function all(item){
    container.innerHTML='';
    // console.log(item)
    for(i=0;i<item.results.length;i++){
        let url=item.results[i].urls.small
        // console.log(url)
        let img=document.createElement('img')
        let src=img.setAttribute('src',url)
       
        container.append(img)

    // console.log(imgAll)
  

    }
    let imgAll=document.getElementsByTagName('img')

    for(let i=0;i<imgAll.length;i++){
        imgAll[i].addEventListener('dblclick',function(e){
            let url=e.target.getAttribute('src')
            console.log(url)
            modal.style.backgroundImage=`url(${url})`
            modal.classList.add('active')
        })
    }
}

p.onclick=function(){
    modal.classList.remove('active')
}