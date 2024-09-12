## IN  
IN digunakan dalam klausa WHERE untuk menentukan beberapa nilai dalam satu pernyataan. Daripada menggunakan beberapa kondisi OR, kita bisa menyederhanakannya dengan IN. Misalnya, jika kita ingin menampilkan petugas yang tugasnya adalah "Pemandu Wisata" atau "Penjaga Gerbang", kita bisa menggunakan IN.

### Sintaks:
```sql
SELECT kolom FROM nama_tabel WHERE kolom IN (nilai1, nilai2, ...);
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
Pilih nama petugas yang bertugas sebagai Pemandu Wisata atau Teknisi Fasilitas.
```sql
SELECT nama FROM petugas WHERE tugas IN ('Pemandu Wisata', 'Teknisi Fasilitas');
```

#### Hasil Query:
| nama |
| ---- |
| Budi |
| Wati |

### Database 2

Berikut adalah data dari tabel Hewan yang akan digunakan pada contoh 2:

**Tabel Hewan**
| id  | nama                 | nama_latin              | jumlah | makanan         | habitat        | lama_hidup (tahun) | status_konservasi |
|-----|----------------------|-------------------------|--------|-----------------|----------------|-------------------|-------------------|
| 1   | Bekantan             | Nasalis larvatus        | 120    | Daun, Buah      | Hutan Mangrove | 13                | Terancam Punah     |
| 2   | Orangutan Kalimantan | Pongo pygmaeus          | 90     | Buah            | Hutan Hujan    | 45                | Terancam Punah     |
| 3   | Buaya Sinyulong      | Tomistoma schlegelii    | 40     | Ikan            | Sungai         | 70                | Terancam Punah     |
| 4   | Kucing Hutan         | Prionailurus bengalensis| 30     | Daging          | Hutan Tropis   | 15                | Dilindungi         |
| 5   | Rusa Sambar          | Rusa unicolor           | 60     | Rumput          | Padang Rumput  | 20                | Dilindungi         |


### Contoh 2:
Pilih data hewan yang memiliki habitat di Hutan Tropis atau Sungai.
```sql
SELECT nama, habitat FROM hewan WHERE habitat IN ('Hutan Tropis', 'Sungai');
```

#### Hasil Query:
| nama           | habitat       |
| -------------- | ------------- |
| Buaya Sinyulong | Sungai        |
| Kucing Hutan    | Hutan Tropis  |

### Latihan:
1. Pilih data wisatawan yang hanya datang pada hari Senin dan Jumat.
2. Pilih fasilitas yang memiliki status kelayakan Layak atau Tidak Layak.
