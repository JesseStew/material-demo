import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  public showSpinner: Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  loadData() {
    this.showSpinner = true
    setTimeout(() => {
      this.showSpinner = false
    }, 5000)
  }

}
