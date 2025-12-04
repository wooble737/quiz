<script>
	let question = '';
	let questionType = 'multiple-choice';
	let options = ['', '', '', ''];
	let correctAnswer = '';
	let error = '';
	let loading = false;

	function addOption() {
		options = [...options, ''];
	}

	function removeOption(index) {
		options = options.filter((_, i) => i !== index);
	}

	async function handleSubmit() {
		loading = true;
		error = '';
		try {
			const token = localStorage.getItem('access_token');
			const response = await fetch('http://localhost:8000/api/questions/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				body: JSON.stringify({
					quiz: quizId,
					question_text: question,
					question_type: questionType,
					options: questionType === 'multiple-choice' ? options.filter(o => o.trim()) : null,
					correct_answer: correctAnswer
				}),
			});
			const data = await response.json();
			if (response.ok) {
				alert('Question saved successfully!');
				// Reset form
				question = '';
				options = ['', '', '', ''];
				correctAnswer = '';
			} else {
				error = 'Failed to save question';
			}
		} catch (err) {
			error = 'Network error';
		}
		loading = false;
	}
</script>

<div class="min-h-screen bg-gray-50 py-8">
	<div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
		<h1 class="text-3xl font-bold text-gray-900 mb-6">Create a Question</h1>

		<form on:submit|preventDefault={handleSubmit} class="space-y-6">
			<div>
				<label for="question" class="block text-sm font-medium text-gray-700">Question</label>
				<textarea
					id="question"
					bind:value={question}
					required
					rows="3"
					class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					placeholder="Enter your question here"
				></textarea>
			</div>

			<div>
				<label for="questionType" class="block text-sm font-medium text-gray-700">Question Type</label>
				<select
					id="questionType"
					bind:value={questionType}
					class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
				>
					<option value="multiple-choice">Multiple Choice</option>
					<option value="true-false">True/False</option>
					<option value="short-answer">Short Answer</option>
				</select>
			</div>

			{#if questionType === 'multiple-choice'}
				<div>
					<label for="options" class="block text-sm font-medium text-gray-700 mb-2">Options</label>
					<div id="options" class="space-y-2">
						{#each options as option, index}
						<div class="flex items-center space-x-2 mb-2">
							<input
								type="text"
									bind:value={opt.value}
								class="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder={`Option ${index + 1}`}
							/>
							<button
								type="button"
								on:click={() => removeOption(index)}
								class="text-red-600 hover:text-red-800"
								disabled={options.length <= 2}
							>
								Remove
							</button>
						</div>
					{/each}
					</div>
					<button
						type="button"
						on:click={addOption}
						class="mt-2 text-indigo-600 hover:text-indigo-500"
					>
						+ Add Option
					</button>
				</div>

				<div>
					<label for="correctAnswer" class="block text-sm font-medium text-gray-700">Correct Answer</label>
					<select
						id="correctAnswer"
						bind:value={correctAnswer}
						class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					>
						<option value="">Select correct answer</option>
						{#each options as option, index}
							{#if option.trim()}
								<option value={option}>{option}</option>
							{/if}
						{/each}
					</select>
				</div>
			{:else if questionType === 'true-false'}
				<div>
					<label for="correctAnswer" class="block text-sm font-medium text-gray-700">Correct Answer</label>
					<select
						id="correctAnswer"
						bind:value={correctAnswer}
						class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
				</div>
			{:else}
				<div>
					<label for="correctAnswer" class="block text-sm font-medium text-gray-700">Correct Answer</label>
					<input
						type="text"
						bind:value={correctAnswer}
						class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Enter the correct answer"
					/>
				</div>
			{/if}

			<div>
				<button
					type="submit"
					disabled={loading}
					class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
				>
					{loading ? 'Saving...' : 'Save Question'}
				</button>
			</div>

			{#if error}
				<div class="text-red-600 text-center mt-4">{error}</div>
			{/if}
		</form>

		<div class="mt-6">
			<a href="/" class="text-indigo-600 hover:text-indigo-500">Back to Home</a>
		</div>
	</div>
</div>