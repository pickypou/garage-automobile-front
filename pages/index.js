import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "./footer";
import Link from "next/link";


export default function Home({}) {
  return (
    <>
    
    <main>
      <h1 className="text-center mt-5 mb-5 ">Garage V.Parror</h1>
      <div className="d-flex justify-content-center">
        <Image
          src="/Image/logo-1.png"
          alt="logo du garage"
          width={300}
          height={300}
          quality={100}
          priority={true}
        />
      </div>
      <div className="d-flex justify-content-around">
        <Link href="/annonces">
          <button className="btn btn-outline-secondary link">
            Aller vers les annonces
          </button>
        </Link>
        <Link href="/commentsForm">
          <button className="btn btn-outline-secondary link">
           donnée votre avie 
          </button>
        </Link>
        <Link href="/comments">
          <button className="btn btn-outline-secondary link">
           Voir les commentaires
          </button>
        </Link>
        <Link href="/formulaire">
          <button className="btn btn-outline-secondary link">
           Nous contacter par email
          </button>
        </Link>
      </div>

      <Footer />
    </main>
    </>
  );
}
