const msgX = 'Enter X coordinate value for point';
const msgY = 'Enter Y coordinate value for point';

let Ax = parseFloat(prompt(`${msgX} A`, ''));
let Ay = parseFloat(prompt(`${msgY} A`, ''));
let Bx = parseFloat(prompt(`${msgX} B`, ''));
let By = parseFloat(prompt(`${msgY} B`, ''));
let Cx = parseFloat(prompt(`${msgX} C`, ''));
let Cy = parseFloat(prompt(`${msgY} C`, ''));

const midValue = 2;
let midX = (Ax + Bx)/midValue;
let midY = (Ay + By)/midValue;

console.log(midX === Cx && midY === Cy);