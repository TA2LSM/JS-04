//****************************************************/
// 7. BÖLÜM - FUNCTIONS
//****************************************************/

// Defining a Function -------------------------------

// //Function Decleration
// walk(); // tanımlandığı yerden önce çağrılabilir

// // Bu nedenle genelde bu tanımlama kullanılıyor.
// function walk() {
//   console.log('walk');
// }

// // Anonymous Function Expression
// let run = function () {
//   console.log('run');
// };
// // HATIRLATMA: Javascript'te fonksiyonlar birer objedir.
// // bir değişkeni fonksiyona eşitlediğimizde aslında bir objeye
// // eşitliyoruz. Bu nedenle sonuna ";" koyuyoruz.

// // NAmed Function Expression
// const run2 = function run() {
//   console.log('run2');
// };

// let move = run; // reference type

// // Aynı değişkenler gibi tanımlandığı yerden sonra çağrılabilir.
// run();
// run2();
// move();

// // JS engine function decleration şeklinde tanımlanmış tüm fonksiyonları,
// // derlerken en başa taşır. Fakat function expression olarak tanımlanmış
// // fonksiyonlarda bunu yapmaz. (HOISTING)

//----------------------------------------------------------
// Javascript'te bir değişken tanımlandıktan sonra tipi değiştirilebiliyor.
// Bu fonksiyon parametreleri için de geçerli.

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// console.log(sum(1, 2)); // >> 3
// // console.log(sum(1, 2, 3, 4, 5)); // >> 3
// // console.log(sum(1)); // >> 1 + undefined = NaN
// // console.log(sum()); // >> undefined + undefined = NaN

// parametre almıyor gibi gözüküyor ama kaç parametre geçilirse geçilsin artık
// fark etmez hale getirdik.
// function sum2() {
//   let total = 0;
//   // for of loop, itaratable olan her yerde teknik olarak kullanılabilir
//   for (let value of arguments) total += value;

//   return total;
// }

// console.log(sum2(1, 2, 3, 4, 5, 15)); // >> 30

// REST operator (...) ile parametre olarak geçilen tüm argümanlar
// dizi olarak elde edilir
// function sum3(...args) {
//   return args.reduce((a, b) => a + b);
// }

// console.log(sum3(1, 2, 3, 4, 5, 15)); // >> 30

// REST operatörü en son parametre olmalıdır.
// function sum3(discount, ...prices, extraParam) şeklinde OLAMAZ !!!
// function sum3(discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(sum3(0.15, 20, 30)); // >> 30

// Default parameters

// ES6 öncesi
// function interest(principal, rate, years) {
//   rate = rate || 3.5; // rate parametresi falsy ise default olarak 3.5 alınır
//   years = years || 5;

//   return ((principal * rate) / 100) * years;
// }

// ES6 sonrası Son parametrelerde sadece default değer atanabilir. Nedeni de fonksiyon
// çağrılırken interest(10000, ... , 6) olarak yazılamaz. Arada geçilmeyen parametre
// 6 olarak alınır. Son parametre geçilmemiş gibi yorumlanır. Geçilmeyen parametre
// default oalrak fonksiyonda tanımlı ise o parametre yerine undefined geçilebilir.
// interest(10000, undefined , 6) şeklinde. Çok tercih edilmeyen bir yöntemdir.
// BU NEDENLE DEFAULT PARAMETRELER EN SAĞA YASLI OLARAK YAZILMALIDIR !!! (best practice)
// function interest(principal, rate = 3.5, years = 5) {
//   return ((principal * rate) / 100) * years;
// }

// console.log(interest(10000, 3.5, 5));
// console.log(interest(10000));

//----------------------------------------------------------
// Getters and Setters
// getters >> access properties,
// setters >> change (mutate) them
// const person = {
//   firstName: 'Semih',
//   lastName: 'SENOL',
//   fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
// };

// // console.log(`Hello, ${person.firstName} ${person.lastName}`);
// console.log('Hello,', person.fullName());
// fullName bir metot gibi çağrılıyor ve salt okunur. Obje dışından
// değiştirilemez. Bu nedenle getters ve setters kullanılıyor.

