import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HeaderComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('class properties', () => {
		it('default value of displayTitle', () => {
			expect(component.displayTitle).toEqual(true);
		});
	});

	describe('class methods', () => {
		describe('toggleHeaderClicked', () => {
			it('should reverse the value displayTitle', () => {
				// first check the default value
				expect(component.displayTitle).toBeTrue();
				// call method and check for changes
				component.toggleHeaderClicked();
				fixture.detectChanges();
				expect(component.displayTitle).toBeFalse();
			});
		});
	});

	describe('template rendering', () => {
		// check that the title is in the dom and has the correct title
		it('should render title', () => {
			component.title = 'Test Title';
			fixture.detectChanges();
			const compiled = fixture.nativeElement;
			expect(compiled.querySelector('div.header-container div h1')).not.toBeNull();
			expect(compiled.querySelector('div.header-container div h1').textContent).toContain('Test Title');
		});

		describe('toggle button', () => {
			it('should render', () => {
				const compiled = fixture.nativeElement;
				expect(compiled.querySelector('div.header-container div button')).not.toBeNull();
			});

			it('should call toggleHeaderClicked when clicked', () => {
				spyOn(component, 'toggleHeaderClicked');
				const button = fixture.nativeElement.querySelector('div.header-container div button');
				button.click();
				fixture.detectChanges();
				expect(component.toggleHeaderClicked).toHaveBeenCalled();
			});
		});
	});
});
