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