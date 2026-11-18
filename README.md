# Untitled

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


-------- API USAGE --------

Radio Browser API – free, no key, CORS-friendly internet radio stations.
Docs: https://api.radio-browser.info/
Example: https://de1.api.radio-browser.info/json/stations?limit=20&hidebroken=true

For this assignment I chose to use Option A (HttpClient). My reasoning for this is because I like to have things spaced out and in clear chunks to help better understand what im looking at and make it seem less overwhelming when I lose my spot. Along with this, I am a naturally slow coder and with so many moving parts I get tunnel vision when working sometimes, so spacing it out helps me not try and tinker with ten things at once. 

---------- LAZY LOADING -----------

Before lazy loading:
main-U3P5JFAG.js    | main          | 319.13 kB |                83.82 kB
styles-NV5MQSSY.css | styles        | 193 bytes |               193 bytes
                    | Initial total |  45.48 kB


After lazy loading:
chunk-LPD64VEN.js   | -             | 262.50 kB |                71.72 kB
main-4B6O7HUA.js    | main          |   7.56 kB |                 2.65 kB
chunk-YBUNKZAO.js   | -             |   1.56 kB |               699 bytes
styles-NV5MQSSY.css | styles        | 193 bytes |               193 bytes

                    | Initial total | 271.81 kB |                75.27 kB

Lazy chunk files    | Names         |  Raw size | Estimated transfer size
chunk-FNKXALEO.js   | music-form    |  49.14 kB |                10.80 kB
chunk-SZTQ4KNK.js   | music-detail  |   1.14 kB |               564 bytes

The main changes between before and after was the fat of adding in a different way to display information, and not keeping it on a constant string of being activated it would pile it more. With lazi loading in use, it's taking up more space while keeping apps and items in reserve for when the user scrolls into their field or when something of their service is needed within the users request on the app.

(Not 100% sure if that's right but that's how I understood it, please correct me if im wrong at a later date. also, on another note I wasn't aware of this but you could have literal stars in your code?? thats so cool?? ★☆ I was messing around with pipes and stumbled upon these and I thought it was really cool and a little cute.)