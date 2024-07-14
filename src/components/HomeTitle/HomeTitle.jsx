import './HomeTitle.scss';

const HomeTitle = () => {
  return (
    <div className="home-title-container">
      <h1 className="home-title">APO&apos;CALYPSE</h1>
      <p className="home-paragraph">
        Bienvenue sur <strong>Apo&apos;calypse</strong> ! Dans un monde où les
        zombies ont envahi nos rues, notre site est votre <strong>guide</strong>{' '}
        ultime pour rester en vie. Consultez les{' '}
        <strong>points d&apos;intérêt</strong> près de chez vous (zombies,
        abris, eau, et plus encore), ajoutez vos propres trouvailles, et{' '}
        <strong>retrouvez des proches</strong> perdus. Parce que même en pleine
        apocalypse, il y a toujours du Wi-Fi et de l&apos;espoir !
      </p>
    </div>
  );
};

export default HomeTitle;
