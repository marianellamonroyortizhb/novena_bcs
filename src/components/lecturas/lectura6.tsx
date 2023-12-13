import { Link } from "react-router-dom";
function Lectura6() {
  return (
    <div className="bg-home-pattern bg-no-repeat bg-contain md:bg-right-bottom bg-bottom pb-36 md:pb-54 px-6 md:py-2">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-24 h-24 md:w-20 md:h-20 md:mr-4 rounded-full md:rounded-none"
          src="/img/iconos/Lectura_hoy_Icon.svg"
          alt="Manos en oración"
        />
        <h1 className="text-yellow-main md:text-5xl text-3xl mt-3 md:mt-0 text-center md:text-center">
          Día Sexto
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            Jesús había sido concebido en Nazaret, domicilio de José y María, y
            allí era de creerse que había de nacer, según todas las
            probabilidades.
          </p>
          <p className="mb-3">
            Mas Dios lo tenía dispuesto de otra manera y los profetas habían
            anunciado que el mesías nacería en Belén de Judá, ciudad de David.
          </p>
          <p className="mb-3">
            Para que se cumpliese esa predicción, Dios se sirvió de un medio que
            no parecía tener ninguna relación con este objeto, a saber la orden
            dada por el emperador Augusto, que todos los súbditos del imperio
            romano se empadronasen en el lugar de donde eran originarios.
          </p>
          <p className="mb-3">
            María y José, como descendientes que eran de David, no estaban
            dispensados de ir a Belén. Ni la situación de la Virgen Santísima ni
            la necesidad en que estaba José del trabajo diario que les aseguraba
            la subsistencia, pudo eximirles de este largo y penoso viaje, en la
            estación más rigurosa e incómoda del año.
          </p>
          <p className="mb-3">
            No ignora Jesús en que lugar debe nacer e inspira a sus padres que
            se entreguen a la Providencia, y que de esta manera concurran
            inconscientemente a la ejecución de los designios.
          </p>
          <p className="mb-3">
            Almas interiores, observad este manejo del Divino Niño, porque es el
            más importante de la vida espiritual; aprended que quien se haya
            entregado a Dios ya no ha de pertenecerse a sí mismo, ni ha de
            querer a cada instante sino lo que Dios quiera para él; siguiéndole
            ciegamente aun en las cosas exteriores, tales como el cambio de
            lugar donde quiera que le plazca conducirle.
          </p>
          <p className="mb-3">
            Ocasión tendréis de observar esta dependencia y fidelidad inviolable
            en toda la vida de Jesucristo, y este es el punto sobre el cual se
            han esmerado en imitarle los santos y las almas verdaderamente
            interiores, renunciando absolutamente a su propia voluntad.
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

export default Lectura6;
