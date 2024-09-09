## SQL Null Values

Sebuah field dengan nilai NULL adalah field tanpa nilai. Jika kolom dalam tabel bersifat opsional, Anda dapat menyisipkan data baru atau memperbarui data tanpa menambahkan nilai ke kolom ini. Kemudian, kolom akan disimpan dengan nilai NULL.

Nilai NULL berbeda dengan nilai nol atau kolom yang berisi spasi. Kolom dengan nilai NULL adalah kolom yang dibiarkan kosong selama pembuatan rekaman!

Bagaimana cara menguji nilai NULL?
---
Tidak mungkin menguji nilai NULL dengan operator perbandingan, seperti `=`, `<`, atau `<>`. Kita harus menggunakan operator `IS NULL` dan `IS NOT NULL` sebagai gantinya.

#### Penulisan Query IS NULL:
```sql
SELECT column_names 
FROM table_name 
WHERE column_name IS NULL;
```

#### Penulisan IS NOT NULL:
```sql
SELECT column_names 
FROM table_name 
WHERE column_name IS NOT NULL;
```

Berikut ini merupakan tabel Pelanggan yang digunakan dalam contoh yang akan diberikan:
### Tabel Pelanggan

| IDpelanggan| NamaPelanggan                                | NamaKontak   | Alamat                 | Kota         | KodePos | Negara |
|------------|---------------------------------------------|---------------|--------------------------|--------------|------------|---------|
| 1          | Alfreds Futterkiste                        | Maria Anders  | Obere Str. 57            | Berlin       | 12209      | Germany |
| 2          | Ana Trujillo Emparedados y helados          | Ana Trujillo  | Avda. de la Constitución 2222 | México D.F. | 05021      | Mexico  |
| 3          | Antonio Moreno Taquería                     | Antonio Moreno | Mataderos 2312           | México D.F.  | 05023      | Mexico  |
| 4          | Around the Horn                            | Thomas Hardy  | 120 Hanover Sq.          | London       | WA1 1DP    | UK      |
| 5          | Berglunds snabbköp                          | Christina Berglund | Berguvsvägen 8       | Luleå        | S-958 22   | Sweden  |

Operator IS NULL
---
Operator `IS NULL` digunakan untuk menguji nilai kosong (nilai NULL).

Contoh:

```sql
SELECT NamaPelanggan, NamaKontak, Alamat 
FROM Pelanggan 
WHERE Alamat IS NULL;
```

SQL di atas akan menampilkan semua pelanggan dengan nilai NULL di kolom "Alamat".

Operator IS NOT NULL
---
Operator `IS NOT NULL` digunakan untuk menguji nilai yang tidak kosong (nilai NOT NULL).

Contoh:

```sql
SELECT NamaPelanggan, NamaKontak, Alamat 
FROM Pelanggan 
WHERE Alamat IS NOT NULL;
```

SQL di atas akan menampilkan semua pelanggan dengan nilai di bidang "Alamat".
