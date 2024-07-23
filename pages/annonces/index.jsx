import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import Footer from "../footer";
import SidebarFilter from "./SidebarFilter";

export default function Annonces({ annonces }) {
  const [filteredMileageRange, setFilteredMileageRange] = useState([0, 100000]);
  const brands = [
    "Audi",
    "BMW",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Jaguar",
    "Kia",
    "Land Rover",
    "Mazda",
    "Mercedes-Benz",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  // Annonces filtrées (mise à jour par la fonction de filtrage)
  const [filteredAnnonces, setFilteredAnnonces] = useState(annonces || []);

  useEffect(() => {
    console.log('Initial annonces:', annonces);
    setFilteredAnnonces(annonces || []);
  }, [annonces]);

  // Fonction de filtrage
  const handleFilter = (selectedBrands, mileageRange) => {
    const filtered = annonces.filter((annonce) => {
      return (
        (selectedBrands.length === 0 || selectedBrands.includes(annonce.brand)) &&
        annonce.mileage >= mileageRange[0] &&
        annonce.mileage <= mileageRange[1]
      );
    });
    console.log('Filtered annonces:', filtered);
    setFilteredAnnonces(filtered);
    setFilteredMileageRange(mileageRange);
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-5">Liste des annonces</h1>
      <div className="row justify-content-between flex-wrap">
        <div className="col-md-3">
          <SidebarFilter
            brands={brands}
            handleFilter={handleFilter}
            filteredMileageRange={filteredMileageRange}
          />
        </div>
        <div className="col-md-9">
          <div className="row justify-content-evenly flex-wrap">
            {Array.isArray(filteredAnnonces) && filteredAnnonces.length > 0 ? (
              filteredAnnonces.map((annonce) => {
                console.log('annonce:', annonce);
                if (!annonce.id || !annonce.imgUne) {
                  console.error('Invalid annonce:', annonce);
                  return null;
                }
                return (
                  <div className="col-md-4 mb-4" key={annonce.id}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={`http://127.0.0.1:8000/uploads/images/${annonce.imgUne}`} />
                      <Card.Body>
                        <Card.Title className="title">{annonce.title}</Card.Title>
                        <Card.Text>Ref: {annonce.id}</Card.Text>
                        <Card.Text>prix: {annonce.price} €</Card.Text>
                        <Link
                          href={"/annonces/" + annonce.id}
                          className="link text-center mt-3 mb-2 btn btn-outline-secondary mx-auto"
                        >
                          Voir le détail de l&apos;annonce
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })
            ) : (
              <p>Aucune annonce disponible.</p>
            )}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Link
          href={"/"}
          className="link text-center mt-3 mb-5 btn btn-outline-secondary col-md-4"
        >
          Accueil
        </Link>
      </div>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const annoncesUrl = "http://127.0.0.1:8000/api/annonces/";
  const annoncesResponse = await fetch(annoncesUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  const annonces = await annoncesResponse.json();

  console.log('Fetched annonces:', annonces);

  return {
    props: {
      annonces,
    },
  };
};
