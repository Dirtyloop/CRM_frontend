import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { AdminConfirmDialogService } from '../admin-confirm-dialog.service';
import { AdminCustomerService } from './admin-customer.service';
import { AdminCustomer } from './adminCustomer';


@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.scss']
})
export class AdminCustomerComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'city', 'inspected', 'actions'];

  dataSource: AdminCustomer[] = [];

  totalElements = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private adminCustomerService: AdminCustomerService,
    private dialogService: AdminConfirmDialogService
    ) {}

  ngAfterViewInit() {
    
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.adminCustomerService.getCustomer(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(dataSource => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = dataSource === null;

          if (dataSource === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.totalElements = dataSource.totalElements;
          return dataSource.content;
        }),
      )
      .subscribe(dataSource => (this.dataSource = dataSource));
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.paginator.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource) {
  //     this.paginator.firstPage();
  //   }
  // }

  confirmDelete(element: AdminCustomer) {
    this.dialogService.openConfirmDialog("Delete Customer", "Do you want to delete this Customer?", "Delete")
    .afterClosed()
    .subscribe(result => {
      if(result) {
        this.adminCustomerService.delete(element.id)
        .subscribe(() => {
          this.dataSource.forEach((value, index) => {
            if(element == value) {
              this.dataSource.splice(index, 1);
              this.table.renderRows();
            }
          })
        });
      }
    });
  }
}
