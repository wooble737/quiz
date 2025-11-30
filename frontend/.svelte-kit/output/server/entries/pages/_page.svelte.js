import "clsx";
function _page($$renderer) {
  $$renderer.push(`<div class="gradient-bg min-h-full"><div id="landingPage" class="min-h-full"><nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6"><div class="flex items-center"><svg class="w-8 h-8 text-white mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg> <span class="text-2xl font-bold text-gray-800">QuizCraft</span></div> <div class="flex space-x-4"><a href="/login" class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sign In</a> <a href="/register" class="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">Get Started</a></div></nav> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"><div class="text-center"><div class="quiz-icon inline-block mb-8"><svg class="w-24 h-24 mx-auto text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div> <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Create Amazing <span class="block text-indigo-600">Quizzes</span></h1> <p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">Build engaging quizzes, surveys, and assessments in minutes. No coding required. 
                    Perfect for educators, trainers, and businesses.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><button class="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">Start Creating Free</button> <button class="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">Learn More</button></div></div></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"><div class="bg-white bg-opacity-30 rounded-lg p-6"><div class="text-4xl font-bold text-indigo-600 mb-2">50K+</div> <div class="text-gray-800 text-lg">Quizzes Created</div></div> <div class="bg-white bg-opacity-30 rounded-lg p-6"><div class="text-4xl font-bold text-indigo-600 mb-2">1M+</div> <div class="text-gray-800 text-lg">Quiz Responses</div></div> <div class="bg-white bg-opacity-30 rounded-lg p-6"><div class="text-4xl font-bold text-indigo-600 mb-2">10K+</div> <div class="text-gray-800 text-lg">Happy Users</div></div></div></div> <div id="featuresSection" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"><div class="text-center mb-16"><h2 class="text-4xl font-bold text-gray-800 mb-4">Everything You Need</h2> <p class="text-xl text-gray-700 max-w-2xl mx-auto">Powerful features to create, share, and analyze your quizzes</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="bg-white bg-opacity-40 rounded-xl p-8 text-center hover:bg-opacity-60 transition-all"><div class="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-4">Drag &amp; Drop Builder</h3> <p class="text-gray-700">Create quizzes effortlessly with our intuitive visual editor</p></div> <div class="bg-white bg-opacity-40 rounded-xl p-8 text-center hover:bg-opacity-60 transition-all"><div class="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-4">Multiple Question Types</h3> <p class="text-gray-700">Multiple choice, true/false, short answer, and more</p></div> <div class="bg-white bg-opacity-40 rounded-xl p-8 text-center hover:bg-opacity-60 transition-all"><div class="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-4">Real-time Analytics</h3> <p class="text-gray-700">Track performance and get detailed insights instantly</p></div> <div class="bg-white bg-opacity-40 rounded-xl p-8 text-center hover:bg-opacity-60 transition-all"><div class="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-4">Easy Sharing</h3> <p class="text-gray-700">Share via link, embed, or social media with one click</p></div> <div class="bg-white bg-opacity-40 rounded-xl p-8 text-center hover:bg-opacity-60 transition-all"><div class="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-4">Secure &amp; Private</h3> <p class="text-gray-700">Your data is protected with enterprise-grade security</p></div> <div class="bg-white bg-opacity-40 rounded-xl p-8 text-center hover:bg-opacity-60 transition-all"><div class="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-4">Schedule &amp; Automate</h3> <p class="text-gray-700">Set time limits, deadlines, and automatic grading</p></div></div></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"><div class="bg-white bg-opacity-40 rounded-2xl p-12 text-center"><h2 class="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2> <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Join thousands of educators and businesses creating engaging quizzes with QuizCraft</p> <button class="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">Create Your First Quiz</button></div></div></div> <div id="authPage" class="min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 hidden"><div class="max-w-md mx-auto mb-4"><button class="flex items-center text-gray-800 hover:text-gray-600 transition-colors"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg> Back to Home</button></div> <div class="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8"><div class="quiz-icon inline-block"><svg class="w-16 h-16 mx-auto text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div> <h1 class="text-4xl font-bold text-gray-800 mb-2">QuizCraft</h1> <p class="text-xl text-gray-700">Create engaging quizzes in minutes</p></div> <div class="sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 card-shadow sm:rounded-lg sm:px-10"><div class="flex mb-6 bg-gray-100 rounded-lg p-1"><button id="loginTab" class="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors bg-white text-indigo-600 shadow-sm">Sign In</button> <button id="registerTab" class="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors text-gray-500 hover:text-gray-700">Sign Up</button></div> <div id="loginForm" class="form-transition"><form><div class="space-y-6"><div><label for="loginEmail" class="block text-sm font-medium text-gray-700">Email address</label> <div class="mt-1"><input id="loginEmail" name="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/></div></div> <div><label for="loginPassword" class="block text-sm font-medium text-gray-700">Password</label> <div class="mt-1"><input id="loginPassword" name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/></div></div> <div class="flex items-center justify-between"><div class="flex items-center"><input id="rememberMe" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/> <label for="rememberMe" class="ml-2 block text-sm text-gray-900">Remember me</label></div> <div class="text-sm"><a href="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a></div></div> <div><button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">Sign in to QuizCraft</button></div></div></form></div> <div id="registerForm" class="form-transition hidden"><form><div class="space-y-6"><div><label for="registerName" class="block text-sm font-medium text-gray-700">Full name</label> <div class="mt-1"><input id="registerName" name="name" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/></div></div> <div><label for="registerEmail" class="block text-sm font-medium text-gray-700">Email address</label> <div class="mt-1"><input id="registerEmail" name="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/></div></div> <div><label for="registerPassword" class="block text-sm font-medium text-gray-700">Password</label> <div class="mt-1"><input id="registerPassword" name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/></div></div> <div><label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm password</label> <div class="mt-1"><input id="confirmPassword" name="confirmPassword" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/></div></div> <div class="flex items-center"><input id="agreeTerms" name="agree-terms" type="checkbox" required class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/> <label for="agreeTerms" class="ml-2 block text-sm text-gray-900">I agree to the <a href="/terms" class="text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="/privacy" class="text-indigo-600 hover:text-indigo-500">Privacy Policy</a></label></div> <div><button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">Create your account</button></div></div></form></div> <div id="successMessage" class="hidden mt-4 p-4 bg-green-50 border border-green-200 rounded-md"><div class="flex"><div class="flex-shrink-0"><svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div> <div class="ml-3"><p id="successText" class="text-sm font-medium text-green-800"></p></div></div></div></div></div> <div class="mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-8"><h2 class="text-3xl font-bold text-gray-800 mb-4">Why Choose QuizCraft?</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center"><div class="bg-white bg-opacity-40 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h3> <p class="text-gray-700">Create professional quizzes with our intuitive drag-and-drop interface</p></div> <div class="text-center"><div class="bg-white bg-opacity-40 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-2">Multiple Formats</h3> <p class="text-gray-700">Support for multiple choice, true/false, and open-ended questions</p></div> <div class="text-center"><div class="bg-white bg-opacity-40 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg></div> <h3 class="text-xl font-semibold text-gray-800 mb-2">Real-time Analytics</h3> <p class="text-gray-700">Track performance and get detailed insights on quiz results</p></div></div></div></div> <script>
  import { onMount } from 'svelte';

  let loginTab, registerTab, loginForm, registerForm, successMessage, successText;

  function showLogin() {
    loginTab.classList.add('bg-white', 'text-indigo-600', 'shadow-sm');
    loginTab.classList.remove('text-gray-500');
    registerTab.classList.remove('bg-white', 'text-indigo-600', 'shadow-sm');
    registerTab.classList.add('text-gray-500');

    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    successMessage.classList.add('hidden');
  }

  function showRegister() {
    registerTab.classList.add('bg-white', 'text-indigo-600', 'shadow-sm');
    registerTab.classList.remove('text-gray-500');
    loginTab.classList.remove('bg-white', 'text-indigo-600', 'shadow-sm');
    loginTab.classList.add('text-gray-500');

    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    successMessage.classList.add('hidden');
  }

  function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;

    successText.textContent = \`Welcome back! Signed in as \${email}\`;
    successMessage.classList.remove('hidden');

    event.target.reset();
  }

  function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'mt-2 p-3 bg-red-50 border border-red-200 rounded-md';
      errorDiv.innerHTML = '<p class="text-sm text-red-800">Passwords do not match. Please try again.</p>';

      const confirmField = document.getElementById('confirmPassword').parentNode;
      const existingError = confirmField.querySelector('.bg-red-50');
      if (existingError) existingError.remove();
      confirmField.appendChild(errorDiv);

      setTimeout(() => errorDiv.remove(), 3000);
      return;
    }

    successText.textContent = \`Account created successfully! Welcome to QuizCraft, \${name}!\`;
    successMessage.classList.remove('hidden');

    event.target.reset();
  }

  function showAuthForms() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('authPage').classList.remove('hidden');
    document.getElementById('authPage').classList.add('flex');
  }

  function showLanding() {
    document.getElementById('authPage').classList.add('hidden');
    document.getElementById('authPage').classList.remove('flex');
    document.getElementById('landingPage').classList.remove('hidden');
  }

  function scrollToFeatures() {
    document.getElementById('featuresSection').scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    // initialize element refs and tab listeners only in the browser
    loginTab = document.getElementById('loginTab');
    registerTab = document.getElementById('registerTab');
    loginForm = document.getElementById('loginForm');
    registerForm = document.getElementById('registerForm');
    successMessage = document.getElementById('successMessage');
    successText = document.getElementById('successText');

    if (loginTab) loginTab.addEventListener('click', showLogin);
    if (registerTab) registerTab.addEventListener('click', showRegister);
  });
<\/script> <style global="">
  /* global rules */
  body {
      box-sizing: border-box;
      font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  }

  .gradient-bg {
      background: linear-gradient(135deg, #caaacd 0%, #d6e8f7 100%);
  }

  .card-shadow {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .quiz-icon {
      animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
  }

  .form-transition {
      transition: all 0.3s ease-in-out;
  }
</style></div>`);
}
export {
  _page as default
};
