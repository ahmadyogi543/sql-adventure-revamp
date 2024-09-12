## NULL VALUES

Di SQL, `NULL` merepresentasikan nilai yang tidak ada atau tidak diketahui. `NULL` bukan berarti nilai kosong atau nol; itu adalah keadaan di mana data tidak ada sama sekali. Misalnya, dalam tabel petugas, mungkin ada kolom alamat, tetapi tidak semua petugas memiliki alamat yang tercatat. Ketika data tidak ada, SQL akan mengisinya dengan `NULL`.

Saat bekerja dengan `NULL`, penting untuk dipahami bahwa `NULL` tidak bisa dibandingkan secara langsung dengan operator perbandingan seperti `=` atau `!=`. Sebagai gantinya, kita harus menggunakan `IS NULL` atau `IS NOT NULL` untuk memeriksa apakah suatu nilai adalah `NULL`.

### Sintaks:
```sql
SELECT kolom FROM nama_tabel WHERE kolom IS NULL;
SELECT kolom FROM nama_tabel WHERE kolom IS NOT NULL;
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
Cari data pada tabel `fasilitas` di mana kolom `status_kelayakan` bernilai `NULL`.
```sql
SELECT * FROM fasilitas WHERE status_kelayakan IS NULL;
```

**Hasil:**
(Tidak ada data, karena tidak ada nilai `NULL` di kolom `status_kelayakan` pada tabel `fasilitas`.)

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
Cari data pada tabel `petugas` di mana kolom `lama_bekerja` bernilai `NULL`.
```sql
SELECT * FROM petugas WHERE lama_bekerja IS NULL;
```

**Hasil:**
(Tidak ada data, karena tidak ada nilai `NULL` di kolom `lama_bekerja` pada tabel `petugas`.)

### Latihan:
1. Cari data pada tabel `biaya` di mana kolom `harga` bernilai `NULL`.
2. Cari data pada tabel `tumbuhan` di mana kolom `status_konservasi` bernilai `NULL`.
