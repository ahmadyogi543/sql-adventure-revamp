## SQL INSERT INTO

Ada dua cara untuk menulis pernyataan `INSERT INTO`:

### 1. Menentukan Nama Kolom dan Nilai yang Akan Dimasukkan

Anda dapat menentukan nama kolom yang akan diisi dan nilai-nilai yang sesuai untuk setiap kolom.

Penulisan Query:

```sql
INSERT INTO nama_tabel (kolom1, kolom2, kolom3, ...)
VALUES (nilai1, nilai2, nilai3, ...);
```

- **nama_tabel**: Nama tabel tempat data akan dimasukkan.
- **kolom1, kolom2, kolom3, ...**: Nama kolom yang akan diisi dengan nilai-nilai.
- **nilai1, nilai2, nilai3, ...**: Nilai yang akan dimasukkan ke dalam kolom yang sesuai.

### 2. Menambahkan Nilai untuk Semua Kolom Tabel

Jika Anda menambahkan nilai untuk semua kolom tabel, Anda tidak perlu menentukan nama kolom dalam query SQL. Pastikan urutan nilai sesuai dengan urutan kolom dalam tabel.

Penulisan Query:

```sql
INSERT INTO nama_tabel
VALUES (nilai1, nilai2, nilai3, ...);
```

Di bawah ini adalah pilihan dari tabel Pelanggan digunakan dalam contoh:

### Tabel Pelanggan

| IDPelanggan | NamaPelanggan        | NamaKontak      | Alamat                     | Kota        | KodePos | Negara |
|-------------|----------------------|-----------------|----------------------------|-------------|---------|--------|
| 89          | White Clover Markets | Karl Jablonski  | 305 - 14th Ave. S. Suite 3B | Seattle     | 98128   | USA    |
| 90          | Wilman Kala          | Matti Karttunen | Keskuskatu 45              | Helsinki    | 21240   | Finland|
| 91          | Wolski               | Zbyszek         | ul. Filtrowa 68            | Walla       | 01-012  | Poland |

Contoh Insert Into
---

```sql
INSERT INTO Pelanggan (NamaPelanggan, NamaKontak, Alamat, Kota, KodePos, Negara)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```

**Hasil:** Tabel “Pelanggan” akan terlihat seperti ini setelah perintah di atas:

| IDPelanggan | NamaPelanggan        | NamaKontak       | Alamat                     | Kota       | KodePos | Negara |
|-------------|----------------------|------------------|----------------------------|------------|---------|--------|
| 89          | White Clover Markets | Karl Jablonski   | 305 - 14th Ave. S. Suite 3B | Seattle    | 98128   | USA    |
| 90          | Wilman Kala          | Matti Karttunen  | Keskuskatu 45              | Helsinki   | 21240   | Finland|
| 91          | Wolski               | Zbyszek          | ul. Filtrowa 68            | Walla      | 01-012  | Poland |
| 92          | Cardinal             | Tom B. Erichsen  | Skagen 21                  | Stavanger  | 4006    | Norway |


Insert Data di Kolom Spesifik atau Tertentu
---

Anda dapat menyisipkan data hanya di kolom tertentu. Kolom lainnya akan diisi dengan nilai default atau `NULL`.

Contoh:<br>
Pernyataan SQL berikut akan menyisipkan data baru, tetapi hanya menyisipkan data di kolom "NamaPelanggan", "Kota", dan "Negara" (IDPelanggan akan diperbarui secara otomatis):

```sql
INSERT INTO Pelanggan (NamaPelanggan, Kota, Negara)
VALUES ('Cardinal', 'Stavanger', 'Norway');
```

**Hasil:** Tabel “Pelanggan” akan terlihat seperti ini setelah perintah di atas:

| IDPelanggan | NamaPelanggan        | NamaKontak | Alamat | Kota       | KodePos | Negara |
|-------------|----------------------|------------|--------|------------|---------|--------|
| 89          | White Clover Markets | Karl Jablonski | 305 - 14th Ave. S. Suite 3B | Seattle    | 98128   | USA    |
| 90          | Wilman Kala          | Matti Karttunen | Keskuskatu 45              | Helsinki   | 21240   | Finland|
| 91          | Wolski               | Zbyszek      | ul. Filtrowa 68            | Walla      | 01-012  | Poland |
| 92          | Cardinal             | NULL       | NULL   | Stavanger  | NULL    | Norway |

Insert Beberapa Baris
---
Anda dapat menyisipkan beberapa baris data sekaligus dengan menggunakan pernyataan `INSERT INTO` yang sama, tetapi dengan beberapa nilai.

Contoh:

```sql
INSERT INTO Pelanggan (NamaPelanggan, NamaKontak, Alamat, Kota, KodePos, Negara)
VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');
```

**Hasil:** Tabel “Pelanggan” akan terlihat seperti ini setelah perintah di atas:
| IDPelanggan | NamaPelanggan        | NamaKontak       | Alamat                     | Kota        | KodePos | Negara |
|-------------|----------------------|------------------|----------------------------|-------------|---------|--------|
| 89          | White Clover Markets | Karl Jablonski   | 305 - 14th Ave. S. Suite 3B | Seattle     | 98128   | USA    |
| 90          | Wilman Kala          | Matti Karttunen  | Keskuskatu 45              | Helsinki    | 21240   | Finland|
| 91          | Wolski               | Zbyszek          | ul. Filtrowa 68            | Walla       | 01-012  | Poland |
| 92          | Cardinal             | Tom B. Erichsen  | Skagen 21                  | Stavanger   | 4006    | Norway |
| 93          | Greasy Burger        | Per Olsen        | Gateveien 15               | Sandnes     | 4306    | Norway |
| 94          | Tasty Tee            | Finn Egan        | Streetroad 19B             | Liverpool   | L1 0AA  | UK     |
