function calculateParallelogramArea(){
    const parallelogramBase = getParallelogramId('parallelogram-base');
    // console.log(parallelogramBase);
    const parallelogramHeight = getParallelogramId('parallelogram-height');
    // console.log(parallelogramHeight);
    
    const area = parallelogramBase * parallelogramHeight;
    getparallelogramArea('parallelogram-area' , area);



}

function getParallelogramId(setValue){
    const parallelogramInput = document.getElementById(setValue);
    const text = parallelogramInput.value;
    const value = parseFloat(text);
    return value;
}
function getparallelogramArea(elementId,area){
    const parallelogramAreaInput = document.getElementById(elementId);
    parallelogramAreaInput.innerText = area;
} 