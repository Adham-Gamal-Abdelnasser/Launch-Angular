import { Component } from '@angular/core';
import {  CopyrightIcon, LinkedinIcon, LucideAngularModule, LucideIconData, YoutubeIcon} from 'lucide-angular';
import { FacebookIcon } from 'lucide-angular/src/icons';
import { ISocialLink } from '../../interfaces/isociallink';
import { Sociallink } from "../sociallink/sociallink";

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, Sociallink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly copyRightYear: number = new Date().getFullYear();
  readonly copyRightIcon :LucideIconData=CopyrightIcon
  footerLinks: ISocialLink[]= [
    {id: 1, nameIcon: FacebookIcon , href: 'https://www.facebook.com/profile.php?id=61585309791658&locale=ar_AR'},
    {id: 2, nameIcon: LinkedinIcon , href: 'https://www.linkedin.com/in/adhamgamal96/'},
    {id: 3, nameIcon: YoutubeIcon , href: 'https://www.youtube.com/@AdhamGamal-f6i'},
  ]
}
