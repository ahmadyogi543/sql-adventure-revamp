## LIMIT  
LIMIT digunakan untuk membatasi jumlah baris yang ditampilkan dalam hasil kueri. Ini sangat berguna ketika kita hanya ingin melihat sebagian kecil dari data, seperti 5 baris pertama dari tabel. Misalnya, jika kita ingin menampilkan 3 petugas pertama dari tabel petugas, kita bisa menggunakan LIMIT.

### Sintaks:
```sql
SELECT kolom FROM nama_tabel LIMIT jumlah_baris;
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
Tampilkan 3 baris pertama dari tabel biaya.
```sql
SELECT * FROM biaya LIMIT 3;
```

#### Hasil Query:
| id  | hari   | wisatawan  | harga |
| --- | ------ | ---------- | ----- |
| 1   | Senin  | Dewasa     | 50000 |
| 2   | Selasa | Anak-Anak  | 30000 |
| 3   | Rabu   | Pelajar    | 40000 |

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

### Contoh 2:
Tampilkan 2 baris pertama dari tabel tumbuhan.
```sql
SELECT * FROM tumbuhan LIMIT 2;
```

#### Hasil Query:
| id  | nama          | nama_latin          | habitat      | jumlah | status_konservasi |
| --- | ------------- | ------------------- | ------------ | ------ | ----------------- |
| 1   | Pohon Ulin    | Eusideroxylon zwageri| Hutan Tropis | 150    | Terancam Punah    |
| 2   | Meranti Merah | Shorea leprosula    | Hutan Tropis | 200    | Dilindungi        |

### Latihan:
1. Tampilkan 4 baris pertama dari tabel petugas.
2. Tampilkan 1 baris pertama dari tabel fasilitas.
