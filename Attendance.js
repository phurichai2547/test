const students = [
    {
        name: 'Sophia',
        attendance: [true, true, false, true, true],
        testScores: [88, 92, 85, 78, 90]
    },
    {
        name: 'Mason',
        attendance: [true, true, true, true, false],
        testScores: [70, 82, 88, 75, 62]
    },
    {
        name: 'Isabella',
        attendance: [true, false, false, true, true],
        testScores: [68, 71, 70, 60, 78]
    },
    {
        name: 'Liam',
        attendance: [true, true, true, true, true],
        testScores: [90, 87, 92, 88, 95]
    },
    {
        name: 'Olivia',
        attendance: [true, true, true, true, false],
        testScores: [72, 78, 75, 80, 62]
    }
]
function getAttendanceRate(student = students[0]) {  
    const pass = student.attendance.filter((el) => el === true).length;
    const percentage = (pass / student.attendance.length) * 100;
    return percentage;
}
function getAvgScore(student) {
    const totalScore = student.testScores.reduce((total, el) => total + el, 0)
    const avgScore = totalScore / student.testScores.length;
    return avgScore;
}
function underPerformStudents(students) {
    const tranfrom = students.map((el) => {
        return {
            name: el.name,
            attendanceRate: getAttendanceRate(el),
            avgScore: getAvgScore(el),
        };

    });
    const FFF = tranfrom.filter(
        (el) => el.attendanceRate < 80 && el.avgScore < 70
    );
    return FFF;

}
console.log(getAttendanceRate(students[0]));  // no.1 
console.log(getAvgScore(students[0]));  // no.2
console.log(underPerformStudents(students));
// students[0] -> ต้องการเช็คแค่ตัวเดียว






