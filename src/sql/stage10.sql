-- membuat tabel petugas
CREATE TABLE IF NOT EXISTS petugas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    tugas TEXT, 
    lama_bekerja INTEGER
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO petugas (nama, tugas, lama_bekerja) VALUES
('Bambang', 'Petugas kebersihan', 5),
('Ratna', 'Penjaga loket', 10),
('Cahya', 'Penjaga loket', 5),
('Arif', 'Penjaga loket', 1),
('Rio', 'Penjaga loket', 2),
('Rahmat', 'Keamanan', 1),
('Udin', 'Keamanan', 2),
('Rika', 'Petugas kebersihan', 2),
('Agung', 'Pemandu wisata', 10),
('Imas', 'Pemandu wisata', 4),
('Siti', 'Pemandu wisata', 15),
('Burhan', 'Pemandu wisata', 8),
('Aluh', 'Pemandu wisata', 11),
('Ela', 'Pemandu wisata', 4),
('Zaleha', 'Pemandu wisata', 7),
('Tiwi', 'Pemandu wisata', 4);

-- membuat tabel biaya
CREATE TABLE IF NOT EXISTS biaya (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    hari TEXT, 
    wisatawan TEXT, 
    harga INTEGER
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO biaya (hari, wisatawan, harga) VALUES
('Hari Kerja', 'Lokal', 5000),
('Hari Libur', 'Lokal', 7500),
('Hari Kerja', 'Mancanegara', 100000),
('Hari Libur', 'Mancanegara', 150000);

-- membuat tabel fasilitas
CREATE TABLE IF NOT EXISTS fasilitas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT, 
    jumlah INTEGER, 
    jenis TEXT, 
    status_kelayakan TEXT
    );

-- memasukan beberapa data ke dalam tabel
INSERT INTO fasilitas (nama, jumlah, jenis, status_kelayakan) VALUES
('Dermaga', 1, 'Fasilitas Transportasi', 'Layak'),
('Pusat Informasi', 2, 'Fasilitas Umum', 'Tidak Layak'),
('Kantor Kehutanan', 1, 'Fasilitas Pegawai', 'Layak'),
('Warung Makan Minum', 3, 'Fasilitas Umum', 'Layak'),
('Pendopo', 2, 'Fasilitas Umum', 'Tidak Layak'),
('Jembatan', 4, 'Fasilitas Umum', 'Layak'),
('Altar', 1, 'Fasilitas Umum', 'Layak'),
('Toilet', 2, 'Fasilitas Umum', 'Layak'),
('Spot Foto', 6, 'Fasilitas Umum', 'Layak'),
('Loket', 1, 'Fasilitas Umum', 'Layak');



