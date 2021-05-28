import { Input, Output, EventEmitter, HostListener, Directive } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { IModalDialog } from '../interfaces/modal-dialog.interface';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ConfirmDialog]'
})
export class ConfirmDirective {
  @Input() item: string;

  @Output() confirm: EventEmitter<any> = new EventEmitter();

  constructor(private modalDialogService: DialogService) { }

  @HostListener('click', ['$event'])
  onClick($event) {
    const data: IModalDialog = {
      title: 'Delete?',
      message: `Are you sure, you want to delete ${this.item}?`,

    };
    this.modalDialogService.openConfirmDialog(data);

    const subscription = this.modalDialogService.confirm.subscribe((res: boolean) => {
      subscription.unsubscribe();
      this.confirm.emit(res);
    });
  }
}
