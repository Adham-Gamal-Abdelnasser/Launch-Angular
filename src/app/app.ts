import { Component, signal } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Hero, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('launchA');
}
