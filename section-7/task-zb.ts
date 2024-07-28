// ==================================================================
// ----------------------------------------
// 2024-07-28
// MIT 14

// TASK ZB

// Shunday function yozing, uni 2 ta number parametri bolsin
// va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// Shunday function yozing, uni 2'ta number parametri bo'lsin.
// Va berilgan sonlar orasidan random raqam returnb qilsin.

// MASALAN: randomBetween(30, 50) return 45;

// Yuqoridagi misolda, argument sifatida ikkita raqam, '30' va '45'
// berilmoqda, function'ning vazifasi, shu ikkala son orasidan
// random raqamni topib qaytarmoqda.

// ================================================================

// Assets:
const numOne: number = 30;
const numTwo: number = 50;

// Solutions:
// METHOD ONE:
const randomBetween_1 = (num1: number, num2: number) => {
	return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};

console.log("method one =>", randomBetween_1(numOne, numTwo));
