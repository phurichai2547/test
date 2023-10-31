const footballPlayers = [
    { name: 'Lionel Messi', position: 'Forward', age: 34, team: 'Paris Saint-Germain' },
    { name: 'Cristiano Ronaldo', position: 'Forward', age: 36, team: 'Manchester United' },
    { name: 'Neymar Jr.', position: 'Forward', age: 29, team: 'Paris Saint-Germain' }
];

footballPlayers.forEach(player => {
    console.log(`นักเตะ: ${player.name}, ตำแหน่ง: ${player.position}, อายุ: ${player.age}, ทีม: ${player.team}`);
});

//โจทย์:
//สร้างอาร์เรย์ footballPlayers ที่เก็บข้อมูลของนักฟุตบอล โดยที่นักฟุตบอลแต่ละมีโครงสร้างของข้อมูลดังนี้:
//{ name: string, position: string, age: number, team: string }.
//ให้ใช้การวนลูป forEach ใน JavaScript เพื่อแสดงข้อมูลของนักฟุตบอลทั้งหมดในอาร์เรย์ โดยแสดงผลเป็นประโยคที่แสดงชื่อ, ตำแหน่ง, อายุ,และทีมของนักเตะแต่ละคนดังนี้:
// "นักฟุตบอล: {ชื่อนักฟุตบอล}, ตำแหน่ง: {ตำแหน่ง}, อายุ: {อายุ}, ทีม: {ทีม}"

//คำอธิบาย:
//สร้างอาร์เรย์ footballPlayers ที่เก็บข้อมูลของนักฟุตบอลตามโครงสร้างที่กำหนด(ชื่อ, ตำแหน่ง, อายุ, ทีม).
//ใช้เมธอด forEach ในการวนลูปผ่านนักฟุตบอลทุกๆคนในอาร์เรย์ footballPlayers.
//ภายในฟังก์ชันที่ส่งเข้าไปใน forEach แสดงข้อมูลของนักเตะฟุตบอลโดยใช้ประโยคที่ระบุ ชื่อ, ตำแหน่ง, อายุ, และทีม.

