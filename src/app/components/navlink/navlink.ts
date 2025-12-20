import { Component, Input } from '@angular/core';
import { Inavigation } from '../../interfaces/inavigation';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navlink',
  imports: [LucideAngularModule],
  templateUrl: './navlink.html',
  styleUrl: './navlink.css',
})
export class Navlink {
  @Input() navigationLink !: Inavigation;
}