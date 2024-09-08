## SQL Update

Pernyataan `UPDATE` digunakan untuk mengubah catatan yang ada dalam suatu tabel.

Penulisan Query:

```sql
UPDATE nama_tabel 
SET column1 = nilai1, column2 = nilai2 
WHERE condition;
```
- nama_tabel: Nama tabel yang ingin Anda perbarui.
- kolom1, kolom2: Nama kolom yang ingin Anda perbarui.
- nilai1, nilai2: Nilai baru yang akan diterapkan ke kolom tersebut.
- kondisi: Kondisi yang menentukan baris mana yang akan diperbarui.

**Catatan Penting:** Berhati-hatilah saat ingin memperbarui data dalam tabel! Perhatikan penggunaan `WHERE` dalam pernyataan `UPDATE`. `WHERE` tersebut menentukan data mana saja yang harus diperbarui. Jika Anda menghilangkan `WHERE`, semua data dalam tabel akan diperbarui!

Berikut ini merupakan tabel Pelanggan yang digunakan dalam contoh yang akan diberikan:

#### Tabel Pelanggan

| IDPelanggan | NamaPelanggan                                | NamaKontak       | Alamat                         | Kota         | KodePos | Negara |
|-------------|----------------------------------------------|------------------|--------------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste                         | Maria Anders     | Obere Str. 57                  | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados          | Ana Trujillo     | Avda. de la Constitución 2222  | México D.F.  | 05021   | Mexico |
| 3           | Antonio Moreno Taquería                     | Antonio Moreno   | Mataderos 2312                 | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn                             | Thomas Hardy     | 120 Hanover Sq.                | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp                          | Christina Berglund | Berguvsvägen 8               | Luleå        | S-958 22| Sweden |

Contoh:

Pernyataan SQL berikut akan memperbarui `NamaKontak` menjadi "Juan" untuk semua data yang negaranya adalah "Mexico":

```sql
UPDATE Pelanggan 
SET NamaKontak='Juan' 
WHERE Negara='Mexico';
```

Setelah query berhasil dijalankan, maka data pada tabel Pelanggan akan terperbarui. Berikut adalah hasilnya:

| IDPelanggan | NamaPelanggan                                | NamaKontak | Alamat                         | Kota         | KodePos | Negara |
|-------------|----------------------------------------------|------------|--------------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste                         | Maria Anders| Obere Str. 57                  | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados          | Juan       | Avda. de la Constitución 2222  | México D.F.  | 05021   | Mexico |
| 3           | Antonio Moreno Taquería                     | Juan       | Mataderos 2312                 | México D.F.  | 05023   | Mexico |
| 4           | Around the Horn                             | Thomas Hardy| 120 Hanover Sq.                | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp                          | Christina Berglund | Berguvsvägen 8               | Luleå        | S-958 22| Sweden |