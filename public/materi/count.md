# COUNT 
COUNT adalah fungsi agregat yang digunakan untuk menghitung jumlah baris dalam hasil kueri. 
Misalnya, jika kamu ingin mengetahui berapa banyak petugas yang terdaftar dalam tabel petugas, kamu bisa menggunakan fungsi COUNT.

## Sintaks:
SELECT COUNT(kolom) FROM nama_tabel;

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

## Contoh 1:
Hitung jumlah baris di tabel petugas.
```sql
SELECT COUNT(*) FROM petugas;
```
### Hasil Query:
|COUNT(*)  |
|----------|
|5         |

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

## Contoh 2:
Hitung jumlah fasilitas yang berstatus Layak pada tabel fasilitas.
```sql
SELECT COUNT(*) FROM fasilitas WHERE status_kelayakan = 'Layak';
```
### Hasil Query:
|COUNT(*)  |
|----------|
|4         |

## Latihan:
1. Hitung jumlah hewan yang berstatus konservasi "Terancam Punah".
2. Hitung jumlah tumbuhan yang memiliki habitat di "Hutan Tropis".