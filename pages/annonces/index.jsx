import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import Footer from "../footer";

export default function Annonces({ annonces, images }) {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Liste des annonces</h1>
      <div className="row  justify-content-evenly flex-wrap">
        {annonces.map((annonce) => {
          return (
            <div className="col-md-4 mb-4" key={annonce.id}>
           
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={images.imgUne}/>
                <Card.Body>
                  <Card.Title className="title">{annonce.title}</Card.Title>
                  <Card.Text>prix: {annonce.price} €</Card.Text>
                  <Link href={"/annonces/" + annonce.id} className="link text-center mt-3 mb-2 btn btn-outline-secondary mx-auto">
                    Voir le détail de l&apos;annonce
                  </Link>
                </Card.Body>
               
              </Card>
            </div>
               
          );
        })}
      </div>
      <div className="d-flex justify-content-center ">
       <Link href={"/"} className="link text-center mt-3 mb-5 btn btn-outline-secondary col-md-4 ">accueil</Link>
       </div>
       <Footer/>
    </>
  );
}
export const getStaticProps = async (params) => {
  const annoncesUrl = "http://127.0.0.1:8000/api/annonces";
  const imageUrl = "http://127.0.0.1:8000/api/images/"+ params.id;
console.log(imageUrl)
  const annoncesResponse = await fetch(annoncesUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  const imagesResponse = await fetch(imageUrl, {
    headers: {
      Accept: "application/json",
    }
  })


  const annonces = await annoncesResponse.json();
  const images = await imagesResponse.json();
  return {
    props: {
      annonces,
      images
    },
  };
};
