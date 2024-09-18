-- membuat tabel hewan
CREATE TABLE IF NOT EXISTS hewan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    nama_latin TEXT UNIQUE,
    jumlah INTEGER,
    makanan TEXT,
    habitat TEXT,
    lama_hidup INTEGER,
    status_konservasi TEXT
);

-- memasukan beberapa data ke dalam tabel
INSERT INTO hewan (nama, nama_latin, jumlah, makanan, habitat, lama_hidup, status_konservasi) VALUES
('Bekantan', 'Nasalis larvatus', 25, 'Biji-bijian dan buah-buahan', 'Biasa ditemukan di pohon rambai atau pepohonan berbiji dekat tepian sungai', 23, 'Endangered'),
('Musang Luwak', 'Paradoxurus hermaphroditus', 15, 'Buah-buahan', 'Biasa ditemui disekitar pemukiman, serta berkeliaran di atas pepohonan', 10, 'Least concern'),
('Elang Bondol', 'Haliastur indus', 8, 'Ikan, daging tikus', 'Sarangnya ditemukan di atas pepohonan yang tinggi, biasa bertengger di puncak pohon', 12, 'Endangered'),
('Kera Ekor Panjang', 'Macaca fascicularis', 150, 'Buah-buahan', 'Dapat dijumpai di kawasan hutan dan hutan pantai seperti di kawasan hutan nipah dan bakau', 14, 'Endangered'),
('Pipit', 'Lonchura sp', 40, 'Biji padi', 'Paling banyak ditemui di ladang atau persawahan', 4, 'Least concern'),
('Biawak', 'Varanus salvator', 20, 'Beragam hewan hidup', 'Umumnya menghuni tepi-tepi sungai atau saluran air, tepian danau, pantai, dan rawa-rawa termasuk rawa bakau', 16, 'Least concern'),
('Raja Udang', 'Pelargopsis capensis', 100, 'Ikan, katak, kepiting', 'Seiring ke sungai besar, hutan bakau dan tepi pantai, bertengger pada dahan mati di atas air', 6, 'Least concern'),
('Alap-alap', 'Peregrine falcon', 10, 'Hewan yang dianggap lebih lemah', 'Sarangnya ditemukan di atas pepohonan yang tinggi, biasa bertengger di puncak pohon', 8, 'Least concern'),
('Bajing Tanah', 'Lariscus insignis', 18, 'Buah-buahan', 'Biasa banyak dijumpai di kawasan hutan dan berkeliaran di atas pepohonan', 4, 'Least concern'),
('Hirangan/Lutung', 'Presbytis frontata', 12, 'Daun dan buah', 'Hidup di hutan bakau, hutan daratan rendah hingga hutan dataran tinggi', 13, 'Vulnerable'),
('Elang Laut Perut Putih', 'Haliaeetus leucogaster', 15, 'Ikan', 'Lahan pertanian, lahan basah', 10, 'Least concern'),
('Elang Hitam', 'Ictinaetus malayensis', 12, 'Mamalia kecil', 'Tepi hutan, perkebunan', 20, 'Least concern'),
('Elang Tikus', 'Elanus caeruleus', 20, 'Jangkrik, belalang, kadal dan tikus', 'Dataran terbuka', 7, 'Least concern'),
('Elang Bido', 'Spilornis cheela', 22, 'Ular kecil, kadal, katak', 'Pepohonan berstruktur tinggi', 13, 'Least concern'),
('Burung Madu Kelapa', 'Cinnyris jugularis', 35, 'Nektar bunga atau buah-buahan', 'Semak belukar, ladang', 4, 'Least concern');