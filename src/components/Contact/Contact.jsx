import './Contact.scss';
import mainPicture from '../../assets/picture-contact-page.webp';
import ContactDetail from './ContactDetail';
import profilInfo from '../../data/contact-info';
import Loading from '../Loading/Loading';

const Contact = () => {
  return (
    <main className="main-contact">
      <h2 className="contact-title">Contactez-nous</h2>
      <div className="sections">
        <section
          className="left-section-contact"
          style={{ backgroundImage: `url(${mainPicture})` }}
        >
          {/* <img src={mainPicture} alt="" className="left-section-contact--img" /> */}
        </section>
        <section className="right-section-contact">
          {profilInfo.map((currentProfil) => (
            <ContactDetail key={currentProfil.name} {...currentProfil} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Contact;
