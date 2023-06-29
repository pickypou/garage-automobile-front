
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Footer from './footer'
import Link from 'next/link'



export default function Home({}) {
  return (
  <main>
    <h1 className='text-center mt-5 mb-5'>Garage V.Parror</h1>
    <div className='d-flex justify-content-center'>
      <Image
      src="/Image/logo.png"
      alt="Picture of the author"
      width={300}
      height={300}
	  quality={100}
    />
    </div>
    <Link href="/annonces">
  <a>
    <button>Aller vers les annonces</button>
  </a>
</Link>
    
    <Footer/>
  </main>
    
)
}
