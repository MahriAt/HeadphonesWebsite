import { useState } from "react";
import './styles/SSS.scss'

function SSS() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      soru: "Bluetooth menzili nedir?",
      cevap: "Kulaklıklar cihazdan 10 metreye kadar kullanılabilir."
    },
    {
      soru: "Ses kalitesi nasıldır?",
      cevap: "Kulaklıklar güçlü bas, net orta sesler ve temiz tizler sunarak etkileyici bir dinleme deneyimi sağlar."
    },
    {
      soru: "Pil ömrü ne kadar sürer?",
      cevap: "Tam şarj ile pil ömrü 30 saate kadar dayanır."
    },
    {
      soru: "Hangi cihazlarla uyumludur?",
      cevap: "Telefonlar, tabletler ve dizüstü bilgisayarlar dahil tüm Bluetooth cihazlarıyla uyumludur."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="SSS">
      <h2>Sıkça Sorulan Sorular</h2>

      {data.map((item, index) => (
        <div key={index} className="SSS__item">
          <div className="SSS__question" onClick={() => toggle(index)}>
            {item.soru}
          </div>

          {openIndex === index && (
            <div className="SSS__answer">
              {item.cevap}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SSS;