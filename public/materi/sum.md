# SUM  
SUM digunakan untuk menjumlahkan nilai numerik dalam suatu kolom. Misalnya, jika kita ingin menghitung total harga dari semua tiket yang terjual, kita bisa menggunakan SUM pada kolom harga di tabel biaya.

## Sintaks:
SELECT SUM(kolom) FROM nama_tabel;

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

## Contoh 1:
Hitung total harga dari semua baris pada tabel biaya.
```sql
SELECT SUM(harga) FROM biaya;
```
### Hasil Query:

|SUM(harga)|
|----------|
|220000    |

### Database 2

Berikut adalah data dari tabel Tumbuhan yang akan digunakan pada contoh 2:

**Tabel Tumbuhan**
| id  | nama           | nama_latin              | habitat      | jumlah | status_konservasi |
|-----|----------------|-------------------------|--------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis | 150    | Terancam Punah     |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis | 200    | Dilindungi         |
| 3   | Anggrek Hitam  | Coelogyne pandurata      | Tepi Hutan   | 100    | Terancam Punah     |
| 4   | Bakau          | Rhizophora apiculata     | Pesisir      | 500    | Dilindungi         |
| 5   | Ramin          | Gonystylus bancanus      | Hutan Rawa   | 80     | Langka             |

## Contoh 2:
Hitung total jumlah pada tabel tumbuhan.
```sql
SELECT SUM(jumlah) FROM tumbuhan;
```
### Hasil Query:

|SUM(jumlah)|
|-----------|
|1030       |

## Latihan:
1. Hitung total lama_hidup dari semua hewan di tabel hewan.
2. Hitung total jumlah fasilitas di tabel fasilitas.