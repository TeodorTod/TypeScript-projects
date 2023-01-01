import { Component } from '@angular/core';
import { companymodel } from '../Model/companymodel';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  companydata!:companymodel[];

  displayColumns: string[] =["id", "name", "empcount",
"revenue", "address", "isactive", "action"];
}
