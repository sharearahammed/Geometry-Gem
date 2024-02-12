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

function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    const area = width * length;
    console.log('Area (A) = ' , area);
    // display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}