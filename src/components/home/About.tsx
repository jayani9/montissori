import React from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* SECTION 1 */}
      <section
        className="relative bg-white text-white py-16 px-12 md:px-24"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed opacity-90 text-amber-700 ">
            Montessoripedagogiikka on aatteellisesti sitoutumaton kasvatusmenetelmä, joka perustuu italialaisen pedagogin ja lääkärin Maria Montessorin (1870-1952) luomaan kasvatusajatteluun. Montessorimenetelmää käytetään kouluissa ja päiväkodeissa ympäri maailmaa.
          </p>
          <p className="text-xl leading-relaxed opacity-90 text-amber-700 pt-4">
            Montessori pedagogy is an ideologically neutral educational method based on the educational philosophy created by the Italian educator and physician Maria Montessori (1870-1952). The Montessori method is used in schools and daycare centers around the world.
          </p>
        </div>
      </section>
      {/* SECTION 2 */}
      <section
  className="relative bg-[#4a90b5] text-white py-32 px-12 md:px-24"
  style={{
    /* SECTION 1 PATH (Stays same): polygon(0 10%, 100% 0, 100% 100%, 0 90%)
       Points:
       (0 10%)   -> Top Left (Dip down)
       (100% 0)  -> Top Right (Stay up)
       (100% 100%) -> Bottom Right (Stay down)
       (0 90%)   -> Bottom Left (Go up)
       Result: Box slants downwards ↘️ from left to right.
    */
    clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",
    zIndex: 10,
  }}
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">Aktiivinen lapsi</h2>
    <p className="text-lg leading-relaxed opacity-90">
      Montessoripedagogiikassa lapsi nähdään tiedonjanoisena oppijana, joka tutkii aktiivisesti ympäristöään. Havainnoimalla lapsia kasvattaja saa tärkeää tietoa kunkin lapsen kehitystasosta ja siitä, millaista ohjausta ja oppimismateriaalia hän tarvitsee. Kasvattaja kunnioittaa lapsen pyrkimystä ohjata itse itseään ja valita opettelemiaan asioita ja taitoja.
    </p>
  </div>
</section>

<section
  className="relative bg-white text-gray-700 py-40 px-12 md:px-24"
  style={{
    /* SECTION 2 PATH (The "pointing" or "opposite" style):
       Points:
       (0 0)     -> Top Left
       (100% 10%) -> Top Right (Move down to meet the blue angle)
       (100% 100%) -> Bottom Right
       (0 90%)   -> Bottom Left (Creates the final angle pointing down left)
       Result: Top slants upwards ↗️ from left to right.
    */
    clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
    
    // Pull the section up by about 100px so the two slants sit on top of each other
    marginTop: "-100px", 
    
    // Safety Padding: Since the top-right is lower, we increase the padding-top
    // so the English header "The Active Child" doesn't get hidden
    paddingTop: "150px", 
    zIndex: 5,
  }}
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">The Active Child</h2>
    <p className="text-lg leading-relaxed text-gray-700">
      In Montessori pedagogy, a child is seen as a curious learner who actively explores their environment. By observing children, educators gain valuable insights into each child's developmental stage and their needs for guidance and learning materials. Educators respect the child's desire to guide themselves and choose what they want to learn and master.          </p>
  </div>
</section>

      {/* SECTION 3 */}
      <section
        className="relative bg-red-800 text-gray-800 py-32 px-12 md:px-24"
        style={{
          /* (0% 0%) -> Top Left stays top
             (100% 15%) -> Top Right moves down
             (0% 85%) -> Bottom Left moves up
          */
          clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)",
          marginTop: "-100px", // Increased overlap to hide gaps
          zIndex: 10,
          paddingTop: "150px", // Extra padding to keep text clear of the slant
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-[#e67e22] mb-6">
              Montessoripedagogiikka
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Montessoripedagogiikka on aatteellisesti sitoutumaton
              kasvatusmenetelmä, joka perustuu italialaisen pedagogin ja
              lääkärin Maria Montessorin luomaan kasvatusajatteluun. Tämä osio
              kallistuu vastakkaiseen suuntaan luoden dynaamisen polun silmälle.
            </p>
          </div>

          {/* Montessori material image container */}
          <div className="flex-1 w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border-4 border-white">
            <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
              [Montessori Materials Photo]
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative bg-[#f39c12] text-white py-32 px-12"
        style={{
          /* POINTS:
            (0 0)       -> Top Left
            (50% 10%)   -> Top Middle (creates a dip)
            (100% 0)    -> Top Right
            (100% 90%)  -> Bottom Right
            (50% 100%)  -> Bottom Middle (creates a point)
            (0 90%)     -> Bottom Left
          */
          clipPath: "polygon(0 0, 50% 10%, 100% 0, 100% 90%, 50% 100%, 0 90%)",
          marginTop: "-60px",
          zIndex: 15
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Miksi valita Montessori?</h2>
          <h3 className="text-xl italic mb-8 opacity-90 text-white/80">Why choose Montessori?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-bold mb-2">Itsenäisyys</h4>
              <p className="text-sm">Lapsi oppii tekemään itse ja luottamaan kykyihinsä.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-bold mb-2">Yksilöllisyys</h4>
              <p className="text-sm">Jokainen lapsi etenee omaan tahtiinsa.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-bold mb-2">Keskittyminen</h4>
              <p className="text-sm">Rauhallinen ympäristö tukee syvää oppimista.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;