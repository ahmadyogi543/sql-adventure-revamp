## Operator Perbandingan

Operator perbandingan digunakan untuk membandingkan nilai dalam kueri SQL dan mengembalikan hasil berdasarkan kondisi yang ditentukan. Berikut adalah beberapa operator perbandingan yang sering digunakan:

- **`=`** Sama dengan
- **`>`** Lebih besar dari
- **`<`** Lebih kecil dari
- **`>=`** Lebih besar dari sama dengan
- **`<=`** Lebih kecil dari sama dengan
- **`<>`** Tidak sama dengan

### Contoh Database

Berikut adalah contoh data dari tabel **Produk** yang akan digunakan:


| ID_Produk | Nama_Produk                        | ID_Pemasok | ID_Kategori | Unit                  | Harga |
|-----------|------------------------------------|------------|-------------|-----------------------|-------|
| 1         | Chais                              | 1          | 1           | 10 kotak x 20 kantong | 18    |
| 2         | Chang                              | 1          | 1           | 24 - 12 botol oz      | 19    |
| 3         | Sirup Adas                         | 1          | 2           | 12 - 550 ml botol     | 10    |
| 4         | Bumbu Cajun Chef Anton             | 2          | 2           | 48 - 6 oz toples      | 22    |
| 5         | Campuran Gumbo Chef Anton          | 2          | 2           | 36 kotak              | 21.35 |

---

### 1. Sama dengan (`=`)

Operator **`=`** digunakan untuk memilih baris di mana nilai kolom sama dengan nilai yang ditentukan.

**Penulisan Query**:
```sql
SELECT * 
FROM Produk 
WHERE Harga = 18;
```

**Hasil**:

| ID_Produk | Nama_Produk | ID_Pemasok | ID_Kategori | Unit                  | Harga |
|-----------|-------------|------------|-------------|-----------------------|-------|
| 1         | Chais       | 1          | 1           | 10 kotak x 20 kantong | 18    |

Hasil ini menampilkan produk dengan harga **18**. 

---

### 2. Lebih besar dari (`>`)

Operator **`>`** digunakan untuk memilih baris di mana nilai kolom lebih besar dari nilai yang ditentukan.

**Penulisan Query**:
```sql
SELECT * 
FROM Produk 
WHERE Harga > 20;
```

**Hasil**:

| ID_Produk | Nama_Produk                | ID_Pemasok | ID_Kategori | Unit        | Harga |
|-----------|----------------------------|------------|-------------|-------------|-------|
| 4         | Bumbu Cajun Chef Anton     | 2          | 2           | 48 - 6 oz toples | 22    |
| 5         | Campuran Gumbo Chef Anton  | 2          | 2           | 36 kotak    | 21.35 |

Hasil ini menampilkan produk dengan harga yang lebih besar dari **20**.

---

### 3. Lebih kecil dari (`<`)

Operator **`<`** digunakan untuk memilih baris di mana nilai kolom lebih kecil dari nilai yang ditentukan.

**Penulisan Query**:
```sql
SELECT * 
FROM Produk 
WHERE Harga < 20;
```

**Hasil**:

| ID_Produk | Nama_Produk   | ID_Pemasok | ID_Kategori | Unit                  | Harga |
|-----------|---------------|------------|-------------|-----------------------|-------|
| 1         | Chais         | 1          | 1           | 10 kotak x 20 kantong | 18    |
| 3         | Sirup Adas    | 1          | 2           | 12 - 550 ml botol     | 10    |

Hasil ini menampilkan produk dengan harga yang lebih kecil dari **20**.

---

### 4. Lebih besar dari sama dengan (`>=`)

Operator **`>=`** digunakan untuk memilih baris di mana nilai kolom lebih besar dari atau sama dengan nilai yang ditentukan.

**Penulisan Query**:
```sql
SELECT * 
FROM Produk 
WHERE Harga >= 21;
```

**Hasil**:

| ID_Produk | Nama_Produk                | ID_Pemasok | ID_Kategori | Unit                  | Harga |
|-----------|----------------------------|------------|-------------|-----------------------|-------|
| 4         | Bumbu Cajun Chef Anton     | 2          | 2           | 48 - 6 oz toples      | 22    |
| 5         | Campuran Gumbo Chef Anton  | 2          | 2           | 36 kotak              | 21.35 |

Hasil ini menampilkan produk dengan harga yang lebih besar dari atau sama dengan **21**.

---

### 5. Lebih kecil dari sama dengan (`<=`)

Operator **`<=`** digunakan untuk memilih baris di mana nilai kolom lebih kecil dari atau sama dengan nilai yang ditentukan.

**Penulisan Query**:
```sql
SELECT * 
FROM Produk 
WHERE Harga <= 19;
```

**Hasil**:

| ID_Produk | Nama_Produk    | ID_Pemasok | ID_Kategori | Unit                  | Harga |
|-----------|----------------|------------|-------------|-----------------------|-------|
| 1         | Chais          | 1          | 1           | 10 kotak x 20 kantong | 18    |
| 2         | Chang          | 1          | 1           | 24 - 12 botol oz      | 19    |
| 3         | Sirup Adas     | 1          | 2           | 12 - 550 ml botol     | 10    |

Hasil ini menampilkan produk dengan harga yang lebih kecil dari atau sama dengan **19**.

---

### 6. Tidak sama dengan (`<>`)

Operator **`<>`** digunakan untuk memilih baris di mana nilai kolom tidak sama dengan nilai yang ditentukan.

**Penulisan Query**:
```sql
SELECT * 
FROM Produk 
WHERE Harga <> 18;
```

**Hasil**:

| ID_Produk | Nama_Produk                | ID_Pemasok | ID_Kategori | Unit                  | Harga |
|-----------|----------------------------|------------|-------------|-----------------------|-------|
| 2         | Chang                      | 1          | 1           | 24 - 12 botol oz      | 19    |
| 3         | Sirup Adas                 | 1          | 2           | 12 - 550 ml botol     | 10    |
| 4         | Bumbu Cajun Chef Anton     | 2          | 2           | 48 - 6 oz toples      | 22    |
| 5         | Campuran Gumbo Chef Anton  | 2          | 2           | 36 kotak              | 21.35 |

Hasil ini menampilkan produk dengan harga yang tidak sama dengan **18**.

---

Dengan materi ini, Anda dapat memahami cara menggunakan operator perbandingan dalam SQL untuk memilih data berdasarkan kondisi tertentu.