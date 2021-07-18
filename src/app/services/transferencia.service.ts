import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: Transferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  todas() {
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(novaTransferencia: Transferencia) {
    this.hidratar(novaTransferencia);
    return this.httpClient.post<Transferencia>(this.url, novaTransferencia);
  }

  private hidratar(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
