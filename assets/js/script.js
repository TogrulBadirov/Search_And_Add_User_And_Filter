const modal = document.getElementById('modal')
const modalBox = document.getElementById('modal-box')
const addButton = document.getElementById('add-button')
const close = document.getElementById('close')
const submitButton = document.getElementById('submit-button')
const search = document.getElementById('search')
const categorySearch = document.getElementById('categorySearch')
const table = document.getElementById('table')
const tbody = document.getElementById('tbody')

const image = document.getElementById('image')
const filmName = document.getElementById('film-name')
const filmImdb = document.getElementById('film-imdb')
const category = document.getElementById('category')
const rejisor = document.getElementById('rejisor')

let idd = 0;

const data = [
   
]




console.log(data);
addButton.addEventListener('click',()=>{
    modal.style.display = 'block'
})
close.addEventListener('click',()=>{
    modal.style.display = 'none'
})

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();

    // const tr = document.createElement('tr')
    // const imageColumn = document.createElement('td')
    // const img = document.createElement('img')
    // imageColumn.append(img)
    // const filmNameColumn = document.createElement('td')
    // const filmImdbColumn = document.createElement('td')
    // const categoryColumn = document.createElement('td')
    // const rejisorColumn = document.createElement('td')

    
    // // imageColumn.textContent = image.value
    // img.src = image.value;
    // filmNameColumn.textContent = filmName.value
    // filmImdbColumn.textContent = filmImdb.value
    // categoryColumn.textContent = category.value
    // rejisorColumn.textContent = rejisor.value
    
    // tr.append(imageColumn,filmNameColumn,filmImdbColumn,categoryColumn,rejisorColumn)
    // console.log(tr);
    // tbody.append(tr)
    const obj = {
        image:image.value,
        filmName:filmName.value,
        filmImdb: filmImdb.value,
        category:category.value,
        rejisor:rejisor.value,
        id:idd
    }
    
    rendertable(image.value,filmName.value, filmImdb.value,category.value,rejisor.value,0,true)
    idd++
    
    console.log(data);
    data.push(obj)

    modal.style.display = 'none'

    image.value = ''
    filmName.value = ''
    filmImdb.value = ''
    category.value = ''
    rejisor.value = ''
})


// image = 
// filmName =
// filmImdb =
// category =
// rejisor = 

search.addEventListener('keyup',()=>{
    console.log(search.value);
  
        tbody.innerHTML = '';
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].filmName.includes(search.value)) {
            console.log(data[i]);
            rendertable(data[i].image,data[i].filmName,data[i].filmImdb,data[i].category,data[i].rejisor,data[i].id,false)
        }
        // if (search.value === data[i].filmName) {
        //     table.innerHTML = '';
        //     rendertable(data[i].image,data[i].filmName,data[i].filmImdb,data[i].category,data[i].rejisor)
        // }
        
    }
    console.log(data);
})

