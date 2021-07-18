import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<Transferencia>();
  public valor: number = 0;
  public destino: number = 0;

  constructor(private transferenciaService: TransferenciaService, private router: Router) {

  }

  transferir() {
    console.log('transferido');

    const valorEmitir = {
      valor: this.valor,
      destino: this.destino
    };

    this.transferenciaService.adicionar(valorEmitir).subscribe(resposta => {
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    })

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
