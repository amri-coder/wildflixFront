import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categoryForm: FormGroup;
  isCreated: Boolean = false;
  message: String = "Catégorie créée avec succès";

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }


  public onSubmit() {

    if (this.categoryForm.valid) {
      this.categoryService.addCategory(this.categoryForm.value)
        .subscribe(created => {
          this.isCreated = true;
          this.categoryForm.reset();
          setTimeout(() => { this.isCreated = false; }, 3000);
        });


    }


  }
}
