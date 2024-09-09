## Fungsi SUM()

Fungsi **SUM()** digunakan untuk menghitung jumlah total dari sebuah kolom numerik.

#### Penulisan Query:
```sql
SELECT SUM(nama_kolom) 
FROM nama_tabel 
WHERE kondisi;
```

- **nama_kolom**: Nama kolom yang ingin dijumlahkan.
- **nama_tabel**: Nama tabel dari mana data akan diambil.
- **kondisi**: Kondisi yang harus dipenuhi untuk menjumlahkan data (opsional).

### Contoh Database

Berikut adalah contoh data dari tabel **DetailPesanan** yang akan digunakan:

#### Tabel DetailPesanan

| ID_Pesanan | ID_Produk | Jumlah |
|------------|-----------|--------|
| 1          | 10        | 5      |
| 2          | 11        | 8      |
| 3          | 11        | 7      |
| 4          | 12        | 3      |
| 5          | 10        | 6      |

---

### 1. Mengembalikan Jumlah Total Kolom

Untuk menjumlahkan semua nilai dari kolom **Jumlah** dalam tabel **DetailPesanan**, gunakan perintah berikut:

#### Contoh:
#### Penulisan Query:
```sql
SELECT SUM(Jumlah) 
FROM DetailPesanan;
```

**Hasil:**

| SUM(Jumlah) |
|-------------|
| 29          |

Perintah ini akan mengembalikan jumlah total dari kolom **Jumlah** di tabel **DetailPesanan**, yaitu **29**.

---

### 2. Menambahkan Klausa WHERE

Anda dapat menambahkan klausa **WHERE** untuk menentukan kondisi spesifik, misalnya hanya menjumlahkan nilai untuk produk dengan **ID_Produk** tertentu.

#### Contoh:
#### Penulisan Query:
```sql
SELECT SUM(Jumlah) 
FROM DetailPesanan 
WHERE ID_Produk = 11;
```

**Hasil:**

| SUM(Jumlah) |
|-------------|
| 15          |

Perintah ini akan mengembalikan jumlah total dari kolom **Jumlah** untuk produk dengan **ID_Produk = 11**, yaitu **15**.

---

### 3. Menggunakan Alias

Anda bisa memberi nama pada kolom hasil perhitungan dengan menggunakan kata kunci **AS**. Ini berguna untuk memberi nama kolom yang lebih deskriptif dalam hasil keluaran.

#### Contoh:
#### Penulisan Query:
```sql
SELECT SUM(Jumlah) AS total 
FROM DetailPesanan;
```

**Hasil:**

| total |
|-------|
| 29    |

Perintah ini akan mengembalikan jumlah total dari kolom **Jumlah** dan menamainya sebagai **total**.

---

### 4. Menggunakan SUM() dengan GROUP BY

Anda bisa menggunakan fungsi **SUM()** bersama dengan klausa **GROUP BY** untuk mengelompokkan hasil berdasarkan kolom tertentu, misalnya untuk menghitung jumlah produk pada setiap pesanan.

#### Contoh:
#### Penulisan Query:
```sql
SELECT ID_Pesanan, SUM(Jumlah) AS [Total Jumlah] 
FROM DetailPesanan 
GROUP BY ID_Pesanan;
```

**Hasil:**

| ID_Pesanan | Total Jumlah |
|------------|--------------|
| 1          | 5            |
| 2          | 8            |
| 3          | 7            |
| 4          | 3            |
| 5          | 6            |

Perintah ini akan mengelompokkan hasil berdasarkan **ID_Pesanan** dan menampilkan total **Jumlah** untuk setiap pesanan.

---

### 5. SUM() dengan Ekspresi

Anda juga bisa menggunakan ekspresi di dalam fungsi **SUM()**, seperti menghitung total pendapatan dengan mengalikan setiap jumlah dengan nilai tertentu.

#### Contoh:
Misalnya, jika setiap produk di tabel **DetailPesanan** berharga 10 dolar, kita bisa menemukan total pendapatan dengan mengalikan **Jumlah** dengan **10**.

#### Penulisan Query:
```sql
SELECT SUM(Jumlah * 10) AS TotalPendapatan 
FROM DetailPesanan;
```

**Hasil:**

| TotalPendapatan |
|-----------------|
| 290             |

Perintah ini akan mengembalikan total pendapatan dalam dolar, yaitu **290**.

---

Dengan materi ini, Anda dapat mempelajari berbagai cara untuk menjumlahkan data numerik dalam SQL menggunakan fungsi **SUM()**, baik dengan menghitung total keseluruhan, menambahkan kondisi spesifik, atau menggunakan alias dan klausa **GROUP BY** untuk pengelompokan.