// const person = {
//   firstName: 'Semih',
//   lastName: 'SENOL',
//   //Getter
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   //Setter
//   set fullName(value) {
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// console.log('Hello,', person.fullName);
// person.fullName = 'John Smith';
// console.log('Hello new member,', person);

//----------------------------------------------------------
// ERROR HANDLING
// const person = {
//   firstName: 'Semih',
//   lastName: 'SENOL',
//   //Getter
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   //Setter
//   set fullName(value) {
//     // Defensive programming: hatayı engelle ama raporlama
//     // if (typeof value !== 'string') return;

//     if (typeof value !== 'string') throw new Error('Value is not a string');
//     // throw an exception
//     // Error içine text yazmazsak açıklayıcı bir mesaj olmadan hatayı görürüz
//     // Hata fırlatıldığı an metottan return edilir. Varsa catch metoduna geçilir.

//     const parts = value.split(' ');
//     // for (let val of parts) if (val.length === 0) throw new Error('At least one character needed');
//     if (parts.length !== 2) throw new Error('Enter a first and last name');

//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// console.log('Hello,', person.fullName);

// // buraya split meto olamyan boolean veya null gibi bir değer geçilirse hata oluşur.
// // ama empty string'de ('') hata alınmaz. Bunu da çözmek gerekiyor.
// // person.fullName = null;
// try {
//   person.fullName = 'a a';
//   console.log('Hello new member,', person);
// } catch (error) {
//   console.log(error); // sadece developer görür. Kullanıcı görmez
//   // hata burada handle edildiğinde konsolda daha düzgün görüntüleniyor.
// }

//----------------------------------------------------------
// Local vs Global Scope
// C'deki kod bloğu içine tanımlı bir değişkenin o blok dışından erişilememesi durumu
// const message = 'Hi'; // Global scope Her yerden erişilebilir

// {
//   const message2 = 'Hi'; // Local Scope
//   console.log(message2); // erişilebilir (çıktısı Hi)
// }

// const color = 'red';
// printColor();

// function printColor() {
//   const color = 'blue';
//   console.log(color); // Çıktısı blue olacaktır. red DEĞİL !!! Global değişkene baskın çıkar
// }

// console.log(message); // erişilebilir (çıktısı Hi)
// console.log(message2); // erişilemez (çıktısı hata olacaktır reference error)

//----------------------------------------------------------
// let vs var: var ile ilgili sorunlar

// --- (1) ---
// "i" sadece "for" bloğu içinde tanımlı olur (block-scoped variable)
// function start() {
//   for (let i = 0; i < 5; ++i) console.log(i);

//   console.log(i); // reference error
// }

// "i", "start" fonksiyonu içinde tanımlı olur (function-scoped variable)
// function start() {
//   for (var i = 0; i < 5; ++i) {
//     if (true) var color = 'red'; // color fonksiyon içinde erişilebilir
//     console.log(i);
//   }

//   console.log(i, color);
// }

// start();

// --- (2) ---
// var color = 'red'; // color, browser'ın windows objesine eklenir
// let age = 30; // age, browser'ın windows objesine EKLENMEZ

// // window objesi globaldir ve buraya, bizim yazdığımız kod harici erişen
// // başka kütüphaneler de olabilir. Bu kütüphaneler bizim değişkenle aynı
// // ismi kullanan başka değişkenler içeriyorsa bizim değişkenin üstüne
// // yazabilirler. Bu nedenle "var" kullanmaktan kaçınmak gerekiyor.

// // window objesine eklenir. (Global function) Bad practice !!!
// // modül olarak yazıp window objesine eklenmemesini sağlamak
// // gerekiyor.
// function sayHi() {
//   console.log('hi');
// }

//----------------------------------------------------------
// "this" keyword
// "this" rferences the object that is executing the current function

// method: bir objenin parçası, ona ait olan fonksiyon demektir.
// Bir metot için "this", o objenin kendisini gösterir. (1 numaralı durum)
// Eğer global bir fonksiyon varsa bu durumda "this"
// browser için window objesini, node için global objesini gösterir. (2 numaralı durum)

