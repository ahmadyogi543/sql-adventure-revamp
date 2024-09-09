## Order By

Berikut adalah penjelasan mengenai `ORDER BY` dalam format Markdown:

---

## ORDER BY

`ORDER BY` digunakan untuk mengurutkan kumpulan hasil dalam bentuk menaik atau urutan menurun.

Penulisan Query:

```sql
SELECT kolom1, kolom2, ...
FROM nama_tabel
ORDER BY kolom1, kolom2, ... ASC|DESC;
```

- **kolom1, kolom2, ...**: Nama kolom yang ingin diambil atau ditampilkan dari tabel.
- **nama_tabel**: Nama tabel dari mana data akan diambil.
- **ORDER BY**: Digunakan untuk mengurutkan hasil berdasarkan satu atau lebih kolom. Urutan bisa dalam bentuk:
  - **ASC**: Menaik (ascending)
  - **DESC**: Menurun (descending)

---

Berikut ini merupakan tabel Produk yang digunakan dalam contoh yang akan diberikan:
### Tabel Produk

 | IDProduk | NamaProduk                       | IDSuplaier | IDKategori | Unit                 | Harga |
|----------|-----------------------------------|------------|------------|----------------------|-------|
| 1        | Chais                             | 1          | 1          | 10 kotak x 20 tas     | 18    |
| 2        | Chang                             | 1          | 1          | 24 - 12 oz botol      | 19    |
| 3        | Aniseed Syrup                     | 1          | 2          | 12 - 550 ml botol     | 10    |
| 4        | Chef Anton's Cajun Seasoning      | 2          | 2          | 48 - 6 oz toples      | 22    |
| 5        | Chef Anton's Gumbo Mix            | 2          | 2          | 36 kotak              | 21.35 |

### Tabel Pelanggan

| IDpelanggan | NamaPelanggan                | NamaKontak        | Alamat                 | Kota         | KodePos | Negara |
|-------------|-------------------------------|-------------------|-------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste           | Maria Anders      | Obere Str. 57           | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021  | Mexico |
| 3           | Antonio Moreno Taquería      | Antonio Moreno    | Mataderos 2312          | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn              | Thomas Hardy      | 120 Hanover Sq.         | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp            | Christina Berglund| Berguvsvägen 8          | Luleå        | S-958 22| Sweden |


DESC
---
Kata kunci `ORDER BY` mengurutkan data dalam urutan menaik secara default. Untuk mengurutkan data dalam urutan menurun, gunakan kata kunci `DESC`.

Contoh: **Urutkan produk dari harga tertinggi ke terendah:**

```sql
SELECT * FROM Produk
ORDER BY Harga DESC;
```

### Hasil Query

| IDProduk | NamaProduk                       | IDSuplaier | IDKategori | Unit                 | Harga |
|----------|-----------------------------------|------------|------------|----------------------|-------|
| 4        | Chef Anton's Cajun Seasoning      | 2          | 2          | 48 - 6 oz toples      | 22    |
| 5        | Chef Anton's Gumbo Mix            | 2          | 2          | 36 kotak              | 21.35 |
| 2        | Chang                             | 1          | 1          | 24 - 12 oz botol      | 19    |
| 1        | Chais                             | 1          | 1          | 10 kotak x 20 tas     | 18    |
| 3        | Aniseed Syrup                     | 1          | 2          | 12 - 550 ml botol     | 10    |

Perintah ini akan menampilkan semua baris dari tabel `Produk`, tetapi diurutkan berdasarkan harga dari yang tertinggi ke yang terendah.


Urutkan Menurut Abjad
---
Untuk nilai string, kata kunci `ORDER BY` akan mengurutkan data menurut abjad.

Contoh: **Urutkan produk menurut abjad berdasarkan Nama Produk:**

```sql
SELECT * FROM Produk
ORDER BY NamaProduk;
```

### Hasil Query

| IDProduk | NamaProduk                       | IDSuplaier | IDKategori | Unit                 | Harga |
|----------|-----------------------------------|------------|------------|----------------------|-------|
| 3        | Aniseed Syrup                     | 1          | 2          | 12 - 550 ml botol     | 10    |
| 2        | Chang                             | 1          | 1          | 24 - 12 oz botol      | 19    |
| 1        | Chais                             | 1          | 1          | 10 kotak x 20 tas     | 18    |
| 5        | Chef Anton's Gumbo Mix            | 2          | 2          | 36 kotak              | 21.35 |
| 4        | Chef Anton's Cajun Seasoning      | 2          | 2          | 48 - 6 oz toples      | 22    |

Perintah ini akan menampilkan semua baris dari tabel `Produk`, diurutkan berdasarkan nama produk dalam urutan abjad dari A ke Z.


Berdasarkan Abjad DESC
---
Untuk mengurutkan tabel secara terbalik menurut abjad, gunakan kata kunci `DESC`.

Contoh: **Urutkan produk berdasarkan Nama Produk dalam urutan terbalik:**

```sql
SELECT * FROM Produk
ORDER BY NamaProduk DESC;
```

### Hasil Query

| IDProduk | NamaProduk                       | IDSuplaier | IDKategori | Unit                 | Harga |
|----------|-----------------------------------|------------|------------|----------------------|-------|
| 4        | Chef Anton's Cajun Seasoning      | 2          | 2          | 48 - 6 oz toples      | 22    |
| 5        | Chef Anton's Gumbo Mix            | 2          | 2          | 36 kotak              | 21.35 |
| 1        | Chais                             | 1          | 1          | 10 kotak x 20 tas     | 18    |
| 2        | Chang                             | 1          | 1          | 24 - 12 oz botol      | 19    |
| 3        | Aniseed Syrup                     | 1          | 2          | 12 - 550 ml botol     | 10    |

Perintah ini akan menampilkan semua baris dari tabel `Produk`, diurutkan berdasarkan nama produk dalam urutan abjad dari Z ke A.

Urutkan Berdasarkan Beberapa Kolom
---
Pernyataan SQL berikut memilih semua baris dari tabel dan mengurutkannya berdasarkan beberapa kolom. Dalam contoh ini, data diurutkan terlebih dahulu berdasarkan kolom "Negara", dan jika beberapa baris memiliki nilai yang sama pada kolom "Negara", data akan diurutkan berdasarkan kolom "NamaPelanggan".

Contoh: **Urutkan pelanggan berdasarkan Negara dan Nama Pelanggan:**

```sql
SELECT * FROM Pelanggan
ORDER BY Negara, NamaPelanggan;
```

### Hasil Query

| IDpelanggan | NamaPelanggan                | NamaKontak        | Alamat                 | Kota         | KodePos | Negara |
|-------------|-------------------------------|-------------------|-------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste           | Maria Anders      | Obere Str. 57           | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021  | Mexico |
| 3           | Antonio Moreno Taquería      | Antonio Moreno    | Mataderos 2312          | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn              | Thomas Hardy      | 120 Hanover Sq.         | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp            | Christina Berglund| Berguvsvägen 8          | Luleå        | S-958 22| Sweden |

Data diurutkan berdasarkan kolom `Negara` terlebih dahulu. Kemudian, untuk baris yang memiliki nilai `Negara` yang sama, data diurutkan berdasarkan kolom `NamaPelanggan` dalam urutan abjad dari A ke Z.





