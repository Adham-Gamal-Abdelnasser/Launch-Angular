import { Component, ElementRef, ViewChild } from '@angular/core';
import { LucideAngularModule, HouseIcon, InfoIcon, ImagesIcon, MenuIcon, XIcon, PhoneIcon } from 'lucide-angular';
import { Inavigation } from '../../interfaces/inavigation';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  //todo declare icons
  readonly home = HouseIcon; 
  readonly info = InfoIcon
  readonly gallrey = ImagesIcon
  readonly contact = PhoneIcon
  readonly bars = MenuIcon
  readonly close = XIcon
  //todo navbar flag
  isNavOpen: boolean = false;
  //todo catch navbar that is open for toggling
  @ViewChild('togglableNavbar') togglableNavbar!:ElementRef;
  navHeight:number = 0;
  //todo nav links
  navLinks: Inavigation[] = [
    {name: 'Home', icon: this.home, path: '/home', id: 0},
    {name: 'About', icon: this.info, path: '/about', id: 1},
    {name: 'Contact', icon: this.contact, path: '/contact', id: 2},
    {name: 'Gallery', icon: this.gallrey, path: '/gallery', id: 3},

  ]  
  //todo toggle navbar by flag and make icons catched toggle
  toggleNav() :void {
    if(this.isNavOpen){
      this.navHeight = 0;
    } else{
      this.navHeight = this.togglableNavbar.nativeElement.scrollHeight;
    }
    this.isNavOpen = !this.isNavOpen;
  }
  //todo close navbar function for nav link click
  closeNav():void {
    this.navHeight = 0;
    this.isNavOpen = false;
  }
}
