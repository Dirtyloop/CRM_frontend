import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-customer-form',
    template: `
<div [formGroup]="parentForm">
    <div class="customer_info">
        <div class="customer_data">
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Name</mat-label>
                <input matInput #nameInput maxlength="32" placeholder="Customer Name" formControlName="name">
                <div *ngIf="name?.invalid && (name?.dirty || name?.touched)">
                    <div *ngIf="name?.errors?.['required'] || name?.errors?.['minlength']">
                        Name (from 3 to 32 characters) is required
                    </div>
                </div>
                <mat-hint align="start"><strong>Customer Name</strong> </mat-hint>
                <mat-hint align="end">{{nameInput.value.length}} / {{nameInput.maxLength}}</mat-hint>
            </mat-form-field>
            
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Company name</mat-label>
                <input matInput #companyInput maxlength="32" placeholder="Company name" formControlName="company">
                <mat-hint align="start"><strong>Company name</strong> </mat-hint>
                <mat-hint align="end">{{companyInput.value.length}} / {{companyInput.maxLength}}</mat-hint>
            </mat-form-field>
    
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>NIP</mat-label>
                <input matInput #nipInput maxlength="10" placeholder="NIP of Customer" formControlName="nip">
                <mat-hint align="start"><strong>NIP of Customer</strong> </mat-hint>
                <mat-hint align="end">{{nipInput.value.length}} / {{nipInput.maxLength}}</mat-hint>
            </mat-form-field>
        </div>
        
        <div class="customer_address">
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Street</mat-label>
                <input matInput #streetInput maxlength="32" placeholder="Street of Customer" formControlName="street">
                <div *ngIf="street?.invalid && (street?.dirty || street?.touched)">
                    <div *ngIf="street?.errors?.['required'] || street?.errors?.['minlength']">
                        Street (from 3 to 32 characters) is required
                    </div>
                </div>
                <mat-hint align="start"><strong>Street of Customer</strong> </mat-hint>
                <mat-hint align="end">{{streetInput.value.length}} / {{streetInput.maxLength}}</mat-hint>
            </mat-form-field>
    
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Postal code</mat-label>
                <input matInput #postalCodeInput maxlength="6" placeholder="Postal code of Customer" formControlName="postalCode">
                <div *ngIf="postalCode?.invalid && (postalCode?.dirty || postalCode?.touched)">
                    <div *ngIf="postalCode?.errors?.['required'] || postalCode?.errors?.['pattern']">
                        Postal code (xx-xxx) is required
                    </div>
                </div>
                <mat-hint align="start"><strong>Postal code</strong> </mat-hint>
                <mat-hint align="end">{{postalCodeInput.value.length}} / {{postalCodeInput.maxLength}}</mat-hint>
            </mat-form-field>
    
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>City</mat-label>
                <input matInput #cityInput maxlength="32" placeholder="City of Customer" formControlName="city">
                <div *ngIf="city?.invalid && (city?.dirty || city?.touched)">
                    <div *ngIf="city?.errors?.['required'] || city?.errors?.['minlength']">
                        City of Customer (from 3 to 32 characters) is required
                    </div>
                </div>
                <mat-hint align="start"><strong>City of Customer</strong> </mat-hint>
                <mat-hint align="end">{{cityInput.value.length}} / {{cityInput.maxLength}}</mat-hint>
            </mat-form-field>
        </div>
    </div>
    
    <div class="units_info">
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Units</mat-label>
            <input matInput #unitsInput maxlength="2" placeholder="Number of units" formControlName="units">
            <div *ngIf="units?.invalid && (units?.dirty || units?.touched)">
                <div *ngIf="units?.errors?.['required'] || units?.errors?.['min']">
                    Units is required
                </div>
            </div>
            <mat-hint align="start"><strong>Number of units</strong> </mat-hint>
            <mat-hint align="end">{{unitsInput.value.length}} / {{unitsInput.maxLength}}</mat-hint>
        </mat-form-field>
    
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Inspected</mat-label>
            <input matInput #inspectedInput maxlength="3" placeholder="Inspected" formControlName="inspected">
            <div *ngIf="inspected?.invalid && (inspected?.dirty || inspected?.touched)">
                    <div *ngIf="inspected?.errors?.['required'] || inspected?.errors?.['pattern']">
                        Inspected (YES or NO) is required
                    </div>
                </div>
            <mat-hint align="start"><strong>Inspected</strong> </mat-hint>
            <mat-hint align="end">{{inspectedInput.value.length}} / {{inspectedInput.maxLength}}</mat-hint>
        </mat-form-field>
    </div>
    <div align="end">
        <button mat-flat-button type="submit" [disabled]="!parentForm.valid">Save</button>
        <button mat-flat-button routerLink="/admin/customers">Cancel</button>
    </div>
</div>`,
  styleUrls: ['./admin-customer-form.component.scss']
})
export class AdminCustomerFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    ngOnInit(): void {

    }

    get name(){
        return this.parentForm.get("name");
    }

    get street(){
        return this.parentForm.get("street");
    }

    get postalCode(){
        return this.parentForm.get("postalCode");
    }

    get city(){
        return this.parentForm.get("city");
    }

    get units(){
        return this.parentForm.get("units");
    }

    get inspected(){
        return this.parentForm.get("inspected");
    }
}