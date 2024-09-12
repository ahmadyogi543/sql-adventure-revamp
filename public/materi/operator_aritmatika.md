## OPERATOR ARITMATIKA  
Operator aritmatika seperti `+`, `-`, `*`, dan `/` digunakan untuk melakukan operasi matematika pada nilai-nilai numerik dalam SQL. Misalnya, jika kita ingin menambahkan bonus 5000 ke setiap harga tiket, kita bisa menggunakan operator `+`.

### Daftar Operator Aritmatika:
- `+` : Penjumlahan
- `-` : Pengurangan
- `*` : Perkalian
- `/` : Pembagian

### Sintaks:
```sql
SELECT kolom1 operator kolom2 FROM nama_tabel;
```
### Database 1

Berikut adalah data dari tabel Biaya yang akan digunakan pada contoh 1:

**Tabel Biaya**

| id | hari  | wisatawan | harga  |
|----|-------|-----------|--------|
| 1  | Senin | Dewasa    | 50000  |
| 2  | Selasa| Anak-Anak | 30000  |
| 3  | Rabu  | Pelajar   | 40000  |
| 4  | Kamis | Dewasa    | 55000  |
| 5  | Jumat | Lansia    | 45000  |

### Contoh 1:
Hitung total biaya untuk dua pengunjung dewasa pada hari Senin.
```sql
SELECT harga * 2 AS total_biaya FROM biaya WHERE wisatawan = 'Dewasa' AND hari = 'Senin';
```

#### Hasil Query:
| total_biaya |
| ----------- |
| 100000      |

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
Tambahkan jumlah fasilitas umum dengan fasilitas khusus.
```sql
SELECT 
  (SELECT SUM(jumlah) FROM fasilitas WHERE jenis = 'Umum') + 
  (SELECT SUM(jumlah) FROM fasilitas WHERE jenis = 'Fasilitas Khusus') AS total_fasilitas;
```

#### Hasil Query:
| total_fasilitas |
| --------------- |
| 48              |

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
Kurangi jumlah tumbuhan Bakau dengan Anggrek Hitam.
```sql
SELECT 
  (SELECT jumlah FROM tumbuhan WHERE nama = 'Bakau') - 
  (SELECT jumlah FROM tumbuhan WHERE nama = 'Anggrek Hitam') AS selisih_jumlah;
```

#### Hasil Query:
| selisih_jumlah |
| -------------- |
| 400            |

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
Hitung jumlah hewan Buaya Sinyulong yang dikurangi oleh hewan Kucing Hutan.
```sql
SELECT 
  (SELECT jumlah FROM hewan WHERE nama = 'Buaya Sinyulong') - 
  (SELECT jumlah FROM hewan WHERE nama = 'Kucing Hutan') AS selisih_jumlah_hewan;
```

#### Hasil Query:
| selisih_jumlah_hewan |
| -------------------- |
| 10                   |

### Latihan:
1. Kalikan harga tiket untuk anak-anak pada hari Selasa dengan 3.
2. Jumlahkan total lama bekerja dari petugas Budi dan Rudi.