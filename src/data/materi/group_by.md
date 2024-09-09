## Fungsi GROUP BY

Fungsi **GROUP BY** dalam SQL digunakan untuk mengelompokkan baris-baris yang memiliki nilai yang sama ke dalam baris-baris ringkasan. Ini sering digunakan bersama dengan fungsi agregat (seperti `COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()`) untuk mengelompokkan hasil berdasarkan satu atau lebih kolom.

### Penulisan Query

```sql
SELECT nama_kolom, AGGREGATE_FUNCTION(nama_kolom) 
FROM nama_tabel 
GROUP BY nama_kolom 
ORDER BY nama_kolom;
```

- **nama_kolom**: Nama kolom yang digunakan untuk pengelompokan.
- **AGGREGATE_FUNCTION(nama_kolom)**: Fungsi agregat yang diterapkan pada kolom.
- **nama_tabel**: Nama tabel dari mana data akan diambil.
- **ORDER BY nama_kolom**: (Opsional) Mengurutkan hasil berdasarkan kolom tertentu.

### Contoh Database

Berikut adalah contoh data dari tabel **Pelanggan** yang akan digunakan:

#### Tabel Pelanggan

| IDPelanggan | NamaPelanggan                       | ContactName   | Alamat                    | Kota         | KodePos | Negara |
|-------------|-------------------------------------|---------------|---------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste                 | Maria Anders  | Obere Str. 57             | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo  | Avda. de la Constitución 2222 | México D.F. | 5021    | Mexico |
| 3           | Antonio Moreno Taquería            | Antonio Moreno | Mataderos 2312            | México D.F.  | 5023    | Mexico |
| 4           | Around the Horn                     | Thomas Hardy  | 120 Hanover Sq.           | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp                  | Christina Berglund | Berguvsvägen 8         | Luleå        | S-958 22| Sweden |

---

### 1. Mengelompokkan Data Berdasarkan Kolom dan Menghitung Jumlah

Fungsi **GROUP BY** dapat digunakan untuk mengelompokkan data berdasarkan satu kolom dan menghitung jumlah baris dalam setiap grup menggunakan fungsi agregat seperti `COUNT()`.

#### Contoh:
Misalkan Anda ingin mengetahui jumlah pelanggan di setiap negara.

**Penulisan Query**:
```sql
SELECT Negara, COUNT(IdPelanggan) 
FROM Pelanggan 
GROUP BY Negara;
```

**Hasil:**

| Negara  | COUNT(IdPelanggan) |
|---------|--------------------|
| Germany | 1                  |
| Mexico  | 2                  |
| UK      | 1                  |
| Sweden  | 1                  |

Query ini mengelompokkan data berdasarkan negara dan menghitung jumlah pelanggan di setiap negara. Hasilnya menunjukkan berapa banyak pelanggan yang berasal dari masing-masing negara.

---

### 2. Mengelompokkan Data dengan Fungsi Agregat Lain

Anda dapat menggunakan **GROUP BY** dengan berbagai fungsi agregat lain seperti `MAX()`, `MIN()`, `SUM()`, atau `AVG()` untuk mendapatkan ringkasan data berdasarkan grup.

#### Contoh:
Misalkan Anda ingin mengetahui ID pelanggan tertinggi di setiap negara.

**Penulisan Query**:
```sql
SELECT Negara, MAX(IdPelanggan) 
FROM Pelanggan 
GROUP BY Negara;
```

**Hasil:**

| Negara  | MAX(IdPelanggan) |
|---------|------------------|
| Germany | 1                |
| Mexico  | 3                |
| UK      | 4                |
| Sweden  | 5                |

Query ini mengelompokkan data berdasarkan negara dan mencari ID pelanggan tertinggi dalam setiap grup.

---

Dengan materi ini, Anda dapat memahami cara menggunakan fungsi **GROUP BY** dalam SQL untuk mengelompokkan data berdasarkan kolom tertentu dan menggunakan fungsi agregat untuk meringkas hasil. Ini membantu dalam analisis data dengan cara yang terstruktur dan informatif.