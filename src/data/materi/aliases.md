## SQL Aliases

Alias dalam SQL digunakan untuk memberi nama sementara pada tabel atau kolom dalam tabel. Alias sering digunakan untuk membuat nama kolom lebih mudah dibaca atau untuk memberikan nama alternatif pada tabel. Alias hanya berlaku selama query tersebut dijalankan dan dibuat dengan menggunakan kata kunci **AS**.

### Penulisan Query
- **Alias untuk Kolom:**
  ```sql
  SELECT nama_kolom AS nama_alias 
  FROM nama_tabel;
  ```

- **Alias untuk Tabel:**
  ```sql
  SELECT nama_kolom 
  FROM nama_tabel AS nama_alias;
  ```

### Contoh Database

Berikut adalah contoh data dari tabel **Pelanggan** yang akan digunakan:

#### Tabel Pelanggan

| IdPelanggan | NamaPelanggan | Alamat              | Kodepos | Kota     | Negara  |
|-------------|---------------|---------------------|---------|----------|---------|
| 1           | Alice         | Jl. Merdeka 1       | 12345   | Jakarta  | Indonesia |
| 2           | Bob           | Jl. Merdeka 2       | 12346   | Bandung  | Indonesia |
| 3           | Charlie       | Jl. Merdeka 3       | 12347   | Surabaya | Indonesia |
| 4           | Diana         | Jl. Merdeka 4       | 12348   | Medan    | Indonesia |
| 5           | Eva           | Jl. Merdeka 5       | 12349   | Makassar | Indonesia |

---

### 1. Alias untuk Kolom

Pernyataan SQL berikut membuat dua alias: satu untuk kolom **IdPelanggan** dan satu untuk kolom **NamaPelanggan**.

**Penulisan Query:**
```sql
SELECT IdPelanggan AS Id, NamaPelanggan AS Pelanggan 
FROM Pelanggan;
```

**Hasil:**

| Id | Pelanggan |
|----|-----------|
| 1  | Alice     |
| 2  | Bob       |
| 3  | Charlie   |
| 4  | Diana     |
| 5  | Eva       |

Perintah ini menampilkan kolom **IdPelanggan** dengan alias **Id** dan kolom **NamaPelanggan** dengan alias **Pelanggan**. Hasilnya adalah tabel dengan nama kolom yang lebih mudah dibaca.

---

### 2. Menggunakan Alias dengan Karakter Spasi

Jika alias berisi satu atau lebih spasi, Anda dapat menggunakan tanda kurung siku atau tanda kutip ganda.

#### Menggunakan Tanda Kurung Siku:
**Penulisan Query:**
```sql
SELECT NamaPelanggan AS [Nama Pelanggan] 
FROM Pelanggan;
```

**Hasil:**

| Nama Pelanggan |
|----------------|
| Alice          |
| Bob            |
| Charlie        |
| Diana          |
| Eva            |

#### Menggunakan Tanda Kutip Ganda:
**Penulisan Query:**
```sql
SELECT NamaPelanggan AS "Nama Pelanggan" 
FROM Pelanggan;
```

**Hasil:**

| Nama Pelanggan |
|----------------|
| Alice          |
| Bob            |
| Charlie        |
| Diana          |
| Eva            |

Perintah ini menunjukkan bagaimana menggunakan tanda kurung siku atau tanda kutip ganda untuk alias dengan spasi.

---

### 3. Menggabungkan Kolom dengan Alias

Pernyataan SQL berikut membuat alias bernama **Alamat** yang menggabungkan kolom **Alamat**, **Kodepos**, **Kota**, dan **Negara**.

**Penulisan Query:**
```sql
SELECT NamaPelanggan, CONCAT(Alamat, ', ', Kodepos, ', ', Kota, ', ', Negara) AS Alamat 
FROM Pelanggan;
```

**Hasil:**

| NamaPelanggan | Alamat                          |
|---------------|---------------------------------|
| Alice         | Jl. Merdeka 1, 12345, Jakarta, Indonesia |
| Bob           | Jl. Merdeka 2, 12346, Bandung, Indonesia |
| Charlie       | Jl. Merdeka 3, 12347, Surabaya, Indonesia |
| Diana         | Jl. Merdeka 4, 12348, Medan, Indonesia |
| Eva           | Jl. Merdeka 5, 12349, Makassar, Indonesia |

Perintah ini menggabungkan kolom **Alamat**, **Kodepos**, **Kota**, dan **Negara** menjadi satu kolom dengan alias **Alamat**.

---

### 4. Alias untuk Tabel

Pernyataan SQL berikut memberikan alias **Orang** untuk tabel **Pelanggan**.

**Penulisan Query:**
```sql
SELECT * 
FROM Pelanggan AS Orang;
```

**Hasil:**

| IdPelanggan | NamaPelanggan | Alamat              | Kodepos | Kota     | Negara  |
|-------------|---------------|---------------------|---------|----------|---------|
| 1           | Alice         | Jl. Merdeka 1       | 12345   | Jakarta  | Indonesia |
| 2           | Bob           | Jl. Merdeka 2       | 12346   | Bandung  | Indonesia |
| 3           | Charlie       | Jl. Merdeka 3       | 12347   | Surabaya | Indonesia |
| 4           | Diana         | Jl. Merdeka 4       | 12348   | Medan    | Indonesia |
| 5           | Eva           | Jl. Merdeka 5       | 12349   | Makassar | Indonesia |

Perintah ini menampilkan seluruh kolom dari tabel **Pelanggan** dengan alias **Orang**. Alias ini memungkinkan Anda untuk menggunakan nama alternatif untuk tabel dalam query.

---

Dengan materi ini, Anda dapat memahami bagaimana menggunakan alias dalam SQL untuk memberikan nama sementara pada kolom atau tabel, serta cara menggabungkan kolom dan menggunakan alias dengan spasi.