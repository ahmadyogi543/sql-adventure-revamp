## Fungsi AVG()

Fungsi **AVG()** digunakan untuk menghitung nilai rata-rata dari kolom numerik dalam sebuah tabel. Ini berguna untuk mengetahui nilai rata-rata dari sekumpulan data seperti harga, jumlah, atau nilai lainnya.

### Penulisan Query
```sql
SELECT AVG(nama_kolom) 
FROM nama_tabel 
WHERE kondisi;
```

- **nama_kolom**: Nama kolom yang ingin dihitung rata-ratanya.
- **nama_tabel**: Nama tabel dari mana data akan diambil.
- **kondisi**: Kondisi yang harus dipenuhi untuk menghitung rata-rata data (opsional).

### Contoh Database

Berikut adalah contoh data dari tabel **Produk** yang akan digunakan:

#### Tabel Produk (Bahasa Indonesia)

| ID_Produk | Nama_Produk                        | ID_Pemasok | ID_Kategori | Unit                  | Harga |
|-----------|------------------------------------|------------|-------------|-----------------------|-------|
| 1         | Chais                              | 1          | 1           | 10 kotak x 20 kantong | 18    |
| 2         | Chang                              | 1          | 1           | 24 - 12 botol oz      | 19    |
| 3         | Sirup Adas                         | 1          | 2           | 12 - 550 ml botol     | 10    |
| 4         | Bumbu Cajun Chef Anton             | 2          | 2           | 48 - 6 oz toples      | 22    |
| 5         | Campuran Gumbo Chef Anton          | 2          | 2           | 36 kotak              | 21.35 |

---

### 1. Menghitung Rata-rata Semua Baris (AVG(kolom))

Operator **AVG(kolom)** digunakan untuk menghitung rata-rata dari nilai numerik di kolom tertentu. Ini termasuk semua nilai dalam kolom, kecuali **NULL**.

#### Contoh:
Misalkan Anda ingin mengetahui rata-rata harga dari semua produk di tabel **Produk**.

**Penulisan Query**:
```sql
SELECT AVG(Harga) 
FROM Produk;
```

**Hasil:**

| AVG(Harga) |
|------------|
| 18.27      |

Perintah ini menghitung rata-rata harga dari semua produk dalam tabel **Produk**. Hasilnya adalah **18.27**.

---

### 2. Menggunakan AVG dengan Klausa WHERE

Anda dapat menambahkan klausa **WHERE** untuk menghitung rata-rata dari baris yang memenuhi kondisi tertentu. Ini berguna saat Anda ingin fokus pada subset data yang spesifik.

#### Contoh:
Untuk menghitung rata-rata harga produk dalam **Kategori 1**, Anda bisa menggunakan perintah berikut:

**Penulisan Query**:
```sql
SELECT AVG(Harga) 
FROM Produk 
WHERE ID_Kategori = 1;
```

**Hasil:**

| AVG(Harga) |
|------------|
| 18.5       |

Perintah ini menghitung rata-rata harga produk yang berada di **Kategori 1**. Hasilnya adalah **18.5**.

---

Dengan materi ini, Anda bisa mempelajari cara menghitung nilai rata-rata dari data numerik dalam SQL menggunakan fungsi **AVG()**, baik untuk seluruh data di tabel atau subset data yang memenuhi kondisi tertentu dengan klausa **WHERE**.