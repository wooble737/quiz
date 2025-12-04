<script>
  import { onMount } from 'svelte';

  let formData = {
    full_name: '',
    email: '',
    password1: '',
    password2: ''
  };

  function submit(e) {
    e.preventDefault();
    // TODO: wire this to your backend API; currently just logs
    console.log('register submit', formData);
    // Example: fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) })
  }
</script>

<svelte:head>
  <title>Register — Quiz Maker</title>
</svelte:head>

<main class="container" style="padding: 40px 20px;">
  <h1 id="formTitle">Register</h1>
  <div class="auth-card">
    <form id="registerForm" on:submit={submit}>
      <input bind:value={formData.full_name} type="text" name="full_name" class="form-control" placeholder="Full Name" />
      <input bind:value={formData.email} type="email" name="email" class="form-control" placeholder="Email" />
      <input bind:value={formData.password1} type="password" name="password1" class="form-control" placeholder="Password" />
      <input bind:value={formData.password2} type="password" name="password2" class="form-control" placeholder="Confirm Password" />
      <button type="submit" class="cta-btn">Register</button>
      <p class="mt-3">Already have an account?
        <a href="/login" class="toggle-link">Log In</a>
      </p>
    </form>
  </div>
</main>
<script>
	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let error = '';
	let loading = false;

	async function handleSubmit() {
		if (password !== confirmPassword) {
			error = 'Passwords do not match';
			return;
		}
		loading = true;
		error = '';
		try {
			const response = await fetch('http://localhost:8000/api/auth/register/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: email,
					email,
					password,
					first_name: name.split(' ')[0],
					last_name: name.split(' ').slice(1).join(' ')
				}),
			});
			const data = await response.json();
			if (response.ok) {
				alert('Registration successful!');
				// Store tokens
				localStorage.setItem('access_token', data.tokens.access);
				localStorage.setItem('refresh_token', data.tokens.refresh);
				localStorage.setItem('user', JSON.stringify(data.user));
				window.location.href = '/login';
			} else {
				error = Object.values(data).flat().join(', ') || 'Registration failed';
			}
		} catch (err) {
			error = 'Network error';
		}
		loading = false;
	}
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
		</div>
		<form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="name" class="sr-only">Full Name</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Full Name"
						bind:value={name}
					/>
				</div>
				<div>
					<label for="email" class="sr-only">Email address</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
						bind:value={password}
					/>
				</div>
				<div>
					<label for="confirmPassword" class="sr-only">Confirm Password</label>
					<input
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Confirm Password"
						bind:value={confirmPassword}
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
				>
					{loading ? 'Registering...' : 'Register'}
				</button>
			</div>

			{#if error}
				<div class="text-red-600 text-center">{error}</div>
			{/if}

			<div class="text-center">
				<a href="/login" class="text-indigo-600 hover:text-indigo-500">Already have an account? Sign in</a>
			</div>
		</form>
	</div>
</div>