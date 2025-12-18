import { Component, signal } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/about/about";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Hero, Navbar, About, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('launchA');
}
