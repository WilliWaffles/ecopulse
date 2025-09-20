import http from 'k6/http';
import { check, sleep } from 'k6';

// 20 usuarios virtuales por 30s
export const options = {
  vus: 20,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'], // <1% errores
    http_req_duration: ['p(95)<300'], // p95 < 300 ms
  },
};

export default function () {
  const res = http.get('http://localhost:3001/api/content');

  check(res, {
    'status 200': (r) => r.status === 200,
    'content-type json': (r) => String(r.headers['Content-Type'] || '').includes('application/json'),
  });

  sleep(1);
}
