import { Link } from "react-router-dom";
function Lectura5() {
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
          Día Quinto
        </h1>
      </div>
      <div className="grid md:grid-cols-2 pb-20">
        <div className="mx-auto max-w-2xl py-2 lg:max-w-none lg:py-4 text-white">
          <p className="mb-3">
            Ya hemos visto la vida que llevaba el Niño Jesús en el seno de su
            purísima Madre; veamos hoy toda la vida que llevaba también María
            durante el mismo espacio de tiempo.
          </p>
          <p className="mb-3">
            Necesidad hoy de que no tengamos en ella si queremos comprender, en
            cuanto es posible a nuestra limitada capacidad, los sublimes
            misterios de la encarnación y el modo como hemos de corresponder a
            ellos.
          </p>
          <p className="mb-3">
            María no cesaba de aspirar por el momento en que gozaría de esa
            visión beatifica terrestre; la faz de Dios encarnado.
          </p>
          <p className="mb-3">
            Estaba a punto de ver aquella faz humana que debía iluminar el cielo
            durante toda la eternidad, Iba a leer el amor filial en aquellos
            mismos ojos cuyos rayos deberían esparcir para siempre la felicidad
            en millones de elegidos.
          </p>
          <p className="mb-3">
            Iba a ver aquel rostro todos los días, a todas horas, cada instante,
            durante muchos años. Iba a verle en la ignorancia aparente de la
            infancia, en los encantos particulares de la juventud y en la
            serenidad reflexiva de la edad madura.
          </p>
          <p className="mb-3">
            Haría todo lo que quisiese de aquella faz divina; podría estrecharla
            contra la suya con toda la libertad del amor materno; cubrir de
            besos los labios que deberían pronunciar la sentencia a todos los
            hombres; contemplarla a su gusto durante su sueño o despierta, hasta
            que la hubiese aprendido de memoria...¡cuán ardientemente deseaba
            ese día!.
          </p>
          <p className="mb-3">
            Tal era la expectativa de María... era inaudita en sí misma, mas no
            por eso dejaba de ser el tipo magnífico de toda la vida cristiana.
          </p>
          <p className="mb-3">
            No nos contentemos con admirar a Jesús residiendo en María, sino por
            esencia, potencia y presencia.
          </p>
          <p className="mb-3">
            Sí, Jesús nace continuamente en nosotros y de nosotros, por las
            buenas obras que nos hace capaces de cumplir y por nuestra
            cooperación a la gracia; de manera que el alma del que se halla en
            gracia es un seno perpetuo de María, un Belén interior sin fin.
          </p>
          <p className="mb-3">
            Después de la comunión Jesús habita en nosotros, durante algunos
            instantes, real y sustancialmente como Dios y como hombre, porque el
            mismo Niño que estaba en María está también en el Santísimo
            Sacramento.
          </p>
          <p className="mb-3">
            ¿Qué es todo esto sino una participación de la vida de María durante
            esos maravillosos meses, y una expectativa llena de delicias como la
            suya.
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

export default Lectura5;
