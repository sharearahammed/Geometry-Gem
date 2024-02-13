function calculateTriangleArea(){
    const trianglrBaseInput = document.getElementById('trianglr-base');
    const trianglrBaseText = trianglrBaseInput.value;
    const base = parseFloat(trianglrBaseText);
    console.log(base);

    const trianglrHeightInput = document.getElementById('trianglr-height');
    const trianglrHeighttext = trianglrHeightInput.value;
    const height = parseFloat(trianglrHeighttext);
    console.log(height);

    const area = 0.5 * base * height;
    console.log('Area (A) = ' , area);
    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}
