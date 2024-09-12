## A. Dasar SQL
- **Definisi SQL**:  SQL (Structured Query Language) adalah bahasa yang digunakan untuk mengelola dan memanipulasi basis data relasional. SQL memungkinkan pengguna untuk melakukan operasi seperti memasukkan, mengubah, dan mengambil data dari basis data.

- **Komponen Dasar SQL**: SQL terdiri dari beberapa komponen utama, seperti, Data Definition Language (DDL), Data Manipulation Language (DML), Data Control Language (DCL), dan Transaction Control Language (TCL).

- **Sintaks Dasar SQL**:  Sintaks dasar SQL mencakup penggunaan pernyataan seperti `SELECT`, `INSERT`, `UPDATE`, dan `DELETE`. Setiap pernyataan dimulai dengan kata kunci tertentu dan diikuti oleh klausa yang menentukan aksi pada basis data.

## B. DML (Data Manipulation Language)
- **Definisi DML**:  DML adalah bagian dari SQL yang digunakan untuk memanipulasi data di dalam tabel. DML memungkinkan kita untuk menambah, mengubah, atau menghapus data dari basis data.

- **Pernyataan DML**:
  - `INSERT`: Digunakan untuk menambah data baru ke tabel. 
    > ```sql
    > INSERT INTO tabel_nama (kolom1, kolom2) VALUES (nilai1, nilai2);
    > ```

  - `UPDATE`: Digunakan untuk memperbarui data yang sudah ada dalam tabel.
    > ```sql
    > UPDATE tabel_nama SET kolom1 = nilai_baru WHERE kondisi;
    > ```

  - `DELETE`: Digunakan untuk menghapus data dari tabel.
    > ```sql
    > DELETE FROM tabel_nama WHERE kondisi;
    > ```

## C. SQL Statement
- **SELECT Statement**:  Digunakan untuk mengambil data dari satu atau lebih tabel. Klausa yang sering digunakan bersamaan dengan `SELECT` adalah `WHERE`, `JOIN`, `GROUP BY`, `HAVING`, dan `ORDER BY`.
  > ```sql
  > SELECT kolom1, kolom2 FROM tabel_nama WHERE kondisi;
  > ```

- **Subquery**:  Subquery adalah query di dalam query yang digunakan untuk menyederhanakan query kompleks.
  > ```sql
  > SELECT kolom1 FROM tabel_nama WHERE kolom2 IN (SELECT kolom2 FROM tabel_lain WHERE kondisi);
  > ```

Setiap sub-topik ini dapat dikembangkan lebih lanjut dengan contoh-contoh tambahan, latihan, dan penjelasan konsep secara visual jika digunakan dalam bentuk game.
