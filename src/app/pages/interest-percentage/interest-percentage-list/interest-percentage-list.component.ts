import { Component, OnInit,ViewChild} from '@angular/core';
import { InterestPercentageService } from '../interest-percentage.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource,MatFormField} from '@angular/material';
@Component({
  selector: 'app-interest-percentage-list',
  templateUrl: './interest-percentage-list.component.html',
  styleUrls: ['./interest-percentage-list.component.scss']
})
export class InterestPercentageListComponent implements OnInit {

  interestPercentageList:InterestPercentageList[] = [];
  constructor(public rest:InterestPercentageService, private route: ActivatedRoute, private router: Router) {
    
    this.interestPercentageList = [];
    this.rest.getInterestPercentages().subscribe((data: {}) => {
      console.log(data);
      this.interestPercentageList = data as InterestPercentageList[]
    
    });
   

   }


  ngOnInit() {
    this.getInterestPercentage();
  }

  add() {
    this.router.navigate(['pages/interest-percentage/interest-percentage-add']);
  }
  delete(id) {
    this.rest.addInterestPercentage(id)
      .subscribe(res => {
          this.getInterestPercentage();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getInterestPercentage() {
    this.interestPercentageList = [];
    this.rest.getInterestPercentages().subscribe((data: {}) => {
      console.log(data);
      this.interestPercentageList = data as InterestPercentageList[]
    
    });
  } 

}

export interface InterestPercentageList {
  InterestPercentageID :Number;
  UserAccountID :Number;
  InterestPercentage1 :string;
  CreatedDate :string;
  CreatedBy :string;
  LastModifiedDate :string;
  LastModifiedBy :string;
}
