## SELECT DISTINCT

Pernyataan `SELECT DISTINCT` digunakan untuk mengembalikan nilai yang berbeda saja. Di dalam tabel, kolom sering kali berisi banyak nilai duplikat; dan terkadang Anda hanya ingin mencantumkan nilai yang berbeda.

Penulisan query:
```sql
SELECT DISTINCT kolom1, kolom2, ...
FROM nama_tabel;
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

Penggunaan DISTINCT
---
Contoh:

Pilih semua negara yang berbeda dari tabel "Pelanggan":
```sql
SELECT DISTINCT Negara FROM Pelanggan;
```

**Hasil:**

| Negara  |
|---------|
| Germany |
| Mexico  |
| UK      |
| Sweden  |

Perintah ini akan menampilkan daftar negara yang berbeda dari tabel Pelanggan.

SELECT Tanpa DISTINCT
---
Jika kita menghilangkan `DISTINCT`, pernyataan SQL akan mengembalikan nilai "Negara" dari semua data yang ada di kolom Negara pada tabel "Pelanggan".

Contoh:
```sql
SELECT Negara FROM Pelanggan;
```

**Hasil:**

| Negara  |
|---------|
| Germany |
| Mexico  |
| Mexico  |
| UK      |
| Sweden  |

Perintah ini akan mengembalikan semua nilai di kolom Negara, termasuk duplikat.

COUNT DISTINCT
---
Dengan menggunakan `DISTINCT` kata kunci dalam fungsi yang disebut `COUNT`, kita dapat mengembalikan jumlah negara yang berbeda.

Contoh:
```sql
SELECT COUNT(DISTINCT Negara) FROM Pelanggan;
```

**Hasil:**

| COUNT(DISTINCT Negara) |
|------------------------|
| 4                      |

Dengan perintah ini, setiap negara yang muncul lebih dari satu kali hanya akan dihitung satu kali, dan hasilnya adalah jumlah total negara berbeda yang tercatat dalam tabel Pelanggan.
