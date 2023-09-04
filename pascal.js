function generatePascalTriangle(levels) {
    const triangle = [];
    for (let i = 0; i < levels; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }
    return triangle;
}

function displayPascalTriangle(levels) {
    const triangle = generatePascalTriangle(levels);
    const result = triangle.map(row => row.join(' ')).join('\n');
    return result;
}

const pascalTriangleElement = document.getElementById("pascal-triangle");
const levels = 20;
const pascalTriangle = displayPascalTriangle(levels);

pascalTriangleElement.textContent = pascalTriangle;
