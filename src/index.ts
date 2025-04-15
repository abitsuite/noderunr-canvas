export default {
	/* Set headers. */
	const headers = {
		'content-type': 'image/png'
	}

	async fetch(request, env, ctx): Promise<Response> {
		return env.ASSETS.fetch('canvas.png')
		// const canvas = env.ASSETS.fetch(request)
		// // return new Response('L1 NodΞRunr Lean Canvas')
		// return new Response(JSON.stringify({ name: "Cloudflare" }), {
        // 	headers,
      	// })
	},
} satisfies ExportedHandler<Env>
