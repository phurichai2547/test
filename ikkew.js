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
function getAttendenceRate(student) {
    const pDay = student.filter(Boolean).length
    console.log(pDay)
    const attendenceRate = (pDay / student.length) * 100
    return attendenceRate
}
console.log(getAttendenceRate(students[0].attendance))
function getAvgScore({ testScores }) {
    const sumScore = testScores.reduce((total, score) => total + score, 0)
    return sumScore / testScores.length
}
console.log(getAvgScore(students[1]))
function underPerformStudents(students) {
    const underPerform = students.filter(
        (student) =>
            getAttendenceRate(student.attendance) < 80 && getAvgScore(student) < 70
    )
    const pass = underPerform.map((obj) => {
        return {
            Name: obj.name,
            attendanceRate: getAttendenceRate(obj.attendance),
            avgScore: getAvgScore(obj)
        }
    })
    return pass
}
console.log(underPerformStudents(students))





