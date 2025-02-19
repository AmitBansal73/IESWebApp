import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './page/header/header.component';
import { HomeComponent } from './page/home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = signal<string>('Prepare Exam');
}
