import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Observable } from 'rxjs';
import { IModalDialog } from '../interfaces/modal-dialog.interface';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public confirm: Subject<boolean> = new Subject();
  public confirmDialog: Observable<boolean> = this.confirm.asObservable();
  // private confirmDialogResponse: Subject<boolean> = new Subject();

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { }

  public showError(message: string) {
    const data: IModalDialog = {
      title: 'Error', message, type: 'Error', hideCancelBtn: true
    };
    this.openDialog(data);
  }

  public showAlert(title: string, message: string): void {
    const data: IModalDialog = {
      title, message, type: 'Warning'
    };
    this.openDialog(data);
  }

  public openConfirmDialog(data: IModalDialog): void {
    this.openDialog(data);
  }

  private openDialog(data: IModalDialog): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      data,
      width: '600px',
      disableClose: true
    });

    const subscription = dialogRef.afterClosed().subscribe((result) => {
      subscription.unsubscribe();
      this.confirm.next(result);
    });
  }

  public openSnackbar(message: string): void {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 2000;
    config.panelClass = 'snack-bar-bg';
    this.snackBar.open(message, null, config);
  }
}
