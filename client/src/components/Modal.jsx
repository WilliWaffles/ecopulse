// Modal.jsx
import { useEffect, useRef } from "react";

export default function Modal({ open, title, children, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (open) ref.current?.focus();
  }, [open]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{position:"fixed", inset:0, background:"rgba(0,0,0,.4)", display:"grid", placeItems:"center", padding:"1rem"}}
      onClick={onClose}
    >
      <div className="card" style={{maxWidth:"560px"}} onClick={e=>e.stopPropagation()}>
        <h3>{title}</h3>
        <div>{children}</div>
        <div style={{display:"flex", justifyContent:"flex-end", marginTop:"1rem"}}>
          <button className="btn" onClick={onClose}>Cerrar</button>
        </div>
      </div>
      <span tabIndex={-1} ref={ref} />
    </div>
  );
}
