## SUBQUERY  
Subquery (atau sub-kueri) adalah kueri di dalam kueri lain. Subquery biasanya digunakan dalam klausa `SELECT`, `FROM`, atau `WHERE` untuk memberikan hasil sementara yang kemudian digunakan oleh kueri utama. Subquery dapat menghasilkan satu nilai (skalar), satu baris, atau satu set hasil.

### Jenis Subquery:
- **Single-row Subquery:** Mengembalikan satu baris hasil.
- **Multi-row Subquery:** Mengembalikan beberapa baris hasil.
- **Nested Subquery:** Subquery di dalam subquery lainnya.

### Sintaks:
```sql
SELECT kolom1, kolom2 
FROM nama_tabel 
WHERE kolom1 = (SELECT kolom FROM tabel_lain WHERE kondisi);
```

### Database 1

Berikut adalah data dari tabel Petugas yang akan digunakan pada contoh 1 dan 3:

**Tabel Petugas**

| id | nama | tugas                | lama_bekerja (tahun) |
|----|------|----------------------|----------------------|
| 1  | Budi | Pemandu Wisata       | 5                    |
| 2  | Siti | Penjaga Gerbang      | 3                    |
| 3  | Agus | Perawat Hewan        | 7                    |
| 4  | Wati | Teknisi Fasilitas    | 4                    |
| 5  | Rudi | Administrasi         | 6                    |

### Contoh 1: Single-row Subquery
Cari nama petugas yang memiliki lama bekerja paling lama.
```sql
SELECT nama, lama_bekerja 
FROM petugas 
WHERE lama_bekerja = (SELECT MAX(lama_bekerja) FROM petugas);
```

#### Hasil Query:
| nama | lama_bekerja |
| ---- | ------------ |
| Agus | 7            |

### Database 2

Berikut adalah data dari tabel Fasilitas yang akan digunakan pada contoh 2:

**Tabel Fasilitas**

| id | nama             | jumlah | jenis             | status_kelayakan |
|----|------------------|--------|-------------------|------------------|
| 1  | Tempat Istirahat | 10     | Umum              | Layak            |
| 2  | Toilet Umum      | 15     | Umum              | Layak            |
| 3  | Jembatan Gantung | 1      | Fasilitas Khusus  | Tidak Layak      |
| 4  | Tempat Sampah    | 20     | Umum              | Layak            |
| 5  | Menara Pengamat  | 2      | Fasilitas Khusus  | Layak            |

### Contoh 2: Multi-row Subquery
Cari fasilitas yang memiliki jumlah lebih dari rata-rata jumlah fasilitas.
```sql
SELECT nama, jumlah 
FROM fasilitas 
WHERE jumlah > (SELECT AVG(jumlah) FROM fasilitas);
```

#### Hasil Query:
| nama          | jumlah |
| ------------- | ------ |
| Toilet Umum   | 15     |
| Tempat Sampah | 20     |

### Contoh 3: Subquery di dalam SELECT
Tampilkan nama petugas dan lama bekerjanya dibandingkan dengan rata-rata lama bekerja petugas lainnya.
```sql
SELECT nama, lama_bekerja, 
(SELECT AVG(lama_bekerja) FROM petugas) AS rata_rata_lama_bekerja 
FROM petugas;
```

#### Hasil Query:
| nama  | lama_bekerja | rata_rata_lama_bekerja |
| ----- | ------------ | ---------------------- |
| Budi  | 5            | 5.0                    |
| Siti  | 3            | 5.0                    |
| Agus  | 7            | 5.0                    |
| Wati  | 4            | 5.0                    |
| Rudi  | 6            | 5.0                    |

### Database 3

Berikut adalah data dari tabel Tumbuhan yang akan digunakan pada contoh 4:

**Tabel Tumbuhan**
| id  | nama           | nama_latin              | habitat      | jumlah | status_konservasi |
|-----|----------------|-------------------------|--------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis | 150    | Terancam Punah     |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis | 200    | Dilindungi         |
| 3   | Anggrek Hitam  | Coelogyne pandurata      | Tepi Hutan   | 100    | Terancam Punah     |
| 4   | Bakau          | Rhizophora apiculata     | Pesisir      | 500    | Dilindungi         |
| 5   | Ramin          | Gonystylus bancanus      | Hutan Rawa   | 80     | Langka             |

### Contoh 4: Subquery di dalam WHERE dengan Multi-row
Tampilkan nama tumbuhan yang jumlahnya lebih besar dari jumlah Anggrek Hitam.
```sql
SELECT nama, jumlah 
FROM tumbuhan 
WHERE jumlah > (SELECT jumlah FROM tumbuhan WHERE nama = 'Anggrek Hitam');
```

#### Hasil Query:
| nama         | jumlah |
| ------------ | ------ |
| Pohon Ulin   | 150    |
| Meranti Merah| 200    |
| Bakau        | 500    |

### Latihan:
1. Cari hari yang memiliki harga tiket lebih besar dari rata-rata harga tiket semua hari.
2. Cari hewan yang memiliki lama hidup lebih besar dari rata-rata lama hidup semua hewan.
