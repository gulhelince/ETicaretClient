import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';
//declare var alertify :any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private alertify:AlertifyService
  ) { }

  ngOnInit(): void {
   // alertify.success('Success message');

   //this.alertify.message("Merhaba",MessageType.Notify)
  }

}
