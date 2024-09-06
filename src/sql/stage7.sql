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
