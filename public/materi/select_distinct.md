## DISTINCT

Perintah `DISTINCT` digunakan bersama dengan `SELECT` untuk menghilangkan duplikasi data dalam hasil. Jika ada nilai yang muncul lebih dari sekali di dalam satu kolom, `DISTINCT` akan memastikan bahwa hanya satu nilai unik yang ditampilkan. Misalnya, jika kamu memiliki tabel wisatawan yang menyimpan jenis wisatawan, seperti "Dewasa", "Anak-anak", dan beberapa entri memiliki nilai yang sama, `DISTINCT` akan menghapus duplikat tersebut dan hanya menampilkan nilai unik.

### Sintaks:
```sql
SELECT DISTINCT kolom1 FROM nama_tabel;
```
### Database 1

Berikut adalah data dari tabel Tumbuhan yang akan digunakan pada contoh 1:

**Tabel Tumbuhan**
| id  | nama           | nama_latin              | habitat      | jumlah | status_konservasi |
|-----|----------------|-------------------------|--------------|--------|-------------------|
| 1   | Pohon Ulin     | Eusideroxylon zwageri    | Hutan Tropis | 150    | Terancam Punah     |
| 2   | Meranti Merah  | Shorea leprosula         | Hutan Tropis | 200    | Dilindungi         |
| 3   | Anggrek Hitam  | Coelogyne pandurata      | Tepi Hutan   | 100    | Terancam Punah     |
| 4   | Bakau          | Rhizophora apiculata     | Pesisir      | 500    | Dilindungi         |
| 5   | Ramin          | Gonystylus bancanus      | Hutan Rawa   | 80     | Langka             |


### Contoh 1:
Ambil data unik dari kolom `habitat` di tabel `tumbuhan`.
```sql
SELECT DISTINCT habitat FROM tumbuhan;
```

**Hasil:**
| habitat       |
|---------------|
| Hutan Tropis  |
| Tepi Hutan    |
| Pesisir       |
| Hutan Rawa    |

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
Ambil data unik dari kolom `status_konservasi` di tabel `hewan`.
```sql
SELECT DISTINCT status_konservasi FROM hewan;
```

**Hasil:**
| status_konservasi |
|-------------------|
| Terancam Punah    |
| Dilindungi        |

### Latihan:
1. Ambil data unik dari kolom `makanan` di tabel `hewan`.
2. Ambil data unik dari kolom `status_konservasi` di tabel `tumbuhan`.