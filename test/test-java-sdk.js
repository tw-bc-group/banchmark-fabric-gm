import { Counter } from 'k6/metrics';
import http from 'k6/http';
import { sleep, check } from 'k6';

const url = 'http://localhost:3000'

// Here is the test path
const path = 'sdk/java/test'

export const requests = new Counter('http_reqs');

export default function () {
  const res = http.get(`${url}/${path}`);

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.indexOf('ok') !== -1,
  });
}