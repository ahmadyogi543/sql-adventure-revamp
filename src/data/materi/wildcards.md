## SQL Wildcard

SQL wildcards digunakan untuk mencocokkan pola dalam data string saat melakukan pencarian. Wildcards biasanya digunakan bersama dengan operator `LIKE` dalam klausa `WHERE` untuk mencari pola tertentu dalam kolom data.

Berikut ini adalah beberapa karakter wildcard dan fungsinya:

| Simbol   | Keterangan                                                                 |
|----------|-----------------------------------------------------------------------------|
| `%`      | Mewakili sejumlah karakter, termasuk nol karakter                           |
| `_`      | Mewakili satu karakter                                                      |
| `[]`     | Mewakili satu karakter yang termasuk dalam daftar yang diberikan            |
| `^`      | Mewakili karakter yang tidak termasuk dalam daftar yang diberikan           |
| `-`      | Mewakili rentang karakter (misalnya, `[a-z]` untuk semua huruf kecil)       |
| `{}`     | Digunakan untuk escaped character                                           |

### Contoh Penggunaan Wildcards dalam SQL

Untuk memudahkan pemahaman, kita akan menggunakan tabel **Pengguna** dengan data berikut:

| ID_Pengguna | Nama_Pengguna          | Kota        | Negara  |
|-------------|------------------------|-------------|---------|
| 1           | Alfreds Futterkiste     | Berlin      | Germany |
| 2           | Ana Trujillo            | México D.F. | Mexico  |
| 3           | Antonio Moreno Taquería | México D.F. | Mexico  |
| 4           | Around the Horn         | London      | UK      |
| 5           | Berglunds snabbköp      | Luleå       | Sweden  |

---

#### 1. Menggunakan `%` Wildcard
Wildcard `%` mewakili sejumlah karakter, termasuk nol karakter. Ini berguna untuk mencocokkan teks dengan bagian tertentu.

**Contoh:**
Mencari semua pengguna yang nama penggunanya diakhiri dengan "o".

```sql
SELECT * FROM Pengguna
WHERE Nama_Pengguna LIKE '%o';
```

**Hasil:**

| ID_Pengguna | Nama_Pengguna          | Kota        | Negara  |
|-------------|------------------------|-------------|---------|
| 2           | Ana Trujillo            | México D.F. | Mexico  |
| 3           | Antonio Moreno Taquería | México D.F. | Mexico  |

Pada contoh ini, `%` digunakan untuk mencocokkan semua nama pengguna yang diakhiri dengan huruf "o".

---

#### 2. Menggunakan `_` Wildcard
Wildcard `_` mewakili tepat satu karakter. Ini dapat digunakan untuk mencocokkan teks dengan panjang yang pasti.

**Contoh:**
Mencari pengguna dengan nama yang memiliki lima huruf.

```sql
SELECT * FROM Pengguna
WHERE Nama_Pengguna LIKE '_____';
```

**Hasil:**
Tidak ada pengguna dengan nama yang terdiri dari lima karakter pada contoh tabel.

---
#### 3. Menggunakan `[]` Wildcard
Wildcard `[]` digunakan untuk mencocokkan salah satu karakter dalam daftar yang diberikan.

**Contoh:**
Mencari semua pengguna yang nama penggunanya dimulai dengan huruf "A" atau "B".

```sql
SELECT * FROM Pengguna
WHERE Nama_Pengguna LIKE '[AB]%';
```

**Hasil:**

| ID_Pengguna | Nama_Pengguna          | Kota        | Negara  |
|-------------|------------------------|-------------|---------|
| 1           | Alfreds Futterkiste     | Berlin      | Germany |
| 2           | Ana Trujillo            | México D.F. | Mexico  |
| 3           | Antonio Moreno Taquería | México D.F. | Mexico  |
| 5           | Berglunds snabbköp      | Luleå       | Sweden  |

Wildcard `[AB]` mencocokkan semua pengguna yang nama penggunanya diawali dengan huruf "A" atau "B".

---
#### 4. Menggunakan `-` Wildcard
Wildcard `-` digunakan untuk mencocokkan rentang karakter, misalnya `[a-z]` untuk semua huruf kecil.

**Contoh:**
Mencari semua pengguna dengan nama yang dimulai dari huruf antara "A" dan "B".

```sql
SELECT * FROM Pengguna
WHERE Nama_Pengguna LIKE '[A-B]%';
```

**Hasil:**

| ID_Pengguna | Nama_Pengguna          | Kota        | Negara  |
|-------------|------------------------|-------------|---------|
| 1           | Alfreds Futterkiste     | Berlin      | Germany |
| 2           | Ana Trujillo            | México D.F. | Mexico  |
| 3           | Antonio Moreno Taquería | México D.F. | Mexico  |
| 5           | Berglunds snabbköp      | Luleå       | Sweden  |

Wildcard ini membantu menemukan semua nama pengguna yang diawali dengan huruf dari rentang "A" hingga "B".

---
#### 5. Menggabungkan Wildcard
Wildcards dapat digunakan bersama-sama dalam satu kueri untuk melakukan pencarian yang lebih spesifik.

**Contoh:**
Mencari pengguna yang nama penggunanya diawali dengan "A" dan panjangnya minimal 5 karakter.

```sql
SELECT * FROM Pengguna
WHERE Nama_Pengguna LIKE 'A%__%';
```

**Hasil:**

| ID_Pengguna | Nama_Pengguna          | Kota        | Negara  |
|-------------|------------------------|-------------|---------|
| 1           | Alfreds Futterkiste     | Berlin      | Germany |
| 2           | Ana Trujillo            | México D.F. | Mexico  |
| 3           | Antonio Moreno Taquería | México D.F. | Mexico  |

Penggunaan `%` dan `__` bersamaan memastikan nama pengguna dimulai dengan "A" dan memiliki setidaknya lima karakter.

---

Wildcard sangat berguna dalam pencarian string di SQL. Mereka memungkinkan kita melakukan pencarian fleksibel berdasarkan pola yang diinginkan.