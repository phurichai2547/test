Math.floor(Math.random() * 6) + 1; // ต้องการสุ่มค่าลูกเต๋าออกมา 6 หน้า จริงๆแล้วค่า random ที่สุ่มออกมาจะได้ 0 - 5.9 เพราะนั้นเราจึงต้องบวก 1 เข้าไป
                                   // เพื่อให้ได้ 6.9 แต่ด้วยความที่มี math.floor อยู่ด้านหน้าทำให้ค่าที่เป็นจุดทศนิยมอยู่ต้องปัดลงทันที เป็น 6 
                                   // แต่ด้วยความที่ลูกเต๋าหน้าของมันไม่ได้เริ่มต้นที่ 0 จึงต้องบวก 1 เข้าไป 
Math.floor(Math.random() * 100) + 10; // ต้องการสุ่มค่าออกมาตั้งแต่หน้า 10 ถึง 100

console.log(Math.ceil(0.95));
// Expected output: 1

console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.pow(7, 3));
// Expected output: 343

function calcHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  } 
  console.log(calcHypotenuse(3, 4));
  // Expected output: 5

 
  function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  console.log(Math.PI);
  // Expected output: 3.141592653589793



function x(y) {
    return y
}
function doIt() {
    console.log('do it')
}
x(doIt)