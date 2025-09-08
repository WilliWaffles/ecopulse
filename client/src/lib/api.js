const API = "http://localhost:3001";

export async function fetchContent() {
  const res = await fetch(`${API}/api/content`);
  if (!res.ok) throw new Error("Error al cargar contenido");
  return res.json();
}

export async function sendFeedback(payload) {
  const res = await fetch(`${API}/api/feedback`, {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}
