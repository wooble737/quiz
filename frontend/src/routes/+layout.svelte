<script>
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<!-- Global stylesheet (served from static/css/style.css) -->
	<link rel="stylesheet" href="/css/style.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

<slot />
