import { Link } from "react-router-dom";
function Lectura8() {
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
          Día Octavo
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            Llegan a Belén José y María, buscando hospedaje en los mesones; pero
            no lo encuentran ya por hallarse todo ocupado, ya porque se les
            desechase a causa de su pobreza.
          </p>
          <p className="mb-3">
            Sin embargo, puede turbar la paz interior de los que están fijos en
            Dios.
          </p>
          <p className="mb-3">
            Si José experimentaba sorpresa cuando era rechazado de casa en casa,
            porque pensaba en María y en el Niño, sonreíase también con tanta
            tranquilidad cuando fijaba sus miradas en su casta esposa.
          </p>
          <p className="mb-3">
            El niño aún no nacido regocijábase de aquellas negativas que eran el
            preludio de sus humillaciones venideras.
          </p>
          <p className="mb-3">
            Cada voz áspera, el nido de cada puerta que se cerraba ante ellos,
            era lo que había venido a buscar.
          </p>
          <p className="mb-3">
            El deseo de esas humillaciones era lo que había contribuido a
            hacerle tomar la forma humana.
          </p>
          <p className="mb-3">
            ¡Oh divino niño de Belén! Estos días que tantos han pasado en
            fiestas y diversiones o descansando muellemente en cómodas y ricas
            mansiones, han sido para vuestros padres un día de fatiga y
            vejaciones de toda clase.
          </p>
          <p className="mb-3">
            ¡Ay! El espíritu de Belén es el de un mundo que ha olvidado a Dios,.
            ¡Cuántas veces no ha sido también el nuestro¡ ¿No cerramos
            continuamente con ruda ignorancia la puerta a los llamamientos de
            Dios, que nos solicita convertirnos, o santificarnos o conformarnos
            con su voluntad? ¿No hacemos mal uso de nuestras penas,
            desconociendo su carácter celestial con que cada uno a su modo lo
            lleva grabado en si? Dios viene a nosotros muchas veces en la vida,
            pero no conocemos su faz, o le reconocemos hasta que nos vuelve la
            espalda y se aleja después de nuestra negativa.
          </p>
          <p className="mb-3">
            Se pone el sol de 24 de diciembre detrás de los tejados de Belén y
            sus últimos rayos doran las cimas de las rocas escarpadas que lo
            rodean.
          </p>
          <p className="mb-3">
            Hombres groseros codean rudamente al Señor en las calles de aquella
            aldea oriental, y cierran sus puertas al ver a su madre, La bóveda
            de los cielos aparece purpurina por encima de aquellas colinas
            frecuentadas por los pastores.
          </p>
          <p className="mb-3">Las estrellas van apareciendo una tras otra.</p>
          <p className="mb-3">Algunas horas más y aparecerá el Verbo eterno.</p>
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

export default Lectura8;
