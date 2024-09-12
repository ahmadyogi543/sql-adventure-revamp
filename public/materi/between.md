## BETWEEN  
BETWEEN digunakan untuk memilih nilai dalam rentang tertentu. Operator ini sering digunakan untuk nilai numerik, tetapi bisa juga digunakan untuk tanggal. Misalnya, jika kita ingin menampilkan data petugas yang memiliki lama bekerja antara 3 hingga 6 tahun, kita bisa menggunakan BETWEEN.

### Sintaks:
```sql
SELECT kolom FROM nama_tabel WHERE kolom BETWEEN nilai1 AND nilai2;
```
### Database 1

Berikut adalah data dari tabel Petugas yang akan digunakan pada contoh 1:

**Tabel Petugas**

| id | nama | tugas                | lama_bekerja (tahun) |
|----|------|----------------------|----------------------|
| 1  | Budi | Pemandu Wisata       | 5                    |
| 2  | Siti | Penjaga Gerbang      | 3                    |
| 3  | Agus | Perawat Hewan        | 7                    |
| 4  | Wati | Teknisi Fasilitas    | 4                    |
| 5  | Rudi | Administrasi         | 6                    |


### Contoh 1:
Pilih petugas yang telah bekerja antara 4 hingga 7 tahun.
```sql
SELECT nama, lama_bekerja FROM petugas WHERE lama_bekerja BETWEEN 4 AND 7;
```

#### Hasil Query:
| nama | lama_bekerja |
| ---- | ------------ |
| Wati | 4            |
| Rudi | 6            |
| Agus | 7            |

### Database 2

Berikut adalah data dari tabel Tumbuhan yang akan digunakan pada contoh 2:

**Tabel Tumbuhan**
| id  | nama           | nama_latin              | habitat      | jumlah | status_konservasi |
|-----|----------------|-------------------------|--------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis | 150    | Terancam Punah     |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis | 200    | Dilindungi         |
| 3   | Anggrek Hitam  | Coelogyne pandurata      | Tepi Hutan   | 100    | Terancam Punah     |
| 4   | Bakau          | Rhizophora apiculata     | Pesisir      | 500    | Dilindungi         |
| 5   | Ramin          | Gonystylus bancanus      | Hutan Rawa   | 80     | Langka             |

### Contoh 2:
Pilih tumbuhan yang jumlahnya antara 100 hingga 500.
```sql
SELECT nama, jumlah FROM tumbuhan WHERE jumlah BETWEEN 100 AND 500;
```

#### Hasil Query:
| nama           | jumlah |
| -------------- | ------ |
| Meranti Merah  | 200    |
| Anggrek Hitam  | 100    |
| Bakau          | 500    |

### Latihan:
1. Pilih data harga tiket yang berada antara 30.000 hingga 50.000.
2. Pilih hewan yang memiliki lama hidup antara 10 hingga 20 tahun.
