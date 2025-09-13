import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Clientes } from './clientes';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('clientes-ui');
  constructor(private service: Clientes){}
  clientes: any[] = [];

  ngOnInit(){
    this.loadClientes();
    console.log(this.clientes)
  }

 loadClientes(){
  this.service.getClientes().subscribe({
    next: (res) => this.clientes = res,
    error: (err) => console.error(err)
  })
 }
}
