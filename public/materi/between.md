## Operator BETWEEN

Operator **BETWEEN** digunakan untuk memilih nilai dalam rentang tertentu, baik berupa angka, teks, maupun tanggal. Operator ini mempermudah pencarian data yang berada di antara dua nilai tertentu.

### Penulisan Query:
```sql
SELECT nama_kolom
FROM nama_tabel
WHERE nama_kolom BETWEEN nilai1 AND nilai2;
```

- **nama_kolom**: Nama kolom yang ingin dipilih datanya.
- **nama_tabel**: Nama tabel yang menjadi sumber data.
- **nilai1** dan **nilai2**: Rentang nilai yang akan dicari.

### Tabel Pengguna

Berikut adalah contoh data dari tabel **Pengguna** yang akan digunakan dalam penjelasan:

| ID_Pelanggan | NamaPelanggan                      | NamaKontak        | Alamat                       | Kota        | KodePos  | Negara  |
|--------------|------------------------------------|-------------------|------------------------------|-------------|----------|---------|
| 1            | Alfreds Futterkiste                | Maria Anders      | Obere Str. 57                | Berlin      | 12209    | Germany |
| 2            | Ana Trujillo Emparedados y Helados | Ana Trujillo      | Avda. de la Constitución 2222 | México D.F. | 5021     | Mexico  |
| 3            | Antonio Moreno Taquería            | Antonio Moreno    | Mataderos 2312               | México D.F. | 5023     | Mexico  |
| 4            | Around the Horn                    | Thomas Hardy      | 120 Hanover Sq.              | London      | WA1 1DP  | UK      |
| 5            | Berglunds Snabbköp                 | Christina Berglund| Berguvsvägen 8               | Luleå       | S-958 22 | Sweden  |

---

### 1. Memilih Nilai Menggunakan BETWEEN

Operator **BETWEEN** digunakan untuk memilih nilai yang berada dalam rentang yang ditentukan. Misalnya, kita ingin memilih semua pelanggan yang berada di antara **ID_Pelanggan** 2 dan 4.

#### Contoh:
```sql
SELECT *
FROM Pengguna
WHERE ID_Pelanggan BETWEEN 2 AND 4;
```

**Hasil:**

| ID_Pelanggan | NamaPelanggan                      | NamaKontak        | Alamat                       | Kota        | KodePos  | Negara  |
|--------------|------------------------------------|-------------------|------------------------------|-------------|----------|---------|
| 2            | Ana Trujillo Emparedados y Helados | Ana Trujillo      | Avda. de la Constitución 2222 | México D.F. | 5021     | Mexico  |
| 3            | Antonio Moreno Taquería            | Antonio Moreno    | Mataderos 2312               | México D.F. | 5023     | Mexico  |
| 4            | Around the Horn                    | Thomas Hardy      | 120 Hanover Sq.              | London      | WA1 1DP  | UK      |

Perintah ini menampilkan semua pelanggan dengan **ID_Pelanggan** di antara 2 dan 4, termasuk nilai batasnya.

---

### 2. Menggunakan NOT BETWEEN

Operator **NOT BETWEEN** digunakan untuk memilih data yang berada di luar rentang nilai yang ditentukan.

#### Contoh:
```sql
SELECT *
FROM Pengguna
WHERE ID_Pelanggan NOT BETWEEN 2 AND 4;
```

**Hasil:**

| ID_Pelanggan | NamaPelanggan         | NamaKontak        | Alamat          | Kota   | KodePos | Negara  |
|--------------|-----------------------|-------------------|-----------------|--------|---------|---------|
| 1            | Alfreds Futterkiste    | Maria Anders      | Obere Str. 57   | Berlin | 12209   | Germany |
| 5            | Berglunds Snabbköp     | Christina Berglund| Berguvsvägen 8  | Luleå  | S-958 22| Sweden  |

Perintah ini menampilkan semua pelanggan dengan **ID_Pelanggan** di luar rentang 2 hingga 4.

---

### 3. BETWEEN dengan Kondisi Tambahan (IN)

Kombinasi **BETWEEN** dan **IN** dapat digunakan untuk memilih data dalam rentang yang ditentukan dengan kondisi tambahan, seperti memilih data berdasarkan kategori tertentu.

#### Contoh:
Misalkan Anda ingin memilih pelanggan dengan **ID_Pelanggan** di antara 2 dan 4 serta kota yang berada di **Mexico** atau **UK**.

```sql
SELECT *
FROM Pengguna
WHERE ID_Pelanggan BETWEEN 2 AND 4
AND Kota IN ('México D.F.', 'London');
```

**Hasil:**

| ID_Pelanggan | NamaPelanggan                      | NamaKontak        | Alamat                       | Kota        | KodePos  | Negara  |
|--------------|------------------------------------|-------------------|------------------------------|-------------|----------|---------|
| 2            | Ana Trujillo Emparedados y Helados | Ana Trujillo      | Avda. de la Constitución 2222 | México D.F. | 5021     | Mexico  |
| 4            | Around the Horn                    | Thomas Hardy      | 120 Hanover Sq.              | London      | WA1 1DP  | UK      |

Perintah ini menampilkan semua pelanggan dengan **ID_Pelanggan** antara 2 dan 4 yang berasal dari kota **México D.F.** atau **London**.

---

### 4. Menggunakan BETWEEN dengan Teks dan ORDER BY

Operator **BETWEEN** juga dapat digunakan untuk memilih data teks yang berada dalam rentang alfabetis tertentu. Data yang dipilih dapat diurutkan secara alfabetis menggunakan **ORDER BY**.

#### Contoh:
Memilih pelanggan dengan **NamaPelanggan** secara alfabetis antara 'Alfreds Futterkiste' dan 'Berglunds Snabbköp', kemudian mengurutkannya berdasarkan **NamaPelanggan**.

```sql
SELECT *
FROM Pengguna
WHERE NamaPelanggan BETWEEN 'Alfreds Futterkiste' AND 'Berglunds Snabbköp'
ORDER BY NamaPelanggan;
```

**Hasil:**

| ID_Pelanggan | NamaPelanggan         | NamaKontak        | Alamat          | Kota   | KodePos | Negara  |
|--------------|-----------------------|-------------------|-----------------|--------|---------|---------|
| 1            | Alfreds Futterkiste    | Maria Anders      | Obere Str. 57   | Berlin | 12209   | Germany |
| 5            | Berglunds Snabbköp     | Christina Berglund| Berguvsvägen 8  | Luleå  | S-958 22| Sweden  |

Perintah ini akan memilih data pelanggan berdasarkan nama yang berada dalam rentang alfabetis yang ditentukan dan mengurutkannya berdasarkan nama pelanggan.

---

Dengan materi ini, Anda dapat memahami cara menggunakan operator **BETWEEN** untuk memilih data dalam rentang yang ditentukan, baik berupa angka, teks, atau kondisi gabungan.