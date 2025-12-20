import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { LucideAngularModule, HouseIcon, InfoIcon, ImagesIcon, MenuIcon, XIcon, PhoneIcon, LucideIconData } from 'lucide-angular';
import { Inavigation } from '../../interfaces/inavigation';
import { Navlink } from "../navlink/navlink";

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, Navlink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  //todo declare icons
  readonly bars:LucideIconData = MenuIcon
  readonly close:LucideIconData = XIcon
  //todo navbar flag
  isNavOpen: boolean = false;
  //todo catch navbar that is open for toggling
  @ViewChild('togglableNavbar') togglableNavbar!:ElementRef;
  navHeight:number = 0;
  //todo nav links
  navLinks: Inavigation[] = [
    {name: 'Home', icon: HouseIcon, path: '/home', id: 0},
    {name: 'About', icon: InfoIcon, path: '/about', id: 1},
    {name: 'Contact', icon: PhoneIcon, path: '/contact', id: 2},
    {name: 'Gallery', icon: ImagesIcon, path: '/gallery', id: 3},

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
  //todo make navbar shrink on scroll
  //todo catch "nav" element
  @ViewChild('theWholeNav') theWholeNav!:ElementRef;
  @HostListener('window:scroll') makeNavbarShrinkOnScroll(): void {
    if(scrollY > 0){
      this.theWholeNav.nativeElement.classList.replace("py-4", "py-2");
    }else {
      this.theWholeNav.nativeElement.classList.replace("py-2", "py-4");
    }
  }
  
}
