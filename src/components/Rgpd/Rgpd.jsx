import './Rgpd.scss';

const Rgpd = () => {
  return (
    <main className="rgpd">
      <h2 className="rgpd-title">Mentions Légales</h2>
      <h3 className="rgpd-subtitle">Éditeur du site</h3>
      <p className="rgpd-text">
        Nom du projet :{' '}
        <strong className="rgpd-strong">Apo&apos;calypse</strong>
      </p>
      <p className="rgpd-text">
        Nom de l&apos;école :{' '}
        <strong className="rgpd-strong">O&apos;Clock</strong>{' '}
      </p>
      <p className="rgpd-text">
        Adresse de l&apos;école :{' '}
        <strong className="rgpd-strong">
          10, rue de Penthièvre, 75008 Paris, France
        </strong>{' '}
      </p>
      <p className="rgpd-text">
        Adresse email de contact :{' '}
        <strong className="rgpd-strong">florence.carlin@oclock.school</strong>{' '}
      </p>

      <h3 className="rgpd-subtitle">Responsable de la publication</h3>
      <p className="rgpd-text">
        Nom et prénom du responsable :{' '}
        <strong className="rgpd-strong">Florence Carlin</strong>
      </p>
      <p className="rgpd-text">
        Statut :{' '}
        <strong className="rgpd-strong">
          étudiant de l&apos;école O&apos;Clock
        </strong>
      </p>

      <h3 className="rgpd-subtitle">Hébergement du site : </h3>
      <p className="rgpd-text">
        Nom de l&apos;hébergeur :{' '}
        <strong className="rgpd-strong">Ionos </strong>
      </p>
      <p className="rgpd-text">
        Adresse de l&apos;hébergeur :{' '}
        <strong className="rgpd-strong">
          7 Place De La Gare 57200 SARREGUEMINES, France{' '}
        </strong>
      </p>

      <h3 className="rgpd-subtitle">Propriété intellectuelle :</h3>
      <p className="rgpd-text">
        Le site Apo&apos;calypse ainsi que l&apos;ensemble de ses contenus
        (textes, images, vidéos, etc.) sont protégés par les lois en vigueur sur
        la propriété intellectuelle et le droit d&apos;auteur. Toute
        reproduction, distribution, modification, adaptation, retransmission ou
        publication, même partielle, des différents éléments du site est
        strictement interdite sans l&apos;accord préalable écrit des étudiants
        responsables du projet et de l&apos;école O&apos;Clock.
      </p>

      <h3 className="rgpd-subtitle">Données personnelles : </h3>
      <p className="rgpd-text">
        Dans le cadre de ce projet de fin de formation, seuls les nom, prénom et
        adresse email des utilisateurs sont collectées afin de créer un compte
        utilisateur. Pour toute question relative à ce sujet, vous pouvez
        contacter le responsable de la publication à l&apos;adresse email :{' '}
        <strong className="rgpd-strong">florence.carlin@oclock.school </strong>
      </p>

      <h3 className="rgpd-subtitle">Cookies : </h3>
      <p className="rgpd-text">
        Le site Apo&apos;calypse n&apos;utilise pas de cookies pour le suivi des
        utilisateurs ou pour la collecte de données personnelles.
      </p>

      <h3 className="rgpd-subtitle">Responsabilité : </h3>
      <p className="rgpd-text">
        Le site Apo&apos;calypse est un projet de fin de formation réalisé par
        les étudiants de l&apos;école O&apos;Clock. Les informations présentes
        sur ce site sont fournies à titre informatif et pédagogique.
        L&apos;école O&apos;Clock et les étudiants responsables du projet ne
        pourront être tenus responsables des dommages directs ou indirects
        pouvant résulter de l&apos;utilisation du site.
      </p>

      <h3 className="rgpd-subtitle">Mise à jour des mentions légales : </h3>
      <p className="rgpd-text">
        Les présentes mentions légales peuvent être modifiées à tout moment sans
        préavis. Nous invitons les utilisateurs à les consulter régulièrement.
      </p>
    </main>
  );
};

export default Rgpd;
