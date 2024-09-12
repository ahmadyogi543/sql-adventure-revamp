## WHERE

`WHERE` adalah klausa yang digunakan untuk memfilter data berdasarkan kondisi tertentu. Dengan kata lain, perintah ini digunakan untuk menampilkan hanya baris-baris data yang memenuhi kriteria yang ditentukan. Misalnya, jika kita ingin menampilkan semua petugas yang memiliki lama bekerja lebih dari 5 tahun, kita bisa menggunakan `WHERE` untuk membatasi hasilnya hanya pada baris yang sesuai.

### Sintaks:
```sql
SELECT kolom1 FROM nama_tabel WHERE kondisi;
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
Ambil data dari tabel `tumbuhan` di mana jumlah lebih dari 100.
```sql
SELECT * FROM tumbuhan WHERE jumlah > 100;
```

**Hasil:**
| id  | nama           | nama_latin              | habitat       | jumlah | status_konservasi |
|-----|----------------|-------------------------|---------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis  | 150    | Terancam Punah    |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis  | 200    | Dilindungi        |
| 4   | Bakau          | Rhizophora apiculata     | Pesisir       | 500    | Dilindungi        |

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
Ambil data dari tabel `hewan` di mana `status_konservasi` adalah "Terancam Punah".
```sql
SELECT * FROM hewan WHERE status_konservasi = 'Terancam Punah';
```

**Hasil:**
| id  | nama                | nama_latin           | jumlah | makanan     | habitat        | lama_hidup (tahun) | status_konservasi |
|-----|---------------------|----------------------|--------|-------------|----------------|--------------------|-------------------|
| 1   | Bekantan             | Nasalis larvatus     | 120    | Daun, Buah  | Hutan Mangrove | 13                 | Terancam Punah    |
| 2   | Orangutan Kalimantan | Pongo pygmaeus       | 90     | Buah        | Hutan Hujan    | 45                 | Terancam Punah    |
| 3   | Buaya Sinyulong      | Tomistoma schlegelii | 40     | Ikan        | Sungai         | 70                 | Terancam Punah    |

### Latihan:
1. Ambil data dari tabel `tumbuhan` di mana `habitat` adalah "Hutan Rawa".
2. Ambil data dari tabel `hewan` di mana `lama_hidup` lebih dari 20 tahun.
