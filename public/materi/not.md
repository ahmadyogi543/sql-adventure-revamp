## NOT

`NOT` adalah operator yang digunakan untuk membalikkan kondisi yang ditentukan. Jika suatu kondisi benar, `NOT` akan membuatnya menjadi salah, dan sebaliknya. Ini berguna ketika kamu ingin menampilkan baris yang tidak memenuhi kondisi tertentu. Misalnya, jika kita ingin menampilkan semua petugas yang tidak bertugas sebagai "Pemandu Wisata", kita bisa menggunakan `NOT`.

### Sintaks:
```sql
SELECT kolom1 FROM nama_tabel WHERE NOT kondisi;
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
Ambil data dari tabel `tumbuhan` di mana `status_konservasi` bukan "Dilindungi".
```sql
SELECT * FROM tumbuhan WHERE NOT status_konservasi = 'Dilindungi';
```

**Hasil:**
| id  | nama           | nama_latin            | habitat       | jumlah | status_konservasi |
|-----|----------------|-----------------------|---------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri | Hutan Tropis  | 150    | Terancam Punah    |
| 3   | Anggrek Hitam  | Coelogyne pandurata   | Tepi Hutan    | 100    | Terancam Punah    |
| 5   | Ramin          | Gonystylus bancanus   | Hutan Rawa    | 80     | Langka            |


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
Ambil data dari tabel `hewan` di mana `lama_hidup` bukan lebih dari 20 tahun.
```sql
SELECT * FROM hewan WHERE NOT lama_hidup > 20;
```

**Hasil:**
| id  | nama            | nama_latin            | jumlah | makanan | habitat       | lama_hidup (tahun) | status_konservasi |
|-----|-----------------|-----------------------|--------|---------|---------------|--------------------|-------------------|
| 1   | Bekantan        | Nasalis larvatus      | 120    | Daun, Buah | Hutan Mangrove | 13                 | Terancam Punah    |
| 4   | Kucing Hutan     | Prionailurus bengalensis | 30     | Daging  | Hutan Tropis  | 15                 | Dilindungi        |

### Latihan:
1. Ambil data dari tabel `hewan` di mana `habitat` bukan "Hutan Tropis".
2. Ambil data dari tabel `tumbuhan` di mana `jumlah` bukan lebih dari 100.