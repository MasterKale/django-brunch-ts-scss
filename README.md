# Django, TypeScript, and SCSS

## Goal

Figure out how to cleanly integrate TypeScript and SCSS into a Django app.

## Status

For now I've settled on [Brunch.io](http://brunch.io/) and a couple of additional plugins. All required dependencies are listed in `package.json`.

The only thing that needs to be added/updated is the value of `djangoAppName` in `package.json`. `brunch-config.js` relies on this to find the files for compilation, and also to strip the app name out of the paths that are registered for each TypeScript file when they're converted into CommonJS modules.

### Serving files for Development

Brunch and Django can be run side-by-side during development. Just run `npm start` in one tab, and `python manage.py runserver` in another tag. Django's `{% static ... %}` notation can be used in templates as usual.

### Serving files for Production

To concat, minify, and uglify everything for production, run `build.sh`. It runs `brunch build --prod` and follows up with Django's `collectstatic` command. Source maps are ignored by the staticfiles collector.

Other than that you're free to structure your `.ts` and `.s[ac]ss` files however you want within your app.

### Calling a TypeScript module from within a template

To load specific TypeScript modules into a page's HTML template, just `require()` the desired TypeScript file:

	<!-- templates/index.html -->
	<script>
		// .ts file is located in app_name/index/index.ts
		require('index/index.ts');
	</script>

The file will be executed upon page load.

ES6 imports work as expected, too:

	# foo.ts
	export class Foo {
		bar: string;
		constructor(bar: string) {
			this.bar = bar;
		}

		greet() {
			console.log(this.bar);
		}
	}

	# index/index.ts
	import { Foo } from '../foo';

	let foo = new Foo('hello');
	foo.greet();
