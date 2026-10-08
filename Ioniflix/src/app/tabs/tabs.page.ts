import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  heartOutline,
  giftOutline,
  search,
  caretForwardCircleOutline,
} from 'ionicons/icons';
import { efeitoAumentar } from '../directives/efeito-aumentar';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    efeitoAumentar,
    IonRouterOutlet,
    IonRouterOutlet,
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private router: Router) {
    addIcons({
      homeOutline,
      heartOutline,
      giftOutline,
      search,
      caretForwardCircleOutline,
    });
  }
}
