import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminMessageService } from '../admin-message.service';
import { AdminAcunitUpdateService } from './admin-acunit-update.service';
import { AdminAcunitUpdate } from './model/adminAcunitUpdate';

@Component({
  selector: 'app-admin-acunit-update',
  templateUrl: './admin-acunit-update.component.html',
  styleUrls: ['./admin-acunit-update.component.scss']
})
export class AdminAcunitUpdateComponent implements OnInit {

  acunit!: AdminAcunitUpdate;
  acunitForm!: FormGroup;
  durationInSeconds = 3;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private adminAcunitUpdateService: AdminAcunitUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService
  ) { }

  ngOnInit(): void {
    this.getAcunit();

    this.acunitForm = this.formBuilder.group({
      model: ['', [Validators.required, Validators.minLength(3)]],
      power: [''],
      serial: [''],
      instalDate: ['', [Validators.required, Validators.pattern('^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$')]]
    })
  }

  getAcunit() {
    let id = Number(this.activatedRouter.snapshot.params['id']);
    this.adminAcunitUpdateService.getAcunit(id)
      .subscribe(acunit => this.mapFormValues(acunit));
  }

  onSaveClick() {
    let id = Number(this.activatedRouter.snapshot.params['id']);
    this.adminAcunitUpdateService.saveAcunit(id, this.acunitForm.value).subscribe({
      next: acunit => {
        this.router.navigate(["/admin/acunits"])
          .then(() => this.snackBar.open("AC Unit saved", 'Updated', { duration: this.durationInSeconds * 1000 }));
      },
      error: err => this.adminMessageService.addSpringErrors(err.error)
    });
  }

  private mapFormValues(acunit: AdminAcunitUpdate): void {
    return this.acunitForm.setValue({
      model: acunit.model,
      power: acunit.power,
      serial: acunit.serial,
      instalDate: acunit.instalDate,
    });
  }

}

