import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient: HttpClient) { }

  getAllCategories(pageSize: number, pageNumber: number): Observable<ICategory> {
    return this._HttpClient.get<ICategory>('Category', { params: { pageSize: pageSize, pageNumber: pageNumber } })
  }

  onAddCategories(itemName: string): Observable<string> {
    return this._HttpClient.post<string>('Category', { name: itemName })
  }

  onEditCategory(id: number): Observable<ICategory> {
    return this._HttpClient.get<ICategory>(`Category/${id}`);
  }

  updateCategory(categoryId: number, newName: string): Observable<any> {
    return this._HttpClient.put<any>(`Category/${categoryId}`, { name: newName });
  }
  
  deleteCategory(categoryId: number): Observable<any> {
    return this._HttpClient.delete<any>(`Category/${categoryId}`)
  }
}
