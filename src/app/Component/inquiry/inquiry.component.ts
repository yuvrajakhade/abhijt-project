import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css'],
})
export class InquiryComponent implements OnInit {
  show: boolean = true;
  constructor(private route: Router) {}

  ngOnInit(): void {}
  navigateToAddInquiry() {
    this.show = false;
    this.route.navigate(['/Dashboard/Inquiry/AddInquiry']);
  }
}
