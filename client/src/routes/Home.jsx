import { useEffect, useState } from "react";
import { fetchContent } from "../lib/api.js";
import Card from "../components/Card.jsx";
import Modal from "../components/Modal.jsx";

export default function Home() {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    fetchContent().then(setData).catch(console.error);
  }, []);

  return (
    <>
      <section className="hero">
        <h1>Acciones pequeñas, impacto grande</h1>
        <p>Explora consejos, tecnologías verdes y mitos comunes.</p>
        <a className="btn" href="/simulador">Calcula tu impacto</a>
      </section>

      {!data ? <p>Cargando…</p> : (
        <>
          <h2>Consejos</h2>
          <div className="grid">
            {data.consejos.map(c => (
              <Card key={c.id} title={c.titulo} onOpen={() => setModal({title:c.titulo, text:c.detalle})}>
                {c.detalle.slice(0, 60)}…
              </Card>
            ))}
          </div>

          <h2>Tecnologías</h2>
          <div className="grid">
            {data.tecnologias.map(t => (
              <Card key={t.id} title={t.nombre} onOpen={() => setModal({title:t.nombre, text:t.beneficio})}>
                {t.beneficio}
              </Card>
            ))}
          </div>

          <h2>Mitos & Realidades</h2>
          <div className="grid">
            {data.mitos.map(m => (
              <Card key={m.id} title={m.mito} onOpen={() => setModal({title:m.mito, text:m.realidad})}>
                {m.realidad}
              </Card>
            ))}
          </div>
        </>
      )}

      <Modal open={!!modal} title={modal?.title} onClose={() => setModal(null)}>
        <p>{modal?.text}</p>
      </Modal>
    </>
  );
}
