import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../admin/categories/services/category/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  userName: string = '';

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _CategoryService: CategoryService,
    private _ToastrService: ToastrService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') ?? '';
  }

  onDelete(id: number) {
    this._CategoryService.deleteCategory(id).subscribe({
        next: () => {
            this.dialogRef.close(true);
        },
        error: (error: HttpErrorResponse) => {
            this._ToastrService.error(error.error.message, 'Error');
        }
    });
}

}