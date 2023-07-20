
import Link from "next/link";
import { Card, Table } from "react-bootstrap";




export default function AnnonceDetail({ annonce, options,  }) {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">{annonce.title}</h1>


      <Card className="mx-auto" style={{ width: "50rem" }}>
    
      <Card.Img variant="top" src= "{annonce.imgUne}" />
        <Card.Body>
          <Card.Title className="text-center title">{annonce.title}</Card.Title>

          <Table striped bordered hover>
            <tbody>
              <tr>
                <td colSpan={4}>
                  Description:
                  <br />
                  {annonce.description}
                </td>
              </tr>
              <tr>
                <td>Marque: {annonce.brand}</td>
                <td>Modèle: {annonce.model}</td>
                <td>Prix: {annonce.price} €</td>
              </tr>
              <tr>
                <td>Année: {annonce.year}</td>
                <td>Kilométrage: {annonce.mileage} KM</td>
                <td>Carburant: {annonce.fuel}</td>
              </tr>
            </tbody>
          </Table>

          <h4 className="title">Les options</h4>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>GPS: {options.gps}</td>
              <td>Regulateur: {options.regulateur}</td>
              <td>Limitateur: {options.limitateur}</td>
              </tr>
              <tr>
                <td>Climatisation: {options.clim}</td>
                <td>Freinage d&apos;urgence: {options.sfu}</td>
                <td>Aide à la conduite: {options.sac}</td>
              </tr>
              <tr>
                <td>Bluetooth: {options.bluetooth}</td>
                <td>Camera de recule: {options.camera}</td>
                <td>Aide au stationnement: {options.sas}</td>
              </tr>
              
            </tbody>
          </Table>

         
        </Card.Body>
        <div className="d-flex justitfy-content-center" >
          <Link href={"/annonces"} className="link text-center mt-3 mb-5 btn btn-outline-secondary">retour à la listes des annonces</Link>
        </div>
        
      </Card>
    </>
  );
}

export const getStaticPaths = async () => {
  const annoncesUrl = "http://127.0.0.1:8000/api/annonces";
  const optionsUrl = "http://127.0.0.1:8000/api/options/" ;

  const annoncesResponse = await fetch(annoncesUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  const annonces = await annoncesResponse.json();

  const paths = annonces.map((annonce) => ({
    params: {
      id: String(annonce.id),
    },
  }));
  const optionsResponse = await fetch(optionsUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
 
  const annonceUrl = "http://127.0.0.1:8000/api/annonces/" + params.id;
  const optionsUrl = "http://127.0.0.1:8000/api/options";
  
 
  const annoncesResponse = await fetch(annonceUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  const optionsResponse = await fetch(optionsUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  const annonce = await annoncesResponse.json();
  
  const options = await optionsResponse.json();

  const list = options.filter((option) => option.annonce == `/api/annonces/${annonce.id}`) ?? [];

  let optionsAnnonce = null;

  let reponseErreur = {
    options: options,
    annonce,
    id: `/api/annonces/${annonce.id}`,
  }
  if (list.length > 0) {
    optionsAnnonce = list[0];
  } else {
    throw JSON.stringify(reponseErreur);
  }


