function revers(number) {
  //i use " " to use split funcacion with number
  let num = number + "";
  //in this statemnt  will split the num to array
  let split = num.split("");
  //revers the array
  let revers = split.reverse();
  //to join all element in the array
  let join = revers.join("");
  console.log(join);
}
revers(123456);

//==============================upper case=======================
function convert(st) {
  const array = st.split(" ");
  for (let i = 0; i < array.length; i++) {
    // array[i].charAt(0).toUpperCase() >> to convert the first st to upper case
    // + array[i].slice(1) >> to join the end element
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  //join the array
  const join = array.join(" ");
  console.log(join);
}
convert("tuwaiq academy");
//============================number of element=====================
function Ele_num(parm) {
  let s = parm.length;
  return s;
}
console.log(Ele_num("tuwaiq academy"));
//=============================prime number========================
function prime(p) {
  if (p > 1 && p % 2 !== 0) {
    return console.log("it is prime number  " + p);
  } else {
    return console.log("it is not a prime number  " + p);
  }
}
prime(8);
///==========================longest word=======================
function longest_word(p) {
  var array1 = p.split(" ");
  let result = array1[0];

  for (let x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}

console.log(longest_word(" Kingdom of Saudi arabia"));
//=============================alphabet order==================
function alphabet(st) {
  // sort() to sort element in alphabet
  return st.split("").sort().join("");
}
console.log(alphabet("webmaster"));
//============================add element=========================
function addition(num1, num2) {
  return num1 + num2;
}
console.log(addition(1, 2));
//========================  age in years and returns the age in days==========
function age_day(p) {
  let age_to_day = p * 365;
  return age_to_day;
}
console.log(age_day(15));
//========================hours into seconds===========================
function seconds(p) {
  let hours_into_seconds = p * 3600;
  return hours_into_seconds;
}
console.log(seconds(2));
//=====================if it's less than or equal to zero==============
function lessThanOrEqualToZero(p) {
  if (p <= 0) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
lessThanOrEqualToZero(1);
//======================num_of_digits==============================
function num_of_digits(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}
console.log(num_of_digits(13244567));
//=================== toArray======================================
function toArray({ a, b }) {
  let obj = { a, b };
  var result = Object.entries(obj);

  console.log(result);
}

toArray({ a: 1, b: 2 });
//=======================paths=====================================
function paths(n) {
  if (n == 0) {
    return 1;
  } else {
    //انادي المضروب
    return n * paths(n - 1);
  }
}
console.log(paths(4));
//====================doubleLetters================================
function doubleLetters(word) {
  for (let i = 1; i < word.length; i++) {
    //اشوف اذا فيه حرفين جنب بعض نفس الشيء
    if (word[i - 1] === word[i]) {
      return true;
    }
  }
  return false;
}
console.log(doubleLetters("loop"));
//============================new Date====================================
today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //As January is 0.
var yyyy = today.getFullYear();
console.log(mm + "/" + dd + "/" + yyyy);
//========================days========================================
let date1 = new Date("June 20, 2019");
let date2 = new Date("June 14, 2019");

const days = (date1, date2) => {
  let difference = date1.getTime() - date2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};
console.log(days(date1, date2) + " days");
//========================Return the maximum number of animal names========================================
let animals = [
  "dog",
  "cat",
  "bat",
  "cock",
  "cow",
  "pig",
  "fox",
  "ant",
  "bird",
  "lion",
  "wolf",
  "deer",
  "bear",
  "frog",
  "hen",
  "mole",
  "duck",
  "goat",
];
///======================================== accept two numbers and print the larger number================
let x = 100;
let y = 200;
if (x > y) {
  console.log(x + " is bigger than " + y);
} else if (y > x) {
  console.log(y + " is bigger than " + x);
} else {
  console.log(y + " is equal " + x);
}
//==========================================mostExpensive==============================
/*function mostExpensive({ st1, st2 }) {
  let expensive = 0;
  var name;

  for (let i = 0; i < sampleCart.length; i++) {
    if (sampleCart[i].price > 0) {
      expensive += sampleCart[i].price;
      name += sampleCart[i].itemName;
    }
  }
  return name;
}

mostExpensive({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
}); */
//===================================================================================
