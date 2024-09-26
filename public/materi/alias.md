## ALIAS  
ALIAS digunakan untuk memberikan nama sementara pada kolom atau tabel dalam kueri SQL. Ini berguna ketika kita ingin menampilkan hasil dengan nama kolom yang lebih mudah dipahami atau saat bekerja dengan beberapa tabel yang memiliki nama kolom yang sama. Misalnya, kita bisa memberi alias pada kolom "nama" menjadi "Nama Petugas".

### Sintaks:
```sql
SELECT kolom AS alias_nama FROM nama_tabel;
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
Berikan alias **Harga Tiket** untuk kolom harga pada tabel biaya.
```sql
SELECT harga AS 'Harga Tiket' FROM biaya;
```

#### Hasil Query:
| Harga Tiket |
| ----------- |
| 50000       |
| 30000       |
| 40000       |
| 55000       |
| 45000       |

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
Berikan alias **Petugas** untuk kolom nama pada tabel petugas.
```sql
SELECT nama AS 'Petugas', tugas FROM petugas;
```

#### Hasil Query:
| Petugas | tugas            |
| ------- | ---------------- |
| Budi    | Pemandu Wisata    |
| Siti    | Penjaga Gerbang   |
| Agus    | Perawat Hewan     |

### Latihan:
1. Berikan alias **Konservasi** untuk kolom `status_konservasi` pada tabel hewan.
2. Berikan alias **Fasilitas Umum** untuk kolom `nama` pada tabel fasilitas.
