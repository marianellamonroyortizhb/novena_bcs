import { Link } from "react-router-dom";
function OracionSanJose() {
  return (
    <div className="bg-san-jose-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-52 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/San_Jose_Icon.svg"
          alt="San José"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Oración a San José
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20 pt-4">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-4 font-medium">
            ¡Oh Santísimo José, esposo de María y padre adoptivo de Jesús!,
            infinitas gracias doy a Dios porque os escogió para tan altos
            ministerios y os adornó con todos los dones proporcionados a tan
            excelente grandeza.
          </p>
          <p className="mb-4">
            Os ruego, por el amor que tuvisteis al divino Niño, me abraséis en
            fervorosos deseos de verle y recibirle sacramentalmente, mientras en
            su divina esencia le veo y le gozo en el Cielo.
          </p>
          <h3 className="font-bold mb-3">Amén</h3>
          <small className="mb-4 text-yellow-main text-sm">
            Padrenuestro, Avemaría y Gloria
          </small>
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

export default OracionSanJose;
