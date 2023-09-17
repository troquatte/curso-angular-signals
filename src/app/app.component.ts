import { Component, signal, computed, effect } from '@angular/core';
import { UpdateService } from './service/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public firstName = signal('Dener ');
  public lastName = signal('Troquatte');

  public fullName = computed(() => {
    return this.firstName() + this.lastName();
  });

  public array = signal([1]);

  constructor(public updateService: UpdateService) {
    effect(() => {});
  }

  public updateName() {
    // this.firstName.set('Nay ');
    this.firstName.update((oldValue) => {
      return 'Nay ';
    });
  }

  public updateArray() {
    this.array.mutate((oldValue) => {
      return oldValue.push(Number(oldValue.at(-1)) + 1);
    });
  }
}
