import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "./footer";
import Link from "next/link";

export default function Home({}) {
  return (
    <main>
      <h1 className="text-center mt-5 mb-5  text-secondary">Garage V.Parror</h1>
      <div className="d-flex justify-content-center">
        <Image
          src="/Image/logo.png"
          alt="Picture of the author"
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <div className="d-flex justify-content-around">
        <Link href="/annonces">
          <button className="btn btn-outline-secondary">
            Aller vers les annonces
          </button>
        </Link>
        <Link href="/formulaire">
          <button className="btn btn-outline-secondary">
           Nous contacter par email
          </button>
        </Link>
      </div>

      <Footer />
    </main>
  );
}