// const video = {
//   title: 'a',
//   play() {
//     console.log(this); // video objesi (1 numaralı durum)
//     // console.log('playing...');
//   },
// };
// video.play();

// // add new method
// video.stop = function () {
//   console.log(this); // video objesi (1 numaralı durum)
//   //   console.log('stopped');
// };
// video.stop();

// function playVideo() {
//   console.log(this); // browser için window objesi (2 numaralı durum)
// }

// playVideo();

// function Video(title) {
//   this.title = title;
//   console.log(this); // video objesi (1 numaralı durum)
// }

// const v = new Video('b');
// // create a new empty object with the "new" keyword first then add the
// // properties which given in the Video constructor function to this empty object

// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     // this.tags.forEach(e => console.log(e));
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag); // this.title burada browser için window objesi (2 numaralı durum)
//       // burada callback fonksiyonu içindeyiz. Bu fonksiyon da regular function.
//       // Bu nedenle window objesi gösterilir.
//     });
//   },
// };

// const video = {
//   title: 'title',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag); // this.title burada browser için window objesi (2 numaralı durum)
//       // burada anonymous callback fonksiyonu içindeyiz. Bu nedenle window objesini gösterir.
//     }, this); // "this", showTags metodu için video objesini gösterdiği için callback içinde title erişilebilir oldu
//     // forEach metodunun ikinci bir parametresi olduğu için bu kod çalıştı. Her metotta bu YOK !!!
//   },
// };

// video.showTags();

//----------------------------------------------------------
// Changing the value of "this"

// Solution 1: DO NOT USE !!!
// const video = {
//   title: 'title',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     const self = this; // bazıları "self" yerine "that" de diyor
//     this.tags.forEach(function (tag) {
//       console.log(self.title, tag);
//     });
//   },
// };

// video.showTags();

// Solution 2:
// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo.call({ name: 'Semih' }, 1, 2); // parametre olarak geçilen obje (1 numaralı durum)
// playVideo.apply({ name: 'Semih' }, [1, 2]); // parametre olarak geçilen obje (1 numaralı durum)
// playVideo(); // browser için window objesi (2 numaralı durum)

// // const playVideo2 = playVideo.bind({ name: 'TA2LSM' });
// // // "this" içerde geçilen objeye kalıcı olarak bağlı yeni bir obje döner
// // playVideo2();
// playVideo.bind({ name: 'TA2LSM' })(); // direkt fonksiyonu yürütme bu şekilde () ile yapılıyor

// Solution 3:
// const video = {
//   title: 'title',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach(
//       function (tag) {
//         console.log(this.title, tag);
//       }.bind(this), // callback fonksiyonunu video objesine bağlayarak çağırdık
//     );
//   },
// };

// video.showTags();

// Solution 4: Arrow function (BEST PRACTICE)
// arrow function için "this", içinde bulundukları objeden miras alınır.
// bu nedenle video objesine direkt bağlanabiliriz.
// const video = {
//   title: 'title',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach(tag => {
//       console.log(this.title, tag);
//     });
//   },
// };

// video.showTags();

//----------------------------------------------------------
// Exercise 1:
// rest operatörü (...) geçilen parametreleri array şekline çevirecek
// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

//   return items.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3));
// console.log(sum([1, 2, 3]));

//----------------------------------------------------------
// Exercise 2:
// const circle = {
//   radius: 1,
//   get area() {
//     return this.radius * this.radius * Math.PI;
//   },
// };

// console.log(circle.area);
// circle.radius = 4;
// console.log(circle.area);

//----------------------------------------------------------
// Exercise 3:
try {
  const numbers = [1, 2, 3, 4, 7, 2, 1, 1, 1, 2, 3];

  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (error) {
  console.log(error.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('First parameter is not an array!');
  if (typeof searchElement !== 'number') throw new Error('Second parameter is not a number!');

  return array.reduce((acc, curValue) => {
    const occurence = curValue === searchElement ? 1 : 0;
    return acc + occurence;
  }, 0);
}
