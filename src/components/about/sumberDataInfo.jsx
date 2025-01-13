import { Table } from "react-bootstrap";

const SumberDataInfo = () => {
  const tumbuhanData = [
    {
      nama: "Rambai",
      nama_latin: "Baccaurea motleyana",
      habitat: "Tumbuh pada tanah lumpur yang dalam, sepanjang sungai mulai dari bagian hulu, serta area yang masih didominasi oleh air tawar",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/rambai.png",
      keterangan: "Tumbuhan ini sering dijumpai di sekitar sungai dengan tanah berlumpur.",
    },
    {
      nama: "Jarak",
      nama_latin: "Jatropha curcas",
      habitat: "Tumbuh liar di hutan, tanah kosong, sepanjang pantai atau di tanam sebagai komoditi perkebunan",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/jarak.png",
      keterangan: "Digunakan sebagai bahan baku bioenergi.",
    },
    {
      nama: "Nipah",
      nama_latin: "Nypa fruticans",
      habitat: "Daerah rawa yang berair payau atau daerah pasang surut di dekat pantai",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/nipah.png",
      keterangan: "Banyak ditemukan di daerah pasang surut dekat pantai.",
    },
    {
      nama: "Pandan",
      nama_latin: "Pandanus sp",
      habitat: "Tumbuh pada tanah rawa sedikit berkapur dengan serasah tipis",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/pandan.jpeg",
      keterangan: "Sering dijumpai pada tanah rawa dengan kandungan kapur.",
    },
    {
      nama: "Bakung",
      nama_latin: "Crinum asiaticum L",
      habitat: "Dijumpai sepanjang pantai berpasir dan teduh, tempat-tempat yang lembab pada dataran rendah dan asosiasi mangrove",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/bakung.jpeg",
      keterangan: "Ditemukan di pantai berpasir serta dataran rendah.",
    },
    {
      nama: "Piai",
      nama_latin: "Acrosticum aureum",
      habitat: "Tumbuh di mangrove dan pematang tambak, sepanjang kali dan sungai payau serta saluran",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/piai.png",
      keterangan: "Sering tumbuh di daerah pematang tambak.",
    },
    {
      nama: "Panggang",
      nama_latin: "Ficus microcarpa",
      habitat: "Tumbuh alami di hutan mangrove, rawa, rawa gambut dan di hutan dataran rendah hingga pegunungan bawah",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/panggang.png",
      keterangan: "Banyak dijumpai di hutan mangrove dan rawa gambut.",
    },
    {
      nama: "Pulutan",
      nama_latin: "Barringtonia sp",
      habitat: "Tumbuh pada pantai berpasir atau dataran koral-pasir di sepanjang pantai atau rawa mangrove",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/pulutan.png",
      keterangan: "Dijumpai di daerah pantai berpasir atau rawa mangrove.",
    },
    {
      nama: "Waru",
      nama_latin: "Hibicus tiliaceus",
      habitat: "Hidup di sepanjang pinggiran sungai di kawasan dataran rendah",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/waru.png",
      keterangan: "Tumbuh di sepanjang sungai di dataran rendah.",
    },
    {
      nama: "Rengas",
      nama_latin: "Gluta renghas",
      habitat: "Tumbuh di tepi daratan hutan mangrove dan mungkin juga menempati bagian tepi atau berdekatan dengan hutan rendah",
      status_konservasi: "Near Threatened",
      gambar: "/images/about/tumbuhan/rengas.png",
      keterangan: "Termasuk tumbuhan yang langka dan terancam.",
    },
    {
      nama: "Karamunting",
      nama_latin: "Melastoma malabathricum L",
      habitat: "Tumbuh di berbagai tipe tanah",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/karamunting.jpeg",
      keterangan: "Bisa tumbuh di berbagai jenis tanah.",
    },
    {
      nama: "Api-Api",
      nama_latin: "Avicennia marina",
      habitat: "Garis pantai (hutan bakau)",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/api-api.png",
      keterangan: "Sering ditemukan di garis pantai.",
    },
    {
      nama: "Bakau",
      nama_latin: "Rizophora mucronnata",
      habitat: "Tumbuh dalam kelompok pada pematang sungai surut dan di muara sungai, jarang sekali tumbuh pada daerah yang jauh dari air pasang surut",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/bakau.png",
      keterangan: "Tumbuhan ini hidup di daerah pematang sungai.",
    },
    {
      nama: "Jambu",
      nama_latin: "Eugenia sp",
      habitat: "Daerah tropis dan subtropis",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/jambu.jpeg",
      keterangan: "Banyak ditemukan di daerah tropis dan subtropis.",
    },
    {
      nama: "Tancang",
      nama_latin: "Bruguiera gymnorrhiza",
      habitat: "Bagian tengah sampai tepi mangrove, sepanjang tanggul tambak, dan di pinggir sungai kecil",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/tancang.png",
      keterangan: "Banyak tumbuh di bagian tepi mangrove.",
    },
    {
      nama: "Jeruju",
      nama_latin: "Acanthus ilicifolius",
      habitat: "Tumbuh di hutan bakau, daerah air tawar murni atau tergenang air, dan di lahan kering",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/jeruju.png",
      keterangan: "Ditemukan di daerah hutan bakau.",
    },
    {
      nama: "Dungun",
      nama_latin: "Heretiera littoralis",
      habitat: "Garis pantai (hutan bakau, pantai berpasir, pantai berbatu), daratan (sungai)",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/dungun.png",
      keterangan: "Sering ditemukan di garis pantai atau sungai.",
    },
    {
      nama: "Bintaro",
      nama_latin: "Cerbera manghas",
      habitat: "Pantai atau hutan bakau",
      status_konservasi: "Least Concern",
      gambar: "/images/about/tumbuhan/bintaro.jpeg",
      keterangan: "Banyak ditemukan di pantai dan hutan bakau.",
    },
  ];
  const hewanData = [
    {
      nama: "Bekantan",
      nama_latin: "Nasalis larvatus",
      makanan: "Biji-bijian dan buah-buahan",
      habitat: "Biasa ditemukan di pohon rambai atau pepohonan berbiji dekat tepian sungai",
      status_konservasi: "Endangered",
      gambar: "/images/about/hewan/bekantan.jpg",
      keterangan: "Bekantan adalah hewan endemik Kalimantan yang dikenal dengan hidung panjangnya."
    },
    {
      nama: "Musang Luwak",
      nama_latin: "Paradoxurus hermaphroditus",
      makanan: "Buah-buahan",
      habitat: "Biasa ditemui disekitar pemukiman, serta berkeliaran di atas pepohonan",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/musangLuwak.jpg",
      keterangan: "Musang luwak dikenal karena peranannya dalam produksi kopi luwak."
    },
    {
      nama: "Elang Bondol",
      nama_latin: "Haliastur indus",
      makanan: "Ikan, daging tikus",
      habitat: "Sarangnya ditemukan di atas pepohonan yang tinggi, biasa bertengger di puncak pohon",
      status_konservasi: "Endangered",
      gambar: "/images/about/hewan/elangBondol.jpg",
      keterangan: "Elang Bondol adalah burung yang menjadi maskot DKI Jakarta."
    },
    {
      nama: "Kera Ekor Panjang",
      nama_latin: "Macaca fascicularis",
      makanan: "Buah-buahan",
      habitat: "Dapat dijumpai di kawasan hutan dan hutan pantai seperti di kawasan hutan nipah dan bakau",
      status_konservasi: "Endangered",
      gambar: "/images/about/hewan/kera.jpg",
      keterangan: "Kera ini mudah beradaptasi dengan lingkungan yang dekat manusia."
    },
    {
      nama: "Pipit",
      nama_latin: "Lonchura sp",
      makanan: "Biji padi",
      habitat: "Paling banyak ditemui di ladang atau persawahan",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/pipit.jpg",
      keterangan: "Pipit sering terlihat berkelompok dan terbang rendah di persawahan."
    },
    {
      nama: "Biawak",
      nama_latin: "Varanus salvator",
      makanan: "Beragam hewan hidup",
      habitat: "Umumnya menghuni tepi-tepi sungai atau saluran air, tepian danau, pantai, dan rawa-rawa termasuk rawa bakau",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/biawak.jpg",
      keterangan: "Biawak adalah reptil besar yang hidup di daerah perairan dan rawa."
    },
    {
      nama: "Raja Udang",
      nama_latin: "Pelargopsis capensis",
      makanan: "Ikan, katak, kepiting",
      habitat: "Seiring ke sungai besar, hutan bakau dan tepi pantai, bertengger pada dahan mati di atas air",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/rajaUdang.jpg",
      keterangan: "Raja Udang memiliki warna cerah dan sering terlihat di dekat perairan."
    },
    {
      nama: "Alap-alap",
      nama_latin: "Peregrine falcon",
      makanan: "Hewan yang dianggap lebih lemah",
      habitat: "Sarangnya ditemukan di atas pepohonan yang tinggi, biasa bertengger di puncak pohon",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/alapAlap.jpg",
      keterangan: "Alap-alap adalah salah satu burung pemangsa tercepat di dunia."
    },
    {
      nama: "Bajing Tanah",
      nama_latin: "Lariscus insignis",
      makanan: "Buah-buahan",
      habitat: "Biasa banyak dijumpai di kawasan hutan dan berkeliaran di atas pepohonan",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/bajingTanah.jpg",
      keterangan: "Bajing Tanah adalah hewan pengerat yang hidup di hutan dan sering terlihat di pohon."
    },
    {
      nama: "Hirangan/Lutung",
      nama_latin: "Presbytis frontata",
      makanan: "Daun dan buah",
      habitat: "Hidup di hutan bakau, hutan daratan rendah hingga hutan dataran tinggi",
      status_konservasi: "Vulnerable",
      gambar: "/images/about/hewan/lutung.jpeg",
      keterangan: "Lutung adalah monyet endemik yang hidup di kawasan hutan tropis."
    },
    {
      nama: "Elang Laut Perut Putih",
      nama_latin: "Haliaeetus leucogaster",
      makanan: "Ikan",
      habitat: "Lahan pertanian, lahan basah",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/elangLaut.jpg",
      keterangan: "Elang Laut dikenal karena keahliannya dalam menangkap ikan dari udara."
    },
    {
      nama: "Elang Hitam",
      nama_latin: "Ictinaetus malayensis",
      makanan: "Mamalia kecil",
      habitat: "Tepi hutan, perkebunan",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/elangHitam.jpeg",
      keterangan: "Elang Hitam adalah burung pemangsa besar yang hidup di daerah hutan dan perkebunan."
    },
    {
      nama: "Elang Tikus",
      nama_latin: "Elanus caeruleus",
      makanan: "Jangkrik, belalang, kadal dan tikus",
      habitat: "Dataran terbuka",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/elangTikus.jpg",
      keterangan: "Elang Tikus sering terlihat berburu di dataran terbuka."
    },
    {
      nama: "Elang Bido",
      nama_latin: "Spilornis cheela",
      makanan: "Ular kecil, kadal, katak",
      habitat: "Pepohonan berstruktur tinggi",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/elangBido.jpg",
      keterangan: "Elang Bido adalah burung pemangsa yang sering terlihat di atas pohon-pohon tinggi."
    },
    {
      nama: "Burung Madu Kelapa",
      nama_latin: "Cinnyris jugularis",
      makanan: "Nektar bunga atau buah-buahan",
      habitat: "Semak belukar, ladang",
      status_konservasi: "Least concern",
      gambar: "/images/about/hewan/burungMadu.jpg",
      keterangan: "Burung Madu Kelapa memiliki warna cerah dan sering terlihat mencari nektar di ladang."
    }
  ];
  
  const fasilitasData = [
    {
      nama: "Dermaga",
      jumlah: 1,
      jenis: "Fasilitas Transportasi",
      status_kelayakan: "Layak",
      gambar: "/images/about/fasilitas/dermaga.JPG",
      keterangan: "Dermaga ini digunakan untuk proses naik-turun penumpang dan barang."
    },
    {
      nama: "Pusat Informasi",
      jumlah: 2,
      jenis: "Fasilitas Umum",
      status_kelayakan: "Tidak Layak",
      gambar: "/images/about/fasilitas/informasi.JPG",
      keterangan: "Pusat informasi yang ada memerlukan perbaikan untuk pelayanan optimal."
    },
    {
      nama: "Kantor Kehutanan",
      jumlah: 1,
      jenis: "Fasilitas Pegawai",
      status_kelayakan: "Layak",
      gambar: "/images/about/fasilitas/kantorKehutanan.JPG",
      keterangan: "Kantor ini berfungsi sebagai pusat administrasi dan manajemen kehutanan."
    },
    {
      nama: "Warung Makan Minum",
      jumlah: 3,
      jenis: "Fasilitas Umum",
      status_kelayakan: "Layak",
      gambar: "/images/about/fasilitas/makanminum.JPG",
      keterangan: "Tempat makan dan minum yang menyediakan berbagai menu untuk pengunjung."
    },
    {
      nama: "Pendopo",
      jumlah: 2,
      jenis: "Fasilitas Umum",
      status_kelayakan: "Tidak Layak",
      gambar: "/images/about/fasilitas/pendopo.JPG",
      keterangan: "Pendopo memerlukan renovasi untuk meningkatkan kenyamanan bagi pengunjung."
    },
    {
      nama: "Jembatan",
      jumlah: 4,
      jenis: "Fasilitas Umum",
      status_kelayakan: "Layak",
      gambar: "/images/about/fasilitas/jembatan.JPG",
      keterangan: "Jembatan yang menghubungkan berbagai area di lokasi dan dalam kondisi baik."
    },
    {
      nama: "Altar",
      jumlah: 1,
      jenis: "Fasilitas Umum",
      status_kelayakan: "Layak",
      gambar: "/images/about/fasilitas/altar.JPG",
      keterangan: "Altar digunakan untuk kegiatan peribadatan dan memerlukan pemeliharaan rutin."
    },
    {
      nama: "Toilet",
      jumlah: 2,
      jenis: "Fasilitas Umum",
      status_kelayakan: "Layak",
      gambar: "/images/about/fasilitas/toilet.JPG",
      keterangan: "Toilet yang tersedia dalam kondisi bersih dan layak untuk digunakan pengunjung."
    },
    {
      nama: "Spot Foto",
      jumlah: 6,
      jenis: "Fasilitas Umum",
      status_kelayakan: "Layak",
      gambar: "/images/about/fasilitas/spotFoto.JPG",
      keterangan: "Area khusus yang disediakan untuk pengunjung mengambil foto dengan latar yang menarik."
    },
    {
      nama: "Loket",
      jumlah: 1,
      jenis: "Fasilitas Umum",
      status_kelayakan: "Layak",
      gambar: "/images/about/fasilitas/loket.jpg",
      keterangan: "Loket yang digunakan untuk transaksi tiket atau layanan lainnya."
    }
  ];

  const petugasData = [
    {
      nama: "Bambang",
      tugas: "Petugas kebersihan",
      lama_bekerja: 5,
    },
    {
      nama: "Ratna",
      tugas: "Penjaga loket",
      lama_bekerja: 10,
    },
    {
      nama: "Cahya",
      tugas: "Penjaga loket",
      lama_bekerja: 5,
    },
    {
      nama: "Arif",
      tugas: "Penjaga loket",
      lama_bekerja: 1,
    },
    {
      nama: "Rio",
      tugas: "Penjaga loket",
      lama_bekerja: 2,
    },
    {
      nama: "Rahmat",
      tugas: "Keamanan",
      lama_bekerja: 1,
    },
    {
      nama: "Udin",
      tugas: "Keamanan",
      lama_bekerja: 2,
    },
    {
      nama: "Rika",
      tugas: "Petugas kebersihan",
      lama_bekerja: 2,
    },
    {
      nama: "Agung",
      tugas: "Pemandu wisata",
      lama_bekerja: 10,
    },
    {
      nama: "Imas",
      tugas: "Pemandu wisata",
      lama_bekerja: 4,
    },
    {
      nama: "Siti",
      tugas: "Pemandu wisata",
      lama_bekerja: 15,
    },
    {
      nama: "Burhan",
      tugas: "Pemandu wisata",
      lama_bekerja: 8,
    },
    {
      nama: "Aluh",
      tugas: "Pemandu wisata",
      lama_bekerja: 11,
    },
    {
      nama: "Ela",
      tugas: "Pemandu wisata",
      lama_bekerja: 4,
    },
    {
      nama: "Zaleha",
      tugas: "Pemandu wisata",
      lama_bekerja: 7,
    },
    {
      nama: "Tiwi",
      tugas: "Pemandu wisata",
      lama_bekerja: 4,
    }
  ];

  const biayaData = [
    { hari: "Hari Kerja", wisatawan: "Lokal", harga: 5000 },
    { hari: "Hari Libur", wisatawan: "Lokal", harga: 7500 },
    { hari: "Hari Kerja", wisatawan: "Mancanegara", harga: 100000 },
    { hari: "Hari Libur", wisatawan: "Mancanegara", harga: 150000 }
  ];  

  return (
    <div>
  <h2>Data Tumbuhan</h2>
  <p><b>DISCLAIMER</b> data tumbuhan pada penelitian ini didapat dari hasil observasi dan kajian literatur sehingga informasi yang tersedia termasuk nama tumbuhan, nama latin, habitat, jumlah, status konservasi, dan gambar. Dengan menambahkan data dummy di bagian jumlah untuk keperluan game.</p>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Nama</th>
        <th>Nama Latin</th>
        <th>Habitat</th>
        <th>Status Konservasi</th>
        <th>Gambar</th>
      </tr>
    </thead>
    <tbody>
      {tumbuhanData.map((tumbuhan, index) => (
        <tr key={index}>
          <td>{tumbuhan.nama}</td>
          <td>{tumbuhan.nama_latin}</td>
          <td>{tumbuhan.habitat}</td>
          <td>{tumbuhan.status_konservasi}</td>
          <td className="text-center">
            <img src={tumbuhan.gambar} alt={tumbuhan.nama} style={{ width: '150px', height: 'auto' }} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  <h3>Sumber Data Tumbuhan</h3>


  <h2>Data Hewan</h2>
  <p><b>DISCLAIMER</b> data hewan pada penelitian ini didapat dari observasi dan kajian literatur sehingga didapatkan nama hewan, nama latin, makanan, habitat, status konservasi dan gambar. Dengan menambahkan data dummy di bagian jumlah dan lama hidup untuk keperluan game.</p>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th className="text-center">Nama</th>
        <th className="text-center">Nama Latin</th>
        <th className="text-center">Jumlah</th>
        <th className="text-center">Makanan</th>
        <th className="text-center">Habitat</th>
        <th className="text-center">Status Konservasi</th>
        <th className="text-center">Gambar</th>
      </tr>
    </thead>
    <tbody>
      {hewanData.map((hewan, index) => (
        <tr key={index}>
          <td className="text-center">{hewan.nama}</td>
          <td className="text-center">{hewan.nama_latin}</td>
          <td className="text-center">{hewan.jumlah}</td>
          <td className="text-center">{hewan.makanan}</td>
          <td className="text-center">{hewan.habitat}</td>
          <td className="text-center">{hewan.status_konservasi}</td>
          <td className="text-center">
            <img src={hewan.gambar} alt={hewan.nama} style={{ width: '150px', height: 'auto' }} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  <h3>Sumber Data Hewan</h3>
    <ul>
      <li><a href="https://ejournal.undiksha.ac.id/index.php/JJPG/article/view/23045" target="_blank" rel="noopener noreferrer">E-Journal Undiksha</a></li>
      <li><a href="https://jurnal.usk.ac.id/JIPI/article/view/10814" target="_blank" rel="noopener noreferrer">Jurnal USK</a></li>
      <li><a href="https://ejournal.unuja.ac.id/index.php/jeecom/article/view/4464" target="_blank" rel="noopener noreferrer">E-Journal UNUJA</a></li>
      <li><a href="https://ejournal2.undip.ac.id/index.php/pentana/article/view/11601" target="_blank" rel="noopener noreferrer">Jurnal Diponegoro</a></li>
      <li><a href="http://jbioua.fmipa.unand.ac.id/index.php/jbioua/article/view/34/31" target="_blank" rel="noopener noreferrer">JBI OUA</a></li>
      <li><a href="https://www.iucnredlist.org/" target="_blank" rel="noopener noreferrer">IUCN Red List</a></li>
      <li><a href="https://jurnalfkip.unram.ac.id/index.php/JBT/article/view/4748" target="_blank" rel="noopener noreferrer">Jurnal FKIP UNRAM</a></li>
      <li><a href="https://ojs.unud.ac.id/index.php/metamorfosa/article/view/47291/28808" target="_blank" rel="noopener noreferrer">OJS UNUD</a></li>
      <li><a href="https://journal.ipb.ac.id/index.php/actavetindones/article/view/36728" target="_blank" rel="noopener noreferrer">Jurnal IPB</a></li>
      <li><a href="https://www.rekoforest.org/id/warta-lapangan/elang-tikus-salah-satu-yang-terpantau-dalam-raptor-watch-2021/" target="_blank" rel="noopener noreferrer">Rekoforest</a></li>
      <li><a href="https://elibrary.unikom.ac.id/id/eprint/5984/8/UNIKOM_Iqbal%20Asyam%20Zulfikar_BAB%20II.pdf" target="_blank" rel="noopener noreferrer">E-Library UNIKOM</a></li>
      <li><a href="https://animaldiversity.org/accounts/Nasalis_larvatus/" target="_blank" rel="noopener noreferrer">Animal Diversity</a></li>
  </ul>


  <h2>Data Fasilitas</h2>
  <p><b>DISCLAIMER</b> data fasilitas pada penelitian ini didapat dari hasil observasi ke Pulau Kembang, yang didapatkan  data berupa fasilitas, status kelayakan, dan gambar. Data dummy berupa jumlah dan jenis ditambahkan untuk keperluan game.</p>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th className="text-center">Nama</th>
        <th className="text-center">Jumlah</th>
        <th className="text-center">Jenis</th>
        <th className="text-center">Status Kelayakan</th>
        <th className="text-center">Gambar</th>
      </tr>
    </thead>
    <tbody>
      {fasilitasData.map((fasilitas, index) => (
        <tr key={index}>
          <td className="text-center">{fasilitas.nama}</td>
          <td className="text-center">{fasilitas.jumlah}</td>
          <td className="text-center">{fasilitas.jenis}</td>
          <td className="text-center">{fasilitas.status_kelayakan}</td>
          <td className="text-center">
            <img src={fasilitas.gambar} alt={fasilitas.nama} style={{ width: '200px', height: 'auto' }} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>

  <h2>Data Petugas</h2>
  <p><b>DISCLAIMER</b> data petugas pada penelitian ini didapat dari hasil observasi ke Pulau Kembang, dimana hanya terdapat 2 jenis petugas saja yang ada disana yaitu penjaga loket dan pemandu wisaata. Untuk nama petugas, tugas, dan lama bekerja ini merupakan data dummy yang ditambahkan untuk keperluan game.</p>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th className="text-center">Nama</th>
        <th className="text-center">Tugas</th>
        <th className="text-center">Lama Bekerja</th>
      </tr>
    </thead>
    <tbody>
      {petugasData.map((petugas, index) => (
        <tr key={index}>
          <td className="text-center">{petugas.nama}</td>
          <td className="text-center">{petugas.tugas}</td>
          <td className="text-center">{petugas.lama_bekerja}</td>
        </tr>
      ))}
    </tbody>
  </Table>

  <h2>Data Biaya</h2>
  <p><b>DISCLAIMER</b> data biaya pada penelitian ini didapat dari hasil observasi ke Pulau Kembang sehingga didapatkan data terkait harga kunjungan ke pulau Kembang yang dibedakan berdasarkan jenis wisatawan dan hari</p>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th className="text-center">Hari</th>
        <th className="text-center">Wisatawan</th>
        <th className="text-center">Harga</th>
      </tr>
    </thead>
    <tbody>
      {biayaData.map((biaya, index) => (
        <tr key={index}>
          <td className="text-center">{biaya.hari}</td>
          <td className="text-center">{biaya.wisatawan}</td>
          <td className="text-center">{biaya.harga}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>

  );
};

export default SumberDataInfo;