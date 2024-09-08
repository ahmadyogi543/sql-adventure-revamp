## SELECT

Pernyataan `SELECT` digunakan untuk mengambil data dari sebuah database.

Penulisan query:
```sql
SELECT kolom1, kolom2, ... FROM nama_tabel;
```
- `kolom1, kolom2, ...` adalah nama kolom dari tabel yang ingin Anda ambil datanya.
- `nama_tabel` adalah nama tabel tempat data diambil.

### Contoh Database

Berikut adalah contoh data dari tabel Pelanggan yang akan digunakan:

### Tabel Pelanggan

| IDpelanggan | NamaPelanggan                                | NamaKontak   | Alamat                 | Kota         | KodePos | Negara |
|-------------|----------------------------------------------|--------------|------------------------|--------------|----------|--------|
| 1           | Alfreds Futterkiste                         | Maria Anders | Obere Str. 57          | Berlin       | 12209    | Germany|
| 2           | Ana Trujillo Emparedados y helados           | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021    | Mexico |
| 3           | Antonio Moreno Taquería                      | Antonio Moreno | Mataderos 2312        | México D.F.  | 05023    | Mexico |
| 4           | Around the Horn                             | Thomas Hardy | 120 Hanover Sq.        | London       | WA1 1DP  | UK     |
| 5           | Berglunds snabbköp                           | Christina Berglund | Berguvsvägen 8     | Luleå        | S-958 22 | Sweden |

Menampilkan Semua Kolom
---
Jika Anda ingin menampilkan seluruh kolom tanpa harus menentukan satu per satu, gunakan sintaks `SELECT`.

Contoh:
```sql
SELECT * FROM Pelanggan;
```

**Hasil:**

| IDpelanggan | NamaPelanggan                                | NamaKontak   | Alamat                 | Kota         | KodePos | Negara |
|-------------|----------------------------------------------|--------------|------------------------|--------------|----------|--------|
| 1           | Alfreds Futterkiste                         | Maria Anders | Obere Str. 57          | Berlin       | 12209    | Germany|
| 2           | Ana Trujillo Emparedados y helados           | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021    | Mexico |
| 3           | Antonio Moreno Taquería                      | Antonio Moreno | Mataderos 2312        | México D.F.  | 05023    | Mexico |
| 4           | Around the Horn                             | Thomas Hardy | 120 Hanover Sq.        | London       | WA1 1DP  | UK     |
| 5           | Berglunds snabbköp                           | Christina Berglund | Berguvsvägen 8     | Luleå        | S-958 22 | Sweden |

Perintah ini akan menampilkan seluruh data dalam tabel Pelanggan.