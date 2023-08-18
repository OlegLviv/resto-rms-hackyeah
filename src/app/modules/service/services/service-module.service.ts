import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Table } from "../../shared/models/table";
import { Dish } from "../../shared/models/dish";

@Injectable()
export class ServiceModuleService {
    constructor(private http: HttpClient) { }
    private BASE_URL = "/api/iko";

    getTablesList() {
        return this.http.get(`${this.BASE_URL}/tables`).pipe(map((res: Table[]) => res));
    }

    getDishesList() {
        return this.http.get(`${this.BASE_URL}/dishes`).pipe(map((res: Dish[]) => res));
    }

    changeTableStatus(data) {
        return this.http.post(`${this.BASE_URL}/changeTableStatus`, data).pipe(map(res => res));
    }

}