function rendertable(imgg,name,imdb,categoryy,rejisorr,id,bool){
    let indexx = 0;
    const tr = document.createElement('tr')
    const imageColumn = document.createElement('td')
    const img = document.createElement('img')
    imageColumn.append(img)
    const filmNameColumn = document.createElement('td')
    const filmNameColumnContent = document.createElement('input')
    const filmNameColumnbutton = document.createElement('button')
    filmNameColumnbutton.textContent = 'edit'
    filmNameColumnContent.setAttribute('readonly','')
    filmNameColumnContent.value = name
    filmNameColumn.append(filmNameColumnContent,filmNameColumnbutton)
    const filmImdbColumn = document.createElement('td')

    const filmImdbColumnContent = document.createElement('input')
    const filmImdbColumnbutton = document.createElement('button')
    filmImdbColumnbutton.textContent = 'edit'
    filmImdbColumnContent.setAttribute('readonly','')
    filmImdbColumnContent.value = imdb
    filmImdbColumn.append(filmImdbColumnContent,filmImdbColumnbutton)

    const categoryColumn = document.createElement('td')
    const rejisorColumn = document.createElement('td')


    const rejisorColumnContent = document.createElement('input')
    const rejisorColumnbutton = document.createElement('button')
    rejisorColumnbutton.textContent = 'edit'
    rejisorColumnContent.setAttribute('readonly','')
    rejisorColumnContent.value = rejisorr
    rejisorColumn.append(rejisorColumnContent,rejisorColumnbutton)


    const deletee = document.createElement('td')
    deletee.textContent = 'X'
    if(bool){
    deletee.setAttribute('id',idd)
    indexx = idd;
    }
    else{
        deletee.setAttribute('id',id)
    indexx = id;
    }
    filmNameColumnbutton.addEventListener('click',()=>{
        if (filmNameColumnbutton.textContent === 'edit') {
            filmNameColumnbutton.textContent = 'save'
            filmNameColumnContent.removeAttribute('readonly','')
        }
        else{
            filmNameColumnbutton.textContent = 'edit'
    filmNameColumnContent.setAttribute('readonly','')
    data.forEach((element,index) => {
        if (element.id == indexx) {
            data[indexx].filmName = filmNameColumnContent.value;
        }
        else{
            console.log('bbbbbbbbbbb');
        }
        
    });

        }
    })
    //
    




    filmImdbColumnbutton.addEventListener('click',()=>{
        if (filmImdbColumnbutton.textContent === 'edit') {
            filmImdbColumnbutton.textContent = 'save'
            filmImdbColumnContent.removeAttribute('readonly','')
        }
        else{
            filmImdbColumnbutton.textContent = 'edit'
            filmImdbColumnContent.setAttribute('readonly','')
    data.forEach((element,index) => {
        if (element.id == indexx) {
            data[indexx].filmImdb = filmImdbColumnContent.value;
        }
        else{
            console.log('bbbbbbbbbbb');
        }
        
    });

        }
    })

//





rejisorColumnbutton.addEventListener('click',()=>{
    if (rejisorColumnbutton.textContent === 'edit') {
        rejisorColumnbutton.textContent = 'save'
        rejisorColumnContent.removeAttribute('readonly','')
    }
    else{
        rejisorColumnbutton.textContent = 'edit'
        rejisorColumnContent.setAttribute('readonly','')
data.forEach((element,index) => {
    if (element.id == indexx) {
        data[indexx].rejisor = rejisorColumnContent.value;
    }
    else{
        console.log('bbbbbbbbbbb');
    }
    
});

    }
})











//
    deletee.addEventListener('click',()=>{
        deletee.parentElement.remove()
        // console.log(data[deletee.getAttribute('id')]);
        // data.pop(deletee.getAttribute('id'))
        // data.splice(deletee.getAttribute('id'), 1)
        data.forEach((element,index) => {
            if (element.id == deletee.getAttribute('id')) {
                data.splice(index,1)
            }
            else{
                console.log(element.id,deletee.getAttribute('id'));
                
            }
        });

    })
    
    // imageColumn.textContent = image.value
    img.src = imgg;
    // filmNameColumn.textContent = name
    // filmImdbColumn.textContent = imdb
    categoryColumn.textContent = categoryy
    // rejisorColumn.textContent = rejisorr
    
    tr.append(imageColumn,filmNameColumn,filmImdbColumn,categoryColumn,rejisorColumn,deletee)
    console.log(tr);
    tbody.append(tr);
}

categorySearch.addEventListener('click',()=>{

    tbody.innerHTML = '';
    console.log();
    for (let i = 0; i < data.length; i++) {
        // if (data[i].filmName.includes(categorySearch.value)) {
            
        //     rendertable(data[i].image,data[i].filmName,data[i].filmImdb,data[i].category,data[i].rejisor)
        // }
        if (categorySearch.value === data[i].category) {
            console.log(data[i]);
            
            rendertable(data[i].image,data[i].filmName,data[i].filmImdb,data[i].category,data[i].rejisor)
        }
        
    }
})










// function rendertable(imgg,name,imdb,categoryy,rejisorr,id,bool){
//     const tr = document.createElement('tr')
//     const imageColumn = document.createElement('td')
//     const img = document.createElement('img')
//     imageColumn.append(img)
//     const filmNameColumn = document.createElement('td')
//     const filmNameColumnContent = document.createElement('input')
//     filmImdbColumn.append(filmNameColumnContent)
//     const filmImdbColumn = document.createElement('td')
//     const categoryColumn = document.createElement('td')
//     const rejisorColumn = document.createElement('td')
//     const deletee = document.createElement('td')
//     deletee.textContent = 'X'
//     if(bool){
//     deletee.setAttribute('id',idd)
//     }
//     else{
//         deletee.setAttribute('id',id)
//     }
//     deletee.addEventListener('click',()=>{
//         deletee.parentElement.remove()
//         // console.log(data[deletee.getAttribute('id')]);
//         // data.pop(deletee.getAttribute('id'))
//         // data.splice(deletee.getAttribute('id'), 1)
//         data.forEach((element,index) => {
//             if (element.id == deletee.getAttribute('id')) {
//                 data.splice(index,1)
//             }
//             else{
//                 console.log(element.id,deletee.getAttribute('id'));
//             }
//         });

//     })
    
//     // imageColumn.textContent = image.value
//     img.src = imgg;
//     filmNameColumn.textContent = name
//     filmImdbColumn.textContent = imdb
//     categoryColumn.textContent = categoryy
//     rejisorColumn.textContent = rejisorr
    
//     tr.append(imageColumn,filmNameColumn,filmImdbColumn,categoryColumn,rejisorColumn,deletee)
//     console.log(tr);
//     tbody.append(tr);
// }