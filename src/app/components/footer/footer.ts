import { Component } from '@angular/core';
import {  CopyrightIcon, LinkedinIcon, LucideAngularModule, LucideIconData, YoutubeIcon} from 'lucide-angular';
import { FacebookIcon } from 'lucide-angular/src/icons';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly copyRightYear: number = new Date().getFullYear();
  readonly facebook :LucideIconData= FacebookIcon; 
  readonly linkedIn :LucideIconData= LinkedinIcon; 
  readonly youtube :LucideIconData= YoutubeIcon; 
  readonly copyRightIcon :LucideIconData=CopyrightIcon

}
