import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, Subject } from 'rxjs';
import { CategoryService } from 'src/app/_services/category.service';
import { ConfirmationDialogService } from 'src/app/_services/confirmation-dialog.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories: any;
  public searchTerm: string | any;
  public searchValueChanged: Subject<string> = new Subject<string>();

  constructor(private router: Router,
    private service: CategoryService,
    private toastr: ToastrService,
    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getCategories();

    this.searchValueChanged.pipe(debounceTime(1000))
      .subscribe(() => {
        this.search();
      });
  }

  private getCategories() {
    this.service.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  public addCategory() {
    this.router.navigate(['/category']);
  }

  public editCategory(categoryId: number) {
    this.router.navigate(['/category/' + categoryId])
  }

  public deleteCategory(categoryId: number) {
    debugger;
    this.confirmationDialogService.confirm('Atention', 'Do you really want to delete this category?')
    
      .then((confirmed) =>{
        if (confirmed == true) {
        this.service.deleteCategory(categoryId).subscribe(() => {
          this.toastr.success('The category has been deleted');
          this.getCategories();
        },
          error => {
            this.toastr.error('Failed to delete the category.');
          })
        }
      })
      .catch(() => '');
  }

  public searchCategories() {
    this.searchValueChanged.next("true");
  }

  private search() {
    if (this.searchTerm !== '') {
      this.service.search(this.searchTerm).subscribe(category => {
        this.categories = category;
      }, error => {
        this.categories = [];
      });

    }
    else {
      this.service.getCategories().subscribe(categories => this.categories = categories);
    }
  }

}
