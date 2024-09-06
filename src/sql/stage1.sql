-- membuat tabel biaya
CREATE TABLE IF NOT EXISTS biaya (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    hari TEXT, 
    wisatawan TEXT, 
    harga INTEGER
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO biaya (hari, wisatawan, harga) VALUES
('Senin', 'Lokal', 5000),
('Selasa', 'Lokal', 5000),
('Rabu', 'Lokal', 5000),
('Kamis', 'Lokal', 5000),
('Jumat', 'Lokal', 5000),
('Sabtu', 'Lokal', 10000),
('Minggu', 'Lokal', 10000),
('Hari Libur Nasional', 'Lokal', 10000),
('Senin', 'Mancanegara', 100000),
('Selasa', 'Mancanegara', 100000),
('Rabu', 'Mancanegara', 100000),
('Kamis', 'Mancanegara', 100000),
('Jumat', 'Mancanegara', 100000),
('Sabtu', 'Mancanegara', 150000),
('Minggu', 'Mancanegara', 150000),
('Hari Libur Nasional', 'Mancanegara', 150000);

-- membuat tabel petugas
CREATE TABLE IF NOT EXISTS petugas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    tugas TEXT, 
    lama_bekerja INTEGER
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO petugas (nama, tugas, lama_bekerja) VALUES
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
INSERT INTO fasilitas (nama, jumlah, jenis, status_kelayakan) VALUES
('Dermaga', 1, 'Fasilitas Transportasi', 'Layak'),
('Pusat Informasi', 1, 'Fasilitas Umum', 'Tidak Layak'),
('Anjungan Banjar', 1, 'Fasilitas Wisata', 'Layak'),
('Rumah Jaga', 1, 'Fasilitas Umum', 'Layak'),
('Shelter', 3, 'Fasilitas Umum', 'Layak'),
('Warung Makan Minum', 3, 'Fasilitas Umum', 'Layak'),
('Pondok Pandang', 2, 'Fasilitas Umum', 'Tidak Layak'),
('Jembatan', 3, 'Fasilitas Umum', 'Layak'),
('Altar Tempat Beribadah', 1, 'Fasilitas Umum', 'Layak'),
('Toilet', 5, 'Fasilitas Umum', 'Layak'),
('Spot Foto', 6, 'Fasilitas Umum', 'Layak'),
('Tempat Mandi', 4, 'Fasilitas Umum', 'Layak');

-- membuat tabel tumbuhan
CREATE TABLE IF NOT EXISTS tumbuhan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    nama_latin TEXT,
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


-- membuat tabel hewan
CREATE TABLE IF NOT EXISTS hewan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    nama_latin TEXT,
    jumlah INTEGER,
    makanan TEXT,
    habitat TEXT,
    lama_hidup INTEGER,
    status_konservasi TEXT
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO hewan (nama, nama_latin, jumlah, makanan, habitat, lama_hidup, status_konservasi) VALUES
('Bekantan', 'Nasalis larvatus', 40, 'Biji-bijian dan buah-buahan', 'Biasa ditemukan di pohon rambai atau pepohonan berbiji dekat tepian sungai', 12, 'Endangered'),
('Musang Luwak', 'Paradoxurus hermaphroditus', 10, 'Buah-buahan', 'Biasa ditemui disekitar pemukiman, serta berkeliaran di atas pepohonan', 7.7, 'Least concern'),
('Elang Bondol', 'Haliastur indus', 12, 'Ikan, daging tikus', 'Sarangnya ditemukan di atas pepohonan yang tinggi, biasa bertengger di puncak pohon', 11.5, 'Endangered'),
('Kera Ekor Panjang', 'Macaca fascicularis', 200, 'Buah-buahan', 'Dapat dijumpai di kawasan hutan dan hutan pantai seperti di kawasan hutan nipah dan bakau', 13.9, 'Endangered'),
('Pipit', 'Lonchura sp', 25, 'Biji padi', 'Paling banyak ditemui di ladang atau persawahan', 3, 'Least concern'),
('Biawak', 'Varanus salvator', 10, 'Beragam hewan hidup', 'Umumnya menghuni tepi-tepi sungai atau saluran air, tepian danau, pantai, dan rawa-rawa termasuk rawa bakau', 15, 'Least concern'),
('Raja Udang', 'Pelargopsis capensis', 123, 'Ikan, katak, kepiting', 'Seiring ke sungai besar, hutan bakau dan tepi pantai, bertengger pada dahan mati di atas air', 5.7, 'Least concern'),
('Alap-alap', 'Peregrine falcon', 18, 'Hewan yang dianggap lebih lemah', 'Sarangnya ditemukan di atas pepohonan yang tinggi, biasa bertengger di puncak pohon', 6, 'Least concern'),
('Bajing Tanah', 'Lariscus insignis', 14, 'Buah-buahan', 'Biasa banyak dijumpai di kawasan hutan dan berkeliaran di atas pepohonan', 3, 'Least concern'),
('Hirangan/Lutung', 'Presbytis frontata', 10, 'Daun dan buah', 'Hidup di hutan bakau, hutan daratan rendah hingga hutan dataran tinggi', 12, 'Vulnerable'),
('Elang Laut Perut Putih', 'Haliaeetus leucogaster', 20, 'Ikan', 'Lahan pertanian, lahan basah', 11.3, 'Least concern'),
('Elang Hitam', 'Ictinaetus malayensis', 17, 'Mamalia kecil', 'Tepi hutan, perkebunan', 18, 'Least concern'),
('Elang Tikus', 'Elanus caeruleus', 23, 'Jangkrik, belalang, kadal dan tikus', 'Dataran terbuka', 6.6, 'Least concern'),
('Elang Bido', 'Spilornis cheela', 25, 'Ular kecil, kadal, katak', 'Pepohonan berstruktur tinggi', 12.9, 'Least concern'),
('Burung Madu Kelapa', 'Cinnyris jugularis', 30, 'Nektar bunga atau buah-buahan', 'Semak belukar, ladang', 3.6, 'Least concern');
