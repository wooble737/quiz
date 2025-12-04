<script>
	// Single-script login page using email/password and fetch to backend
	let email = '';
	let password = '';
	let error = '';
	let loading = false;

	async function handleSubmit() {
		loading = true;
		error = '';
		try {
			const response = await fetch('http://localhost:8000/api/auth/login/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username: email, password }),
			});
			const data = await response.json();
			if (response.ok) {
				// Store tokens
				localStorage.setItem('access_token', data.tokens.access);
				localStorage.setItem('refresh_token', data.tokens.refresh);
				localStorage.setItem('user', JSON.stringify(data.user));
				window.location.href = '/';
			} else {
				error = data.detail || 'Login failed';
			}
		} catch (err) {
			error = 'Network error';
		}
		loading = false;
	}
</script>

<svelte:head>
	<title>Log In — Quiz Maker</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
		</div>
		<form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="email" class="sr-only">Email address</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Email address"
						bind:value={email}
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
						bind:value={password}
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
				>
					{loading ? 'Signing in...' : 'Sign in'}
				</button>
			</div>

			{#if error}
				<div class="text-red-600 text-center">{error}</div>
			{/if}

			<div class="text-center">
				<a href="/register" class="text-indigo-600 hover:text-indigo-500">Don't have an account? Register</a>
			</div>
		</form>
	</div>
</div>