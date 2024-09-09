
## Operator IN

Operator **IN** digunakan untuk memeriksa apakah suatu nilai terdapat dalam sekumpulan nilai yang ditentukan di dalam klausa **WHERE**. Ini merupakan alternatif yang lebih efisien daripada menggunakan beberapa kondisi **OR**.

### Penulisan Query
```sql
SELECT nama_kolom(s)
FROM nama_tabel
WHERE nama_kolom IN (nilai1, nilai2, ...);
```

- **nama_kolom**: Nama kolom yang akan diperiksa nilainya.
- **nama_tabel**: Nama tabel tempat data akan diambil.
- **nilai1, nilai2, ...**: Nilai yang akan diperiksa, bisa berupa string atau angka.

### Contoh Penggunaan IN

Berikut adalah tabel yang akan digunakan untuk materi ini:

| IDPelanggan | NamaPelanggan                  | NamaKontak       | Alamat                     | Kota        | KodePos | Negara  |
|-------------|--------------------------------|------------------|----------------------------|-------------|---------|---------|
| 1           | Alfreds Futterkiste            | Maria Anders     | Obere Str. 57              | Berlin      | 12209   | Germany |
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo    | Avda. de la Constitución 2222 | México D.F. | 5021    | Mexico  |
| 3           | Antonio Moreno Taquería        | Antonio Moreno   | Mataderos 2312             | México D.F. | 5023    | Mexico  |
| 4           | Around the Horn                | Thomas Hardy     | 120 Hanover Sq.            | London      | WA1 1DP | UK      |
| 5           | Berglunds snabbköp             | Christina Berglund | Berguvsvägen 8            | Luleå       | S-958 22| Sweden  |


Misalkan Anda ingin mengembalikan semua pelanggan yang berasal dari 'Germany', 'France', atau 'UK'. Maka, query yang digunakan adalah sebagai berikut:

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan 
WHERE Negara IN ('Germany', 'France', 'UK');
```

#### Hasil Tabel:

| IDPelanggan | NamaPelanggan           | NamaKontak    | Alamat              | Kota   | KodePos | Negara   |
|-------------|-------------------------|---------------|---------------------|--------|---------|----------|
| 1           | Alfreds Futterkiste      | Maria Anders  | Obere Str. 57        | Berlin | 12209   | Germany  |
| 4           | Around the Horn          | Thomas Hardy  | 120 Hanover Sq.      | London | WA1 1DP | UK       |
| 5           | Berglunds snabbköp       | Christina B.  | Berguvsvägen 8       | Luleå  | S-95822 | Sweden   |

Query di atas mengembalikan semua pelanggan yang berada di negara yang disebutkan dalam klausa **IN**.

---

## Operator NOT IN

Operator **NOT IN** digunakan untuk mengembalikan semua baris di mana nilai kolom **tidak** ada dalam sekumpulan nilai yang ditentukan.

### Penulisan Query
```sql
SELECT nama_kolom(s)
FROM nama_tabel
WHERE nama_kolom NOT IN (nilai1, nilai2, ...);
```

- **nama_kolom**: Nama kolom yang akan diperiksa nilainya.
- **nilai1, nilai2, ...**: Nilai yang **tidak** boleh ada dalam hasil query.

### Contoh Penggunaan NOT IN

Misalkan Anda ingin mengembalikan semua pelanggan yang **bukan** berasal dari 'Germany', 'France', atau 'UK'. Maka, query yang digunakan adalah sebagai berikut:

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan 
WHERE Negara NOT IN ('Germany', 'France', 'UK');
```

#### Hasil Tabel:

| IDPelanggan | NamaPelanggan                    | NamaKontak         | Alamat                     | Kota        | KodePos | Negara   |
|-------------|----------------------------------|--------------------|----------------------------|-------------|---------|----------|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo       | Avda. de la Constitución 2222 | México D.F. | 5021    | Mexico   |
| 3           | Antonio Moreno Taquería            | Antonio Moreno     | Mataderos 2312              | México D.F. | 5023    | Mexico   |
| 5           | Berglunds snabbköp                 | Christina Berglund | Berguvsvägen 8              | Luleå       | S-95822 | Sweden   |

Hasil di atas menunjukkan semua pelanggan yang **tidak** berasal dari negara yang disebutkan dalam klausa **NOT IN**.

---

## Operator IN dengan Subquery

Operator **IN** juga dapat digunakan dengan subquery untuk memeriksa apakah suatu nilai ada di dalam hasil dari query lain.

### Penulisan Query
```sql
SELECT nama_kolom(s)
FROM nama_tabel
WHERE nama_kolom IN (SELECT nama_kolom FROM another_table WHERE condition);
```

- **another_table**: Nama tabel lain yang akan digunakan dalam subquery.
- **condition**: Kondisi yang harus dipenuhi dalam subquery.

### Contoh Penggunaan IN dengan Subquery

Misalkan Anda ingin mengembalikan semua pelanggan yang telah melakukan pesanan di tabel **Pesanan**.

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan 
WHERE IDPelanggan IN (SELECT IDPelanggan FROM Pesanan);
```

#### Hasil Tabel:

| IDPelanggan | NamaPelanggan           | NamaKontak     | Alamat              | Kota   | KodePos | Negara   |
|-------------|-------------------------|----------------|---------------------|--------|---------|----------|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 5021    | Mexico   |
| 3           | Antonio Moreno Taquería  | Antonio Moreno | Mataderos 2312       | México D.F. | 5023    | Mexico   |
| 4           | Around the Horn          | Thomas Hardy   | 120 Hanover Sq.      | London | WA1 1DP | UK       |
| 5           | Berglunds snabbköp       | Christina B.   | Berguvsvägen 8       | Luleå  | S-95822 | Sweden   |

Query di atas mengembalikan pelanggan yang telah melakukan pesanan di tabel **Pesanan**.

---

## Operator NOT IN dengan Subquery

Operator **NOT IN** dengan subquery digunakan untuk mengembalikan semua baris di mana nilai kolom **tidak** ada dalam hasil subquery.

### Contoh Penggunaan NOT IN dengan Subquery

Misalkan Anda ingin mengembalikan semua pelanggan yang **belum** melakukan pesanan apa pun di tabel **Pesanan**.

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan 
WHERE IDPelanggan NOT IN (SELECT IDPelanggan FROM Pesanan);
```

#### Hasil Tabel:

| IDPelanggan | NamaPelanggan           | NamaKontak    | Alamat              | Kota    | KodePos | Negara   |
|-------------|-------------------------|---------------|---------------------|---------|---------|----------|
| 1           | Alfreds Futterkiste      | Maria Anders  | Obere Str. 57        | Berlin  | 12209   | Germany  |
| 6           | Blauer See Delikatessen  | Hanna Moos    | Forsterstr. 57       | Mannheim| 68306   | Germany  |

Query ini mengembalikan semua pelanggan yang belum memiliki pesanan di tabel **Pesanan**.

---

Dengan materi ini, Anda bisa mempelajari cara menggunakan operator **IN** dan **NOT IN** dalam SQL untuk memfilter data berdasarkan nilai tertentu atau menggunakan subquery.