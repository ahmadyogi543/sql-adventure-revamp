## SQL OR

Klausa `WHERE` dapat berisi satu atau banyak operator `OR`. Operator `OR` digunakan untuk memfilter data berdasarkan lebih dari satu kondisi, di mana hanya salah satu kondisi yang perlu terpenuhi.

Penulisan Query:

```sql
SELECT kolom1, kolom2, ...
FROM nama_tabel
WHERE condition1 OR condition2 OR condition3 ...;
```

- **`kolom1, kolom2, ...`**: Kolom-kolom yang ingin ditampilkan dalam hasil query.
- **`nama_tabel`**: Menentukan nama tabel dari mana data akan diambil.
- **`WHERE condition1 OR condition2 OR condition3 ...`**: Menetapkan kondisi-kondisi yang harus dipenuhi untuk baris yang ingin ditampilkan. Salah satu dari kondisi-kondisi tersebut harus terpenuhi agar baris tersebut termasuk dalam hasil query.

#### OR vs AND

- Operator OR menampilkan data jika salah satu dari kondisi BENAR.
- Operator AND menampilkan data jika semua kondisi BENAR.

Berikut ini merupakan tabel Pelanggan yang digunakan dalam contoh yang akan diberikan:
 ### Tabel Pelanggan

| IDpelanggan | NamaPelanggan                | NamaKontak        | Alamat                 | Kota         | KodePos | Negara |
|-------------|-------------------------------|-------------------|-------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste           | Maria Anders      | Obere Str. 57           | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021  | Mexico |
| 3           | Antonio Moreno Taquería      | Antonio Moreno    | Mataderos 2312          | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn              | Thomas Hardy      | 120 Hanover Sq.         | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp            | Christina Berglund| Berguvsvägen 8          | Luleå        | S-958 22| Sweden |
| 6           | Giovanni's Italian          | Giovanni Rossi    | Via Roma 20             | Berlin       | 12345   | Norway |

Semua Kondisi Salah Satu Harus Benar
---

Pernyataan SQL berikut memilih semua data dari Pelanggan di mana kota adalah "Berlin", nama pelanggan dimulai dengan huruf "G" atau negara adalah "Norway":

```sql
SELECT * FROM Pelanggan
WHERE Kota = 'Berlin' OR NamaPelanggan LIKE 'G%' OR Negara = 'Norway';
```
### Hasil Query
| IDpelanggan | NamaPelanggan                | NamaKontak        | Alamat                 | Kota         | KodePos | Negara |
|-------------|-------------------------------|-------------------|-------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste           | Maria Anders      | Obere Str. 57           | Berlin       | 12209   | Germany|
| 6           | Giovanni's Italian            | Giovanni Rossi    | Via Roma 20             | Berlin       | 12345   | Norway |

**Penjelasan:**

- Baris dengan `IDpelanggan` 1 dipilih karena `Kota` adalah "Berlin".
- Baris dengan `IDpelanggan` 6 dipilih karena `Kota` adalah "Berlin" dan `Negara` adalah "Norway".
- Baris dengan `IDpelanggan` 2, 3, 4, dan 5 tidak memenuhi kondisi mana pun dan tidak termasuk dalam hasil query.

Menggabungkan AND dan OR
---

Pernyataan SQL berikut memilih semua pelanggan dari Mexico yang namanya dimulai dengan "A" atau "B". Pastikan menggunakan tanda kurung untuk mendapatkan hasil yang benar:

```sql
SELECT * FROM Pelanggan
WHERE Negara = 'Mexico' AND (NamaPelanggan LIKE 'A%' OR NamaPelanggan LIKE 'B%');
```

### Hasil Query

| IDpelanggan | NamaPelanggan                        | NamaKontak    | Alamat                   | Kota       | KodePos | Negara |
|-------------|--------------------------------------|---------------|--------------------------|------------|---------|--------|
| 2           | Ana Trujillo Emparedados y helados   | Ana Trujillo  | Avda. de la Constitución 2222 | México D.F. | 05021   | Mexico |
| 3           | Antonio Moreno Taquería             | Antonio Moreno| Mataderos 2312           | México D.F. | 05023   | Mexico |

Tanpa tanda kurung, pernyataan berikut akan menghasilkan hasil yang berbeda, memilih semua pelanggan dari Mexico yang nama pelanggannya dimulai dengan "A", atau pelanggan yang nama pelanggannya dimulai dengan "B", tanpa mempedulikan negara:

```sql
SELECT * FROM Pelanggan
WHERE Negara = 'Mexico' AND NamaPelanggan LIKE 'A%' OR NamaPelanggan LIKE 'B%';
```

### Hasil Query
| IDpelanggan | NamaPelanggan                        | NamaKontak    | Alamat                   | Kota       | KodePos | Negara |
|-------------|--------------------------------------|---------------|--------------------------|------------|---------|--------|
| 2           | Ana Trujillo Emparedados y helados   | Ana Trujillo  | Avda. de la Constitución 2222 | México D.F. | 05021   | Mexico |
| 3           | Antonio Moreno Taquería             | Antonio Moreno| Mataderos 2312           | México D.F. | 05023   | Mexico |
| 5           | Berglunds snabbköp                   | Christina Berglund | Berguvsvägen 8       | Luleå      | S-958 22| Sweden |
