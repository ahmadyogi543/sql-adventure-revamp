## Fungsi MIN() dan MAX()

Fungsi `MIN()` dan `MAX()` digunakan untuk mendapatkan nilai terkecil dan terbesar dari kolom yang dipilih dalam tabel SQL.

Berikut adalah contoh data dari tabel Produk yang digunakan dalam contoh nanti:

### Tabel Produk

| IDProduk | NamaProduk                   | IDSuplaier | IDKategori | Unit             | Harga |
|----------|------------------------------|------------|------------|------------------|-------|
| 1        | Chais                        | 1          | 1          | 10 kotak x 20 tas | 18    |
| 2        | Chang                        | 1          | 1          | 24 - 12 oz botol  | 19    |
| 3        | Aniseed Syrup                | 1          | 2          | 12 - 550 ml botol | 10    |
| 4        | Chef Anton's Cajun Seasoning | 2          | 2          | 48 - 6 oz toples  | 22    |
| 5        | Chef Anton's Gumbo Mix       | 2          | 2          | 36 kotak          | 21.35 |

Menggunakan Fungsi MIN()
---
Fungsi `MIN()` digunakan untuk menemukan nilai terkecil dalam kolom tertentu.

Contoh: **Menemukan harga terendah dalam kolom Harga**

```sql
SELECT MIN(Harga) FROM Produk;
```

**Hasil:**
 Menampilkan harga terendah dari tabel `Produk`. Hasilnya adalah `10`.

Menggunakan Fungsi MAX()
---
Fungsi `MAX()` digunakan untuk menemukan nilai terbesar dalam kolom tertentu.

Contoh: **Menemukan harga tertinggi dalam kolom Harga**

```sql
SELECT MAX(Harga) FROM Produk;
```

**Hasil:** Menampilkan harga tertinggi dari tabel `Produk`. Hasilnya adalah `22`.

Memberikan Nama Kolom (Alias)
---
Untuk memberikan nama deskriptif pada kolom hasil dari fungsi `MIN()` atau `MAX()`, gunakan kata kunci `AS`.

Contoh: **Memberikan nama kolom `SmallestHarga` pada hasil fungsi `MIN()`**

```sql
SELECT MIN(Harga) AS [SmallestHarga] FROM Produk;
```

**Hasil:** 

   | SmallestHarga |
   |---------------|
   | 10            |

Menampilkan harga terendah dengan kolom hasil bernama `SmallestHarga`. Hasilnya adalah `10`.

Menggunakan MIN() dengan GROUP BY
---

Fungsi `MIN()` dapat digabungkan dengan klausa `GROUP BY` untuk mengelompokkan data dan menampilkan nilai terkecil untuk setiap kelompok.

Contoh: **Menampilkan harga terkecil untuk setiap kategori dalam tabel `Produk`**

```sql
SELECT MIN(Harga) AS [SmallestHarga], CategoryID
FROM Produk
GROUP BY CategoryID;
```

**Hasil:** 
| SmallestHarga | IDKategori |
   |---------------|------------|
   | 18            | 1          |
   | 10            | 2          |

Menampilkan harga terkecil untuk setiap `CategoryID`.
