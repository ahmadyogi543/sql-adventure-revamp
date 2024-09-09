## Fungsi COUNT()

Fungsi **COUNT()** digunakan untuk menghitung jumlah baris yang memenuhi kriteria tertentu dalam sebuah tabel. Fungsi ini sering digunakan untuk mengetahui jumlah data yang ada atau yang sesuai dengan kondisi tertentu.

### Penulisan Query:
```sql
SELECT COUNT(nama_kolom) 
FROM nama_tabel 
WHERE kondisi;
```

- **nama_kolom** adalah kolom yang ingin dihitung.
- **nama_tabel** adalah nama tabel tempat data diambil.
- **kondisi** adalah syarat atau kriteria yang ingin diterapkan.

### Contoh Database

Berikut adalah contoh data dari tabel **Produk** yang akan digunakan:

| IDProduk | NamaProduk                  | SupplierID | CategoryID | Unit                | Harga |
|----------|-----------------------------|------------|------------|---------------------|-------|
| 1        | Chais                       | 1          | 1          | 10 boxes x 20 bags  | 18    |
| 2        | Chang                       | 1          | 1          | 24 - 12 oz bottles  | 19    |
| 3        | Aniseed Syrup               | 1          | 2          | 12 - 550 ml bottles | 10    |
| 4        | Chef Anton's Cajun Seasoning| 2          | 2          | 48 - 6 oz jars      | 22    |
| 5        | Chef Anton's Gumbo Mix      | 2          | 2          | 36 boxes            | 21.35 |

---

### 1. Menghitung Jumlah Semua Baris (COUNT())

Fungsi **COUNT()** digunakan untuk menghitung semua baris dalam sebuah tabel, termasuk yang memiliki nilai **NULL**. Ini adalah cara paling umum untuk menghitung total jumlah baris dalam tabel.

#### Contoh:
Misalkan Anda ingin mengetahui jumlah total baris dalam tabel **Produk**.

#### Penulisan Query:
```sql
SELECT COUNT(*) 
FROM Produk;
```

**Hasil:**

| COUNT(*) |
|----------|
| 5        |

Perintah ini akan menghitung semua baris dalam tabel **Produk** dan menampilkan hasilnya sebagai **5**.

---

### 2. Menghitung Jumlah Baris pada Kolom Tertentu (COUNT(kolom))

Anda juga dapat menghitung jumlah baris pada kolom tertentu, tetapi nilai **NULL** tidak akan dihitung. Ini berguna jika Anda ingin menghindari penghitungan nilai **NULL** dalam perhitungan.

#### Contoh:
Untuk menghitung berapa banyak produk di mana **NamaProduk** tidak **NULL**, Anda dapat menggunakan perintah berikut:

#### Penulisan Query:
```sql
SELECT COUNT(NamaProduk) 
FROM Produk;
```

**Hasil:**

| COUNT(NamaProduk) |
|-------------------|
| 5                 |

Perintah ini akan menghitung jumlah baris di kolom **NamaProduk** yang tidak **NULL**, dan hasilnya adalah **5**.

---

### 3. Menggunakan COUNT dengan Klausa WHERE

Anda dapat menambahkan klausa **WHERE** untuk menghitung hanya baris yang memenuhi kondisi tertentu. Ini berguna ketika Anda hanya ingin menghitung baris yang memenuhi syarat tertentu.

#### Contoh:
Untuk menghitung jumlah produk di mana **Harga** lebih dari 20, Anda dapat menggunakan perintah berikut:

#### Penulisan Query:
```sql
SELECT COUNT(IDProduk) 
FROM Produk 
WHERE Harga > 20;
```

**Hasil:**

| COUNT(IDProduk) |
|-----------------|
| 3               |

Perintah ini akan menghitung jumlah produk dengan harga lebih dari 20, dan hasilnya adalah **3**.

---

Dengan mempelajari materi ini, Anda dapat mempelajari cara menghitung jumlah baris dalam tabel SQL menggunakan fungsi **COUNT()**, baik untuk menghitung total semua baris, menghitung baris dengan nilai tidak **NULL**, maupun menghitung baris yang memenuhi kriteria tertentu menggunakan klausa **WHERE**.