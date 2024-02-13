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