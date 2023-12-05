import { Link } from "react-router-dom";
function OracionSanJose() {
  return (
    <div className="bg-san-jose-pattern bg-no-repeat bg-contain bg-right-bottom px-6 py-2">
      <div className="flex justify-left">
        <img
          className="w-12 h-12 mr-2 rounded-full"
          src="/img/iconos/San_Jose_Icon.svg"
          alt=""
        />
        <h1 className="text-yellow-main text-5xl">Oración a San José</h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
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
          <h3 className="font-bold">Amén</h3>
          <small className="mb-4 text-yellow-main">
            Se reza tres veces el Avemaría
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
