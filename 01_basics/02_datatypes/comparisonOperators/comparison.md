## `null` Comparison — JavaScript ka Ajeeb Rule

### JavaScript ke 2 Alag Rules:

**Rule 1:** Jab `>`, `<`, `>=`, `<=` use karte ho → JavaScript `null` ko **number `0`** bana deta hai

**Rule 2:** Jab `==` use karte ho → JavaScript ka **alag rule** hai: `null` sirf **`null`** ya **`undefined`** ke barabar hota hai, **number ke barabar NAHI**

Bas yehi do rules hain — ab code dekho:

---

### Line 1: `console.log(null > 0)`

```
Step 1:  null > 0
          ↑    ↑
         null  number

Rule: > comparison hai → null ko number banao

Step 2:  null → 0 ban gaya

         0 > 0

Step 3:  Kya 0 bada hai 0 se?
         Nahi — dono barabar hain
```

**Output: `false`**

---

### Line 2: `console.log(null == 0)`

```
Step 1:  null == 0
          ↑     ↑
         null  number

Rule: == hai → YAHAN null ko number NAHI banate!
      JavaScript ka special rule:
      null sirf null ya undefined ke barabar hota hai

Step 2:  null number ke barabar ho hi nahi sakta
```

**Output: `false`**

**Yahi wo ajeeb baat hai** — `null > 0` mein null ko 0 banaya, lekin `null == 0` mein nahi banaya. **Alag alag rules hain** `==` aur `>` ke liye.

---

### Line 3: `console.log(null >= 0)`

```
Step 1:  null >= 0
          ↑     ↑
         null  number

Rule: >= comparison hai → null ko number banao

Step 2:  null → 0 ban gaya

         0 >= 0

Step 3:  Kya 0 bada ya barabar hai 0 ke?
         Haan — barabar toh hai
```

**Output: `true`**

---



### Bas 2 Baatein Yaad Rakho:

**1.** `>`, `<`, `>=`, `<=` ke saath → `null` **0 ban jaata hai**

**2.** `==` ke saath → `null` sirf `null` ya `undefined` ke barabar hota hai, **number ke barabar kabhi nahi**

---

<br>



----------

## String Comparison — Step by Step

### Pehle Ye Rule Yaad Rakho:

**Rule 1:** Jab **dono strings** ho (dono quotes mein) → JavaScript **harf by harf** (character by character) compare karta hai — **dictionary** ki tarah

**Rule 2:** Jab **ek string aur ek number** ho → JavaScript **string ko number** bana deta hai, phir normal math comparison

---

### Examples: 
## Haan Bilkul Sahi Samjhe! — Lekin Ek Extra Baat

Tumhari samajh **100% sahi** hai — jab dono strings ho toh **pehla harf** compare hota hai.

```javascript
console.log("34" > "54")
```

```
Step 1:  Pehla harf compare karo
         "34" ka pehla harf: "3"
         "54" ka pehla harf: "5"

Step 2:  Kya "3" bada hai "5" se?
         Nahi

         Result: false
```

**Output: `false`** ✅ Tumhari samajh sahi hai!

---

### Lekin Ek Extra Rule — Agar Pehla Harf SAME Ho Toh?

Agar **pehla harf barabar** ho toh JavaScript **doosre harf** pe chala jaata hai — phir **teesre** pe — jab tak **farq** na mile.

### Example 1: `"35" > "34"`

```
Step 1:  Pehla harf compare karo
         "35" ka pehla harf: "3"
         "34" ka pehla harf: "3"

         Dono BARABAR hain — faisla nahi hua
         Ab AGLE harf pe jao

Step 2:  Doosra harf compare karo
         "35" ka doosra harf: "5"
         "34" ka doosra harf: "4"

         Kya "5" bada hai "4" se?
         Haan!

         Result: true
```

**Output: `true`**

---

### Example 2: `"345" > "342"`

```
Step 1:  Pehla harf → "3" vs "3" → barabar, aage badho

Step 2:  Doosra harf → "4" vs "4" → barabar, aage badho

Step 3:  Teesra harf → "5" vs "2" → "5" bada hai "2" se

         Result: true
```

**Output: `true`**

---

### Example 3: `"abc" > "abd"`

```
Step 1:  "a" vs "a" → barabar, aage badho
Step 2:  "b" vs "b" → barabar, aage badho
Step 3:  "c" vs "d" → "c" chhota hai "d" se

         Result: false
```

**Output: `false`**

---

### Bas Ye Rule Yaad Rakho:

**Dictionary wala tarika:**

1. **Pehla harf** compare karo
2. Agar **farq mil gaya** → bas wohi **faisla** ho gaya, aage mat jao
3. Agar **barabar** hain → **agle harf** pe jao
4. Aise hi **jab tak farq na mile** — ya koi ek string **khatam** na ho jaye

---

### Tumhara Example Bilkul Sahi Tha:

```
"34" > "54"
 ↑      ↑
 3  vs  5    → 3 chhota hai 5 se → false
```

**Haan** — pehla harf hi faisla kar deta hai agar wo **alag** ho. Bas agar **same** ho toh **aage** jana padta hai. Tumne rule bilkul theek samjha hai! ✅
