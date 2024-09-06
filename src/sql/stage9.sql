-- membuat tabel petugas
CREATE TABLE IF NOT EXISTS petugas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    tugas TEXT, 
    lama_bekerja INTEGER
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO petugas ('nama', 'tugas', 'lama_bekerja') VALUES
('Bambang', 'Petugas kebersihan', 1),
('Ratna', 'Penjaga loket', 1),
('Cahya', 'Penjaga loket', 1),
('Rahmat', 'Keamanan', 1),
('Udin', 'Keamanan', 2),
('Rika', 'Petugas kebersihan', 2),
('Agung', 'Pemandu wisata', 4),
('Tiwi', 'Pemandu wisata', 4);

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

-- membuat tabel tumbuhan
CREATE TABLE IF NOT EXISTS tumbuhan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    nama_latin TEXT UNIQUE,
    habitat TEXT,
    jumlah INTEGER,
    status_konservasi TEXT
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO tumbuhan (nama, nama_latin, habitat, jumlah, status_konservasi) VALUES
('Rambai', 'Baccaurea motleyana', 'Tumbuh pada tanah lumpur yang dalam, sepanjang sungai mulai dari bagian hulu, serta area yang masih didominasi oleh air tawar', 23, 'Least Concern'),
('Jarak', 'Jatropha curcas', 'Tumbuh liar di hutan, tanah kosong, sepanjang pantai atau di tanam sebagai komoditi perkebunan', 13, 'Least Concern'),
('Nipah', 'Nypa fruticans', 'Daerah rawa yang berair payau atau daerah pasang surut di dekat pantai', 19, 'Least Concern'),
('Pandan', 'Pandanus sp', 'Tumbuh pada tanah rawa sedikit berkapur dengan serasah tipis', 37, 'Least Concern'),
('Bakung', 'Crinum asiaticum L', 'Dijumpai sepanjang pantai berpasir dan teduh, tempat-tempat yang lembab pada dataran rendah dan asosiasi mangrove', 31, 'Least Concern'),
('Piai', 'Acrosticum aureum', 'Tumbuh di mangrove dan pematang tambak, sepanjang kali dan sungai payau serta saluran', 78, 'Least Concern'),
('Panggang', 'Ficus microcarpa', 'Tumbuh alami di hutan mangrove, rawa, rawa gambut dan di hutan dataran rendah hingga pegunungan bawah', 26, 'Least Concern'),
('Pulutan', 'Barringtonia sp', 'Tumbuh pada pantai berpasir atau dataran koral-pasir di sepanjang pantai atau rawa mangrove', 83, 'Least Concern'),
('Waru', 'Hibicus tiliaceus', 'Hidup di sepanjang pinggiran sungai di kawasan dataran rendah', 46, 'Least Concern'),
('Rengas', 'Gluta renghas', 'Tumbuh di tepi daratan hutan mangrove dan mungkin juga menempati bagian tepi atau berdekatan dengan hutan rendah', 2, 'Near Threatened'),
('Karamunting', 'Melastoma malabathricum L', 'Tumbuh di berbagai tipe tanah', 21, 'Least Concern'),
('Api-Api', 'Avicennia marina', 'Garis pantai (hutan bakau)', 153, 'Least Concern'),
('Bakau', 'Rizophora mucronnata', 'Tumbuh dalam kelompok pada pematang sungai surut dan di muara sungai, jarang sekali tumbuh pada daerah yang jauh dari air pasang surut', 25, 'Least Concern'),
('Jambu', 'Eugenia sp', 'Daerah tropis dan subtropis', 25, 'Least Concern'),
('Tancang', 'Bruguiera gymnorrhiza', 'Bagian tengah sampai tepi mangrove, sepanjang tanggul tambak, dan di pinggir sungai kecil', 2, 'Least Concern'),
('Jeruju', 'Acanthus ilicifolius', 'Tumbuh di hutan bakau, daerah air tawar murni atau tergenang air, dan di lahan kering', 33, 'Least Concern'),
('Dungun', 'Heretiera littoralis', 'Garis pantai (hutan bakau, pantai berpasir, pantai berbatu), daratan (sungai)', 22, 'Least Concern');

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