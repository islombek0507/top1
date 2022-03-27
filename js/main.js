let elItem = document.querySelectorAll(".item")

// elItem.forEach(item=> {
//     item.addEventListener("click", ()=>{
//         if(!elItem.classList.contains("active"))
//          item.classList.add("active");
//          else{
//              item.classList.remove("active")
//          }   
//     })
// });
// if(elItem.length > 0) {
//     elItem.forEach(li => {
//         li.addEventListener('click', () => {
//             li.nextElementSibling.classList.toggle('active');
//             li.classList.toggle('active');
//         })
//     })
// }
elItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClasses()
        item.classList.add('active')
    })
})
function removeActiveClasses() {
    elItem.forEach(item => {
        item.classList.remove('active')
    })
}
