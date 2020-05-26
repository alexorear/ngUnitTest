import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() title: string;
	displayTitle: boolean = true;

	toggleHeaderClicked() {
		this.displayTitle = !this.displayTitle;
	}

}
