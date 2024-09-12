## DELETE  
`DELETE` adalah perintah SQL yang digunakan untuk menghapus data dari tabel. Perintah ini sering dilengkapi dengan klausa `WHERE` untuk menentukan baris mana yang ingin dihapus. Jika klausa `WHERE` tidak digunakan, semua baris dalam tabel akan dihapus.

### Sintaks:
```sql
DELETE FROM nama_tabel WHERE kondisi;
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
Hapus data **Rudi** dari tabel **petugas**.
```sql
DELETE FROM petugas WHERE nama = 'Rudi';
```

#### Hasil Tabel **petugas** setelah query:
| id  | nama  | tugas             | lama_bekerja |
| --- | ----- | ----------------- | ------------ |
| 1   | Budi  | Pemandu Wisata    | 5            |
| 2   | Siti  | Penjaga Gerbang   | 3            |
| 3   | Agus  | Perawat Hewan     | 8            |
| 4   | Wati  | Teknisi Fasilitas | 4            |

**Petugas** dengan nama ‘Rudi’ telah terhapus dari tabel.

### Database 2

Berikut adalah data dari tabel Biaya yang akan digunakan pada contoh 2:

**Tabel Biaya**

| id | hari  | wisatawan | harga  |
|----|-------|-----------|--------|
| 1  | Senin | Dewasa    | 50000  |
| 2  | Selasa| Anak-Anak | 30000  |
| 3  | Rabu  | Pelajar   | 40000  |
| 4  | Kamis | Dewasa    | 55000  |
| 5  | Jumat | Lansia    | 45000  |

### Contoh 2:
Hapus data pada tabel **biaya** untuk wisatawan **Lansia**.
```sql
DELETE FROM biaya WHERE wisatawan = 'Lansia';
```

#### Hasil Tabel **biaya** setelah query:
| id  | hari  | wisatawan  | harga |
| --- | ----- | ---------- | ----- |
| 1   | Senin | Dewasa     | 50000 |
| 2   | Selasa| Anak-Anak  | 30000 |
| 3   | Rabu  | Pelajar    | 40000 |
| 4   | Kamis | Dewasa     | 55000 |

**Biaya** dengan jenis wisatawan ‘Lansia’ telah terhapus dari tabel.

### Latihan:
1. Hapus data pada tabel **tumbuhan** yang memiliki **status_konservasi** 'Langka'.
2. Hapus data dari tabel **hewan** di mana **jumlah** hewan kurang dari 50.
