import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, Subject } from 'rxjs';
import { ConfirmationDialogService } from 'src/app/_services/confirmation-dialog.service';
import { MasterparameterService } from 'src/app/_services/masterparameter.service';

@Component({
  selector: 'app-masterparameter-list',
  templateUrl: './masterparameter-list.component.html',
  styleUrls: ['./masterparameter-list.component.css']
})
export class MasterparameterListComponent implements OnInit {

  public masterparameters: any;
  public searchTerm: string | any;
  public searchValueChanged: Subject<string> = new Subject<string>();

  constructor(private router: Router,
    private service: MasterparameterService,
    private toastr: ToastrService,
    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getMasterparameters();

    this.searchValueChanged.pipe(debounceTime(1000))
      .subscribe(() => {
        this.search();
      });
  }

  private getMasterparameters() {
    debugger;
    this.service.getMasterparameters().subscribe(masterparameters => {
      this.masterparameters = masterparameters;
    });
  }

  public addMasterparameter() {
    this.router.navigate(['/masterparameter']);
  }

  public editMasterparameter(parameterId: number) {
    this.router.navigate(['/masterparameter/' + parameterId])
  }

  public deleteMasterparameter(parameterId: number) {
    this.confirmationDialogService.confirm('Atention', 'Do you really want to delete this parameter?')
    
      .then((confirmed) =>{
        if (confirmed == true) {
        this.service.deleteMasterparameter(parameterId).subscribe(() => {
          this.toastr.success('The parameter has been deleted');
          this.getMasterparameters();
        },
          error => {
            this.toastr.error('Failed to delete the parameter.');
          })
        }
      })
      .catch(() => '');
  }

  public searchMasterparameters() {
    this.searchValueChanged.next("true");
  }

  private search() {
    if (this.searchTerm !== '') {
      this.service.search(this.searchTerm).subscribe(masterparameter => {
        this.masterparameters = masterparameter;
      }, error => {
        this.masterparameters = [];
      });

    }
    else {
      this.service.getMasterparameters().subscribe(masterparameters => this.masterparameters = masterparameters);
    }
  }

}
