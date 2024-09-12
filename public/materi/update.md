## UPDATE  
`UPDATE` adalah perintah SQL yang digunakan untuk mengubah atau memperbarui data yang sudah ada di dalam tabel. Misalnya, jika ada perubahan data, seperti promosi petugas atau perubahan jumlah fasilitas, kita bisa menggunakan perintah `UPDATE` untuk memperbarui kolom tertentu.

### Sintaks:
```sql
UPDATE nama_tabel SET kolom1 = nilai1 WHERE kondisi;
```

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
Perbarui jumlah **Jembatan Gantung** pada tabel **fasilitas** menjadi 2.
```sql
UPDATE fasilitas SET jumlah = 2 WHERE nama = 'Jembatan Gantung';
```

#### Hasil Tabel **fasilitas** setelah query:
| id  | nama            | jumlah | jenis             | status_kelayakan |
| --- | --------------- | ------ | ----------------- | ---------------- |
| 1   | Tempat Istirahat | 10     | Umum              | Layak            |
| 2   | Toilet Umum      | 15     | Umum              | Layak            |
| 3   | Jembatan Gantung | 2      | Fasilitas Khusus  | Tidak Layak      |
| 4   | Tempat Sampah    | 20     | Umum              | Layak            |
| 5   | Menara Pengamat  | 2      | Fasilitas Khusus  | Layak            |

### Database 2

Berikut adalah data dari tabel Petugas yang akan digunakan pada contoh 2:

**Tabel Petugas**

| id | nama | tugas                | lama_bekerja (tahun) |
|----|------|----------------------|----------------------|
| 1  | Budi | Pemandu Wisata       | 5                    |
| 2  | Siti | Penjaga Gerbang      | 3                    |
| 3  | Agus | Perawat Hewan        | 7                    |
| 4  | Wati | Teknisi Fasilitas    | 4                    |
| 5  | Rudi | Administrasi         | 6                    |

### Contoh 2:
Perbarui lama bekerja **Agus** di tabel **petugas** menjadi 8 tahun.
```sql
UPDATE petugas SET lama_bekerja = 8 WHERE nama = 'Agus';
```

#### Hasil Tabel **petugas** setelah query:
| id  | nama  | tugas             | lama_bekerja |
| --- | ----- | ----------------- | ------------ |
| 1   | Budi  | Pemandu Wisata    | 5            |
| 2   | Siti  | Penjaga Gerbang   | 3            |
| 3   | Agus  | Perawat Hewan     | 8            |
| 4   | Wati  | Teknisi Fasilitas | 4            |
| 5   | Rudi  | Administrasi      | 6            |

### Latihan:
1. Perbarui **harga** dari tabel **biaya** yang berhubungan dengan **Pelajar** menjadi 45.000.
2. Perbarui **status_kelayakan** pada tabel **fasilitas** menjadi 'Layak' untuk semua fasilitas yang berjenis **Fasilitas Khusus**.