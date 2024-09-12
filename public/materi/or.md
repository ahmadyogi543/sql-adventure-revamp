## OR

`OR` adalah operator yang digunakan untuk menggabungkan dua atau lebih kondisi di dalam klausa `WHERE`, tetapi hanya salah satu kondisi yang perlu benar agar baris data ditampilkan. Misalnya, jika kita ingin menampilkan petugas yang memiliki lama bekerja lebih dari 5 tahun atau bertugas sebagai "Pemandu Wisata", kita bisa menggunakan `OR` untuk menggabungkan kondisi tersebut.

### Sintaks:
```sql
SELECT kolom1 FROM nama_tabel WHERE kondisi1 OR kondisi2;
```
### Database 1

Berikut adalah data dari tabel Hewan yang akan digunakan pada contoh 1:

**Tabel Hewan**
| id  | nama                 | nama_latin              | jumlah | makanan         | habitat        | lama_hidup (tahun) | status_konservasi |
|-----|----------------------|-------------------------|--------|-----------------|----------------|-------------------|-------------------|
| 1   | Bekantan             | Nasalis larvatus        | 120    | Daun, Buah      | Hutan Mangrove | 13                | Terancam Punah     |
| 2   | Orangutan Kalimantan | Pongo pygmaeus          | 90     | Buah            | Hutan Hujan    | 45                | Terancam Punah     |
| 3   | Buaya Sinyulong      | Tomistoma schlegelii    | 40     | Ikan            | Sungai         | 70                | Terancam Punah     |
| 4   | Kucing Hutan         | Prionailurus bengalensis| 30     | Daging          | Hutan Tropis   | 15                | Dilindungi         |
| 5   | Rusa Sambar          | Rusa unicolor           | 60     | Rumput          | Padang Rumput  | 20                | Dilindungi         |

### Contoh 1:
Ambil data dari tabel `hewan` di mana `jumlah` kurang dari 50 atau `status_konservasi` adalah "Langka".
```sql
SELECT * FROM hewan WHERE jumlah < 50 OR status_konservasi = 'Langka';
```

**Hasil:**
| id  | nama            | nama_latin            | jumlah | makanan | habitat       | lama_hidup (tahun) | status_konservasi |
|-----|-----------------|-----------------------|--------|---------|---------------|--------------------|-------------------|
| 3   | Buaya Sinyulong | Tomistoma schlegelii  | 40     | Ikan    | Sungai        | 70                 | Terancam Punah    |
| 4   | Kucing Hutan    | Prionailurus bengalensis | 30     | Daging  | Hutan Tropis  | 15                 | Dilindungi        |

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
Ambil data dari tabel `tumbuhan` di mana `habitat` adalah "Hutan Rawa" atau `jumlah` lebih dari 300.
```sql
SELECT * FROM tumbuhan WHERE habitat = 'Hutan Rawa' OR jumlah > 300;
```

**Hasil:**
| id  | nama         | nama_latin            | habitat       | jumlah | status_konservasi |
|-----|--------------|-----------------------|---------------|--------|-------------------|
| 4   | Bakau        | Rhizophora apiculata  | Pesisir       | 500    | Dilindungi        |
| 5   | Ramin        | Gonystylus bancanus   | Hutan Rawa    | 80     | Langka            |

### Latihan:
1. Ambil data dari tabel `hewan` di mana `lama_hidup` lebih dari 50 tahun atau `habitat` adalah "Padang Rumput".
2. Ambil data dari tabel `tumbuhan` di mana `status_konservasi` adalah "Langka" atau `jumlah` lebih dari 150.
