import { Component } from '@angular/core';
import { Feature } from "../feature/feature";
import { IFeature } from '../../interfaces/ifeature';

@Component({
  selector: 'app-gallery',
  imports: [Feature],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  features: IFeature[]=[
    {id: 1, source: "gpt1.png", caption: "the mindset of starting with clarity: understanding the goal, structuring the project from day one, and building Angular applications with intention instead of randomness."},
    {id: 2, source: "gpt2.png", caption: "how user experience is shaped by clear navigation, logical routing, and predictable application flow—where every path exists for a reason"},
    {id: 3, source: "gpt3.png", caption: "Communicates the idea that strong applications are built from simple, well-defined units working together, not from complexity or overengineering"},
    {id: 4, source: "gpt4.png", caption: "Reflects the importance of building fast, lightweight applications by embracing modern Angular features and eliminating unnecessary overhead"},
    {id: 5, source: "gpt5.png", caption: "Expresses how giving structure and meaning to code improves readability, accessibility, and long-term maintainability—for both humans and machines"},
    {id: 6, source: "gpt6.png", caption: "Represents the awareness that development isn’t just about making things work, but about making them usable, discoverable, and inclusive."},
  ]
}
