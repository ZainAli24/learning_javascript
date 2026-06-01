## JavaScript Data Types — Primitive aur Non-Primitive

---

### Pehle Ye Samjho: Data Type Kya Hai?

**Data Type** ka matlab hai ke **variable mein kis tarah ka data rakha hai**

Jaise real life mein cheezein hoti hain — number, naam, haan/na — waise hi JavaScript mein bhi **alag alag tarah ka data** hota hai

JavaScript mein **2 categories** hain:

---

## 1. Primitive — (Bunyaadi / Asli Cheez)

**Urdu mein matlab:** "Bunyaadi" ya "Asli" — wo cheez jo **seedhi seedhi ek value** hai, **andar kuch nahi** hai

**Socho jaise:**
- Ek **number** likh diya — bas wohi hai, andar kuch nahi
- Ek **naam** likh diya — bas wohi hai, andar kuch nahi

**Primitive ki khaas baat:** ye **chhoti, simple, single value** hoti hai

JavaScript mein **7 Primitive Data Types** hain:

---

### 1. String — (Text / Likhai)

Koi bhi **text ya lafz** — hamesha **quotes** mein likha jaata hai

```javascript
let naam = "Zain"
let city = 'Lahore'
let message = `Hello ji`

console.log(typeof naam)   // "string"
```

**Real life:** Jaise kisi ka **naam**, **address**, **message**

---

### 2. Number — (Ginti / Number)

Koi bhi **number** — chahe chhota ho ya bada, decimal ho ya na ho

```javascript
let age = 20
let price = 99.99
let negative = -5

console.log(typeof age)   // "number"
```

**Real life:** Jaise **umar**, **qeemat**, **marks**

---

### 3. Boolean — (Haan ya Na)

Sirf **do values** — `true` ya `false`

```javascript
let isLoggedIn = true
let isAdmin = false

console.log(typeof isLoggedIn)   // "boolean"
```

**Real life:** Jaise **light ON hai ya OFF** — bas do hi options hain

---

### 4. Undefined — (Kuch Rakha Hi Nahi)

Jab variable **bana diya** lekin **value nahi di**

```javascript
let kuch
console.log(kuch)          // undefined
console.log(typeof kuch)   // "undefined"
```

**Real life:** Jaise **khali dabba** — dabba hai lekin andar **kuch nahi** rakha

---

### 5. Null — (Jaanboojh Ke Khali)

Jab tum **khud** kehte ho ke **isme kuch nahi hai**

```javascript
let result = null
console.log(result)          // null
console.log(typeof result)   // "object" (ye JavaScript ka purana bug hai)
```

**Real life:** Jaise tumne dabba **jaanboojh ke khali** rakha — kaha ke **isme kuch nahi rakhna**

**Farq samjho:**
- `undefined` = dabba hai lekin **bhool gaye kuch rakhna**
- `null` = dabba hai aur **jaanboojh ke khali** rakha

---

### 6. Symbol — (Unique Identity)

Ek **bilkul unique value** banata hai — koi doosri value is ke barabar nahi ho sakti

```javascript
let id1 = Symbol("123")
let id2 = Symbol("123")

console.log(id1 === id2)   // false — dono alag hain!
console.log(typeof id1)    // "symbol"
```

**Real life:** Jaise har insaan ka **fingerprint** — chahe naam same ho lekin fingerprint **hamesha alag**

(Ye abhi beginners ke liye zyada important nahi hai — baad mein samjho ge)

---

### 7. BigInt — (Bohot Bada Number)

Jab number **itna bada** ho ke normal `Number` handle nahi kar sake

```javascript
let bigNumber = 12345678901234567890n

console.log(typeof bigNumber)   // "bigint"
```

**Real life:** Jaise **bank ka bohot bada transaction number** jo normal ginti se bahar ho

(Ye bhi abhi beginners ke liye zyada zaruri nahi — baad mein kaam aayega)

---

