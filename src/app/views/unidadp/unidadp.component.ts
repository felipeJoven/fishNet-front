import { Component, OnInit } from '@angular/core';
import { UnidadProductiva } from '../../model/unidad-productiva';
import { UnidadProductivaService } from '../../services/unidad-productiva.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-unidadp',
  templateUrl: './unidadp.component.html',
  styleUrls: ['./unidadp.component.scss']
})
export class UnidadpComponent implements OnInit {
  
  unidadp: UnidadProductiva[] = [];


  constructor(
    private unidadPService: UnidadProductivaService, 
    private dialog: MatDialog, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }
              
  ngOnInit(): void {
    this.obtenerUnidadProductiva();
  }

  
  // Servicios

  obtenerUnidadProductiva():void{
    this.unidadPService.obtenerUnidadProductiva().subscribe((unidadp: any) => {
      this.unidadp = unidadp;
    });
  }


  editarUnidadp(id: number):void{
    console.log(id);
    this.router.navigate(['editar-unidad', id]);
  }

  eliminarUnidadProductiva(id: number) {
    this.unidadPService.eliminarUnidadProductiva(id)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.obtenerUnidadProductiva();
    });
    
  }

}
