// Card.jsx
export default function Card({ title, children, onOpen }) {
  return (
    <div className="card">
      <h3 style={{marginTop:0}}>{title}</h3>
      <p>{children}</p>
      {onOpen && <button className="btn" onClick={onOpen}>Más info</button>}
    </div>
  );
}
