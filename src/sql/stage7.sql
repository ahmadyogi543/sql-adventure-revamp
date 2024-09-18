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