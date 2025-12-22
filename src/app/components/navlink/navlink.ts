import { Component, Input } from '@angular/core';
import { Inavigation } from '../../interfaces/inavigation';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navlink',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './navlink.html',
  styleUrl: './navlink.css',
})
export class Navlink {
  @Input() navigationLink !: Inavigation;
}