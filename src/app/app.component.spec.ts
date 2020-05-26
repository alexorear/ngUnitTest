import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// mock component because we only need to check that it exist but we aren't modifing it in anyway
@Component({
	selector: 'app-footer',
	template: '',
})
class MockFooterComponent {}

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				RouterTestingModule
			],
			declarations: [
				AppComponent,
				HeaderComponent,
				MockFooterComponent
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app component', () => {
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});


	describe('class properties', () => {
		describe('title', () => {
			it('default value', () => {
				expect(component.title).toEqual('Angular Unit Test Examples');
			});

			it('sets the value of the HeaderComponent title property', () => {
				// the following line is the test equivalent to a viewchild
				const header = fixture.debugElement.query(By.directive(HeaderComponent)).componentInstance as HeaderComponent;
				expect(header.title).toEqual('Angular Unit Test Examples');
			});
		});

		describe('emailForm', () => {
			it('initializes properly', () => {
				expect(component.emailForm.contains('email')).toBeTrue();
				expect(component.emailForm.get('email').value).toEqual('');
			});
		});
	});

	describe('template rendering', () => {
		it('should render a header', () => {
			const header = fixture.debugElement.query(By.directive(HeaderComponent));
			expect(header).not.toBeNull();
		});

		it('should render a footer', () => {
			const footer = fixture.debugElement.query(By.directive(MockFooterComponent));
			expect(footer).not.toBeNull();
		});

		it('should render a text input', () => {
			const input = fixture.debugElement.query(By.css('input'));
			expect(input).not.toBeNull();
			expect(input.nativeElement.type).toEqual('text');
		});

		describe('submit button', () => {
			let button;
			beforeEach(() => {
				button = () => fixture.debugElement.query(By.css('button#submit'));
			});

			it('should render', () => {
				expect(button()).not.toBeNull();
			});

			it('should be disabled by default', () => {
				expect(component.emailForm.valid).toBeFalse();
				expect(button().nativeNode.disabled).toBeTrue();
			});

			it('should be enable if the form is valid', () => {
				component.emailForm.get('email').setValue('test@email.com');
				fixture.detectChanges();
				expect(button().nativeNode.disabled).toBeFalse();
			});
		});
	});
});
