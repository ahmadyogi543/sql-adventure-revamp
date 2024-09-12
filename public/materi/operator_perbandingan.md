## OPERATOR PERBANDINGAN  
Operator perbandingan seperti `=`, `>`, `<`, `>=`, `<=`, dan `<>` (tidak sama dengan) digunakan untuk membandingkan dua nilai. Operator ini sering digunakan dalam klausa `WHERE` untuk memfilter data. Misalnya, jika kita ingin menampilkan petugas yang telah bekerja lebih dari 5 tahun, kita bisa menggunakan operator perbandingan `>`.

### Daftar Operator Perbandingan:
- `=` : Sama dengan
- `!=` atau `<>` : Tidak sama dengan
- `>` : Lebih besar dari
- `<` : Lebih kecil dari
- `>=` : Lebih besar atau sama dengan
- `<=` : Lebih kecil atau sama dengan

### Sintaks:
```sql
SELECT kolom FROM nama_tabel WHERE kolom operator nilai;
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
Pilih petugas yang telah bekerja selama lebih dari 4 tahun.
```sql
SELECT nama, lama_bekerja FROM petugas WHERE lama_bekerja > 4;
```

#### Hasil Query:
| nama | lama_bekerja |
| ---- | ------------ |
| Budi | 5            |
| Agus | 7            |
| Rudi | 6            |

### Database 2

Berikut adalah data dari tabel Fasilitas yang akan digunakan pada contoh 3:

**Tabel Fasilitas**

| id | nama             | jumlah | jenis             | status_kelayakan |
|----|------------------|--------|-------------------|------------------|
| 1  | Tempat Istirahat | 10     | Umum              | Layak            |
| 2  | Toilet Umum      | 15     | Umum              | Layak            |
| 3  | Jembatan Gantung | 1      | Fasilitas Khusus  | Tidak Layak      |
| 4  | Tempat Sampah    | 20     | Umum              | Layak            |
| 5  | Menara Pengamat  | 2      | Fasilitas Khusus  | Layak            |

### Contoh 2:
Pilih fasilitas yang jumlahnya kurang dari 10.
```sql
SELECT nama, jumlah FROM fasilitas WHERE jumlah < 10;
```

#### Hasil Query:
| nama            | jumlah |
| --------------- | ------ |
| Jembatan Gantung | 1      |
| Menara Pengamat  | 2      |

### Database 3

Berikut adalah data dari tabel Tumbuhan yang akan digunakan pada contoh 3:

**Tabel Tumbuhan**
| id  | nama           | nama_latin              | habitat      | jumlah | status_konservasi |
|-----|----------------|-------------------------|--------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis | 150    | Terancam Punah     |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis | 200    | Dilindungi         |
| 3   | Anggrek Hitam  | Coelogyne pandurata      | Tepi Hutan   | 100    | Terancam Punah     |
| 4   | Bakau          | Rhizophora apiculata     | Pesisir      | 500    | Dilindungi         |
| 5   | Ramin          | Gonystylus bancanus      | Hutan Rawa   | 80     | Langka             |

### Contoh 3:
Pilih tumbuhan yang memiliki status konservasi tidak sama dengan 'Dilindungi'.
```sql
SELECT nama, status_konservasi FROM tumbuhan WHERE status_konservasi != 'Dilindungi';
```

#### Hasil Query:
| nama           | status_konservasi |
| -------------- | ----------------- |
| Pohon Ulin     | Terancam Punah     |
| Anggrek Hitam  | Terancam Punah     |
| Ramin          | Langka            |

### Database 4

Berikut adalah data dari tabel Hewan yang akan digunakan pada contoh 4:

**Tabel Hewan**
| id  | nama                 | nama_latin              | jumlah | makanan         | habitat        | lama_hidup (tahun) | status_konservasi |
|-----|----------------------|-------------------------|--------|-----------------|----------------|-------------------|-------------------|
| 1   | Bekantan             | Nasalis larvatus        | 120    | Daun, Buah      | Hutan Mangrove | 13                | Terancam Punah     |
| 2   | Orangutan Kalimantan | Pongo pygmaeus          | 90     | Buah            | Hutan Hujan    | 45                | Terancam Punah     |
| 3   | Buaya Sinyulong      | Tomistoma schlegelii    | 40     | Ikan            | Sungai         | 70                | Terancam Punah     |
| 4   | Kucing Hutan         | Prionailurus bengalensis| 30     | Daging          | Hutan Tropis   | 15                | Dilindungi         |
| 5   | Rusa Sambar          | Rusa unicolor           | 60     | Rumput          | Padang Rumput  | 20                | Dilindungi         |

### Contoh 4:
Pilih hewan yang memiliki lama hidup lebih dari atau sama dengan 20 tahun.
```sql
SELECT nama, lama_hidup FROM hewan WHERE lama_hidup >= 20;
```

#### Hasil Query:
| nama                 | lama_hidup |
| -------------------- | ---------- |
| Orangutan Kalimantan | 45         |
| Buaya Sinyulong      | 70         |
| Rusa Sambar          | 20         |

### Latihan:
1. Pilih data biaya wisatawan dengan harga lebih besar dari 40.000.
2. Pilih petugas yang telah bekerja selama kurang dari 6 tahun.