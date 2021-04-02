const elem = (element) => document.querySelector(element);


const toggleMessageSave = () => {
    console.log(this);

}
const init = ()=>{
    //실행
    document.addEventListener('click', toggleMessageSave)
}
init();
