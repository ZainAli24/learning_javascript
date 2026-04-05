## JavaScript Type Coercion — Step by Step

**Pehle ek rule yaad rakho:**

- **`+` operator** ke paas jab **ek bhi string** aaye toh wo **sab ko string bana deta hai** aur **jod deta hai** (concatenation)
- **`-` operator** hamesha **math karta hai** — string ko bhi **number bana deta hai**

Ab har line **step by step** samjhte hain:

---

### Line 1: `console.log(1 + "4")`

```
Step 1:  1 + "4"
         ↓
         ek number hai, ek string hai
         ↓
         + ne dekha string hai — toh number ko bhi string bana diya
         ↓
         "1" + "4"
         ↓
         "14" (jod diya — concatenation)

Output: "14"
```

**Socho jaise:** 1 aur "4" mile — `+` ne kaha "string hai toh mein chipkaaunga" — **"14"**

---

### Line 2: `console.log(1 - "4")`

```
Step 1:  1 - "4"
         ↓
         minus (-) hamesha MATH karta hai
         ↓
         "4" ko number bana diya → 4
         ↓
         1 - 4
         ↓
         -3

Output: -3
```

**Socho jaise:** minus ne kaha "mein toh sirf math karta hu" — **"4" ko 4 banaya** aur **1 - 4 = -3**

---

### Line 3: `console.log("1" + 4 + 6)`

Ye **LEFT se RIGHT** jaata hai — ek ek karke:

```
Step 1:  "1" + 4
         ↓
         + ne dekha "1" string hai
         ↓
         4 ko bhi string bana diya
         ↓
         "1" + "4" = "14"

Step 2:  "14" + 6
         ↓
         + ne dekha "14" string hai
         ↓
         6 ko bhi string bana diya
         ↓
         "14" + "6" = "146"

Output: "146"
```

**Socho jaise:** pehle "1" string thi — toh **aage sab string ban gaya** — domino effect jaise

---

### Line 4: `console.log(1 + 4 + "6")`

Ye bhi **LEFT se RIGHT** jaata hai:

```
Step 1:  1 + 4
         ↓
         dono number hain
         ↓
         normal math hogi
         ↓
         1 + 4 = 5

Step 2:  5 + "6"
         ↓
         + ne dekha "6" string hai
         ↓
         5 ko bhi string bana diya
         ↓
         "5" + "6" = "56"

Output: "56"
```

**Socho jaise:** pehle dono number the toh **math ho gayi (5)** — phir string aayi toh **chipak gaya "56"**

---

### Line 5: `console.log("1" + 4 - 6)`

Ye bhi **LEFT se RIGHT** jaata hai:

```
Step 1:  "1" + 4
         ↓
         + ne dekha "1" string hai
         ↓
         4 ko bhi string bana diya
         ↓
         "1" + "4" = "14"

Step 2:  "14" - 6
         ↓
         minus (-) hamesha MATH karta hai
         ↓
         "14" ko number bana diya → 14
         ↓
         14 - 6 = 8

Output: 8
```

**Socho jaise:** pehle `+` ne string banaya **"14"** — phir `-` ne kaha "mein toh math karunga" — **"14" ko 14 banaya** aur **14 - 6 = 8**

---

### Golden Rules Yaad Rakho:

**Rule 1:** `+` ke paas **ek bhi string** aaye toh **sab string ban jaata hai** (chipkana shuru)

**Rule 2:** `-` hamesha **math karta hai** — string ko bhi **number bana deta hai**

**Rule 3:** JavaScript **LEFT se RIGHT** calculate karta hai — pehle jo do milein unka result aaye, phir agle se judge ho

---

### Saare Outputs Ek Nazar Mein:

```
1 + "4"         →  "14"     (string jod diya)
1 - "4"         →  -3       (math kar diya)
"1" + 4 + 6     →  "146"    (pehle string aayi — sab string)
1 + 4 + "6"     →  "56"     (pehle math — phir string aayi)
"1" + 4 - 6     →  8        (pehle string — phir minus ne math kiya)
```

-------------

<br> </br>


## Execution Order — Step by Step

### Pehle Ye Rule Yaad Rakho:

**Rule 1:** **Brackets `( )` sabse PEHLE** solve hote hain

**Rule 2:** Phir **LEFT se RIGHT** ek ek karke solve hota hai

**Rule 3:** `+` mein string hai toh **CHIPKAO**

**Rule 4:** `-` mein hamesha **NUMBER** banega

---

### Line 1: `(1 + 5) - "14"`

```
Step 1:  BRACKETS pehle solve karo
         (1 + 5)
          ↑   ↑
        number  number
         
         dono number hain toh MATH hoga
         
         Result: 6

Step 2:  Ab expression ye ban gaya:
         6 - "14"
         ↑    ↑
       number  string

         Rule: - mein HAMESHA number banega
         
         6 - 14 = -8
```

**Output: `-8`**

---

### Line 2: `"1" + 7 - (6 + "4")`

```
Step 1:  BRACKETS pehle solve karo
         (6 + "4")
          ↑    ↑
        number  string

         Rule: + mein string hai toh CHIPKAO

         Result: "64"

Step 2:  Ab expression ye ban gaya:
         "1" + 7 - "64"
         
         LEFT se RIGHT chalte hain
         
         Pehle: "1" + 7
                 ↑    ↑
               string  number

         Rule: + mein string hai toh CHIPKAO

         Result: "17"

Step 3:  Ab expression ye ban gaya:
         "17" - "64"
          ↑      ↑
        string  string

         Rule: - mein HAMESHA number banega

         17 - 64 = -47
```

**Output: `-47`**

