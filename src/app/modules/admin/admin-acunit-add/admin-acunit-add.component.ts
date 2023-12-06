import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminMessageService } from '../admin-message.service';
import { AdminAcunitAddService } from './admin-acunit-add.service';

@Component({
  selector: 'app-admin-acunit-add',
  templateUrl: './admin-acunit-add.component.html',
  styleUrls: ['./admin-acunit-add.component.scss']
})
export class AdminAcunitAddComponent implements OnInit {

  acunitForm!: FormGroup;
  durationInSeconds = 3;

  constructor(
    private formBuilder: FormBuilder,
    private adminAcunitAddService: AdminAcunitAddService,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService
  ) { }

  ngOnInit(): void {

    this.acunitForm = this.formBuilder.group({
      model: ['', [Validators.required, Validators.minLength(3)]],
      power: [''],
      serial: [''],
      instalDate: ['', [Validators.required, Validators.pattern('^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$')]]
    })
  }

  onSaveClick() {
    this.adminAcunitAddService.saveNewAcunit(this.acunitForm.value)
      .subscribe({
        next: acunit => {
          this.router.navigate(["/admin/acunits"])
            .then(() => this.snackBar.open("New AC Unit added", 'Added', { duration: this.durationInSeconds * 1000 }))
        },
        error: err => this.adminMessageService.addSpringErrors(err.error)
      })
  }

}
