import { Link } from "react-router-dom";
function Lectura2() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-54 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Lectura_hoy_Icon.svg"
          alt="Manos en oración"
          title="Manos en oración"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Día Segundo
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            El verbo eterno se halla a punto de tomar su naturaleza creada en la
            santa casa de Nazaret, en donde moraban María y José.
          </p>
          <p className="mb-3">
            Cuando la sombra del decreto divino vino a deslizarse sobre ella,
            María estaba sola y engolfada en la oración.
          </p>
          <p className="mb-3">
            Pasaba las silenciosas horas de la noche en la unión más estrecha
            con Dios; y mientras oraba, el Verbo tomó posesión de su morada
            creada.
          </p>
          <p>
            Sin embargo, no llegó inopinadamente: antes de presentarse envió a
            un mensajero, que fue Arcángel San Gabriel para pedir a María de
            parte de Dios su consentimiento para la encarnación.
          </p>
          <p className="mb-3">
            El creador no quiso efectuar ese gran misterio sin la aquiescencia
            de su criatura.
          </p>
          <p className="mb-3">
            Aquel momento fue muy solemne: era potestativo en María rehusar. Con
            qué adorables delicias, con qué inefable complacencia aguardaría la
            Santísima Trinidad a que María abriese los labios y pronunciase el
            'sí' que debió ser suave melodía para sus oídos, y con el cual se
            conformaba su profunda humildad a la omnipotente voluntad divina.
          </p>
          <p className="mb-3">
            La Virgen Inmaculada ha dado su asentimiento. El arcángel ha
            desaparecido.
          </p>
          <p className="mb-3">
            Dios se ha revestido de una naturaleza creada; la voluntad eterna
            está cumplida y la creación completa.
          </p>
          <p className="mb-3">
            En las regiones del mundo angélico estalla el júbilo inmenso, pero
            la Virgen María ni le oía ni le hubiese prestado atención a él.
          </p>
          <p className="mb-3">
            Tenía inclinada la cabeza y su alma estaba sumida en el silencio que
            se asemejaba al de Dios.
          </p>
          <p className="mb-3">
            El Verbo se había hecho carne, y aunque todavía invisible para el
            mundo, habitaba ya entre los hombres que su inmenso amor había
            venido a rescatar.
          </p>
          <p className="mb-3">
            No era ya sólo el Verbo eterno; era el Niño Jesús revestido de la
            apariencia humana, y justificando ya el elogio que de Él han hecho
            todas las generaciones en llamarle el más hermoso de los hijos de
            los hombres.
          </p>
          <Link to="/lecturas">
            <h3 className="text-xl text-yellow-main font-bold mt-14">
              <img
                className="w-8 h-8 rounded-full inline"
                src="/img/iconos/Flecha_Icon.svg"
                alt="Flecha para volver"
                title="Flecha para volver"
              />
              Volver
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Lectura2;
