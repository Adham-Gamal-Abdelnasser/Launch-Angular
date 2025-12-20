import { Component, Input } from '@angular/core';
import { IFeature } from '../../interfaces/ifeature';

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.html',
  styleUrl: './feature.css',
})
export class Feature {
  @Input() featureData!: IFeature
}
