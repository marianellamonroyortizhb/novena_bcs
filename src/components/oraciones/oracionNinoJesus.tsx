import { Link } from "react-router-dom";
function OracionNinoJesus() {
  return (
    <div className="bg-nino-jesus-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-16 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Nino_Jesus_Icon.svg"
          alt="Niño Jesús"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Oración al Niño Jesús
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pt-4">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            Acordaos, ¡oh dulcísimo Niño Jesús! que dijisteis a la venerable
            Margarita del Santísimo Sacramento, y en persona suya a todos
            vuestros devotos, estas palabras tan consoladoras para nuestra pobre
            humanidad, agobiada y doliente.
          </p>
          <p className="mb-3">
            Todo lo que quieras pedir, pídelo por los méritos de mi infancia y
            nada te será negado
          </p>
          <p className="mb-3">
            Llenos de confianza en Vos, oh Jesús, que sois la misma verdad,
            venimos a exponeros toda nuestra miseria.
          </p>
          <p className="mb-3">
            Ayudadnos a llevar una vida santa, para conseguir una eternidad
            bienaventurada.
          </p>
          <p className="mb-3">
            Concedednos, por los méritos infinitos de vuestra encarnación y de
            vuestra infancia, la gracia de la cual necesitamos tanto.
          </p>
          <p className="mb-3">
            Nos entregamos a Vos, oh Niño omnipotente, seguros de que no quedará
            frustrada nuestra esperanza, y de que en virtud de vuestra divina
            promesa, acogeréis y despacharéis favorablemente nuestra súplica.
          </p>
          <h3 className="font-bold mb-3">Amén</h3>
          <Link to="/">
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

export default OracionNinoJesus;