---

### Line 3: `"1" + 7 - (6 + "4") + "3" - 2`

Ye sabse **lambi** hai — step by step:

```
Step 1:  BRACKETS pehle solve karo
         (6 + "4")
          ↑    ↑
        number  string

         Rule: + mein string hai toh CHIPKAO

         Result: "64"

Step 2:  Ab expression ye ban gaya:
         "1" + 7 - "64" + "3" - 2
         
         LEFT se RIGHT chalte hain

─────────────────────────────────

Step 3:  "1" + 7
          ↑    ↑
        string  number

         Rule: + mein string hai toh CHIPKAO

         Result: "17"

         Expression: "17" - "64" + "3" - 2

─────────────────────────────────

Step 4:  "17" - "64"
          ↑      ↑
        string  string

         Rule: - mein HAMESHA number banega

         17 - 64 = -47

         Expression: -47 + "3" - 2

─────────────────────────────────

Step 5:  -47 + "3"
          ↑     ↑
        number  string

         Rule: + mein string hai toh CHIPKAO

         Result: "-473"

         Expression: "-473" - 2

─────────────────────────────────

Step 6:  "-473" - 2
           ↑      ↑
         string  number

         Rule: - mein HAMESHA number banega

         -473 - 2 = -475
```

**Output: `-475`**

---

### Poora Output Ek Nazar Mein:

```
(1 + 5) - "14"                    →   -8
"1" + 7 - (6 + "4")               →   -47
"1" + 7 - (6 + "4") + "3" - 2     →   -475
```

---

### Execution Order Yaad Rakhne Ka Formula:

```
1️⃣  BRACKETS ( ) → sabse PEHLE solve karo
2️⃣  LEFT se RIGHT → ek ek karke solve karo
3️⃣  + mein string hai → CHIPKAO
4️⃣  - aaya → sab NUMBER ban jayega
```

Bas yahi order hai — **pehle brackets, phir left se right, aur har step pe dekho ke `+` hai ya `-` hai.**

----------------

<br> </br>


## Prefix aur Postfix — Step by Step

### Pehle Ye Samjho: `++` aur `--` Kya Hai?

**`++`** matlab **1 badhao** (increment)

**`--`** matlab **1 ghatao** (decrement)

Lekin ye **do tarike** se lag sakta hai:

---

### 2 Tarike:

**Postfix** → `increment++` → **PEHLE use karo, BAAD mein badhao**

**Prefix** → `++increment` → **PEHLE badhao, PHIR use karo**

---

### Real Life Example Se Samjho:

Socho tum **dukaan** pe ho aur tumhare paas **100 rupay** hain

**Postfix (`increment++`):**
Dukaandaar bolta hai **"pehle 100 rupay dikha, phir 1 rupay aur jeb mein daal"**
Toh tumne **100 dikhaye** — phir baad mein jeb mein **101 ho gaye**

**Prefix (`++increment`):**
Dukaandaar bolta hai **"pehle 1 rupay jeb mein daal, phir dikha kitne hain"**
Toh tumne **pehle daale** — phir dikhaye ke ab **102 hain**

---

### Ab Code Step by Step Chalate Hain:

Shuru mein:
```javascript
let increment = 100
```

---

### Line 1: `console.log(increment++)`

```
POSTFIX → Pehle USE karo, BAAD mein badhao

Step 1:  console.log mein PEHLE current value use hogi
         current value = 100
         toh print hoga: 100

Step 2:  BAAD mein 1 badha do
         increment = 101 (ye memory mein ho gaya)
```

**Output: `100`**
**Memory mein ab: `101`**

---

### Line 2: `console.log(++increment)`

```
PREFIX → PEHLE badhao, PHIR use karo

Step 1:  PEHLE 1 badha do
         increment = 101 + 1 = 102

Step 2:  Ab console.log mein ye NAYI value use hogi
         print hoga: 102
```

**Output: `102`**
**Memory mein ab: `102`**

---

### Line 3: `console.log(increment--)`

```
POSTFIX → Pehle USE karo, BAAD mein ghatao

Step 1:  console.log mein PEHLE current value use hogi
         current value = 102
         toh print hoga: 102

Step 2:  BAAD mein 1 ghata do
         increment = 101 (ye memory mein ho gaya)
```

**Output: `102`**
**Memory mein ab: `101`**

---

### Line 4: `console.log(--increment)`

```
PREFIX → PEHLE ghatao, PHIR use karo

Step 1:  PEHLE 1 ghata do
         increment = 101 - 1 = 100

Step 2:  Ab console.log mein ye NAYI value use hogi
         print hoga: 100
```

**Output: `100`**
**Memory mein ab: `100`**

---

### Poora Output Ek Nazar Mein:

```
let increment = 100

console.log(increment++)   →   100   (pehle dikhaya 100, phir 101 hua)
console.log(++increment)   →   102   (pehle 102 hua, phir dikhaya 102)
console.log(increment--)   →   102   (pehle dikhaya 102, phir 101 hua)
console.log(--increment)   →   100   (pehle 100 hua, phir dikhaya 100)
```

---

### Bas 2 Lines Yaad Rakho:

```
POSTFIX (increment++ ya increment--)
→ PEHLE dikha, BAAD mein badal
→ Socho: "pehle photo khichwao, phir kapde badlo"

PREFIX (++increment ya --increment)
→ PEHLE badal, PHIR dikha
→ Socho: "pehle kapde badlo, phir photo khichwao"
```

Bas yehi farq hai — **`++` ya `--` PEHLE likha hai ya BAAD mein** — isi se decide hota hai ke **pehle value use hogi ya pehle change hoga.**