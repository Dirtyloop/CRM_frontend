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