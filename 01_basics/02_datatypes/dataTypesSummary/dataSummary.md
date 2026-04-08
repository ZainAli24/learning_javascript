## JavaScript — Dynamically Typed Hai

JavaScript **dynamically typed** language hai.

---

### Matlab Kya Hai?

**Dynamically typed** ka matlab hai ke tumhe variable banate waqt **batana nahi padta** ke usme kya data type aayega — JavaScript **khud** samajh leti hai run time pe.

Aur sabse badi baat — **ek variable ka type baad mein badal bhi sakta hai**.

---

### Example Dekho:

```javascript
let x = 10          // ab x ek NUMBER hai
console.log(typeof x)   // "number"

x = "Hello"         // ab x ek STRING ban gaya
console.log(typeof x)   // "string"

x = true            // ab x ek BOOLEAN ban gaya
console.log(typeof x)   // "boolean"
```

Dekha? **Ek hi variable** mein pehle number tha, phir string ban gaya, phir boolean ban gaya — **JavaScript ne koi error nahi di**.

---

### Statically Typed Kya Hota Hai? (Farq Samjho)

**Statically typed** languages (jaise **C++**, **Java**, **TypeScript**) mein tumhe **pehle se batana** padta hai ke variable mein kya aayega — aur **baad mein badal nahi sakte**.

Jaise Java mein:
```java
int x = 10;       // x sirf number rakhega
x = "Hello";      // ❌ ERROR — string nahi rakh sakte
```

---

### Aasan Tarike Se Samjho:

**Dynamically Typed (JavaScript):**
Socho **ek khali dabba** hai — usme **kuch bhi** daal sakte ho. Aaj kapde rakhe, kal kitabein rakh di, parso khane ka saaman — **dabba kuch nahi kehta**

**Statically Typed (Java, C++):**
Socho **"sirf kapdon ka dabba"** likha hai — usme **sirf kapde** hi rakh sakte ho. Kitab rakhne ki koshish ki toh **error** aa jayega

---

### Farq Ek Nazar Mein:

| | **Dynamically Typed** | **Statically Typed** |
|---|---|---|
| Type batana padta hai? | ❌ Nahi | ✅ Haan |
| Type badal sakta hai? | ✅ Haan | ❌ Nahi |
| Examples | **JavaScript**, Python, PHP | Java, C++, TypeScript |
| Error kab milti hai? | **Run time** pe (jab code chalta hai) | **Compile time** pe (chalane se pehle) |

---

### Fayda aur Nuksan:

**Fayda (Dynamic):**
- **Jaldi** code likha jaata hai
- **Flexible** hai — jo chaho kar lo
- Beginners ke liye **aasan**

**Nuksan (Dynamic):**
- **Bugs** zyada aate hain — kyunke type check nahi hota
- **Bade projects** mein masla ho sakta hai kyunke kuch bhi kahin bhi ho sakta hai

**Isi wajah se TypeScript banaya gaya** — ye JavaScript ka **statically typed** version hai jo bade projects ke liye zyada safe hai.

---

### Ek Line Mein:

**JavaScript = Dynamically Typed** — matlab variable ka type **pehle se fix nahi** hota, aur **baad mein badal bhi sakta hai**. JavaScript khud samajh leti hai ke konsi value konse type ki hai.



--------------------------

<br>


## Compile Time vs Run Time — Farq Samjho

Tumhari confusion sahi hai — ye **do alag cheezein** hain. Aksar log inhe same samajh lete hain. Chalo clear karte hain:

---

### Pehle Ye Samjho: Code Chalne Ke 2 Stages Hote Hain

Jab tum koi code likhte ho, wo **2 stages** se guzarta hai:

**Stage 1: Compile Time** → Code ko **check aur translate** karna (chalane se PEHLE)

**Stage 2: Run Time** → Code ko **actually CHALANA** (execute karna)

---

### Real Life Example Se Samjho:

