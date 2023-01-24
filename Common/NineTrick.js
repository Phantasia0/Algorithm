/*   1.구조 분해 할당을 이용한 변수 swap   */
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b);

/*   2.배열 생성으로 루프 제거하기   */
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (acc, cur) => acc + cur,
  0
);

/*   3.배열 내 같은 요소 제거하기   */
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

/*   4.Spread 연산자를 이용한 객체 병합  */
const person = {
  name: "Lee Sun-Hyoup",
  familyName: "Lee",
  givenName: "Sun-Hyoup",
};

const company = {
  name: "Cobalt. Inc",
  address: "Seoul",
};

const leeSunHyoup = { ...person, ...company };
console.log(leeSunHyoup);

/*   5.&&와||활용  */
const participantName = null;
const name = participantName || "Guest";

const flag = true;
const func = () => {};
flag && func();

const makeCompany = (showAddress) => {
  return {
    name: "Cobalt. Inc.",
    ...(showAddress && { address: "Seoul" }),
  };
};

console.log(makeCompany(false));
console.log(makeCompany(true));

/*   6.구조 분해 할당 사용하기  */
const persons = {
  name: "Lee Sun-Hyoup",
  familyName: "Lee",
  givenName: "Sun-Hyoup",
  company: "Cobalt. Inc.",
  address: "Seoul",
};

const { familyName, givenName } = persons;

//객체 생성시 키 생략하기
const namePerson = "Lee Sun-Hyoup";
const companyPerson = "Cobalt";
const personKey = {
  namePerson,
  companyPerson,
};

console.log(personKey);

/*   7.비구조화 할당 사용하기  */
const makeCompanys = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};
const cobalt = makeCompanys({
  name: "Cobalt. Inc.",
  address: "Seoul",
  serviceName: "Present",
});

/*   8.동적 속성 이름  */
const nameKey = "name";
const emailKey = "email";
const personss = {
  [nameKey]: "Lee",
  [emailKey]: "gmail.com",
};

console.log(personss);

/*   9.!!연산자를 사용하여 Boolean 값 바꾸기  */
function check(variable) {
  if (!!variable) {
    console.log(variable);
  } else {
    console.log("잘못된 값");
  }
}
check(null); // 잘못된 값
check(3.14); // 3.14
check(undefined); // 잘못된 값
check(0); // 잘못된 값
check("Good"); // Good
check(""); // 잘못된 값
check(NaN); // 잘못된 값
check(5); // 5
