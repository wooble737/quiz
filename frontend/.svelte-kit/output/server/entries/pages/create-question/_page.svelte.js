import { z as ensure_array_like, y as attr } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  let question = "";
  let questionType = "multiple-choice";
  let options = ["", "", "", ""];
  let correctAnswer = "";
  let loading = false;
  $$renderer.push(`<div class="min-h-screen bg-gray-50 py-8"><div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"><h1 class="text-3xl font-bold text-gray-900 mb-6">Create a Question</h1> <form class="space-y-6"><div><label for="question" class="block text-sm font-medium text-gray-700">Question</label> <textarea id="question" required rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your question here">`);
  const $$body = escape_html(question);
  if ($$body) {
    $$renderer.push(`${$$body}`);
  }
  $$renderer.push(`</textarea></div> <div><label for="questionType" class="block text-sm font-medium text-gray-700">Question Type</label> `);
  $$renderer.select(
    {
      id: "questionType",
      value: questionType,
      class: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    },
    ($$renderer2) => {
      $$renderer2.option({ value: "multiple-choice" }, ($$renderer3) => {
        $$renderer3.push(`Multiple Choice`);
      });
      $$renderer2.option({ value: "true-false" }, ($$renderer3) => {
        $$renderer3.push(`True/False`);
      });
      $$renderer2.option({ value: "short-answer" }, ($$renderer3) => {
        $$renderer3.push(`Short Answer`);
      });
    }
  );
  $$renderer.push(`</div> `);
  {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div><label for="options" class="block text-sm font-medium text-gray-700 mb-2">Options</label> <div id="options" class="space-y-2"><!--[-->`);
    const each_array = ensure_array_like(options);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      each_array[index];
      $$renderer.push(`<div class="flex items-center space-x-2 mb-2"><input type="text"${attr("value", opt.value)} class="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"${attr("placeholder", `Option ${index + 1}`)}/> <button type="button" class="text-red-600 hover:text-red-800"${attr("disabled", options.length <= 2, true)}>Remove</button></div>`);
    }
    $$renderer.push(`<!--]--></div> <button type="button" class="mt-2 text-indigo-600 hover:text-indigo-500">+ Add Option</button></div> <div><label for="correctAnswer" class="block text-sm font-medium text-gray-700">Correct Answer</label> `);
    $$renderer.select(
      {
        id: "correctAnswer",
        value: correctAnswer,
        class: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      },
      ($$renderer2) => {
        $$renderer2.option({ value: "" }, ($$renderer3) => {
          $$renderer3.push(`Select correct answer`);
        });
        $$renderer2.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(options);
        for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
          let option = each_array_1[index];
          if (option.trim()) {
            $$renderer2.push("<!--[-->");
            $$renderer2.option({ value: option }, ($$renderer3) => {
              $$renderer3.push(`${escape_html(option)}`);
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
    );
    $$renderer.push(`</div>`);
  }
  $$renderer.push(`<!--]--> <div><button type="submit"${attr("disabled", loading, true)} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">${escape_html("Save Question")}</button></div> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></form> <div class="mt-6"><a href="/" class="text-indigo-600 hover:text-indigo-500">Back to Home</a></div></div></div>`);
}
export {
  _page as default
};
