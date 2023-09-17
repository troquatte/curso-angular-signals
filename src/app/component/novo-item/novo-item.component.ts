import { Component } from '@angular/core';
import { UpdateService } from 'src/app/service/update.service';

@Component({
  selector: 'app-novo-item',
  templateUrl: './novo-item.component.html',
  styleUrls: ['./novo-item.component.scss'],
})
export class NovoItemComponent {
  constructor(public updateService: UpdateService) {}
}
