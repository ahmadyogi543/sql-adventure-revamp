## Fungsi LIMIT

Fungsi **LIMIT** dalam SQL digunakan untuk membatasi jumlah baris yang dikembalikan oleh pernyataan `SELECT`. Ini berguna saat Anda hanya ingin mengambil sebagian data dari tabel, misalnya, untuk menampilkan data dalam paginasi atau mengambil sampel data.

### Penulisan Query

```sql
SELECT * 
FROM nama_tabel 
LIMIT jumlah_baris;
```

- **nama_tabel**: Nama tabel dari mana data akan diambil.
- **jumlah_baris**: Jumlah baris yang ingin ditampilkan dari hasil query.

### Contoh Database

Berikut adalah contoh data dari tabel **Pelanggan** yang akan digunakan:

#### Tabel Pelanggan

| IDPelanggan | NamaPelanggan                       | ContactName   | Alamat                    | Kota         | KodePos | Negara |
|-------------|-------------------------------------|---------------|---------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste                 | Maria Anders  | Obere Str. 57             | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo  | Avda. de la Constitución 2222 | México D.F. | 5021    | Mexico |
| 3           | Antonio Moreno Taquería            | Antonio Moreno | Mataderos 2312            | México D.F.  | 5023    | Mexico |
| 4           | Around the Horn                     | Thomas Hardy  | 120 Hanover Sq.           | London       | WA1 1DP | UK     |
| 5           | Berglunds snabbköp                  | Christina Berglund | Berguvsvägen 8         | Luleå        | S-958 22| Sweden |

---

### 1. Mengambil Data Teratas dengan LIMIT

Operator **LIMIT** digunakan untuk mengambil sejumlah baris teratas dari hasil query. Ini berguna untuk menampilkan data yang relevan atau sampel data.

#### Contoh:
Misalkan Anda ingin mengambil 3 data pertama dari tabel **Pelanggan**.

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan 
LIMIT 3;
```

**Hasil:**

| IDPelanggan | NamaPelanggan                       | ContactName   | Alamat                    | Kota         | KodePos | Negara |
|-------------|-------------------------------------|---------------|---------------------------|--------------|---------|--------|
| 1           | Alfreds Futterkiste                 | Maria Anders  | Obere Str. 57             | Berlin       | 12209   | Germany|
| 2           | Ana Trujillo Emparedados y helados | Ana Trujillo  | Avda. de la Constitución 2222 | México D.F. | 5021    | Mexico |
| 3           | Antonio Moreno Taquería            | Antonio Moreno | Mataderos 2312            | México D.F.  | 5023    | Mexico |

Query ini mengembalikan 3 baris pertama dari tabel **Pelanggan**, yaitu data pelanggan dengan ID 1, 2, dan 3.

---

Dengan materi ini, Anda dapat memahami cara menggunakan fungsi **LIMIT** dalam SQL untuk membatasi jumlah baris yang dikembalikan oleh pernyataan `SELECT`. Ini membantu dalam pengelolaan dan penampilan data secara efisien, terutama ketika bekerja dengan tabel yang memiliki banyak data.