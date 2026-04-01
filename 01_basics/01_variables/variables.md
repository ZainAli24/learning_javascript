## `console.table()` — Definition

`console.table()` ek **method** hai jo tumhara data **table (row/column)** ki shakal mein console pe dikhata hai — taake multiple values ko **saaf aur organized** tarike se padh sako.

### Tumhara code ka output:

Jab ye line chalti hai:
```javascript
console.table([accountName, accountEmail, accontCity])
```

Toh console mein ye table banta hai:

| (index) | Values            |
|---------|-------------------|
| 0       | Sameer            |
| 1       | sameeer@gmail.com |
| 2       | Pindi             |

### Agar wohi cheez `console.log()` se karte toh:

```javascript
console.log(accountName, accountEmail, accontCity)
```

Output aisa aata:

```
Sameer sameeer@gmail.com Pindi
```

Dekho farq? Sab kuch ek line mein chipak gaya — samajhna mushkil hai.

### Aasan alfaazon mein:

- **`console.log()`** → sab kuch **ek line** mein phenk deta hai
- **`console.table()`** → sab kuch **table** mein set karke dikhata hai

Bas yehi hai — `table` method ka kaam **data ko saaf aur readable banake dikhana** hai.


------------------

<br> </br>

--------------

# **UnderStanding Const - Let - Var with Scope levels:**
## JavaScript Variables — Complete Guide

---

### Sabse Pehle: Scope Kya Hai?

**Scope = Variable ki duniya — jahan tak wo zinda hai aur kaam karta hai**

JavaScript mein **3 tarah ki duniya** hai:

---

### 1. Global Scope — (Khula Maidan)

Jab variable **kisi bhi `{ }` ya function ke bahar** likho — wo **Global** hai

```javascript
let naam = "Zain"        // ye global hai
const age = 20           // ye global hai
var city = "Lahore"      // ye global hai

// ye teeno POORE program mein kahi bhi accessible hain
```

**Global matlab:** koi bhi function ho, koi bhi block ho, **sab jagah se access** kar sakte ho

```javascript
let naam = "Zain"   // global

function sayHello() {
    console.log(naam)   // ✅ function ke andar bhi milega
}

if (true) {
    console.log(naam)   // ✅ block ke andar bhi milega
}

console.log(naam)       // ✅ bahar bhi milega
```

**Real life:** Socho **khula maidan** hai — sab log dekh sakte hain, sab access kar sakte hain

**Lekin `var` ka global mein ek EXTRA masla hai:**

```javascript
var color = "Red"
let size = "Big"

console.log(window.color)   // ✅ "Red" — browser ke window mein ghus gaya
console.log(window.size)    // ❌ undefined — let safe raha
```

`var` global mein likho toh wo **browser ke `window` object** mein ghus jaata hai. `window` matlab browser ki **sabse badi duniya** — agar wahan koi aur cheez ka naam same ho toh **clash** ho jayega.

---

### 2. Block Scope — (Kamra `{ }`)

**Block** matlab **har wo jagah jahan `{ }` curly brackets hain** — jaise `if`, `for`, `while`

```javascript
if (true) {
    // ye ek block hai — ek kamra
}

for (let i = 0; i < 5; i++) {
    // ye bhi ek block hai — ek kamra
}

while (true) {
    // ye bhi ek block hai — ek kamra
    break
}
```

**`let` aur `const` — block ke andar rahe:**

```javascript
if (true) {
    let a = "Let wala"
    const b = "Const wala"
}

console.log(a)   // ❌ ERROR — kamre mein ruka
console.log(b)   // ❌ ERROR — kamre mein ruka
```

**`var` — block todh ke bahar nikal gaya:**

```javascript
if (true) {
    var c = "Var wala"
}

console.log(c)   // ✅ "Var wala" — bahar aa gaya 😱
```

---

### 3. Function Scope — (Ghar ka Gate)

**Function** ek aisi boundary hai jo **teeno ko rokti hai** — `let`, `const` AUR `var`

