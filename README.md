NextJS versions >=13.3.0 double-proxy rewrites in `next.config.js`

1. run `node express.js` to start a server on Port 3001
2. run `npm run dev` to start NextJS on Port 3000
3. Run `curl http://localhost:3000/api/test`

Proxy headers appear twice:

```
x-forwarded-for:   ::ffff:127.0.0.1,::ffff:127.0.0.1
x-forwarded-port:  3000,3000
x-forwarded-proto: http,http
```

On 13.2.4 and below they correctly appear only once:

```
x-forwarded-for:   ::ffff:127.0.0.1
x-forwarded-port:  3000
x-forwarded-proto: http
```
