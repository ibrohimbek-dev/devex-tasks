// 2024-05-20
// MIT 14 TASK A
// Harf sifatida kiritilgan birinchi parametr,
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

// ==========================================================================
// METHOD ONE WITH for ... of ..

const lt = "e";
const sentence = "engineer!";

const countLetter_1 = (lt, sentence) => {
	const times = [];

	for (let letter of sentence.split("")) {
		if (letter.includes(lt)) {
			times.push(letter);
		}
	}

	return times.length;
};

const result_1 = countLetter_1(lt, sentence);
console.log(`'${lt}' is repeated in '${sentence}' '${result_1}' times`);

// ---------------------------------------------------------------------

const countLetter_2 = (lt, sentence) => {
	const times = [];

	let count = 0;
	while (count < sentence.length) {
		if (sentence[count] === lt) {
			times.push(sentence[count]);
		}
		count++;
	}
	return times.length;
};

const result_2 = countLetter_2(lt, sentence);
console.log(`'${lt}' is repeated in '${sentence}' '${result_2}' times`);

// ----------------------------------------------------------------------

const countLetter_3 = (lt, sentence) => {
	const times = [];

	for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] === lt) {
			times.push(sentence[i]);
		}
	}

	return times.length;
};

const result_3 = countLetter_3(lt, sentence);
console.log(`'${lt}' is repeated in '${sentence}' '${result_3}' times`);

// ----------------------------------------------------------------------
const countLetter_4 = (lt, sentence) => {
	const times = [];

	sentence.split("").forEach((letter) => {
		if (letter === lt) {
			times.push(letter);
		}
	});

	return times.length;
};

const result_4 = countLetter_4(lt, sentence);
console.log(`'${lt}' is repeated in '${sentence}' '${result_4}' times`);

// ----------------------------------------------------------------------
const countLetter_5 = (letter, sentence) => {
	return sentence.split("").filter((ltr) => ltr === letter).length;
};

const result_5 = countLetter_5(lt, sentence);
console.log(`'${lt}' is repeated in '${sentence}' '${result_5}' times`);
