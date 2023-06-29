import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Button, Card } from "react-bootstrap";

export default function Annonce({ annonce, option, image }) {
  return (
    <Fragment>
      <div className="row d-flex justify-content-evenly">
        <h1 className="mt-5 mb-5 text-center">{annonce.title}</h1>

        <Card style={{ width: "40rem" }}>
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
  {image && image.length > 0 && (
    <Image
      src={image.imgUne}
      alt={annonce.title}
      layout="fill"
      objectFit="cover"
    />
  )}
</div>

          <Card.Body>
            <Card.Text>{annonce.description}</Card.Text>
            <div className="row">
              <div className="col-md-12">
                <h5>Caractéristique</h5>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Marque:</strong>
                      </td>
                      <td>{annonce.brand}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Modèle:</strong>
                      </td>
                      <td>{annonce.model}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Prix:</strong>
                      </td>
                      <td>{annonce.price} €</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Année:</strong>
                      </td>
                      <td>{annonce.year}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Kilométrage:</strong>
                      </td>
                      <td>{annonce.mileage} KM</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Carburant:</strong>
                      </td>
                      <td>{annonce.fuel}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-12">
                <h5>Options</h5>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>GPS:</strong>
                      </td>
                      <td>{option.gps}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Limitateur de vitesse:</strong>
                      </td>
                      <td>{option.limitateur}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Régulateur de vitesse:</strong>
                      </td>
                      <td>{option.regulateur}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Climatisation:</strong>
                      </td>
                      <td>{option.clim}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Aide au freinage d&aops;urgence:</strong>
                      </td>
                      <td>{option.sfu}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Aide à la conduite:</strong>
                      </td>
                      <td>{option.sac}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Bluetooth:</strong>
                      </td>
                      <td>{option.bluetooth}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Caméra de recul:</strong>
                      </td>
                      <td>{option.camera}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Aide au stationnement:</strong>
                      </td>
                      <td>{option.sas}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  const url = "http://127.0.0.1:8000/api/annonces";
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  const annonces = await response.json();

  const paths = annonces.map((annonce) => ({
    params: {
      id: String(annonce.id),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params }) => {
  const annonceUrl = "http://127.0.0.1:8000/api/annonces/" + params.id;
  const optionUrl = "http://127.0.0.1:8000/api/options/" + params.id;
  const imageUrl = "http://127.0.0.1:8000/api/images/" + params.id;
  const [annonceResponse, optionResponse, imageResponse] = await Promise.all([
    fetch(annonceUrl, {
      headers: {
        Accept: "application/json",
      },
    }),
    fetch(optionUrl, {
      headers: {
        Accept: "application/json",
      },
    }),
    fetch(imageUrl, {
      headers: {
        Accept: "application/json",
        
      },
    }),
  ]);

  const annonce = await annonceResponse.json();
  const option = await optionResponse.json();
  const image = await imageResponse.json();

  return {
    props: {
      annonce,
      option,
      image,
    },
  };
};
