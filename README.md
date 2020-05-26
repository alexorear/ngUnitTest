# Angular Unit Test Examples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and was created to provide examples of the [Jasmine Unit Testing Framework] () for Angular.

## Angular Unit Testing Principal Overview

Testing is an important part of modern software development. It is a way for us developers to double check our work and define/refine clear code functionality while supplying basic project documentation. Testing should take place throughout the development cycle and should cover both the DOM and our component/service/pipe/directive classes. Tests themselves should be small and focus on one function/element.

Angular uses the [Jasmine](https://jasmine.github.io/) framework in conjection with [Karma](https://karma-runner.github.io/latest/index.html) for unit testing. This combination provides:

- Default integration with Angular (no extra setup needed)
- Provides easy mock dependency injection with spy objects
- Quick and easy to read reporting in the browser and cli
- Decent online documentation
- Live reload

#### Style Guidelines and Key Concepts
- Write component/service methods with clearly defined functionality
- Class/method isolation, (no test should rely on another test)
- Use mocks for both services and child components when you can
- Keep test small, test only one concept at a time
- Write clear and concise describe/it blocks
- Use beforeEach/beforeAll to help with test isolation
- Write test that cover class methods and DOM elements if/when possible
- Organize test with describe blocks and group by category if possible (DOM rendering, methods and class properties).

#### Common Test Mechanics
DOM Querying

```
/* needed for querying the DOM */
import { By } from '@angular/platform-browser';

/* getting an standard  selector */
const button = fixture.debugElement.query(By.css('button#submit'));
/* looking at attributes */
const isButtonDisabled = button.nativeNode.disabled;

/* getting child components/directives */
const childElement = fixture.debugElement.query(By.directive(ChildComponent));
```

`beforeEach(() => { code goes here})` - runs before each test in a describe block. Good for setting up mock values, spies, and reoccurring DOM queries

spys - great for checking service method calls and stubbing out method return values
```
/* basic method spy - can be used to check if a method was called and what arguments it was called with */
spyOn(service, 'methodName');

/* mocking out a method a success return */
spyOn(service, 'methodName').and.Return(expectedValue);

/* mocking out method with an error */
spyOn(service, 'methodName').and.throw(new Error('error message'));

/* mocking out a method observable return */
/* of cast a value to an observable */
import { of } from rxjs;

spyOn(service, 'methodName').and.Return(of(expectedValue));

/* mocking out method with observable error */
/* import the throwError from rxjs to throw an observable error */
import { throwError } from 'rxjs';

spyOn(service, 'methodName').and.Return(throwError({ status: 404 }));
```

Mocks/Stubs Supplied by Angular to use in testing
```
/* if using HttpClient */
import { HttpClientClientTestingModule } from '@angular/common/http/testing';
```

## Testing Resources
Aside from this project, you can might also find the following resources helpful:

Learn more about unit testing with this [Comprehensive Guide Angular Unit Testing](https://medium.com/bb-tutorials-and-thoughts/angular-a-comprehensive-guide-to-unit-testing-with-angular-and-best-practices-e1f9ef752e4e).

Official [Angular Testing Documentation](https://angular.io/guide/testing).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
