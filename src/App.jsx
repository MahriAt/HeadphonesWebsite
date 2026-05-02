import heroImg from './assets/hero.png'
import product from './assets/product.webp'
import './App.scss'
import Button from './Button'
import Themes from './Themes'
import Info from './Info'
import Card from './Card'
import SSS from './SSS'
import Iletisim from './Iletisim'
import './Mobile.scss'
import { lazy, Suspense } from "react";

function App() {
  const scrollToSection = () => {
    document.getElementById('Card').scrollIntoView({
      behavior: 'smooth'
    });
  };
  const SSS = lazy(() => import("./SSS"));
  
  return (
    <>
      <section id="center">
        <div className="hero">
          <h1 id='heroRight'>Yeni Nesil Ses</h1>
          <div id='heroLeft'>
            <h2 >Hayatı kendi ritminize göre yaşayın</h2>
            <p>BERIBES Bluetooth Headphones</p>
          </div>
          <Button onClick={scrollToSection}>Satın Al</Button>
        </div>
        <div>
          <Themes />
          <Info />
          <div id='Card' className="card-wrapper">
            <Card
              image={product}
              title="BERIBES Bluetooth Kulaklık"
              description="Kulak Üstü, 65 Saat Çalma Süresi ve 6 EQ Müzik Modu, 
                          Mikrofonlu Kablosuz Kulaklık, HiFi Stereo Katlanabilir Hafif Kulaklık"
              price="1250"
              specs={[
                "Marka BERIBES",
                "Renk Siyah",
                "Kulak Yerleşimi Kulak Üstü",
                "Empedans 32 Ohm"
              ]}
            />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <SSS /> 
          </Suspense>
          <Iletisim />
        </div>
      </section>
    </>
  )
}

export default App
