## GROUP BY  
`GROUP BY` digunakan untuk mengelompokkan baris dengan nilai yang sama ke dalam kelompok. Ini sering digunakan bersama dengan fungsi agregat seperti `COUNT`, `SUM`, `AVG`, dll. Misalnya, jika kita ingin menghitung jumlah petugas berdasarkan tugas mereka, kita bisa menggunakan `GROUP BY`.

### Sintaks:
```sql
SELECT kolom, fungsi_agregasi(kolom) FROM nama_tabel GROUP BY kolom;
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
Hitung jumlah petugas berdasarkan tugas.
```sql
SELECT tugas, COUNT(*) AS jumlah_petugas FROM petugas GROUP BY tugas;
```

#### Hasil Query:
| tugas            | jumlah_petugas |
| ---------------- | -------------- |
| Pemandu Wisata   | 1              |
| Penjaga Gerbang  | 1              |
| Perawat Hewan    | 1              |
| Teknisi Fasilitas| 1              |
| Administrasi     | 1              |

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
Hitung total harga berdasarkan hari di tabel biaya.
```sql
SELECT hari, SUM(harga) AS total_harga FROM biaya GROUP BY hari;
```

#### Hasil Query:
| hari   | total_harga |
| ------ | ----------- |
| Senin  | 50000       |
| Selasa | 30000       |
| Rabu   | 40000       |
| Kamis  | 55000       |
| Jumat  | 45000       |

### Latihan:
1. Hitung jumlah fasilitas berdasarkan `status_kelayakan`.
2. Hitung total jumlah tumbuhan berdasarkan `status_konservasi`.
