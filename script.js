function showMenu(menuId) {
    document.querySelectorAll('.sub-menu').forEach(menu => {
        menu.style.display = 'none';
    });
    document.getElementById(menuId).style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
}

function backToMain() {
    document.querySelectorAll('.sub-menu').forEach(menu => {
        menu.style.display = 'none';
    });
    document.getElementById('main-menu').style.display = 'block';
}

function arithmetic(operation) {
    const num1 = parseFloat(prompt("Enter your first number: "));
    const num2 = parseFloat(prompt("Enter your second number: "));
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "Invalid input. Please enter numbers.";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'mul':
                result = num1 * num2;
                break;
            case 'div':
                if (num2 === 0) {
                    result = "Cannot divide by zero.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Invalid operation';
        }
    }
    document.getElementById('arithmetic-result').innerText = `Result: ${result}`;
}

function geometry(shape) {
    let result;
    switch (shape) {
        case 'square-area':
            const sqArea = parseFloat(prompt("Enter the side length: "));
            if (isNaN(sqArea)) {
                result = "Invalid input. Please enter a number.";
            } else {
                result = sqArea * sqArea;
            }
            break;
        case 'square-perimeter':
            const sqPeri = parseFloat(prompt("Enter the side length: "));
            if (isNaN(sqPeri)) {
                result = "Invalid input. Please enter a number.";
            } else {
                result = 4 * sqPeri;
            }
            break;
        case 'rectangle-area':
            const recLength = parseFloat(prompt("Enter the length: "));
            const recWidth = parseFloat(prompt("Enter the width: "));
            if (isNaN(recLength) || isNaN(recWidth)) {
                result = "Invalid input. Please enter numbers.";
            } else {
                result = recLength * recWidth;
            }
            break;
        case 'rectangle-perimeter':
            const recLength2 = parseFloat(prompt("Enter the length: "));
            const recWidth2 = parseFloat(prompt("Enter the width: "));
            if (isNaN(recLength2) || isNaN(recWidth2)) {
                result = "Invalid input. Please enter numbers.";
            } else {
                result = 2 * (recLength2 + recWidth2);
            }
            break;
        case 'triangle-area':
            const triBase = parseFloat(prompt("Enter the base length: "));
            const triHeight = parseFloat(prompt("Enter the height: "));
            if (isNaN(triBase) || isNaN(triHeight)) {
                result = "Invalid input. Please enter numbers.";
            } else {
                result = 0.5 * triBase * triHeight;
            }
            break;
        case 'circle-area':
            const cirRadius = parseFloat(prompt("Enter the radius: "));
            if (isNaN(cirRadius)) {
                result = "Invalid input. Please enter a number.";
            } else {
                result = Math.PI * cirRadius * cirRadius;
            }
            break;
        case 'circle-circumference':
            const cirCircum = parseFloat(prompt("Enter the radius: "));
            if (isNaN(cirCircum)) {
                result = "Invalid input. Please enter a number.";
            } else {
                result = 2 * Math.PI * cirCircum;
            }
            break;
        default:
            result = 'Invalid shape';
    }
    document.getElementById('geometry-result').innerText = `Result: ${result}`;
}

function pythagoras(type) {
    let result;
    switch (type) {
        case 'hypotenuse':
            const leg1 = parseFloat(prompt("Enter the first leg: "));
            const leg2 = parseFloat(prompt("Enter the second leg: "));
            if (isNaN(leg1) || isNaN(leg2)) {
                result = "Invalid input. Please enter numbers.";
            } else {
                result = Math.sqrt(leg1 * leg1 + leg2 * leg2);
            }
            break;
        case 'leg':
            const hypotenuse = parseFloat(prompt("Enter the hypotenuse: "));
            const leg = parseFloat(prompt("Enter one leg: "));
            if (isNaN(hypotenuse) || isNaN(leg)) {
                result = "Invalid input. Please enter numbers.";
            } else {
                result = Math.sqrt(hypotenuse * hypotenuse - leg * leg);
            }
            break;
        default:
            result = 'Invalid type';
    }
    document.getElementById('pythagoras-result').innerText = `Result: ${result}`;
}

function sqrt(type) {
    let result;
    switch (type) {
        case 'single':
            const num = parseFloat(prompt("Enter the number: "));
            if (isNaN(num)) {
                result = "Invalid input. Please enter a number.";
            } else {
                result = Math.sqrt(num);
            }
            break;
        case 'range':
            const start = parseInt(prompt("Enter the starting number: "));
            const end = parseInt(prompt("Enter the ending number: "));
            if (isNaN(start) || isNaN(end)) {
                result = "Invalid input. Please enter numbers.";
            } else {
                result = [];
                for (let i = start; i <= end; i++) {
                    result.push(`√${i} = ${Math.sqrt(i)}`);
                }
                result = result.join("\n");
            }
            break;
        default:
            result = 'Invalid type';
    }
    document.getElementById('sqrt-result').innerText = `Result: ${result}`;
}

function exponential(type) {
    let result;
    switch (type) {
        case 'single':
            const base = parseFloat(prompt("Enter the base number: "));
            const exp = parseInt(prompt("Enter the exponent: "));
            if (isNaN(base) || isNaN(exp)) {
                result = "Invalid input. Please enter numbers.";
            } else {
                result = Math.pow(base, exp);
            }
            break;
        case 'square-single':
            const num = parseFloat(prompt("Enter the number: "));
            if (isNaN(num)) {
                result = "Invalid input. Please enter a number.";
            } else {
                result = num * num;
            }
            break;
        case 'square-range':
            const start = parseInt(prompt("Enter the starting number: "));
            const end = parseInt(prompt("Enter the ending number: "));
            if (isNaN(start) || isNaN(end)) {
                result = "Invalid input. Please enter numbers.";
            } else {
                result = [];
                for (let i = start; i <= end; i++) {
                    result.push(`${i}^2 = ${i * i}`);
                }
                result = result.join("\n");
            }
            break;
        default:
            result = 'Invalid type';
    }
    document.getElementById('exponential-result').innerText = `Result:\n${result}`;
}
