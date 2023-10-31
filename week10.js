// นิยามฟังก์ชันเพื่อคำนวณเปอร์เซ็นต์การเข้าร่วมของนักเรียน
function getAttendanceRate(student) {
    const totalDays = student.attendance.length;
    const presentDays = student.attendance.filter(day => day === true).length;
    const attendancePercentage = (presentDays / totalDays) * 100;
    return attendancePercentage;
}

// นิยามฟังก์ชันเพื่อคำนวณคะแนนเฉลี่ยของการทดสอบสำหรับนักเรียน
function getAvgScore(student) {
    const testScores = student.testScores;
    const totalScores = testScores.reduce((sum, score) => sum + score, 0);
    const averageScore = totalScores / testScores.length;
    return averageScore;
}

// นิยามฟังก์ชันเพื่อระบุนักเรียนที่表 สึกความผิดหวัง
function underPerformStudents(students) {
    return students.filter(student => {
        const attendancePercentage = getAttendanceRate(student);
        const averageScore = getAvgScore(student);

        // ตรวจสอบว่าเปอร์เซ็นต์การเข้าร่วมของนักเรียนต่ำกว่า 80% และคะแนนเฉลี่ยของการทดสอบต่ำกว่า 70
        if (attendancePercentage < 80 && averageScore < 70) {
            return {
                name: student.name,
                attendanceRate: attendancePercentage,
                avgScore: averageScore.toFixed(1), // ปัดเศษเป็นหลักทศนิยมหนึ่งตำแหน่ง
            };
        }
    });
}

// การใช้ตัวอย่าง:
const student1 = {
    name: 'Isabella',
    attendance: [true, true, false, true, false],
    testScores: [65, 78, 60, 72, 69],
};

const student2 = {
    name: 'John',
    attendance: [true, true, true, true, true],
    testScores: [88, 92, 85, 78, 90],
};

const student3 = {
    name: 'Ella',
    attendance: [false, false, true, false, true],
    testScores: [55, 40, 75, 82, 61],
};

const students = [student1, student2, student3];

const underperformingStudents = underPerformStudents(students);
console.log(underperformingStudents);


// argument objects //
function updateArgument(x, y) {
    console.log(x)
    arguments[0] = 555
    console.log(x)
}
updateArgument(10, 5)


function ops(n1, n2, ...n3) {
    //formal parameters
    console.log('arguments length:', arguments.length)
    for (const argu of arguments) {
        console.log(argu)
    }
    console.log('n3:', n3) //n3: [ 'xyz', 10.5, 100 ]
}
ops(1, true, 'xyz', 10.5, 100) //actual parameters, arguments object stores collections at actual parameters
function sum(...nums) {
    return nums.reduce((total, current) => total + current, 0)
}
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


function ops(n1 = 'F', n2 = 'false', n3 = 'unknown') {
    return { n1, n2, n3 }
}
console.log(ops()) //{ n1: 'F', n2: 'false', n3: 'unknown' }
console.log(ops('A')) //{ n1: 'A', n2: 'false', n3: 'unknown' }
console.log(ops('A', true)) //{ n1: 'A', n2: true, n3: 'unknown' }
console.log(ops('A', true, 'Somchai')) //{ n1: 'A', n2: true, n3: 'Somchai' }
console.log(ops(undefined, undefined, undefined)) //{ n1: 'F', n2: 'false', n3: 'unknown' }
console.log(ops(null, null, null)) //{ n1: null, n2: null, n3: null }
console.log(ops('A', undefined, 'Somchai')) //{ n1: 'A', n2: 'false', n3: 'Somchai' }

function sum(num1, num2, ...num3) {
    return num1, num2, num3
}
let num = [5, 20, 15]
// spread parameter
console.log(sum(...num)) // 40, spread operator
console.log(sum(num)) // 5,20,15 undefined

// Unpacking //
const nums = [10, 20, 30, 40, 50]
const obj = { id: 10001, title: 'js Beginner', isbn: 7241326384 }

const [num1, num2] = nums // destructuring on array variable
console.log(num1)
console.log(num2)

const { is } = obj // destructuring on object variable
console.log(is) // 7241326384

const {authors: {fullname:authorName}
} = obj
console.log(authorName) // jame smith

