import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AppIconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'online',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/icon-online.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'money',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/icon-money.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'users',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/icon-users.svg'
      )
    );
  }
}
