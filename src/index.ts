export default {
	async fetch(request, env, ctx): Promise<Response> {
		/* Set headers. */
		const headers = {
			'content-type': 'image/png'
		}

		// const canvas = env.ASSETS.fetch(request)
		const canvas = await env.ASSETS.fetch('canvas.png')
		return new Response('L1 NodΞRunr Lean Canvas - ' + canvas.length)
		// return new Response(JSON.stringify({ name: "Cloudflare" }), {
        // 	headers,
      	// })
	},
} satisfies ExportedHandler<Env>
