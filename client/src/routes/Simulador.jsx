import { useState } from "react";
import { sendFeedback } from "../lib/api.js";

export default function Simulador() {
  const [kmsBici, setKmsBici] = useState(5);
  const [focos, setFocos] = useState(5);
  const [resultado, setResultado] = useState(0);

  const calc = () => {
    // cálculo simplificado:
    // 0.21 kg CO2/km por carro reemplazado por bicicleta
    // 6 kg/mes por 5 focos LED
    const ahorroBici = kmsBici * 0.21 * 20; // 20 días al mes suponiendo que una persona va 5 dias a su trabajo
    const ahorroLED = (focos / 5) * 6;
    setResultado(Math.round((ahorroBici + ahorroLED) * 10) / 10);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    const res = await sendFeedback(payload);
    alert(res.msg || "Enviado");
    e.currentTarget.reset();
  };

  return (
    <>
      <h1>Simulador de ahorro CO₂</h1>
      <div className="card">
        <label>Kilómetros en bici al día: {kmsBici}
          <input type="range" min="0" max="20" value={kmsBici} onChange={e=>setKmsBici(+e.target.value)} />
        </label>
        <label>Focos LED instalados: {focos}
          <input type="range" min="0" max="20" value={focos} onChange={e=>setFocos(+e.target.value)} />
        </label>
        <button className="btn" onClick={calc}>Calcular</button>
        <p style={{marginTop:"1rem"}}>Ahorro estimado: <strong>{resultado}</strong> kg CO₂/mes</p>
      </div>

      <h2>¿Comentarios?</h2>
      <form className="card" onSubmit={onSubmit}>
        <label>Nombre <input name="name" required /></label>
        <label>Email <input type="email" name="email" required /></label>
        <label>Mensaje <textarea name="message" required rows="3" /></label>
        <button className="btn">Enviar</button>
      </form>
    </>
  );
}
