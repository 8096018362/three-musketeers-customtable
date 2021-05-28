import { MatTableDataSource } from '@angular/material/table';
import { ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { DatePipe } from '@angular/common';
import { BaseService } from '../services/base.service';
import { DialogService } from '../services/dialog.service';

export abstract class BaseComponent implements OnInit {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    public displayedColumns: Array<string>;
    public dataSource: MatTableDataSource<any>;
    originalData = [];

    filtersForm: FormGroup;
    filtersVisible = true;
    toggleFiltersLabel = 'Hide filters';

    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    categories = [];

    constructor(
        protected pageService: BaseService<any>,
        protected dialogService: DialogService,
        protected datePipe: DatePipe) {
        this.filtersForm = new FormGroup({
            search: new FormControl(''),
            categories: new FormControl([[]]),
            date: new FormControl('')
        });
        this.filtersForm.valueChanges.subscribe((form) => this.applyFilters(form));
    }

    ngOnInit(): void { }

    // abstract loadItems(): void;

    protected init(data: Array<any>): void {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    search(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    // Run the filters for the table
    applyFilters(form): void {
        const date = form.date ? new Date(form.date.year, (form.date.month - 1), form.date.day) : '';
        // Note: JavaScript counts months from 0 to 11.

        const results = [];
        this.originalData.forEach(row => {
            const filterDate = this.datePipe.transform(date, 'yyyy-MM-dd');
            if (
                (this.categoryContains(row.category, this.categories)) &&
                ((form.date === '') || (new Date(filterDate) > new Date(row.date)))
            ) {
                results.push(row);
            }
        });
        this.dataSource.data = results;
    }

    // Show or hide the available filters
    toggleFilters(): void {
        this.filtersVisible = !this.filtersVisible;
        this.toggleFiltersLabel = this.filtersVisible ? 'Hide filters' : 'Show filters';
    }

    // Reset all the filters values
    clearFilters(): void {
        this.filtersForm.reset({
            search: '',
            categories: [],
            date: ''
        });

        this.categories = [];

        this.resetDatePicker();

        this.search('');
        this.applyFilters(this.filtersForm.value);
    }

    resetDatePicker(): void {
        this.filtersForm.controls.date.reset('');
    }

    // Check if a string contains another
    stringContains(string1: string, string2: string): boolean {
        return (string1.toLowerCase().indexOf(string2.toLowerCase()) > -1);
    }

    // // Check if a category contains a string
    categoryContains(rowCategory: string, categories: any[]): boolean {
        for (const category of categories) {
            if (this.stringContains(rowCategory, category)) {
                return true;
            }
        }
        return (categories.length === 0);
    }

    // Category tags
    addCategory(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our Category
        if ((value || '').trim()) {
            this.categories.push(value.trim());
            this.applyFilters(this.filtersForm.value);
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    removeCategory(interest: string): void {
        const index = this.categories.indexOf(interest);
        if (index >= 0) {
            this.categories.splice(index, 1);
            this.applyFilters(this.filtersForm.value);
        }
    }

    protected addOrUpdate(item: any): void {
        if (item.pkey) {
            this.pageService.update(item, item.pkey).subscribe((res) => {
                this.dialogService.openSnackbar('Item updated successfully!');
                this.loadItems();
            });
        } else {
            this.pageService.add(item).subscribe((res) => {
                this.dialogService.openSnackbar('Item added successfully!');
                this.loadItems();
            });
        }
    }

    public deleteItem(canDelete: boolean, id: string): void {
        if (canDelete) {
            this.pageService.delete(id).subscribe((res) => {
                this.dialogService.openSnackbar('Asset has been deleted successfully!');
                this.loadItems();
            });
        }
    }

    private loadItems(): void {
        this.pageService.getItems().subscribe((data: Array<any>) => {
            if (data) {
                this.init(data);
            }
        });
    }
}
