## Fungsi MIN dan MAX

Fungsi agregat `MIN` dan `MAX` digunakan untuk menemukan nilai terkecil (minimum) dan terbesar (maksimum) dalam suatu kolom. Fungsi ini berguna ketika kamu ingin mengetahui nilai ekstrem dalam dataset.

### Sintaks
```sql
SELECT MIN(kolom) FROM nama_tabel;
SELECT MAX(kolom) FROM nama_tabel;
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


**Contoh 1:**
Cari harga minimum pada tabel biaya.
```sql
SELECT MIN(harga) FROM biaya;
```
**Hasil Query:**

|MIN(harga)|
|----------|
|30000     |


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

**Contoh 2:**
Cari jumlah maksimum pada tabel fasilitas.
```sql
SELECT MAX(jumlah) FROM fasilitas;
```
**Hasil Query:**

|MAX(jumlah)|
|-----------|
|20         |


### Latihan
1. Cari `lama_hidup` minimum pada tabel `hewan`.
2. Cari `jumlah` maksimum pada tabel `tumbuhan`.

