import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Angular Unit Test Examples';
	emailForm: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.createEmailForm();
	}

	createEmailForm() {
		this.emailForm = this.fb.group({
			email: ['', Validators.required]
		});
	}
}
