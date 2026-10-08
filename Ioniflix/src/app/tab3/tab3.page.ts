import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonCard,
  IonThumbnail,
  IonLabel,
  IonButton,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonSpinner,
} from '@ionic/angular/standalone';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmeService } from '../services/filme';
import { EstrelasPipe } from '../pipes/estrelas-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonItem,
    IonCard,
    CommonModule,
    IonButton,
    IonButtons,
    IonBackButton,
    IonThumbnail,
    IonLabel,
    RouterLink,
    IonSpinner,
    EstrelasPipe,
  ],
})
export class Tab3Page {
  public filme: any = {};
  public carregado = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: FilmeService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.movieService.buscarPorID(id).subscribe((res: any) => {
        this.filme = {
          titulo: res.Title,
          ano: res.Year,
          duracao: res.Runtime,
          sinopse: res.Plot,
          diretor: res.Director,
          elenco: res.Actors,
          notaIMDB: res.imdbRating,
          poster: res.Poster,
        };

        this.carregado = true;
        console.log(this.carregado);
      });
    }
  }
}
