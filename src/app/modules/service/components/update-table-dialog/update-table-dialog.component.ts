import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator } from '@angular/material';
import { Dish } from 'src/app/modules/shared/models/dish';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ServiceModuleService } from '../../services/service-module.service';

@Component({
  selector: 'app-update-table-dialog',
  templateUrl: './update-table-dialog.component.html',
  styleUrls: ['./update-table-dialog.component.scss']
})
export class UpdateTableDialogComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  receiptDisplayedColumns = ['name', 'price', 'actions'];
  receiptDataSource = new MatTableDataSource();
  dishes = [
    { name: 'Egg', bill: 45.12},
    { name: 'MC PANINI', bill: 5.99},
    { name: 'Onion', bill: 220.20},
    { name: 'Rice', bill: 40.00},
    { name: 'Mules', bill: 25.00},
    { name: 'Kalafior', bill: 15.30},
  ];
  addFormVisible = false;
  newStatusOfTable = null;
  filteredDishes: Observable<any>;
  dishCtrl = new FormControl();
  dishesAutocomplete: Dish[];

  constructor(private serviceModuleService: ServiceModuleService,
    public dialogRef: MatDialogRef<UpdateTableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.receiptDataSource = new MatTableDataSource(this.dishes);
      this.filteredDishes = this.dishCtrl.valueChanges
      .pipe(
        startWith(''),
        map((state: any) => state ? this._filterDishes(state) : this.dishesAutocomplete.slice())
      );
    }

  ngOnInit() {
    this.serviceModuleService.getDishesList().subscribe(res => {
      this.dishesAutocomplete = res;
    });
    this.receiptDataSource.paginator = this.paginator;
  }

  private _filterDishes(value: string) {
    const filterValue = value.toLowerCase();

    return this.dishesAutocomplete.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  getTotal() {
    return this.receiptDataSource.data.map((t: any) => t.bill).reduce((acc, value) => acc + value, 0);
  }

  onDelete(row) {

  }

  onAdd(row) {
   
  }

  onStatusChange(event) {
    console.log(this.data.table)
    if (this.newStatusOfTable) {
      this.serviceModuleService.changeTableStatus({ _id: this.data.table._id, newStatusOfTable: this.newStatusOfTable }).subscribe(res => {

      });
    }

  }

  onCancel() {
    this.dialogRef.close();
  }

}
