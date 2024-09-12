# AVERAGE / AVG  
AVG adalah fungsi agregat yang digunakan untuk menghitung nilai rata-rata dari suatu kolom numerik. Misalnya, jika kita ingin mengetahui rata-rata harga tiket, kita bisa menggunakan fungsi AVG.

## Sintaks:
SELECT AVG(kolom) FROM nama_tabel;

### Database 1

Berikut adalah data dari tabel Biaya yang akan digunakan pada contoh 1:

**Tabel Biaya**

| id  | hari   | wisatawan   | harga |
| --- | ------ | ----------- | ----- |
| 1   | Senin  | Dewasa      | 50000 |
| 2   | Selasa | Anak-Anak   | 30000 |
| 3   | Rabu   | Pelajar     | 40000 |
| 4   | Kamis  | Dewasa      | 55000 |
| 5   | Jumat  | Lansia      | 45000 |

## Contoh 1:
Hitung rata-rata harga dari tabel biaya.
```sql
SELECT AVG(harga) FROM biaya;
```
### Hasil Query:
|AVG(harga)|
|----------|
|44000     |

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

## Contoh 2:
Hitung rata-rata jumlah pada tabel hewan.
```sql
SELECT AVG(jumlah) FROM hewan;
```
### Hasil Query:
|AVG(jumlah)|
|-----------|
|68         |


## Latihan:
1. Hitung rata-rata lama_bekerja pada tabel petugas.
2. Hitung rata-rata jumlah pada tabel tumbuhan.
