## Operator LIKE

Operator **LIKE** digunakan dalam klausa **WHERE** untuk mencari pola tertentu dalam kolom. Dua wildcard yang sering digunakan bersama dengan operator **LIKE** adalah:

- **%** : Mewakili nol, satu, atau beberapa karakter.
- **_** : Mewakili satu karakter tunggal.

### Penulisan Query:
```sql
SELECT kolom1, kolom2, ...
FROM nama_tabel
WHERE kolomN LIKE pola;
```

- **kolom1, kolom2, ...**: Nama kolom yang ingin ditampilkan.
- **nama_tabel**: Nama tabel dari mana data akan diambil.
- **kolomN**: Nama kolom yang dicari polanya.
- **pola**: Pola pencarian yang menggunakan wildcard.

### Contoh Database

Berikut adalah data dari tabel **Pelanggan** yang akan digunakan:

#### Tabel Pelanggan

| ID_Pelanggan | Nama_Pelanggan                           | Nama_Kontak  | Alamat                | Kota        | Kode_Pos | Negara    |
|--------------|------------------------------------------|--------------|-----------------------|-------------|----------|-----------|
| 1            | Alfreds Futterkiste                     | Maria Anders | Obere Str. 57         | Berlin      | 12209    | Germany   |
| 2            | Ana Trujillo Emparedados y helados      | Ana Trujillo | Avda. de la Constitución 2222 | México D.F. | 5021     | Mexico    |
| 3            | Antonio Moreno Taquería                 | Antonio Moreno| Mataderos 2312       | México D.F. | 5023     | Mexico    |
| 4            | Around the Horn                         | Thomas Hardy | 120 Hanover Sq.       | London      | WA1 1DP  | UK        |
| 5            | Berglunds snabbköp                       | Christina Berglund | Berguvsvägen 8    | Luleå       | S-958 22 | Sweden    |

---

### 1. Wildcard _

Wildcard **_** mewakili satu karakter. Ini bisa berupa karakter atau angka apa pun, tetapi masing-masing **_** mewakili satu, dan hanya satu, karakter.

#### Contoh:
Kembalikan semua pelanggan dari kota yang dimulai dengan 'L' diikuti dengan satu karakter wildcard, lalu 'o' dan kemudian dua karakter wildcard:

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan
WHERE Kota LIKE 'L_o___';
```

**Hasil:**

| ID_Pelanggan | Nama_Pelanggan        | Nama_Kontak | Alamat              | Kota    | Kode_Pos | Negara |
|--------------|-----------------------|-------------|---------------------|---------|----------|--------|
| 4            | Around the Horn       | Thomas Hardy| 120 Hanover Sq.     | London  | WA1 1DP  | UK     |

Query ini mencari kota yang dimulai dengan 'L', diikuti oleh satu karakter apa pun, kemudian 'o', dan diikuti oleh dua karakter apa pun. Hanya ada satu hasil yang sesuai, yaitu 'London' pada ID 4.

---

### 2. Wildcard %

Wildcard **%** mewakili sejumlah karakter, bahkan nol karakter.

#### Contoh:
Kembalikan semua pelanggan dari kota yang berisi huruf 'L':

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan
WHERE Kota LIKE '%L%';
```

**Hasil:**

| ID_Pelanggan | Nama_Pelanggan        | Nama_Kontak    | Alamat              | Kota    | Kode_Pos | Negara |
|--------------|-----------------------|----------------|---------------------|---------|----------|--------|
| 4            | Around the Horn       | Thomas Hardy   | 120 Hanover Sq.     | London  | WA1 1DP  | UK     |

Query ini mencari kota yang mengandung huruf 'L' di mana saja dalam nama kota. Hasilnya adalah 'London' pada ID 4.

---

### 3. Starts with

Untuk mengembalikan data yang dimulai dengan huruf atau frasa tertentu, tambahkan **%** di akhir huruf atau frasa.

#### Contoh:
Kembalikan semua pelanggan yang dimulai dengan 'A':

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan
WHERE Nama_Pelanggan LIKE 'A%';
```

**Hasil:**

| ID_Pelanggan | Nama_Pelanggan          | Nama_Kontak    | Alamat                | Kota        | Kode_Pos | Negara |
|--------------|-------------------------|----------------|-----------------------|-------------|----------|--------|
| 3            | Antonio Moreno Taquería| Antonio Moreno | Mataderos 2312       | México D.F. | 5023     | Mexico |
| 4            | Around the Horn         | Thomas Hardy   | 120 Hanover Sq.       | London      | WA1 1DP  | UK     |

Query ini mencari nama pelanggan yang dimulai dengan huruf 'A'. Hasilnya mencakup nama yang sesuai, yaitu 'Antonio Moreno Taquería' dan 'Around the Horn'.

---

### 4. Ends with

Untuk mengembalikan data yang diakhiri dengan huruf atau frasa tertentu, tambahkan **%** di awal huruf atau frasa.

#### Contoh:
Kembalikan semua pelanggan yang diakhiri dengan 'a':

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan
WHERE Nama_Pelanggan LIKE '%a';
```

**Hasil:**

| ID_Pelanggan | Nama_Pelanggan            | Nama_Kontak | Alamat               | Kota        | Kode_Pos | Negara |
|--------------|---------------------------|-------------|----------------------|-------------|----------|--------|
| 3            | Antonio Moreno Taquería  | Antonio Moreno | Mataderos 2312    | México D.F. | 5023     | Mexico |

Query ini mencari nama pelanggan yang diakhiri dengan huruf 'a'. Hasilnya adalah 'Antonio Moreno Taquería' pada ID 3.

---

### 5. Contains

Untuk mengembalikan data yang berisi huruf atau frasa tertentu, tambahkan **%** sebelum dan sesudah huruf atau frasa.

#### Contoh:
Kembalikan semua pelanggan yang berisi frasa 'or':

**Penulisan Query**:
```sql
SELECT * 
FROM Pelanggan
WHERE Nama_Pelanggan LIKE '%or%';
```

**Hasil:**

| ID_Pelanggan | Nama_Pelanggan            | Nama_Kontak    | Alamat                | Kota        | Kode_Pos | Negara |
|--------------|---------------------------|----------------|-----------------------|-------------|----------|--------|
| 3            | Antonio Moreno Taquería  | Antonio Moreno | Mataderos 2312        | México D.F. | 5023     | Mexico |

Query ini mencari nama pelanggan yang mengandung frasa 'or' di mana saja dalam nama pelanggan. Hasilnya adalah 'Antonio Moreno Taquería' pada ID 3.

---

Dengan materi ini, Anda bisa mempelajari cara menggunakan operator **LIKE** dalam SQL untuk mencari data yang sesuai dengan pola tertentu.