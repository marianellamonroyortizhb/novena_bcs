import { Link } from "react-router-dom";
function Lectura3() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-54 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Lectura_hoy_Icon.svg"
          alt="Manos en oración"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Día Tercero
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            Así había comenzado su vida encarnada el Niño Jesús.
          </p>
          <p className="mb-3">
            Consideremos el alma gloriosa y el santo cuerpo que había tomado,
            adorándolos profundamente.
          </p>
          <p className="mb-3">
            Admirado en el primer lugar en el alma de ese Divino Niño,
            considerarnos en ella la plenitud de su gracia santificadora; la de
            su ciencia beatífica, por lo cual desde el primer momento de su vida
            vio la divina esencia más claramente que todos los ángeles y leyó lo
            pasado y lo por venir con todos sus arcanos conocimientos.
          </p>
          <p className="mb-3">
            No supo por adquisición nada que no supiese por infusión desde el
            primer momento de su ser; pero Él adoptó todas las enfermedades de
            nuestra naturaleza a que dignamente podía someterse, aun cuando no
            fuese necesario para la grande obra que debía cumplir.
          </p>
          <p className="mb-3">
            Pidámosle que sus divinas facultades suplan la debilidad de las
            nuestras y les den nueva energía; que su memoria nos enseñe a
            recordar sus beneficios, su entendimiento a pensar en Él, su
            voluntad a no hacer sino lo que Él quiere y en servicio suyo.
          </p>
          <p className="mb-3">
            Del alma del Niño Jesús pasemos ahora a su cuerpo, que era un mundo
            de maravillas, una obra maestra de la mano de Dios.
          </p>
          <p className="mb-3">
            No era como el nuestro, una traba para el alma; era, por el
            contrario, un nuevo elemento de santidad.
          </p>
          <p className="mb-3">
            Quiso que fuese pequeño y débil como el de los niños, y sujeto a
            todas las incomodidades de la infancia, para asemejarse más a
            nosotros y participar de nuestras humillaciones.
          </p>
          <p className="mb-3">
            El Espíritu Santo formó ese cuerpecillo divino con tal delicadeza y
            tal capacidad de sentir, que pudiese sufrir el exceso para cumplir
            la grande obra de nuestra redención.
          </p>
          <p className="mb-3">
            La belleza de ese cuerpo divino fue superior a cuanto se ha
            imaginado jamás; la divina sangre que por sus venas empezó a
            circular desde el momento de la encarnación es la que lava todas las
            manchas del mundo culpable.
          </p>
          <p className="mb-3">
            Pidámosle que lave las nuestras en el sacramento de la penitencia,
            para que el día de su Navidad nos encuentre purificados, perdonados
            y dispuestos a recibirle con amor y provecho espiritual.
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

export default Lectura3;