## 2. Non-Primitive — (Murakkab / Complex Cheez)

**Urdu mein matlab:** "Murakkab" ya "Complex" — wo cheez jiske **andar aur cheezein** hain

**Socho jaise:**
- Ek **dabba** hai jiske andar **bohot saari cheezein** rakhi hain
- Ek **almari** hai jisme **alag alag khane** hain

**Non-Primitive ki khaas baat:** ye **ek value nahi** hoti balke **andar bohot saari values** hoti hain

JavaScript mein **3 main Non-Primitive Data Types** hain:

---

### 1. Object — (Dabba Jisme Labelled Cheezein Hain)

**Key-value pairs** — har cheez ka **naam** aur **value** hoti hai

```javascript
let person = {
    naam: "Zain",
    age: 20,
    city: "Lahore"
}

console.log(person.naam)     // "Zain"
console.log(person.age)      // 20
console.log(typeof person)   // "object"
```

**Real life:** Jaise tumhara **ID card** — uspe naam hai, umar hai, sheher hai — **sab ek jagah**

---

### 2. Array — (List / Fehrist)

**Ordered list** — cheezein **number wise** arranged hain

```javascript
let fruits = ["Apple", "Banana", "Mango"]

console.log(fruits[0])      // "Apple"
console.log(fruits[1])      // "Banana"
console.log(typeof fruits)  // "object"
```

**Real life:** Jaise tumhara **shopping list** — pehle ye, doosra ye, teesra ye

---

### 3. Function — (Kaam Karne Wali Machine)

Ek **code ka tukda** jo koi **kaam** karta hai — jab chaho tab chalao

```javascript
function sayHello() {
    console.log("Hello ji!")
}

sayHello()                     // "Hello ji!"
console.log(typeof sayHello)   // "function"
```

**Real life:** Jaise **washing machine** — kapde daalo, button dabao, kaam ho gaya

---

## Primitive vs Non-Primitive — Farq

```
📦 CHEEZ               Primitive          Non-Primitive
──────────────────────────────────────────────────────────
Kya hai?               Single value        Andar aur values hain
Example                "Zain", 20, true    {naam: "Zain"}, [1,2,3]
Change hota hai?       ❌ Nahi (immutable)  ✅ Haan (mutable)
Copy karo toh?         Nayi copy banti     Same cheez point hoti hai
```

### Ye Copy wala farq samjho — IMPORTANT:

**Primitive — Nayi copy banti hai:**

```javascript
let a = "Zain"
let b = a        // b mein NAYI copy gayi
b = "Ali"

console.log(a)   // "Zain" — a safe raha ✅
console.log(b)   // "Ali"
```

**Non-Primitive — Same cheez point hoti hai:**

```javascript
let obj1 = { naam: "Zain" }
let obj2 = obj1              // obj2 SAME object pe point kar raha hai
obj2.naam = "Ali"

console.log(obj1.naam)   // "Ali" — obj1 bhi badal gaya! 😱
console.log(obj2.naam)   // "Ali"
```

**Socho jaise:**
- **Primitive** = tumne **photo ki photocopy** nikaali — asli photo safe rahi
- **Non-Primitive** = tumne **ghar ki chaabi** kisi ko di — wo bhi **usi ghar** mein jaayega aur kuch bhi badal sakta hai

---

### Poora Summary:

```
🟢 PRIMITIVE (Bunyaadi — 7 types):
   1. String      → "Zain" (text)
   2. Number      → 20 (ginti)
   3. Boolean     → true/false (haan/na)
   4. Undefined   → bhool gaye value dena
   5. Null        → jaanboojh ke khali
   6. Symbol      → unique identity
   7. BigInt      → bohot bada number

🔵 NON-PRIMITIVE (Murakkab — 3 main types):
   1. Object      → {naam: "Zain"} (labelled dabba)
   2. Array       → ["Apple", "Banana"] (list)
   3. Function    → function() {} (kaam karne wali machine)
```

------------


<br>


