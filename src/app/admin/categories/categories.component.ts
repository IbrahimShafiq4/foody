import { Component } from '@angular/core';
import { CategoryService } from './services/category/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  pageSize: number = 10;
  pageNumber: number = 1;
  categoryItem: string = '';

  categoryData: any;

  constructor(private _CategoryService: CategoryService, public dialog: MatDialog, private _ToastrService: ToastrService) {
    this.getCategoryData();
  }

  getCategoryData() {
    this._CategoryService.getAllCategories(this.pageSize, this.pageNumber).subscribe({
      next: (res) => {
        this.categoryData = res;
      },
      error: (error: HttpErrorResponse) => console.log(error.error.message),
      complete: () => console.log('Data has Been Returned Successfully')
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: { name: this.categoryItem },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCategory(result);
      }
    });
  }

  addCategory(categoryName: string) {
    this._CategoryService.onAddCategories(categoryName).subscribe({
      next: (res) => console.log(res),
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this.getCategoryData();
        this._ToastrService.success('Item Has been Added Successfully', 'Success');
      }
    })
  }

  onPageChange(event: any) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getCategoryData();
  }

  onEdit(categoryId: number) {
    this._CategoryService.onEditCategory(categoryId).subscribe({
      next: (res) => {
        const dialogRef = this.dialog.open(AddEditCategoryComponent, {
          data: { name: res.name },
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.updateCategory(categoryId, result);
          }
        });
      }
    });
  }

  updateCategory(categoryId: number, newName: string) {
    this._CategoryService.updateCategory(categoryId, newName).subscribe({
      next: (res) => console.log(res),
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this.getCategoryData();
        this._ToastrService.success('Category has been updated successfully', 'Success');
      }
    });
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCategoryData();
      }
    });
  }

}
