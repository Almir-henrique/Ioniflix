import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private chaveApi = 'c27d0b07';

  // Injeção do HttpCLient
  constructor(private http: HttpClient) {}

  // Busca filmes relacionados a pesquisa do úsuario
  buscarFilmes(pesquisaDoUsuario: string) {
    return this.http.get(
      `https://www.omdbapi.com/?s=${pesquisaDoUsuario}&apikey=${this.chaveApi}`,
    );
  }

  // Busca detalhes do filme selecionado usando o ID
  buscarPorID(id: string) {
    return this.http.get(
      `https://www.omdbapi.com/?i=${id}&apikey=${this.chaveApi}`,
    );
  }
}
