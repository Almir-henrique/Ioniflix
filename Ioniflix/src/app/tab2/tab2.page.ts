import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmeService } from '../services/filme';

interface Filme {
  titulo: string;
  ano: string;
  posterUrl: string;
  id: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonList,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
    IonIcon,
    RouterLink,
  ],
})
export class Tab2Page {
  public listaFilmes: Filme[] = [];
  public pesquisaRealizada: boolean = false;

  constructor(
    private router: Router,
    // Injeção do FilmeService
    private filmeService: FilmeService,
  ) {}

  // Passa parâmetros do filme selecionado para a página de detalhes
  abrirDetalhes(id: string) {
    this.router.navigate(['/tabs/tab3', id]);
  }

  // Coleta o valor do campo de busca e realiza a pesquisa
  pesquisarFilmes(event: any) {
    const valor = event.detail.value;

    if (valor && valor.trim().length > 2) {
      this.filmeService.buscarFilmes(valor).subscribe((res: any) => {
        this.pesquisaRealizada = true;

        if (res.Search) {
          this.listaFilmes = res.Search.map((f: any) => ({
            titulo: f.Title,
            ano: f.Year,
            posterUrl: f.Poster !== 'N/A' ? f.Poster : 'assets/placeholder.png',
            id: f.imdbID,
          }));
        } else {
          this.listaFilmes = [];
        }
      });
    } else {
      this.listaFilmes = [];
      this.pesquisaRealizada = false;
    }
  }
}
