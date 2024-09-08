## SQL NOT

Operator `NOT` digunakan untuk menghasilkan hasil yang berlawanan atau negatif dari suatu kondisi. Operator ini sering digunakan bersama dengan operator lain untuk membalikkan hasil yang ditampilkan oleh query SQL.

Penulisan Query:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```

Berikut ini merupakan tabel `Pelanggan` yang digunakan dalam contoh yang akan diberikan:

### Tabel Pelanggan

| IDpelanggan | NamaPelanggan                                | NamaKontak   | Alamat                 | Kota         | KodePos | Negara |
|-------------|----------------------------------------------|--------------|------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste                         | Maria Anders | Obere Str. 57          | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados          | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021   | Mexico |
| 3           | Antonio Moreno Taquería                     | Antonio Moreno | Mataderos 2312        | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn                            | Thomas Hardy | 120 Hanover Sq.        | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp                          | Christina Berglund | Berguvsvägen 8     | Luleå        | S-958 22 | Sweden |

Menggunakan NOT dalam Klausa WHERE
---
Operator `NOT` digunakan untuk membalikkan kondisi yang ditentukan. Ini berguna ketika Anda ingin mengecualikan data yang memenuhi kondisi tertentu.

Contoh:
Misalkan Anda ingin memilih semua pelanggan yang bukan dari `Germany`.

**Kode SQL:**
```sql
SELECT * FROM Pelanggan
WHERE NOT Negara = 'Germany';
```

**Hasil:**

| IDpelanggan | NamaPelanggan                                | NamaKontak   | Alamat                 | Kota         | KodePos | Negara |
|-------------|----------------------------------------------|--------------|------------------------|--------------|---------|--------|
| 2           | Ana Trujillo Emparedados y helados          | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021   | Mexico |
| 3           | Antonio Moreno Taquería                     | Antonio Moreno | Mataderos 2312        | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn                            | Thomas Hardy | 120 Hanover Sq.        | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp                          | Christina Berglund | Berguvsvägen 8     | Luleå        | S-958 22 | Sweden |

NOT LIKE
---
Operator `NOT LIKE` digunakan untuk menampilkan data yang tidak sesuai dengan pola pencarian yang ditentukan.

Contoh:
Untuk memilih pelanggan yang namanya tidak dimulai dengan huruf "A".

**Kode SQL:**
```sql
SELECT * FROM Pelanggan
WHERE NamaPelanggan NOT LIKE 'A%';
```

**Hasil:**

| IDpelanggan | NamaPelanggan           | NamaKontak   | Alamat       | Kota        | KodePos | Negara |
|-------------|-------------------------|--------------|--------------|-------------|---------|--------|
| 5           | Berglunds snabbköp       | Christina Berglund | Berguvsvägen 8 | Luleå    | S-958 22 | Sweden |

NOT BETWEEN
---
Operator `NOT BETWEEN` digunakan untuk menampilkan data yang tidak berada dalam rentang nilai tertentu.

Contoh:
Untuk memilih pelanggan dengan `IDpelanggan` yang tidak berada di antara 1 dan 4.

**Kode SQL:**
```sql
SELECT * FROM Pelanggan
WHERE IDpelanggan NOT BETWEEN 1 AND 4;
```

**Output:**

| IDpelanggan | NamaPelanggan           | NamaKontak   | Alamat       | Kota        | KodePos | Negara |
|-------------|-------------------------|--------------|--------------|-------------|---------|--------|
| 5           | Berglunds snabbköp       | Christina Berglund | Berguvsvägen 8 | Luleå    | S-958 22 | Sweden |

NOT IN
---
Operator `NOT IN` digunakan untuk menampilkan data yang tidak termasuk dalam daftar nilai tertentu.

Contoh:
Untuk memilih pelanggan yang tidak berada di kota 'London' atau 'Luleå'.

**Kode SQL:**
```sql
SELECT * FROM Pelanggan
WHERE Kota NOT IN ('London', 'Luleå');
```

**Hasil:**

| IDpelanggan | NamaPelanggan                                | NamaKontak   | Alamat                 | Kota         | KodePos | Negara |
|-------------|----------------------------------------------|--------------|------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste                         | Maria Anders | Obere Str. 57          | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados          | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021   | Mexico |
| 3           | Antonio Moreno Taquería                     | Antonio Moreno | Mataderos 2312        | México D.F.  | 05023   | Mexico |

NOT Greater Than
---
Operator `NOT Greater Than` digunakan untuk menampilkan data yang tidak lebih besar dari nilai tertentu.

Contoh:
Untuk memilih pelanggan dengan `IDpelanggan` yang tidak lebih besar dari 3.

**Kode SQL:**
```sql
SELECT * FROM Pelanggan
WHERE NOT IDpelanggan > 3;
```

**Hasil:**

| IDpelanggan | NamaPelanggan            | NamaKontak   | Alamat       | Kota        | KodePos | Negara |
|-------------|--------------------------|--------------|--------------|-------------|---------|--------|
| 1           | Alfreds Futterkiste      | Maria Anders | Obere Str. 57 | Berlin      | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 05021   | Mexico |
| 3           | Antonio Moreno Taquería  | Antonio Moreno | Mataderos 2312 | México D.F.  | 05023   | Mexico |

NOT Less Than
---
Operator `NOT Less Than` digunakan untuk menampilkan data yang tidak kurang dari nilai tertentu.

Contoh:
Untuk memilih pelanggan dengan `IDpelanggan` yang tidak kurang dari 4.

**Kode SQL:**
```sql
SELECT * FROM Pelanggan
WHERE NOT IDpelanggan < 4;
```

**Hasil:**

| IDpelanggan | NamaPelanggan            | NamaKontak   | Alamat       | Kota        | KodePos | Negara |
|-------------|--------------------------|--------------|--------------|-------------|---------|--------|
| 4           | Around the Horn          | Thomas Hardy | 120 Hanover Sq. | London     | WA1 1DP | UK     |
| 5           | Berglunds snabbköp        | Christina Berglund | Berguvsvägen 8 | Luleå    | S-958 22 | Sweden |
