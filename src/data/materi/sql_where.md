## SQL WHERE

`WHERE` digunakan untuk mengekstrak data yang memenuhi kondisi tertentu. `WHERE` tidak hanya digunakan dalam pernyataan `SELECT`, tetapi juga digunakan dalam pernyataan `UPDATE` dan `DELETE`.

Penulisan Query:

```sql
SELECT kolom1, kolom2, ...
FROM nama_tabel
WHERE kondisi;
```

- **`kolom1, kolom2, ...`**: Nama kolom yang ingin ditampilkan.
- **`nama_tabel`**: Nama tabel dari mana data akan diambil.
- **`kondisi`**: Kondisi yang harus dipenuhi.

### Tabel Pelanggan

| IDpelanggan | NamaPelanggan                | NamaKontak        | Alamat                 | Kota         | KodePos | Negara |
|-------------|-------------------------------|-------------------|-------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste           | Maria Anders      | Obere Str. 57           | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021  | Mexico |
| 3           | Antonio Moreno Taquería      | Antonio Moreno    | Mataderos 2312          | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn              | Thomas Hardy      | 120 Hanover Sq.         | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp            | Christina Berglund| Berguvsvägen 8          | Luleå        | S-958 22| Sweden |

### Operator dalam WHERE

Anda dapat menggunakan operator lain selain `=` untuk memfilter pencarian. Berikut adalah beberapa contoh query dengan output yang sesuai dengan data tabel `Pelanggan`:

Contoth:

**Kode SQL:**

```sql
SELECT * FROM Pelanggan WHERE IDpelanggan > 2;
```

**Hasil:**

| IDpelanggan | NamaPelanggan                | NamaKontak        | Alamat                 | Kota         | KodePos | Negara |
|-------------|-------------------------------|-------------------|-------------------------|--------------|---------|--------|
| 3           | Antonio Moreno Taquería      | Antonio Moreno    | Mataderos 2312          | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn              | Thomas Hardy      | 120 Hanover Sq.         | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp            | Christina Berglund| Berguvsvägen 8          | Luleå        | S-958 22| Sweden |

**Penjelasan:** Mengambil data pelanggan dengan `IDpelanggan` lebih besar dari 2.


Dibawah ini beberapa operator yang dapat digunakan dalam query WHERE:
| **Operator** | **Deskripsi**                              |
|--------------|---------------------------------------------|
| `=`          | Sama dengan                                 |
| `>`          | Lebih besar dari                            |
| `<`          | Lebih kecil dari                            |
| `>=`         | Lebih besar dari atau sama dengan           |
| `<=`         | Lebih kecil dari atau sama dengan           |
| `<>`         | Tidak sama dengan                           |
| `BETWEEN`    | Diantara range tertentu                     |
| `LIKE`       | Mencari pola                                |
| `IN`         | Untuk menentukan beberapa nilai yang mungkin untuk sebuah kolom |

