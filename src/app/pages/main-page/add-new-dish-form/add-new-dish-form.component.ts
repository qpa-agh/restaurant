import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-new-dish-form',
  templateUrl: './add-new-dish-form.component.html',
  styleUrls: ['./add-new-dish-form.component.css']
})

export class AddNewDishFormComponent implements OnInit {
  myForm: FormGroup;
  cousines: string[] = ["polish", "international", "italian", "french", "spanish"];
  categories: string[] = ["vegan", "dessert", "lunch", "dinner", "dessert"]
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
      this.myForm = this.fb.group({
        name: '',
        description: '',
        cuisine: '',
        categories: '',
        ingredients: '',
        maxNumber: '',
        price: '',
        photos: '',
      });
      this.myForm.valueChanges.subscribe(console.log);
  }
}
