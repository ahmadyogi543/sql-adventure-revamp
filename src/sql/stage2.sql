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
('Rambai', 'Baccaurea motleyana', 'Tumbuh pada tanah lumpur yang dalam, sepanjang sungai mulai dari bagian hulu, serta area yang masih didominasi oleh air tawar', 47, 'Least Concern'),
('Jarak', 'Jatropha curcas', 'Tumbuh liar di hutan, tanah kosong, sepanjang pantai atau di tanam sebagai komoditi perkebunan', 21, 'Least Concern'),
('Nipah', 'Nypa fruticans', 'Daerah rawa yang berair payau atau daerah pasang surut di dekat pantai', 34, 'Least Concern'),
('Pandan', 'Pandanus sp', 'Tumbuh pada tanah rawa sedikit berkapur dengan serasah tipis', 58, 'Least Concern'),
('Bakung', 'Crinum asiaticum L', 'Dijumpai sepanjang pantai berpasir dan teduh, tempat-tempat yang lembab pada dataran rendah dan asosiasi mangrove', 42, 'Least Concern'),
('Piai', 'Acrosticum aureum', 'Tumbuh di mangrove dan pematang tambak, sepanjang kali dan sungai payau serta saluran', 85, 'Least Concern'),
('Panggang', 'Ficus microcarpa', 'Tumbuh alami di hutan mangrove, rawa, rawa gambut dan di hutan dataran rendah hingga pegunungan bawah', 33, 'Least Concern'),
('Pulutan', 'Barringtonia sp', 'Tumbuh pada pantai berpasir atau dataran koral-pasir di sepanjang pantai atau rawa mangrove', 76, 'Least Concern'),
('Waru', 'Hibicus tiliaceus', 'Hidup di sepanjang pinggiran sungai di kawasan dataran rendah', 55, 'Least Concern'),
('Rengas', 'Gluta renghas', 'Tumbuh di tepi daratan hutan mangrove dan mungkin juga menempati bagian tepi atau berdekatan dengan hutan rendah', 8, 'Near Threatened'),
('Karamunting', 'Melastoma malabathricum L', 'Tumbuh di berbagai tipe tanah', 29, 'Least Concern'),
('Api-Api', 'Avicennia marina', 'Garis pantai (hutan bakau)', 127, 'Least Concern'),
('Bakau', 'Rizophora mucronnata', 'Tumbuh dalam kelompok pada pematang sungai surut dan di muara sungai, jarang sekali tumbuh pada daerah yang jauh dari air pasang surut', 38, 'Least Concern'),
('Jambu', 'Eugenia sp', 'Daerah tropis dan subtropis', 27, 'Least Concern'),
('Tancang', 'Bruguiera gymnorrhiza', 'Bagian tengah sampai tepi mangrove, sepanjang tanggul tambak, dan di pinggir sungai kecil', 11, 'Least Concern'),
('Jeruju', 'Acanthus ilicifolius', 'Tumbuh di hutan bakau, daerah air tawar murni atau tergenang air, dan di lahan kering', 41, 'Least Concern'),
('Dungun', 'Heretiera littoralis', 'Garis pantai (hutan bakau, pantai berpasir, pantai berbatu), daratan (sungai)', 25, 'Least Concern'),
('Bintaro', 'Cerbera manghas', 'Pantai atau hutan bakau', 92, 'Least Concern');


