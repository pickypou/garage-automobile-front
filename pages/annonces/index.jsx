import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import Footer from "../footer";

export const apiUrl = "http://127.0.0.1:8000/api";

export const AnnonceCard = ({annonce}) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    getProjects().then(result => setProjects(result));
    fetch(`${apiUrl}/images/${annonce.id}`, {
      headers: {
        Accept: "application/json",
      }
    }).then(data => {
      data.json().then(images => setImages(images));
    });
})

  return (
    <div className="col-md-4 mb-4" key={annonce.id}>       
      <Card style={{ width: "18rem" }}>
        {images && <Card.Img variant="top" src={`http://127.0.01:8000/public/upload/${images.imgUne}`} />}
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
} 

export default function Annonces({ annonces, images }) {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Liste des annonces</h1>
      <div className="row  justify-content-evenly flex-wrap">
        {annonces.map((annonce) => <AnnonceCard annonce={annonce} />)}
      </div>
      <div className="d-flex justify-content-center ">
       <Link href={"/"} className="link text-center mt-3 mb-5 btn btn-outline-secondary col-md-4 ">accueil</Link>
       </div>
       <Footer/>
    </>
  );
}
export const getStaticProps = async (params) => {
  const annoncesUrl = `${apiUrl}/annonces`;
  const annoncesResponse = await fetch(annoncesUrl, {
    headers: {
      Accept: "application/json",
    },
  });
  const annonces = await annoncesResponse.json();
  return {
    props: {
      annonces
    },
  };
};
