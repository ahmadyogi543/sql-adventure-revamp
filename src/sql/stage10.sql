-- membuat tabel petugas
CREATE TABLE IF NOT EXISTS petugas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    tugas TEXT, 
    lama_bekerja INTEGER
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO 'petugas' ('nama', 'tugas', 'lama_bekerja') VALUES
('Bambang', 'Petugas kebersihan', 1),
('Ratna', 'Penjaga loket', 1),
('Cahya', 'Penjaga loket', 1),
('Rahmat', 'Keamanan', 1),
('Udin', 'Keamanan', 2),
('Rika', 'Petugas kebersihan', 2),
('Agung', 'Pemandu wisata', 4),
('Tiwi', 'Pemandu wisata', 4);

-- membuat tabel biaya
CREATE TABLE IF NOT EXISTS biaya (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    hari TEXT, 
    wisatawan TEXT, 
    harga INTEGER
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO 'biaya' ('hari', 'wisatawan', 'harga') VALUES
('Senin', 'Lokal', '5000'),
('Selasa', 'Lokal', '5000'),
('Rabu', 'Lokal', '5000'),
('Kamis', 'Lokal', '5000'),
('Jum''at', 'Lokal', '5000'),
('Sabtu', 'Lokal', '10000'),
('Minggu', 'Lokal', '10000'),
('Hari Libur Nasional', 'Lokal', '10000'),
('Senin', 'Mancanegara', '100000'),
('Selasa', 'Mancanegara', '100000'),
('Rabu', 'Mancanegara', '100000'),
('Kamis', 'Mancanegara', '100000'),
('Jum''at', 'Mancanegara', '100000'),
('Sabtu', 'Mancanegara', '150000'),
('Minggu', 'Mancanegara', '150000'),
('Hari Libur Nasional', 'Mancanegara', '150000');

-- membuat tabel fasilitas
CREATE TABLE IF NOT EXISTS fasilitas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT, 
    jumlah INTEGER, 
    jenis TEXT, 
    status_kelayakan TEXT
    );

-- memasukan beberapa data ke dalam tabel
INSERT INTO fasilitas ('nama', 'jumlah', 'jenis', 'status_kelayakan') VALUES
('Dermaga', 1, 'Fasilitas Transportasi', 'Layak'),
('Pusat Informasi', 1, 'Fasilitas Umum', 'Layak'),
('Anjungan Banjar', 1, 'Fasilitas Wisata', 'Layak'),
('Rumah Jaga', 1, 'Fasilitas Umum', 'Layak'),
('Shelter', 3, 'Fasilitas Umum', 'Layak'),
('Warung Makan Minum', 3, 'Fasilitas Umum', 'Layak'),
('Pondok Pandang', 2, 'Fasilitas Umum', 'Layak'),
('Jembatan', 3, 'Fasilitas Umum', 'Layak'),
('Altar Tempat Beribadah', 1, 'Fasilitas Umum', 'Layak'),
('Toilet', 5, 'Fasilitas Umum', 'Layak'),
('Spot Foto', 6, 'Fasilitas Umum', 'Layak'),
('Tempat Mandi', 4, 'Fasilitas Umum', 'Layak');



