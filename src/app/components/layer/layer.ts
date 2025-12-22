import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IFeature } from '../../interfaces/ifeature';

@Component({
  selector: 'app-layer',
  imports: [],
  templateUrl: './layer.html',
  styleUrl: './layer.css',
})
export class Layer {
  @Input() feature: IFeature | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('layerComp') layerComp!:ElementRef;
  @ViewChild('contentContainer') contentContainer!:ElementRef;
   stop(event: MouseEvent) {
    event.stopPropagation();
  }
}
