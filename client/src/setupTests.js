import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
const server = setupServer(
  http.get('http://localhost:3001/api/content', ()=>HttpResponse.json({consejos:[], tecnologias:[], mitos:[]}))
);
beforeAll(()=>server.listen({onUnhandledRequest:'warn'}));
afterEach(()=>server.resetHandlers());
afterAll(()=>server.close());
