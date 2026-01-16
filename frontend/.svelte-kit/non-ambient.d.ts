
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/login" | "/register" | "/test_type" | "/test_type/[quizId]" | "/upload";
		RouteParams(): {
			"/test_type/[quizId]": { quizId: string }
		};
		LayoutParams(): {
			"/": { quizId?: string };
			"/login": Record<string, never>;
			"/register": Record<string, never>;
			"/test_type": { quizId?: string };
			"/test_type/[quizId]": { quizId: string };
			"/upload": Record<string, never>
		};
		Pathname(): "/" | "/login" | "/login/" | "/register" | "/register/" | "/test_type" | "/test_type/" | `/test_type/${string}` & {} | `/test_type/${string}/` & {} | "/upload" | "/upload/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/css/style.css" | "/js/quiz.js" | "/js/upload.js" | "/robots.txt" | string & {};
	}
}