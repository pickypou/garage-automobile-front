import Link from "next/link";
import { Fragment } from "react";
import { Button, Card } from "react-bootstrap";
import Footer from "../footer";

export default function Annonces({ annonces }) {
  return (
    <>
    <main>
      <h1 className="mt-5 mb-5 text-center text-secondary">Les véhicules d&apos;occasions</h1>

      <div className="row d-flex justify-content-evenly">
        {annonces.length > 0 ? (
          annonces.map((annonce) => {
            return (
              <div key={annonce.id} className="col-3 ">
                <Card.Img variant="top" src={annonce.images.imgUne}  />
                <Card style={{ width: "18rem" }} >
                  <Card.Body>
                    <Card.Title className="text-secondary">{annonce.title}</Card.Title>
                    <Card.Text className="text-secondary">{annonce.price} €</Card.Text>
                    <Link href={"/annonces/" + annonce.id}>
                    <button className="btn btn-outline-secondary">
                      Voir le détail 
                      </button>
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
    </main>
    <Footer/>
    </>
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
