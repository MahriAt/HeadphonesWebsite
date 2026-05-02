import { useState } from "react";
import './styles/Iletisim.scss'

function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email) {
      newErrors.email = "E-posta zorunludur";
    } else if (!validateEmail(email)) {
      newErrors.email = "Geçerli bir e-posta giriniz";
    }

    if (!message) {
      newErrors.message = "Mesaj boş olamaz";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }


    setEmail("");
    setMessage("");
    setErrors({});

    // scroll to top ONLY on success
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="contact">
      <div className="contact__info">
        <h2>Bize Ulaşın</h2>
        <p>Sizden haber almak isteriz.</p>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-posta adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "error-input" : ""}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          placeholder="Mesajınız..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={errors.message ? "error-input" : ""}
        />

        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default ContactSection;