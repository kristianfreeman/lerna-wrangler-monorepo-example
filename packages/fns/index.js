const Router = require('./router')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const r = new Router()
  r.get(
    '/',
    () =>
      new Response(JSON.stringify({ status: 'ok' }), {
        headers: { 'Content-type': 'application/json' },
      })
  )
  const resp = await r.route(request)
  return resp
}
