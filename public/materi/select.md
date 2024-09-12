## SELECT

`SELECT` adalah perintah dasar SQL yang digunakan untuk mengambil data dari satu atau lebih tabel. Perintah ini memungkinkan kita untuk mengambil data spesifik dari kolom tertentu atau seluruh kolom menggunakan tanda bintang (`*`). Penggunaan `SELECT` adalah langkah pertama ketika ingin melihat data yang ada di dalam tabel. Misalnya, jika kamu memiliki tabel yang berisi data hewan, kamu dapat menggunakan perintah `SELECT` untuk menampilkan nama dan habitat mereka. Perintah ini memungkinkan kita mengambil satu kolom atau lebih dari tabel yang kita inginkan.

### Sintaks:
```sql
SELECT kolom1, kolom2 FROM nama_tabel;
```
### Database 1

Berikut adalah data dari tabel Tumbuhan yang akan digunakan pada contoh 1:

#### Tabel Tumbuhan
| id  | nama           | nama_latin              | habitat      | jumlah | status_konservasi |
|-----|----------------|-------------------------|--------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis | 150    | Terancam Punah     |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis | 200    | Dilindungi         |
| 3   | Anggrek Hitam  | Coelogyne pandurata      | Tepi Hutan   | 100    | Terancam Punah     |
| 4   | Bakau          | Rhizophora apiculata     | Pesisir      | 500    | Dilindungi         |
| 5   | Ramin          | Gonystylus bancanus      | Hutan Rawa   | 80     | Langka             |

### Contoh 1
Ambil semua data dari tabel **tumbuhan**.
```sql
SELECT * FROM tumbuhan;
```

#### Hasil:
| id  | nama              | nama_latin              | habitat       | jumlah | status_konservasi   |
|-----|-------------------|-------------------------|---------------|--------|---------------------|
| 1   | Pohon Ulin        | Eusideroxylon zwageri    | Hutan Tropis  | 150    | Terancam Punah       |
| 2   | Meranti Merah     | Shorea leprosula         | Hutan Tropis  | 200    | Dilindungi           |
| 3   | Anggrek Hitam     | Coelogyne pandurata      | Tepi Hutan    | 100    | Terancam Punah       |
| 4   | Bakau             | Rhizophora apiculata     | Pesisir       | 500    | Dilindungi           |
| 5   | Ramin             | Gonystylus bancanus      | Hutan Rawa    | 80     | Langka               |

### Database 2

Berikut adalah data dari tabel Hewan yang akan digunakan pada contoh 2:
#### Tabel Hewan
| id  | nama                 | nama_latin              | jumlah | makanan         | habitat        | lama_hidup (tahun) | status_konservasi |
|-----|----------------------|-------------------------|--------|-----------------|----------------|-------------------|-------------------|
| 1   | Bekantan             | Nasalis larvatus        | 120    | Daun, Buah      | Hutan Mangrove | 13                | Terancam Punah     |
| 2   | Orangutan Kalimantan | Pongo pygmaeus          | 90     | Buah            | Hutan Hujan    | 45                | Terancam Punah     |
| 3   | Buaya Sinyulong      | Tomistoma schlegelii    | 40     | Ikan            | Sungai         | 70                | Terancam Punah     |
| 4   | Kucing Hutan         | Prionailurus bengalensis| 30     | Daging          | Hutan Tropis   | 15                | Dilindungi         |
| 5   | Rusa Sambar          | Rusa unicolor           | 60     | Rumput          | Padang Rumput  | 20                | Dilindungi         |

### Contoh 2
Ambil kolom **nama** dan **habitat** dari tabel **hewan**.
```sql
SELECT nama, habitat FROM hewan;
```

#### Hasil:
| nama                  | habitat         |
|-----------------------|-----------------|
| Bekantan              | Hutan Mangrove  |
| Orangutan Kalimantan  | Hutan Hujan     |
| Buaya Sinyulong       | Sungai          |
| Kucing Hutan          | Hutan Tropis    |
| Rusa Sambar           | Padang Rumput   |

### Latihan:
1. Ambil semua data dari tabel **hewan**.
2. Ambil kolom **nama** dan **status_konservasi** dari tabel **tumbuhan**.

