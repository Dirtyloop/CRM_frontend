import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-admin-acunit-form',
  templateUrl: './admin-acunit-form.component.html',
  styleUrls: ['./admin-acunit-form.component.scss']
})
export class AdminAcunitFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    ngOnInit(): void {

    }

    get model(){
        return this.parentForm.get("model");
    }

    get power(){
        return this.parentForm.get("power");
    }

    get serialNumber(){
        return this.parentForm.get("serialNumber");
    }

    get instalDate(){
        return this.parentForm.get("instalDate");
    }

    get customerId(){
        return this.parentForm.get("customerId");
    }
}