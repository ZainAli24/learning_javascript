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