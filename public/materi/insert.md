## INSERT  
`INSERT` adalah perintah SQL yang digunakan untuk menambahkan data baru ke dalam tabel. Dengan `INSERT`, kamu dapat menambahkan satu atau beberapa baris data ke tabel tertentu. Ini sangat berguna saat kita ingin memasukkan data baru ke dalam database.

### Sintaks:
```sql
INSERT INTO nama_tabel (kolom1, kolom2, ...) 
VALUES (nilai1, nilai2, ...);
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
Tambahkan data baru ke dalam tabel **tumbuhan**.
```sql
INSERT INTO tumbuhan (id, nama, nama_latin, habitat, jumlah, status_konservasi) 
VALUES (6, 'Kapur Barus', 'Dryobalanops aromatica', 'Hutan Tropis', 50, 'Dilindungi');
```

#### Hasil:
| id  | nama         | nama_latin                | habitat        | jumlah | status_konservasi |
| --- | ------------ | ------------------------- | -------------- | ------ | ----------------- |
| 1   | Pohon Ulin   | Eusideroxylon zwageri      | Hutan Tropis   | 150    | Terancam Punah     |
| 2   | Meranti Merah| Shorea leprosula           | Hutan Tropis   | 200    | Dilindungi         |
| 3   | Anggrek Hitam| Coelogyne pandurata        | Tepi Hutan     | 100    | Terancam Punah     |
| 4   | Bakau        | Rhizophora apiculata       | Pesisir        | 500    | Dilindungi         |
| 5   | Ramin        | Gonystylus bancanus        | Hutan Rawa     | 80     | Langka             |
| 6   | Kapur Barus  | Dryobalanops aromatica     | Hutan Tropis   | 50     | Dilindungi         |

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
Tambahkan data baru ke dalam tabel **hewan**.
```sql
INSERT INTO hewan (id, nama, nama_latin, jumlah, makanan, habitat, lama_hidup, status_konservasi) 
VALUES (6, 'Beruang Madu', 'Helarctos malayanus', 20, 'Buah, Madu', 'Hutan Tropis', 25, 'Terancam Punah');
```

#### Hasil:
| id  | nama          | nama_latin                | jumlah | makanan     | habitat       | lama_hidup (tahun) | status_konservasi |
| --- | ------------- | ------------------------- | ------ | ----------- | ------------- | ------------------ | ----------------- |
| 1   | Bekantan      | Nasalis larvatus           | 120    | Daun, Buah  | Hutan Mangrove| 13                 | Terancam Punah     |
| 2   | Pesut Mahakam | Orcaella brevirostris      | 25     | Ikan        | Sungai        | 30                 | Langka             |
| 3   | Buaya Sinyulong| Tomistoma schlegelii      | 40     | Ikan        | Sungai        | 70                 | Terancam Punah     |
| 4   | Kucing Hutan  | Prionailurus bengalensis   | 30     | Daging      | Hutan Tropis  | 15                 | Dilindungi         |
| 5   | Rusa Sambar   | Rusa unicolor             | 60     | Rumput      | Padang Rumput | 20                 | Dilindungi         |
| 6   | Beruang Madu  | Helarctos malayanus       | 20     | Buah, Madu  | Hutan Tropis  | 25                 | Terancam Punah     |

### Latihan:
1. Tambahkan data baru ke dalam tabel **tumbuhan**:
    - id: 7
    - nama: Rotan
    - nama_latin: Calamus spp.
    - habitat: Hutan Tropis
    - jumlah: 300
    - status_konservasi: Dilindungi

2. Tambahkan data baru ke dalam tabel **hewan**:
    - id: 7
    - nama: Elang Jawa
    - nama_latin: Nisaetus bartelsi
    - jumlah: 15
    - makanan: Daging
    - habitat: Hutan Tropis
    - lama_hidup: 20
    - status_konservasi: Terancam Punah
