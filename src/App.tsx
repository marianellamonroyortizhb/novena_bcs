import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gozos from "./components/gozos/gozos";
import Footer from "./components/home/footer";
import Header from "./components/home/header";
import Home from "./components/home/home";
import Lectura1 from "./components/lecturas/lectura1";
import Lectura2 from "./components/lecturas/lectura2";
import Lectura3 from "./components/lecturas/lectura3";
import Lectura4 from "./components/lecturas/lectura4";
import Lectura5 from "./components/lecturas/lectura5";
import Lectura6 from "./components/lecturas/lectura6";
import Lectura7 from "./components/lecturas/lectura7";
import Lectura8 from "./components/lecturas/lectura8";
import Lectura9 from "./components/lecturas/lectura9";
import Lecturas from "./components/lecturas/lecturas";
import OracionDiaria from "./components/oraciones/oracionDiaria";
import OracionNinoJesus from "./components/oraciones/oracionNinoJesus";
import OracionSanJose from "./components/oraciones/oracionSanJose";
import OracionVirgenMaria from "./components/oraciones/oracionVirgenMaria";
import Villancico1 from "./components/villancicos/villancico1";
import Villancico2 from "./components/villancicos/villancico2";
import Villancico3 from "./components/villancicos/villancico3";
import Villancico4 from "./components/villancicos/villancico4";
import Villancico5 from "./components/villancicos/villancico5";
import Villancico6 from "./components/villancicos/villancico6";
import Villancicos from "./components/villancicos/villancicos";

function App() {
  return (
    <main className="flex flex-col mx-auto max-w-7xl min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="oracion-diaria" element={<OracionDiaria />} />
        <Route path="oracion-virgen-maria" element={<OracionVirgenMaria />} />
        <Route path="oracion-san-jose" element={<OracionSanJose />} />
        <Route path="oracion-nino-jesus" element={<OracionNinoJesus />} />
        <Route path="gozos" element={<Gozos />} />
        <Route path="lecturas" element={<Lecturas />} />
        <Route path="lecturas/dia-primero" element={<Lectura1 />} />
        <Route path="lecturas/dia-segundo" element={<Lectura2 />} />
        <Route path="lecturas/dia-tercero" element={<Lectura3 />} />
        <Route path="lecturas/dia-cuarto" element={<Lectura4 />} />
        <Route path="lecturas/dia-quinto" element={<Lectura5 />} />
        <Route path="lecturas/dia-sexto" element={<Lectura6 />} />
        <Route path="lecturas/dia-septimo" element={<Lectura7 />} />
        <Route path="lecturas/dia-octavo" element={<Lectura8 />} />
        <Route path="lecturas/dia-noveno" element={<Lectura9 />} />
        <Route path="villancicos" element={<Villancicos />} />
        <Route
          path="villancicos/anton-tiruliruliru"
          element={<Villancico1 />}
        />
        <Route
          path="villancicos/campana-sobre-campana"
          element={<Villancico2 />}
        />
        <Route path="villancicos/tutaina" element={<Villancico3 />} />
        <Route
          path="villancicos/los-peces-en-el-rio"
          element={<Villancico4 />}
        />
        <Route path="villancicos/la-nanita-nana" element={<Villancico5 />} />
        <Route path="villancicos/noche-de-paz" element={<Villancico6 />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
