import { Link } from "react-router-dom";
function Lectura9() {
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
          Día Noveno
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            La noche ha cerrado del todo en las campíñas de Belén.
          </p>
          <p className="mb-3">
            Desechados por los hombres, y viéndose sin abrigo, María y José han
            salido de la inhospitalaria población y se han refugiado en una
            gruta que se encontraba al pie de la colina.
          </p>
          <p className="mb-3">
            Seguía a la reina de los ángeles el jumento que le había servido de
            humilde cabalgadura durante el viaje, y en aquélla cueva hallaron un
            manso buey, dejado allí probablemente por alguno de los caminantes
            que habían ido a buscar hospedaje en la cuidad.
          </p>
          <p className="mb-3">
            El Divino Niño, desconocido por sus criaturas racionales, va a tener
            que acudir a los irracionales para que calienten con su tibio
            aliento la atmósfera helada de esa noche de invierno, y le
            manifiesten con esto y con su humilde actitud el respeto y la
            adoración que le había negado Belén.
          </p>
          <p className="mb-3">
            La rojiza linterna que José tiene en la mano ilumina tenuemente ese
            pobrísimo recinto, ese pesebre lleno de paja que es figura profética
            de las maravillas del altar, y de la íntima y prodigiosa unión
            eucarística que Jesús ha de contraer con los hombres.
          </p>
          <p className="mb-3">
            María está en oración en medio de la gruta, y así van pasando
            silenciosamente las horas de esa noche llena de misterio.
          </p>
          <p className="mb-3">
            Pero ha llegado la medianoche, y de repente vemos dentro de ese
            pesebre, poco antes vacío, al divino Niño esperado, vaticinado,
            deseado durante cuatro mil años con inefable anhelo.
          </p>
          <p className="mb-3">
            A sus pies se postra su Santísima Madre, en los transportes de una
            adoración de la cual nada puede dar idea.
          </p>
          <p className="mb-3">
            José también se acerca y le rinde el homenaje con que inaugura su
            misterioso e imponderable oficio de padre adoptivo del Redentor de
            los hombres.
          </p>
          <p className="mb-3">
            La multitud de ángeles que desciende de los cielos a contemplar esa
            maravilla sin par, dejan estallar su alegría y hacen vibrar en los
            aires las armonías de ese Gloria in Excelsis que es el eco de la
            adoración que se produce en torno del Altísimo, hecha perceptible
            por un instante a los oídos de la pobre Tierra.
          </p>
          <p className="mb-3">
            Convocados por ellos, vienen en tropel los pastores de la comarca a
            adorar al recién nacido y presentarle sus humildes ofrendas.
          </p>
          <p className="mb-3">
            Ya brilla en oriente la misteriosa estrella de Jacob, y ya se pone
            en marcha hacia Belén la caravana espléndida de los Reyes Magos, que
            dentro de pocos días vendrán a depositar a los pies del Divino Niño
            el oro, el incienso, y la mirra, que son símbolos de la caridad, la
            adoración y la mortificación.
          </p>
          <p className="mb-3">
            ¡Oh adorado Niño! Nosotros también, los que hemos hecho esta novena
            para prepararnos para el día de vuestra Navidad, queremos ofreceros
            nuestra pobre adoración.
          </p>
          <p className="mb-3">
            ¡No la rechacéis! ¡Ven a nuestras almas, venid a nuestros corazones
            llenos de amor!
          </p>
          <p className="mb-3">
            Encended en ellos la devoción a vuestra santa infancia, no
            intermitente y sólo circunscrita al tiempo de vuestra Navidad, sino
            siempre y en todos los tiempos; devoción que fielmente practicada y
            celosamente propagada, nos conduzca a la vida eterna, librándonos
            del pecado y sembrando nosotros todas las virtudes cristianas.
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

export default Lectura9;
