import { Component, OnInit } from "@angular/core";
import { UpdateTableDialogComponent } from "../update-table-dialog/update-table-dialog.component";
import { MatDialog } from "@angular/material";
import { Table } from "../../../shared/models/table";
import { ServiceModuleService } from "../../services/service-module.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss"],
})
export class TablesComponent implements OnInit {
  tablesData: Table[] = [];

  constructor(
    public dialog: MatDialog,
    private serviceModuleService: ServiceModuleService
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.serviceModuleService.getTablesList().subscribe((res: Table[]) => {
      this.tablesData = res;
    });
  }

  updateTableDialog(table: Table) {
    const dialogRef = this.dialog.open(UpdateTableDialogComponent, {
      data: { table: table },
      width: "80%",
    });

    dialogRef.afterClosed().subscribe((_) => {
      this.refresh();
    });
  }
}
