import { Component, Input } from '@angular/core';
import { ISocialLink } from '../../interfaces/isociallink';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sociallink',
  imports: [LucideAngularModule],
  templateUrl: './sociallink.html',
  styleUrl: './sociallink.css',
})
export class Sociallink {
  @Input() webLink !: ISocialLink;
}
