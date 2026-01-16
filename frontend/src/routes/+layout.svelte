<script>
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<!-- Bootstrap 5 CDN (applies globally) -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
		integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
		crossorigin="anonymous"
	/>
	<!-- Global stylesheet (served from static/css/style.css) -->
	<link rel="stylesheet" href="/css/style.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

<slot />
