/* Import image data. */
import canvasB64 from './canvasB64'

export default {
	async fetch(request, env, ctx): Promise<Response> {
		/* Set headers. */
		const headers = {
			'content-type': 'image/png'
		}

		/* Decode canvas. */
		const canvas = Buffer.from(canvasB64, 'base64')

		// return new Response(canvas, { headers })
		return new Response('L1 NodΞRunr Lean Canvas is' + (canvas ? canvas.length : 'n/a'), 'bytes')
	},
} satisfies ExportedHandler<Env>
