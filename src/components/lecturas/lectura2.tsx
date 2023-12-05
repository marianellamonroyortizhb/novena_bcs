import { Link } from "react-router-dom";
function Lectura1() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right bg-bottom">
      <div className="flex md:justify-left self-center lg:justify-left md:pt-10 pt-4 pb-4">
        <img
          className="w-12 h-12 mr-2 rounded-full"
          src="/img/iconos/Lectura_hoy_Icon.svg"
          alt=""
        />
        <h1 className="text-yellow-main text-5xl">Día segundo</h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            En el principio de los tiempos el Verbo reposaba en el seno de su
            Padre en lo más alto de los cielos; allí era la causa, a la par que
            el modelo de toda la creación.
          </p>
          <p className="mb-3">
            En esas profundidades de una incalculable eternidad permanecía el
            Niño de Belén antes de que se dignara bajar a la Tierra y tomara
            visiblemente posesión de la gruta de Belén.
          </p>
          <p className="mb-3">
            Allí es donde debemos buscar sus principios que jamás han
            comenzando; de allí debemos datar la genealogía de lo eterno, que no
            tiene antepasados y contemplar la vida de complacencia infinita que
            allí llevaba.
          </p>
          <p className="mb-3">
            La vida del Verbo eterno en el seno de su Padre era una vida
            maravillosa y sin embargo, ¡misterio sublime!, busca otra morada,
            una mansión creada.
          </p>
          <p className="mb-3">
            No era porque en su mansión eterna faltase algo a su infinita
            felicidad, sino porque su misericordia infinita anhelaba la
            redención y la salvación del género humano, que sin Él no podría
            verificarse.
          </p>
          <p className="mb-3">
            El pecado de Adán había ofendido a Dios y esa ofensa infinita no
            podía ser condonada sino por los méritos del mismo Dios.
          </p>
          <p className="mb-3">
            La raza de Adán había desobedecido y merecido un castigo eterno; era
            pues necesario para salvarla y satisfacer su culpa, que Dios, sin
            dejar el cielo, tomase la forma del hombre sobre la Tierra y con la
            obediencia a los designios de su Padre expiase aquella
            desobediencia, ingratitud y rebeldía.
          </p>
          <p className="mb-3">
            Era necesario, en las miras de su amor, que tomase la forma, las
            debilidades e ignorancias sistemáticas del hombre; que creciese para
            darle crecimiento espiritual; que sufriese, para enseñarle a morir a
            sus pasiones y a su orgullo.
          </p>
          <p className="mb-3">
            Y por eso el Verbo eterno, ardiendo en deseos de salvar al hombre,
            resolvió hacerse hombre también y así redimir al culpable.
          </p>
          <Link to="/lecturas">
            <h3 className="text-xl text-yellow-main font-bold mt-14">
              <img
                className="w-8 h-8 rounded-full inline"
                src="/img/iconos/Flecha_Icon.svg"
                alt=""
              />
              Volver
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Lectura1;
