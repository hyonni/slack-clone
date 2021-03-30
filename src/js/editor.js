const $chanelName = document.querySelector('.sand-message-name h2').textContent;
const $texteditor = document.querySelector('.texteditor');
const $beautyList = document.querySelectorAll('.beauty button');
const $toast = document.querySelector('#toast');
function created(){
    $texteditor.dataset.placeholder = "message " + $chanelName;
}
created();
function execCommand(e){
    console.log(e);
}
for(let i = 0; i<$beautyList.length; i++){
    $beautyList[i].onmouseover = function (){
        $toast.classList = '';
        $toast.innerText = this.className;
        $toast.classList.add(this.className);
    }
    $beautyList[i].onmouseout = function (){
        $toast.classList = '';
    }
}
window.execCommand = execCommand;