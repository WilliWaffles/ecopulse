import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '15s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<400'],
  },
};

export default function () {
  const url = 'http://localhost:3001/api/feedback';
  const payload = JSON.stringify({
    name: `Tester-${__VU}-${__ITER}`,
    email: `tester${__VU}@example.com`,
    message: 'Prueba de k6 para feedback'
  });
  const params = { headers: { 'Content-Type': 'application/json' } };

  const res = http.post(url, payload, params);

  check(res, {
    'status 200': (r) => r.status === 200,
    'ok=true':    (r) => (r.json('ok') === true),
  });

  sleep(1);
}
