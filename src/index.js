/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "test4",
//   age: 28,
// };
// val4.name = "aaaaaa";
// val4.address = "Osaka";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "sakuoka"
// const age = 35;
// // 「私の名前はsakuokaです。年齢は35歳です。」　　⇦表示例

// //　従来の方法
// const messages1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(messages1);

// //テンプレート文字列を用いた方法
// const messages2 = `私の名前は${name}です。年齢は${age}です!!`;
// console.log(messages2);

/**
 *  アロー関数
 */

// // 従来の関数
// //  function func1(str) {
// //    return str;
// //  }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1!!"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2!!"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }
// console.log(func3(10,20));

// // アロー関数はreturnなどの指定がなくても値を省略して返すことができる。
// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(20,40));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "sakusaku",
//   age: 35 ,
// };
// const messages1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(messages1);

// const { name , age } = myProfile;
// const messages2 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(messages2);

// const myProfile = ['sakusaku', 35];

// const messages3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(messages3);

// const [name, age] = myProfile;
// const messages4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(messages4);

// /**
//  * デフォルト値、引数など
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("sakusaku");
// // sayHello();
// // 上記に（）内になにも指定しない場合はゲストさんと表示される

// /**
//  * スプレッド構文　...
//  */
// // 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
//  // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "sakuoka"];
// for (let index = 0; index < nameArr.length; index++){
// //  console.log(nameArr[index]);
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`))

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name)=> console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=> {
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "sakuoka") {
//     return name
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件　？　　条件がtrueのとき　：　じょうけんがfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

//const num = "1300";
// const num = 1300;

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数字を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です！';
// }
// console.log(checkSum(50, 49));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */
// const flag1 = true;
// const flag2 = true;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります");
// }

// if(flag1 && flag2){
//   console.log("1か2はtrueになります");
// }

// || は左側がfalseなら右を返す。
// const num = fee;
// const fee = num || "金額未設定です。"
// console.log(fee);

// && は左側がtrueなら右を返す。
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
