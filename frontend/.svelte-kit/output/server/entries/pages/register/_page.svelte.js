import { w as head, y as attr } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let name = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let loading = false;
    head("52fghe", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Register — Quiz Maker</title>`);
      });
    });
    $$renderer2.push(`<main class="container" style="padding: 40px 20px;"><h1 id="formTitle">Register</h1> <div class="auth-card"><form id="registerForm"><input${attr("value", formData.full_name)} type="text" name="full_name" class="form-control" placeholder="Full Name"/> <input${attr("value", formData.email)} type="email" name="email" class="form-control" placeholder="Email"/> <input${attr("value", formData.password1)} type="password" name="password1" class="form-control" placeholder="Password"/> <input${attr("value", formData.password2)} type="password" name="password2" class="form-control" placeholder="Confirm Password"/> <button type="submit" class="cta-btn">Register</button> <p class="mt-3">Already have an account? <a href="/login" class="toggle-link">Log In</a></p></form></div></main> <div class="min-h-screen flex items-center justify-center bg-gray-50"><div class="max-w-md w-full space-y-8"><div><h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2></div> <form class="mt-8 space-y-6"><div class="rounded-md shadow-sm -space-y-px"><div><label for="name" class="sr-only">Full Name</label> <input id="name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name"${attr("value", name)}/></div> <div><label for="email" class="sr-only">Email address</label> <input id="email" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"${attr("value", email)}/></div> <div><label for="password" class="sr-only">Password</label> <input id="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"${attr("value", password)}/></div> <div><label for="confirmPassword" class="sr-only">Confirm Password</label> <input id="confirmPassword" name="confirmPassword" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password"${attr("value", confirmPassword)}/></div></div> <div><button type="submit"${attr("disabled", loading, true)} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">${escape_html("Register")}</button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="text-center"><a href="/login" class="text-indigo-600 hover:text-indigo-500">Already have an account? Sign in</a></div></form></div></div>`);
  });
}
export {
  _page as default
};
