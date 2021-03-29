function created(){
    let chanel_name = document.querySelector('.sand-message-name h2').textContent;
    let input_editor = document.querySelector('.texteditor');
    input_editor.dataset.placeholder = "message " + chanel_name;
}
created();
