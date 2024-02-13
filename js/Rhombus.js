function calculateRhombusArea(){
    const romboshd1 = getRhombusId('rhombus-d1');
    const romboshd2 = getRhombusId('rhombus-d2');

    const area = 0.5 * romboshd1 * romboshd2;
    setInnerTextId('rhombus-area',area)
}
function getRhombusId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setInnerTextId(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}