### Function internals:
Aapka confusion bilkul valid hai! JavaScript seekhte waqt yeh cheez bohot ajeeb lagti hai kyunki hum aksar functions ko sirf code execute karne ke liye dekhte hain.
Aap ne parameters/arguments isliye nahi dekhe kyunki greet.language koi function argument nahi hai, balki yeh ek object property hai.
## Yeh Kaise Kaam Kar Raha Hai?
JavaScript mein functions asal mein hidden objects hote hain (Objects with callable capabilities).
Jab aap greet() likhte hain, toh aap function ke andar ka code chalate hain. Lekin jab aap greet.language likhte hain, toh aap us function ko ek normal object ki tarah treat kar rahe hote hain.
Is cheez ko aasan lafzon mein samajhte hain:

```js
// JavaScript background mien function ko is tarah dekhta hai:
greet = {
  // 1. Ek hidden property hoti hai jo code run karti hai:
  [[Call]]: function() { return "Hello!"; },
  
  // 2. Aur aap is mien naye fields khud se add kar sakte hain:
  language: "Spanish" 
};
```

## Dono mien farq kya hai?

   1. Parameters / Arguments (greet("Urdu")): Yeh function ke andar ka code chalane ke liye data pass karte hain.
   2. Function Properties (greet.language = "Urdu"): Yeh function ke bahar ek data ka tag lagane ke liye hota hai. Iska function ke andar chalne wale code se koi lena dena nahi hota.


### Full Code: 
```js
// 1. Define a simple function
function greet() {
  return "Hello!";
}

// 2. Mutate the function by adding a custom property (proving it is non-primitive)
greet.language = "English";

// 3. Mutate the function by changing that property
greet.language = "Spanish";

// Verify the changes
console.log(greet());         // Output: "Hello!"
console.log(greet.language);  // Output: "Spanish"

```

----------

Aap ka point bilkul sahi hai aur aap bohot bariki se cheezon ko observe kar rahe hain! Aap bilkul theek keh rahe hain ke "Spanish" ki jagah "English" likhne se original string change nahi hui, balki ek naya string assign hua hai.
Lekin yahan aapko do alag cheezon ko farq kar ke dekhna hoga: Property ke andar ki value (String) aur Function object khud (Greet).
Aaiye isko clear karte hain:
## 1. String primitive hai (Aap bilkul sahi hain)
"Spanish" aur "English" strings hain, aur strings JavaScript mien primitive hote hain. Jab aapne greet.language = "English" likha, toh aapne purane string ko modify nahi kiya, balki language naam ki property ko ek naye string ("English") ki taraf point karwa diya.
## 2. Lekin Function mutable hai (Main point yeh hai)
Asal saboot function ke non-primitive (mutable) hone ka yeh nahi hai ke string change hui ya nahi. Asal saboot yeh hai ke aap greet function ke andar koi nayi property add ya change kar pa rahe hain.
Agar greet ek primitive data type hota (jaise ek normal string ya number), toh aap uske sath aisa dot . laga kar property add hi nahi kar sakte the.
Is farq ko is code se samajhein:

```js
// --- Case 1: Primitive Type (String) ---let name = "Ali";
name.age = 25;          // JavaScript yahan naye property add nahi karne dega
console.log(name.age);  // Output: undefined (Kyunki primitive immutable hote hain)
// --- Case 2: Non-Primitive Type (Function) ---function greet() { return "Hey!"; }
greet.age = 25;         // JavaScript ne property add karne di!
console.log(greet.age); // Output: 25 (Kyunki function ek object hai, mutable hai)
```

## Summary

* "Spanish" se "English" hona: Yeh string ka naye value ko point karna hai (Primitive behavior).
* greet ke andar language naam ka box paida hona: Yeh function ka apna behavior hai (Non-primitive / Mutable behavior). Humne pure function ko delete karke naya function nahi banaya, balki chalte hue function ke andar ek naya badlao (mutation) kiya hai.

