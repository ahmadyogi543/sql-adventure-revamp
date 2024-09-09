## Operator Aritmatika dalam SQL

Operator aritmatika dalam SQL digunakan untuk melakukan operasi matematika pada data numerik. Operator ini berguna untuk menghitung, memproses data, dan mendapatkan hasil dari operasi seperti penjumlahan, pengurangan, perkalian, pembagian, dan modulo.

### 1. Penambahan (+)
Operator Penambahan (+) digunakan untuk menambahkan dua nilai numerik.

#### Contoh:
Misalkan Anda ingin menambahkan angka 30 dan 20.

**Penulisan Query**:
```sql
SELECT 30 + 20 AS Hasil;
```

**Hasil:**

| Hasil |
|-------|
| 50    |

Query ini menghasilkan nilai 50 yang merupakan hasil dari penambahan 30 dan 20.

---

### 2. Pengurangan (-)
Operator Pengurangan (-) digunakan untuk mengurangi satu nilai dari nilai lainnya.

#### Contoh:
Misalkan Anda ingin mengurangi 20 dari 30.

**Penulisan Query**:
```sql
SELECT 30 - 20 AS Hasil;
```

**Hasil:**

| Hasil |
|-------|
| 10    |

Query ini menghasilkan nilai 10 yang merupakan hasil dari pengurangan 30 dengan 20.

---

### 3. Pembagian (/)
Operator Pembagian (/) digunakan untuk membagi satu nilai dengan nilai lainnya.

#### Contoh:
Misalkan Anda ingin membagi 30 dengan 10.

**Penulisan Query**:
```sql
SELECT 30 / 10 AS Hasil;
```

**Hasil:**

| Hasil |
|-------|
| 3     |

Query ini menghasilkan nilai 3 yang merupakan hasil dari pembagian 30 dengan 10.

---

### 4. Perkalian (*)
Operator Perkalian (*) digunakan untuk mengalikan dua nilai.

#### Contoh:
Misalkan Anda ingin mengalikan 30 dengan 20.

**Penulisan Query**:
```sql
SELECT 30 * 20 AS Hasil;
```

**Hasil:**

| Hasil |
|-------|
| 600   |

Query ini menghasilkan nilai 600 yang merupakan hasil dari perkalian 30 dengan 20.

---

### 5. Modulo (%)
Operator Modulo (%) digunakan untuk mendapatkan sisa dari pembagian dua angka.

#### Contoh:
Misalkan Anda ingin mengetahui sisa pembagian 17 dengan 5.

**Penulisan Query**:
```sql
SELECT 17 % 5 AS Hasil;
```

**Hasil:**

| Hasil |
|-------|
| 2     |

Query ini menghasilkan nilai 2 yang merupakan sisa dari pembagian 17 dengan 5.

---

Dengan materi ini, Anda dapat memahami bagaimana menggunakan operator aritmatika dalam SQL untuk melakukan berbagai jenis perhitungan pada data numerik. Setiap operator memiliki fungsi khusus yang memudahkan dalam pengolahan dan analisis data.