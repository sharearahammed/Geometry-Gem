function calculateEllipseArea(){
    
    const ellipseA = getInputValueId('ellipse-a');
    const ellipseB = getInputValueId('ellipse-b');

    const area = 3.14159 * ellipseA * ellipseB;
    setInnerTextId('ellipse-area',area);
}
function getInputValueId(inputFielfId){
    const inputField = document.getElementById(inputFielfId);
    const textField = inputField.value;
    const value = parseFloat(textField);
    return value;
}
function setInnerTextId(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}