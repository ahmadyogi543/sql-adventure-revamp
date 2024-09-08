## SQL AND

Klausa `WHERE` dapat berisi satu atau banyak operator `AND`. Operator `AND` digunakan untuk memfilter data berdasarkan lebih dari satu kondisi.

Penulisan Query:
```sql
SELECT kolom1, kolom2, ...
FROM nama_tabel
WHERE condition1 AND condition2 AND condition3 ...;
```
- `kolom1, kolom2, ...`: Kolom-kolom yang ingin ditampilkan dalam hasil query.
- `nama_tabel`: Menentukan nama tabel dari mana data akan diambil.
- `WHERE condition1 AND condition2 AND condition3 ...`: Menetapkan kondisi-kondisi yang harus dipenuhi untuk baris yang ingin ditampilkan. Kondisi-kondisi tersebut digabungkan dengan operator logika `AND`, yang berarti semua kondisi harus terpenuhi agar baris tersebut termasuk dalam hasil query.

### AND vs OR

- Operator `AND` menampilkan data jika semua kondisi BENAR.
- Operator `OR` menampilkan data jika salah satu kondisi BENAR.

Berikut ini merupakan tabel Pelanggan yang digunakan dalam contoh yang akan diberikan:

### Tabel Pelanggan

| IDpelanggan | NamaPelanggan                                | NamaKontak   | Alamat                 | Kota         | KodePos | Negara |
|-------------|----------------------------------------------|--------------|------------------------|--------------|----------|--------|
| 1           | Alfreds Futterkiste                         | Maria Anders | Obere Str. 57          | Berlin       | 12209    | Germany|
| 2           | Ana Trujillo Emparedados y helados           | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021    | Mexico |
| 3           | Antonio Moreno Taquería                      | Antonio Moreno | Mataderos 2312        | México D.F.  | 05023    | Mexico |
| 4           | Around the Horn                             | Thomas Hardy | 120 Hanover Sq.        | London       | WA1 1DP  | UK     |
| 5           | Berglunds snabbköp                           | Christina Berglund | Berguvsvägen 8     | Luleå        | S-958 22 | Sweden |

Semua Kondisi Harus Benar
---
Pernyataan SQL berikut memilih semua bidang dari `Pelanggan` dimana Negara adalah "Germany" DAN Kota adalah "Berlin" DAN KodePos lebih tinggi dari 12000:

**Kode SQL:**
```sql
SELECT * FROM Pelanggan
WHERE Negara = 'Germany' AND Kota = 'Berlin' AND KodePos > 12000;
```

**Hasil:**

| IDpelanggan | NamaPelanggan         | NamaKontak | Alamat         | Kota  | KodePos | Negara |
|-------------|-----------------------|------------|----------------|-------|---------|--------|
| 1           | Alfreds Futterkiste   | Maria Anders | Obere Str. 57  | Berlin | 12209   | Germany|

Menggabungkan AND dan OR
---
Pernyataan SQL berikut memilih semua pelanggan dari `Mexico` yang nama pelanggannya dimulai dengan "A" atau "B". Pastikan menggunakan tanda kurung untuk mendapatkan hasil yang benar.

**Kode SQL:**
```sql
SELECT * FROM Pelanggan
WHERE Negara = 'Mexico' AND (NamaPelanggan LIKE 'A%' OR NamaPelanggan LIKE 'B%');
```

**Hasil:**

| IDpelanggan | NamaPelanggan            | NamaKontak   | Alamat       | Kota        | KodePos | Negara |
|-------------|--------------------------|--------------|--------------|-------------|---------|--------|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021   | Mexico |
| 3           | Antonio Moreno Taquería  | Antonio Moreno | Mataderos 2312 | México D.F.  | 05023   | Mexico |

