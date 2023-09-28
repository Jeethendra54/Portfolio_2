// const tags = document.getElementsByClassName('popup');
// console.log(tags)
// tag.array.forEach(element => {
//     print(tag[element])
// });

// for(let i=0;i<tags.length;i++){
//     let tag = tags[i]
//     tag.addEventListener('click',e=>{
//       console.log(tag.innerText)  
//     })
// }

const popup_close = document.querySelectorAll('.popup-close');

const popup_wrapper = document.querySelectorAll('.popup-wrapper');

const popup = document.querySelectorAll('.popup');


popup.forEach((elem , index)=>{
  console.log(elem.innerText)
  elem.addEventListener('click',()=>{
    popup_wrapper[index].style.display = 'block';

  })
})

popup_close.forEach((elem,index)=>{
  console.log(elem.innerText)
  elem.addEventListener('click',()=>{
    popup_wrapper[index].style.display = 'none';
  })
})

// popup.addEventListener('click' , e=>{
//   popup_wrapper.style.display = 'block';
// })

// popup_close.addEventListener('click' ,e=>{
//   popup_wrapper.style.display = 'none';
// })

// check this 
// popup_wrapper.addEventListener('click',()=>{
//   popup_wrapper.style.display = 'none'
// })