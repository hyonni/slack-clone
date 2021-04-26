const $chanelName = document.querySelector('.sand-message-name h3').textContent;
const $texteditor = document.querySelector('.texteditor p');
const $beautyList = document.querySelectorAll('.toolbar button');
const $toast = document.querySelector('#toast');
const $texteditor2 = document.querySelector('.texteditor');
function created(){
    $texteditor.innerText = "message " + $chanelName;
}
created();
function execCommand(e){
    console.log(e);
}
function format(e) {
    let selected = window.getSelection().getRangeAt(0);
    let node = document.createElement(e);
    console.log(selected)
    console.log(node)
    node.innerText = selected;

    selected.deleteContents();
    selected.insertNode(node);
}
for(let i = 0; i< $beautyList.length; i++){
    $beautyList[i].onmouseover = function (){
        $toast.classList = '';
        $toast.innerText = this.className;
        $toast.classList.add(this.className);
    }
    $beautyList[i].onmouseout = function (){
        $toast.classList = '';
    }
}
window.format = format;
window.execCommand = execCommand;