import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  mobileQuery: MediaQueryList;

  fillerNav = [
    {name: 'Bienvenidos', route: '', icon: 'account_circle'},
    {name: 'Autores', route: 'Autores', icon: 'person'},
    {name: 'Categorias', route: 'Categorias', icon: 'view_week'},
    {name: 'Libros', route: 'Libros', icon: 'chrome_reader_mode'}
  ];


  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  shouldRun = true;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

}
