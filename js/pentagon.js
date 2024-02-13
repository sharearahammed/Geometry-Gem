function calculatePentagonArea(){
    const pentagonP = getInputValurId('pentagon-p');
    const pentagonbB = getInputValurId('pentagon-b');

    const area = 0.5 * pentagonP * pentagonbB;
    setInnerTextId('pentagon-area', area)
}
function getInputValurId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const textField = inputField.value;
    const value = parseFloat(textField);
    return value;
}
function setInnerTextId(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}