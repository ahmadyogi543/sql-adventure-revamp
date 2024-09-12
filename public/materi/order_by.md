## ORDER BY

`ORDER BY` adalah klausa yang digunakan untuk mengurutkan hasil kueri berdasarkan satu atau lebih kolom. Kamu bisa mengurutkan hasilnya dalam urutan menaik (*ascending*) atau menurun (*descending*). Misalnya, jika kita ingin mengurutkan nama petugas berdasarkan lama bekerja, kita bisa menggunakan `ORDER BY` untuk menentukan urutan.

### Sintaks:
```sql
SELECT kolom1 FROM nama_tabel ORDER BY kolom ASC;
```
atau
```sql
SELECT kolom1 FROM nama_tabel ORDER BY kolom DESC;
```
### Database 1

Berikut adalah data dari tabel Tumbuhan yang akan digunakan pada contoh 1:

**Tabel Tumbuhan**
| id  | nama           | nama_latin              | habitat      | jumlah | status_konservasi |
|-----|----------------|-------------------------|--------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis | 150    | Terancam Punah     |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis | 200    | Dilindungi         |
| 3   | Anggrek Hitam  | Coelogyne pandurata      | Tepi Hutan   | 100    | Terancam Punah     |
| 4   | Bakau          | Rhizophora apiculata     | Pesisir      | 500    | Dilindungi         |
| 5   | Ramin          | Gonystylus bancanus      | Hutan Rawa   | 80     | Langka             |


### Contoh 1:
Ambil data dari tabel `tumbuhan` dan urutkan berdasarkan jumlah secara descending (menurun).
```sql
SELECT * FROM tumbuhan ORDER BY jumlah DESC;
```

**Hasil:**
| id  | nama           | nama_latin              | habitat       | jumlah | status_konservasi |
|-----|----------------|-------------------------|---------------|--------|-------------------|
| 4   | Bakau          | Rhizophora apiculata     | Pesisir       | 500    | Dilindungi        |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis  | 200    | Dilindungi        |
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis  | 150    | Terancam Punah    |
| 3   | Anggrek Hitam  | Coelogyne pandurata      | Tepi Hutan    | 100    | Terancam Punah    |
| 5   | Ramin          | Gonystylus bancanus      | Hutan Rawa    | 80     | Langka            |


### Database 2

Berikut adalah data dari tabel Hewan yang akan digunakan pada contoh 2:

**Tabel Hewan**
| id  | nama                 | nama_latin              | jumlah | makanan         | habitat        | lama_hidup (tahun) | status_konservasi |
|-----|----------------------|-------------------------|--------|-----------------|----------------|-------------------|-------------------|
| 1   | Bekantan             | Nasalis larvatus        | 120    | Daun, Buah      | Hutan Mangrove | 13                | Terancam Punah     |
| 2   | Orangutan Kalimantan | Pongo pygmaeus          | 90     | Buah            | Hutan Hujan    | 45                | Terancam Punah     |
| 3   | Buaya Sinyulong      | Tomistoma schlegelii    | 40     | Ikan            | Sungai         | 70                | Terancam Punah     |
| 4   | Kucing Hutan         | Prionailurus bengalensis| 30     | Daging          | Hutan Tropis   | 15                | Dilindungi         |
| 5   | Rusa Sambar          | Rusa unicolor           | 60     | Rumput          | Padang Rumput  | 20                | Dilindungi         |


### Contoh 2:
Ambil data dari tabel `hewan` dan urutkan berdasarkan nama secara ascending (menaik).
```sql
SELECT * FROM hewan ORDER BY nama ASC;
```

**Hasil:**
| id  | nama                | nama_latin           | jumlah | makanan     | habitat        | lama_hidup (tahun) | status_konservasi |
|-----|---------------------|----------------------|--------|-------------|----------------|--------------------|-------------------|
| 1   | Bekantan             | Nasalis larvatus     | 120    | Daun, Buah  | Hutan Mangrove | 13                 | Terancam Punah    |
| 3   | Buaya Sinyulong      | Tomistoma schlegelii | 40     | Ikan        | Sungai         | 70                 | Terancam Punah    |
| 4   | Kucing Hutan         | Prionailurus bengalensis | 30  | Daging      | Hutan Tropis   | 15                 | Dilindungi        |
| 2   | Orangutan Kalimantan | Pongo pygmaeus       | 90     | Buah        | Hutan Hujan    | 45                 | Terancam Punah    |
| 5   | Rusa Sambar          | Rusa unicolor        | 60     | Rumput      | Padang Rumput  | 20                 | Dilindungi        |

### Latihan:
1. Ambil data dari tabel `hewan` dan urutkan berdasarkan `lama_hidup` secara ascending.
2. Ambil data dari tabel `tumbuhan` dan urutkan berdasarkan `nama` secara descending.
