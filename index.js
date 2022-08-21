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
let x = 0;
var y = 0;
