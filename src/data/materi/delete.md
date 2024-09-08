## SQL DELETE

Pernyataan SQL `DELETE` digunakan untuk menghapus data dari tabel.

Penulisan Query:

```sql
DELETE FROM nama_tabel WHERE kondisi;
```
- nama_tabel: Nama tabel dari mana data akan dihapus.
- kondisi: Kondisi yang harus dipenuhi untuk menghapus baris yang sesuai.

Berikut ini merupakan tabel Pelanggan yang digunakan dalam contoh yang akan diberikan:

#### Tabel Pelanggan

| IDPelanggan | NamaPelanggan                         | NamaKontak      | Alamat                     | Kota        | KodePos | Negara |
|-------------|--------------------------------------|-----------------|----------------------------|-------------|---------|--------|
| 1           | Alfreds Futterkiste                  | Maria Anders    | Obere Str. 57              | Berlin      | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados  | Ana Trujillo    | Avda. de la Constitución 2222 | México D.F.| 5021    | Mexico |
| 3           | Antonio Moreno Taquería             | Antonio Moreno  | Mataderos 2312             | México D.F. | 5023    | Mexico |
| 4           | Around the Horn                      | Thomas Hardy    | 120 Hanover Sq.            | London      | WA1 1DP | UK     |
| 5           | Berglunds snabbköp                    | Christina Berglund | Berguvsvägen 8          | Luleå       | S-958 22| Sweden |

### Contoh SQL DELETE

Menghapus Baris Tertentu
---
Pernyataan SQL berikut ini menghapus pelanggan "Alfreds Futterkiste" dari tabel `Pelanggan`:

   ```sql
   DELETE FROM Pelanggan WHERE NamaPelanggan = 'Alfreds Futterkiste';
   ```

Setelah pernyataan ini dijalankan, tabel `Pelanggan` akan terlihat seperti berikut:

   | IDPelanggan | NamaPelanggan                         | NamaKontak      | Alamat                     | Kota        | KodePos | Negara |
   |-------------|--------------------------------------|-----------------|----------------------------|-------------|---------|--------|
   | 2           | Ana Trujillo Emparedados y helados  | Ana Trujillo    | Avda. de la Constitución 2222 | México D.F.| 5021    | Mexico |
   | 3           | Antonio Moreno Taquería             | Antonio Moreno  | Mataderos 2312             | México D.F. | 5023    | Mexico |
   | 4           | Around the Horn                      | Thomas Hardy    | 120 Hanover Sq.            | London      | WA1 1DP | UK     |
   | 5           | Berglunds snabbköp                    | Christina Berglund | Berguvsvägen 8          | Luleå       | S-958 22| Sweden |

Menghapus Semua Baris
---
Untuk menghapus semua baris dalam tabel tanpa menghapus struktur tabel, gunakan pernyataan berikut:

   ```sql
   DELETE FROM Pelanggan;
   ```

Menghapus Tabel
---

Untuk menghapus tabel sepenuhnya, gunakan pernyataan `DROP TABLE`:

   ```sql
   DROP TABLE Pelanggan;
   ```

