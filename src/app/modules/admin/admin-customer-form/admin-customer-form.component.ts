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
                <input matInput #name maxlength="256" placeholder="Customer Name" formControlName="name">
                <mat-hint align="start"><strong>Customer Name</strong> </mat-hint>
                <mat-hint align="end">{{name.value.length}} / 256</mat-hint>
            </mat-form-field>
            
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Company name</mat-label>
                <input matInput #company maxlength="256" placeholder="Company name" formControlName="company">
                <mat-hint align="start"><strong>Company name</strong> </mat-hint>
                <mat-hint align="end">{{company.value.length}} / 256</mat-hint>
            </mat-form-field>
    
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>NIP</mat-label>
                <input matInput #nip maxlength="10" placeholder="NIP of Customer" formControlName="nip">
                <mat-hint align="start"><strong>NIP of Customer</strong> </mat-hint>
                <mat-hint align="end">{{nip.value.length}} / {{nip.maxLength}}</mat-hint>
            </mat-form-field>
        </div>
        
        <div class="customer_address">
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Street</mat-label>
                <input matInput #street maxlength="256" placeholder="Street of Customer" formControlName="street">
                <mat-hint align="start"><strong>Street of Customer</strong> </mat-hint>
                <mat-hint align="end">{{street.value.length}} / 256</mat-hint>
            </mat-form-field>
    
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Postal code</mat-label>
                <input matInput #postalCode maxlength="256" placeholder="Postal code of Customer" formControlName="postalCode">
                <mat-hint align="start"><strong>Postal code</strong> </mat-hint>
                <mat-hint align="end">{{postalCode.value.length}} / 256</mat-hint>
            </mat-form-field>
    
            <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>City</mat-label>
                <input matInput #city maxlength="32" placeholder="City of Customer" formControlName="city">
                <mat-hint align="start"><strong>City of Customer</strong> </mat-hint>
                <mat-hint align="end">{{city.value.length}} / {{city.maxLength}}</mat-hint>
            </mat-form-field>
        </div>
    </div>
    
    <div class="units_info">
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Units</mat-label>
            <input matInput #units maxlength="2" placeholder="Number of units" formControlName="units">
            <mat-hint align="start"><strong>Number of units</strong> </mat-hint>
            <mat-hint align="end">{{units.value.length}} / {{units.maxLength}}</mat-hint>
        </mat-form-field>
    
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Inspected</mat-label>
            <input matInput #inspected maxlength="256" placeholder="Inspected" formControlName="inspected">
            <mat-hint align="start"><strong>Inspected</strong> </mat-hint>
            <mat-hint align="end">{{inspected.value.length}} / 256</mat-hint>
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

}