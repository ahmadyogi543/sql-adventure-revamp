## LIKE  
LIKE adalah operator yang digunakan untuk mencari pola dalam teks. Biasanya digunakan dalam klausa WHERE dengan simbol wildcard seperti `%` (untuk mencocokkan satu atau lebih karakter) dan `_` (untuk mencocokkan tepat satu karakter). Misalnya, jika kita ingin mencari petugas yang namanya dimulai dengan huruf "S", kita bisa menggunakan LIKE.

### Sintaks:
```sql
SELECT kolom FROM nama_tabel WHERE kolom LIKE 'pola';
```

- `%`: Mencocokkan nol atau lebih karakter.
- `_`: Mencocokkan satu karakter.

### Database 1

Berikut adalah data dari tabel Fasilitas yang akan digunakan pada contoh 1:

**Tabel Fasilitas**

| id | nama             | jumlah | jenis             | status_kelayakan |
|----|------------------|--------|-------------------|------------------|
| 1  | Tempat Istirahat | 10     | Umum              | Layak            |
| 2  | Toilet Umum      | 15     | Umum              | Layak            |
| 3  | Jembatan Gantung | 1      | Fasilitas Khusus  | Tidak Layak      |
| 4  | Tempat Sampah    | 20     | Umum              | Layak            |
| 5  | Menara Pengamat  | 2      | Fasilitas Khusus  | Layak            |


### Contoh 1: 
Mencari nama fasilitas yang mengandung kata 'Tempat' di tabel fasilitas.
```sql
SELECT * FROM fasilitas WHERE nama LIKE '%Tempat%';
```

#### Hasil Query:
| id  | nama             | jumlah | jenis | status_kelayakan |
| --- | ---------------- | ------ | ----- | ---------------- |
| 1   | Tempat Istirahat  | 10     | Umum  | Layak            |
| 4   | Tempat Sampah     | 20     | Umum  | Layak            |


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
Mencari nama tumbuhan yang diakhiri dengan kata 'Merah' di tabel tumbuhan.
```sql
SELECT * FROM tumbuhan WHERE nama LIKE '%Merah';
```

#### Hasil Query:
| id  | nama           | nama_latin      | habitat        | jumlah | status_konservasi |
| --- | -------------- | --------------- | -------------- | ------ | ----------------- |
| 2   | Meranti Merah  | Shorea leprosula | Hutan Tropis   | 200    | Dilindungi        |

### Database 3

Berikut adalah data dari tabel Petugas yang akan digunakan pada contoh 3:

**Tabel Petugas**

| id | nama | tugas                | lama_bekerja (tahun) |
|----|------|----------------------|----------------------|
| 1  | Budi | Pemandu Wisata       | 5                    |
| 2  | Siti | Penjaga Gerbang      | 3                    |
| 3  | Agus | Perawat Hewan        | 7                    |
| 4  | Wati | Teknisi Fasilitas    | 4                    |
| 5  | Rudi | Administrasi         | 6                    |

### Contoh 3: 
Mencari nama petugas yang dimulai dengan huruf 'S' di tabel petugas.
```sql
SELECT * FROM petugas WHERE nama LIKE 'S%';
```

#### Hasil Query:
| id  | nama | tugas          | lama_bekerja |
| --- | ---- | -------------- | ------------ |
| 2   | Siti | Penjaga Gerbang | 3            |


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
Mencari nama hewan di tabel hewan yang memiliki tepat 6 karakter.
```sql
SELECT * FROM hewan WHERE nama LIKE '______';
```

#### Hasil Query:
| id  | nama  | nama_latin      | jumlah | makanan | habitat        | lama_hidup | status_konservasi |
| --- | ----- | --------------- | ------ | ------- | -------------- | ---------- | ----------------- |
| 5   | Rusa  | Rusa unicolor   | 60     | Rumput  | Padang Rumput  | 20         | Dilindungi        |

### Latihan:
1. Cari nama fasilitas yang dimulai dengan 'To' dan diakhiri dengan 'Umum'.
2. Cari nama tumbuhan yang memiliki kata 'Ulin' di tabel tumbuhan.
3. Cari nama petugas yang memiliki tepat 4 karakter.
4. Cari nama hewan yang mengandung huruf 'a' pada karakter kedua.
