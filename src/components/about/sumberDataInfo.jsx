import { Card, Row, Col } from "react-bootstrap";

const SumberDataInfo = () => {
  const articles = [
    {
      url: "https://bksdakalsel.com/taman-wisata-alam-pulau-kembang/"
    },
    {
      url: "https://animaldiversity.org/accounts/Nasalis_larvatus/"
    },
    {
      url: "https://www.iucnredlist.org/"
    },
    {
      url: "https://ppjp.ulm.ac.id/journals/index.php/jss/article/view/8200"
    },
    {
      url: "https://p2k.stekom.ac.id/ensiklopedia/Nipah"
    },
    {
      url: "https://lamongankab.go.id/beranda/dlh/post/2393"
    },
    {
      url: "https://lindungihutan.com/blog/mengenal-bakau-hitam/"
    },
    {
      url: "https://www.jurnal.ugp.ac.id/index.php/JIPP/article/download/719/566"
    },
    {
      url: "https://journal.universitaspahlawan.ac.id/index.php/ners/article/download/228/212"
    },
    {
      url: "https://mpd.terengganu.gov.my/index.php/ms/pelawat/info-dungun"
    },
    {
      url: "https://phi.pertamina.com/pdf/2023_kehati_PHSSZona_9_rev1.pdf"
    },
    {
      url: "https://ijesm.pepsili.or.id/index.php/IJESM/article/view/10"
    },
    {
      url: "https://p2k.stekom.ac.id/ensiklopedia/Pulutan"
    },
    {
      url: "https://www.wikiwand.com/id/Api-api"
    },
    {
      url: "https://pdipkreatif.id/detail/flora/651/api-api"
    },
    {
      url: "https://journal.ipb.ac.id/index.php/jsilvik/article/download/35855/21739/"
    },
    {
      url: "https://biodiversity.peprantau.com/ekosistem-flora.html"
    },
    {
      url: "https://phi.pertamina.com/pdf/PHM-kehati.pdf"
    },
    {
      url: "https://www.nparks.gov.sg/"
    },
    {
      url: "https://p2k.stekom.ac.id/ensiklopedia/Dungun_kecil"
    },
    {
      url: "https://journal2.um.ac.id/index.php/jih/article/download/28295/9777"
    },
    {
      url: ""
    },
    {
      url: ""
    },
    {
      url: ""
    },
  ];

  const observationPhotos = [
    "photo-1",
    "photo-2",
    "photo-3",
    "photo-4",
  ];

  return (
    <div>
      <h3>Sumber Data</h3>
      <div className="mb-4">
        <h5>Dokumentasi Bacaan</h5>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5>Foto Observasi</h5>
        <Row>
          {observationPhotos.map((photo, index) => (
            <Col key={index} md={3}>
              <Card>
                <Card.Img variant="top" src={photo} alt={`Observasi ${index + 1}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SumberDataInfo;