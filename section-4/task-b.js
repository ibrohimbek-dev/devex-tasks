// 2024-05-24:
// MIT 14 TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yoqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

// -------------------------------------------------------------
// Method One:
console.log("--------------------------------------------------");
const countDigits_1 = (text) => {
	return text.split("").filter((txt) => /[0-9]/.test(txt)).length;
};

console.log("Method One => ", countDigits_1("ad2a54y79wet0sfgb9"));

// Method Two:
console.log("--------------------------------------------------");
const countDigits_2 = (text) => {
	return text.match(/\d/g).length;
};

console.log("Method Two => ", countDigits_2("ad2a54y79wet0sfgb9"));
