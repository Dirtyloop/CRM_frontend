import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminConfirmDialogComponent } from './admin-confirm-dialog/admin-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AdminConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(header: string, message: string, button: string): MatDialogRef<AdminConfirmDialogComponent, Boolean> {
    return this.dialog.open(AdminConfirmDialogComponent, {
      width: '500px',
      data: {
        header: header,
        message: message,
        button: button
      }
    });
  }
}
