import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  contactForm!: FormGroup

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', Validators.required],
      password: ["", Validators.required],
     
    })
  }

  login() {
    localStorage.setItem(JSON.stringify(this.contactForm.value), "contactInfo")
  }

}
