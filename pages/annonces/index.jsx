import Link from "next/link";
import { Fragment } from "react";
import { Button, Card } from "react-bootstrap";

export default function Annonces({ annonces }) {
  return (
    <Fragment>
      <h1 className="mt-5 mb-5 text-center">Les véhicules d&apos;occasions</h1>

      <div className="row d-flex justify-content-evenly">
        {annonces.length > 0 ? (
          annonces.map((annonce) => {
            return (
              <div key={annonce.id} className="col-3">
                <Card.Img variant="top" src={annonce.images.imgUne} />
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{annonce.title}</Card.Title>
                    <Card.Text>{annonce.price} €</Card.Text>
                    <Link href={"/annonces/" + annonce.id}>
                      <Button variant="link">Voir l&apos;annonce</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        ) : (
          <p>Aucune annonce disponible</p>
        )}
      </div>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const url = "http://127.0.0.1:8000/api/annonces/";
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  const annonces = await response.json();

  return {
    props: {
      annonces,
    },
  };
};
