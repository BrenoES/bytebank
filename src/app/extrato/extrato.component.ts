import { Component, Input } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  transferencias: Transferencia[];

  constructor(private transferenciaService: TransferenciaService) {
    this.transferencias = []
  }

  ngOnInit() {
    this.obterTodasTransferencias();
  }

  obterTodasTransferencias() {
    this.transferenciaService.todas().subscribe((transferencias) => {
      this.transferencias = transferencias
    })
  }
}