```javascript
function meriFunction() {
    let a = "Let"
    const b = "Const"
    var c = "Var"
}

meriFunction()

console.log(a)   // ❌ ERROR
console.log(b)   // ❌ ERROR
console.log(c)   // ❌ ERROR — var bhi ruk gaya!
```

**Yahi ek jagah hai jahan `var` bhi ruk jaata hai**

**Lekin andar ka farq dekho:**

```javascript
function meriFunction() {
    if (true) {
        let a = "Let"
        const b = "Const"
        var c = "Var"
    }

    console.log(a)   // ❌ ERROR — let kamre mein ruka
    console.log(b)   // ❌ ERROR — const kamre mein ruka
    console.log(c)   // ✅ "Var" — kamre se nikal ke function mein phail gaya
}
```

`var` ne **block todh diya** lekin **function se bahar nahi ja saka**

---

### 4. Other Files — (Padosi ka Ghar)

Jab ek HTML mein do JS files load ho:

```html
<script src="file1.js"></script>
<script src="file2.js"></script>
```

**`var` — doosri file mein bhi pahunch gaya:**

```javascript
// file1.js
var naam = "Zain"

// file2.js
console.log(naam)   // ✅ "Zain" — mil gaya
naam = "Ali"        // ✅ change bhi kar diya 😱
```

**`let` aur `const` — doosri file mein NAHI gaye:**

```javascript
// file1.js
let naam = "Zain"

// file2.js
console.log(naam)   // ❌ ERROR — safe raha
```

---

### Ab Teeno Variables ka Full Comparison

---

#### `const` — Patthar pe likha hua

```javascript
const x = 10
x = 20          // ❌ ERROR — value change nahi hogi
const x = 30    // ❌ ERROR — dobara declare nahi ho sakta
```

- Value **change NAHI** ho sakti
- Dobara **declare NAHI** ho sakta
- **Block** mein ruka rehta hai ✅
- **Function** mein ruka rehta hai ✅
- **Global** mein safe rehta hai ✅
- **Other files** mein nahi jaata ✅

---

#### `let` — Controlled Variable

```javascript
let x = 10
x = 20          // ✅ value change ho sakti hai
let x = 30      // ❌ ERROR — dobara declare nahi ho sakta
```

- Value **change HO** sakti hai
- Dobara **declare NAHI** ho sakta
- **Block** mein ruka rehta hai ✅
- **Function** mein ruka rehta hai ✅
- **Global** mein safe rehta hai ✅
- **Other files** mein nahi jaata ✅

---

#### `var` — Purana aur Khatarnaak

```javascript
var x = 10
x = 20          // ✅ value change ho sakti hai
var x = 30      // ✅ dobara declare bhi ho gaya — koi warning nahi 😱
```

- Value **change HO** sakti hai
- Dobara **declare BHI** ho sakta hai (silently overwrite) 😱
- **Block** todh ke bahar nikal jaata hai 😱
- **Function** mein ruka rehta hai (bas yahi boundary)
- **Global** mein `window` object mein ghus jaata hai 😱
- **Other files** mein bhi leak ho jaata hai aur change ho sakta hai 😱

---

### Poora Picture:

```
📦 SCOPE              const     let       var
─────────────────────────────────────────────────
🚪 Block { }          ✅ ruka    ✅ ruka    ❌ todh diya
🏗️ Function           ✅ ruka    ✅ ruka    ✅ ruka
🌍 Global             ✅ safe    ✅ safe    ❌ window mein ghusa
📁 Other Files         ✅ safe    ✅ safe    ❌ leak ho gaya

🔄 Value Change        ❌ nahi    ✅ haan    ✅ haan
🔁 Dobara Declare      ❌ nahi    ❌ nahi    ✅ haan (khatarnaak)
```

---

### Golden Rule:

**Step 1:** Pehle hamesha **`const`** lagao — agar value fix hai

**Step 2:** Agar value baad mein badalni ho toh **`let`** lagao

**Step 3:** **`var` kabhi mat lagao** — ye purana hai, scope todhta hai, bugs deta hai

Bas yehi poori kahani hai `const`, `let` aur `var` ki.

-----------------

<br> </br>

-------------
