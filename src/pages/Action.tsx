import Disclosure from "./../components/action/Disclosure";
import Actionbanner from "../components/action/Actionbanner";

const Action = () => {
  return (
    <div className="min-h-screen pt-16">
      
      {/* 1. The Banner with Image sits outside the max-w container, at the top */}
      <Actionbanner />

      {/* 2. Main Content Area */}
      <div className="max-w-5xl mx-auto p-6 bg-gray-50">

        <Disclosure title="Päivärytmi">
          <p className="mb-4">
            Päiväkotimme on avoinna arkisin 7.00 - 17.00. Päivän aikana lapsille tarjotaan aamupala, lounas ja välipala. Aterioilla harjoittelemme itsenäistä ruoan ottamista sekä kauniita pöytätapoja.
          </p>
          <p className="mb-4">
            Aamupäivisin lapset puuhaavat montessorivälineistön parissa. He voivat tutkia ja tehdä havaintoja ympäröivästä maailmasta omaan kehityskauteensa sopivalla tasolla.
          </p>
          <p className="mb-4">Iltapäivä on leikkien, pelien ja rakentelun aikaa.</p>
          <p className="mb-4">Ulkoilemme päiväkotimme turvallisella pihalla. Toisinaan suuntaamme retkille päiväkodin lähimaastoihin.</p>
          <p className="mb-4">Kaksi päiväkotimummoamme käyvät säännöllisesti puuhaamassa ja leipomassa lasten kanssa.</p>
          <p className="mb-4">Haluamme tehdä lapsen päivän kulusta mahdollisimman levollisen. Välttämällä turhaa kiirettä luomme rauhallisen toimintaympäristön, jossa jokaisen on hyvä olla. Meillä on kodikas tunnelma ja pienessä yhteisössämme kaikki tuntevat toisensa.</p>
          <p className="mb-4">Heinäkuun olemme suljettu. Lisäksi henkilökunnallamme on 2-4 suunnittelupäivää vuodessa, jolloin päiväkoti on osittain tai kokonaan suljettu.</p>
        </Disclosure>

        <Disclosure title="Daily Schedule">
          <p>This is the English version of the schedule...</p>
        </Disclosure>

        <Disclosure title="Taide- ja musiikkikasvatus">
          <p>Details about art and music education go here.</p>
        </Disclosure>

      </div>
    </div>
  );
};

export default Action;