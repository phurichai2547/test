const students = [ // เป็น array ที่เก็บ object students
  {
    name: 'Sophia', // เก็บ string
    attendance: [true, true, false, true, true], // array[] ที่เก็บ boolean
    testScores: [88, 92, 85, 78, 90] // array[] ที่เก็บ integer
  },
  {
    name: 'b',
    attendance: [true, true, false, true, true],
    testScore: [60, 100, 80, 90, 90],
  },
  {
    name: 'c',
    attendance: [true, false, false, true, true],
    testScore: [50, 6, 70, 90, 90],
  },
  {
    name: 'd',
    attendance: [true, false, true, true, true],
    testScore: [50, 60, 70, 90, 90],
  },
];

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

function getAttendanceRate(student = students[0]) {
  // getAttendanceRate ที่ใช้สำหรับคำนวณอัตราการเข้าร่วมของนักเรียน โดยมีพารามิเตอร์ student ซึ่งถูกกำหนดให้มีค่าเริ่มต้นเป็น students[0] 
  //   student.attendance.forEach((el) => console.log(el));

  const pass = student.attendance.filter((el) => el === true).length;
  // ในบรรทัดนี้, เรากำลังใช้เมธอด filter บนอาร์เรย์ student.attendance เพื่อกรองเฉพาะสมาชิกที่มีค่าเป็น true คือนักเรียนที่เข้าร่วม.
  // จากนั้นเราใช้ .length เพื่อนับจำนวนของนักเรียนที่เข้าร่วมเรียน (มีค่าเป็น true) และเก็บผลลัพธ์ในตัวแปร pass.

  //   const pass = student.attendance.filter(function (el) {
  //     return el === true;
  //   }).length;
  const percentage = (pass / student.attendance.length) * 100;   // -> (4 / 5) * 100 = 80
  return percentage;
  // ในบรรทัดนี้, เราคำนวณสัดส่วนของนักเรียนที่เข้าร่วมเรียน (pass) ต่อทั้งหมดของนักเรียนในรายการ (student.attendance.length).
  // เราคูณผลลัพธ์ด้วย 100 เพื่อแปลงเป็นเปอร์เซ็นต์เพื่อให้ได้ค่าเปอร์เซ็นต์การเข้าร่วม.
}
// getAttendanceRate();

// ----------------------------------------------------------------------------- //

function getAttendanceRate(student) {
  //   student.attendance.forEach((el) => console.log(el));
  const pass = student.attendance.filter((el) => el === true).length;
  const percentage = (pass / student.attendance.length) * 100;
  return percentage;
}

function getavgScore(student) {
  const totalScore = student.testScore.reduce((total, el) => total + el, 0); // ( 88 + 92 + 85 + 78 + 90 ) / 5
  const avgScore = totalScore / student.testScore.length;
  return avgScore;
}

// avgScore();

function underPerformStudent(allStudent) {
  const tranfrom = allStudent.map((el) => {
    return {
      name: el.name,  // left = key , right = value
      attendanceRate: getAttendanceRate(el), // เป็นการดึง function ออกมาใช้จากด้านบน " getAttendanceRate(el) "
      avgScore: avgScore(el),
    };
  });
  const FFF = tranfrom.filter(
    (el) => el.attendanceRate < 80 && el.avgScore < 70
  );

  return FFF;
}

console.log(underPerformStudents(students))

// filter , foreach -> ทำตามจำนวนรอบของ array ออกมาเป็นค่าของ array
// filter การกรองค่า ที่ return ไม่ได้ออกมาตามจำนวนทั้งหมด
// foreach การเล่นกับค่า ไม่ได้ return ค่าอะไรออกมา
// reduce จะออกมาเป็นค่าที่ยุบรวมกันมาแล้ว ออกมาเพียงค่าเดียว
// map การแปลงค่า จะแปลงทุกตัวและนำไปใส้ที่ array ตัวใหม่