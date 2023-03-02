
# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## > Skeleton loader

There is an error after installing the ngx-skeleton-loader library 
Error: node_modules/ngx-skeleton-loader/lib/ngx-skeleton-loader.component.d.ts:22:18 - error TS2707: Generic type 'ɵɵComponentDeclaration' requires between 7 and 8 type arguments.

To resolve this error please remove the last param ``never`` from the the line
Before

static ɵcmp: i0.ɵɵComponentDeclaration<NgxSkeletonLoaderComponent, "ngx-skeleton-loader", never, { "count": "count"; "loadingText": "loadingText"; "appearance": "appearance"; "animation": "animation"; "ariaLabel": "ariaLabel"; "theme": "theme"; }, {}, never, ["*"], false, never>;

After

static ɵcmp: i0.ɵɵComponentDeclaration<NgxSkeletonLoaderComponent, "ngx-skeleton-loader", never, { "count": "count"; "loadingText": "loadingText"; "appearance": "appearance"; "animation": "animation"; "ariaLabel": "ariaLabel"; "theme": "theme"; }, {}, never, ["*"], false>;

Then it will work