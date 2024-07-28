// ----------------------------------------
// 2024-07-28
// MIT 14

// TASK ZA

// Shunday function yozing, u array ichidagi objectlarni
// 'age' qiymati bo'yicha sortlab bersin.

// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// Yuqoridagi misolda, kichik raqamlar katta raqamlar tomon
// tartiblangan holatda return bo'lmoqda.

// ====================================================

// Assets:
interface myObject {
	age: number;
}

const sortObject: myObject[] = [{ age: 23 }, { age: 21 }, { age: 13 }];

// METHOD ONE:
console.log("---------------------------------------");
const sortByAge_1 = (obj: myObject[]) => {
	return obj.sort((a, b) => a.age - b.age);
};

console.log("method one =>", sortByAge_1(sortObject));
