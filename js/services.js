const tags = document.getElementsByClassName('service-popup');
console.log(tags)
// tag.array.forEach(element => {
//     print(tag[element])
// });

for(let i=0;i<tags.length;i++){
    let tag = tags[i]
    tag.addEventListener('click',e=>{
      console.log(tag.innerText)  
    })
}
