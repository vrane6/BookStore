import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  @Input()
  title: string | any
  @Input()
  message: string | any
  @Input()
  btnOkText: string | any
  @Input()
  btnCancelText: string | any

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  public decline(){
    this.activeModal.close(false);
  }

  public accept(){
    this.activeModal.close(true);
  }

  public dismiss(){
    this.activeModal.dismiss();
  }


}