Socho tum ek **khat (letter)** likh rahe ho kisi doosre mulk bhejne ke liye jo **English nahi samajhta**:

**Stage 1 — Compile Time (Translation):**
- Pehle tum khat ko **translator** ko dete ho
- Translator **poora khat padhta** hai
- **Grammar check** karta hai — agar koi galti hai toh **abhi** bata deta hai
- Agar sab theek hai toh **doosri zubaan** mein translate kar deta hai
- **Khat abhi tak kisi ne padha nahi** — sirf taiyaar hua hai

**Stage 2 — Run Time (Padhna):**
- Ab khat us banday tak pahuncha
- Usne khat **padha** — yani **actually use kiya**
- Yahan agar koi masla aaya (jaise address galat tha) toh **ab pata chala**

---

### Ab Code Mein Samjho:

### Statically Typed (Java) — Compile Time pe Check:

```java
int x = 10;
x = "Hello";    // ❌ ERROR
```

```
Stage 1 — COMPILE TIME (chalane se pehle):
   Java compiler code ko padhta hai
   Dekha: x number hai, lekin string daal rahe ho
   ❌ ERROR DE DI — abhi, code chalne se PEHLE
   
   Code CHALA HI NAHI

Stage 2 — RUN TIME:
   Yahan tak pahunchne ka mauqa hi nahi mila
```

**Fayda:** Galti **pehle hi** pakdi gayi — code chala bhi nahi

---

### Dynamically Typed (JavaScript) — Run Time pe Check:

```javascript
let x = 10
x.toUpperCase()    // ❌ ERROR (number pe string ka function)
```

```
Stage 1 — COMPILE TIME:
   JavaScript ne code ko jaldi se dekha
   Koi type check nahi kiya
   "Theek hai, chala do" — bola

Stage 2 — RUN TIME (jab code chala):
   Line 1: x = 10 ✅ chal gaya
   Line 2: x.toUpperCase() 
   ❌ ERROR — number pe ye function nahi chalta
   
   Code CHALTE CHALTE crash ho gaya
```

**Nuksan:** Galti **chalte waqt** pata chali — user ke saamne crash ho gaya

---

### Aasan Misaal:

Socho tum **gari** chala rahe ho:

**Compile Time Check (Statically Typed):**
- **Mechanic** ne gari **chalane se PEHLE** check ki
- Brake fail tha — **abhi** bata diya
- Tum gari **chala hi nahi** — safe ho

**Run Time Check (Dynamically Typed):**
- Mechanic ne kuch check nahi kiya
- Tum gari **chalane lage**
- **Beech rastay** mein brake fail ho gaya
- **Accident** ho gaya 😱

---

### Ek Nazar Mein:

| | **Compile Time** | **Run Time** |
|---|---|---|
| Kab hota hai? | Code chalne se **PEHLE** | Code **chalte waqt** |
| Kya hota hai? | Code **check** aur translate | Code **actually chalta** hai |
| Galti kab milti hai? | **Pehle hi** | **Chalte waqt**, user ke saamne |
| JavaScript? | Bohot kam check | Yahan saari errors aati hain |
| Java/C++? | Yahan zyada check hota hai | Yahan kam errors |

---

### Tumhari Confusion Ka Jawab:

**"Compile time = execution time"** ❌ **Nahi**

**Compile time** = code ko **taiyaar** karne ka waqt (chalane se **pehle**)

**Run time / Execution time** = code **actually chalne** ka waqt

Ye **2 alag stages** hain — pehle compile, **phir** run.

---

### JavaScript Ki Khaas Baat:

JavaScript mein compile time **bohot chhota** hota hai — ye type check nahi karti. Isliye saari errors **run time** pe aati hain — yani **jab code chal raha hota hai**, tab pata chalta hai ke kuch galat hai.

Isi wajah se JavaScript mein **bugs zyada** hote hain — kyunke compile time pe koi rok tok nahi.
