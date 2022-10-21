import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Masterparameter } from 'src/app/_models/Masterparameter';
import { MasterparameterService } from 'src/app/_services/masterparameter.service';

@Component({
  selector: 'app-masterparameter',
  templateUrl: './masterparameter.component.html',
  styleUrls: ['./masterparameter.component.css']
})
export class MasterparameterComponent implements OnInit {

  public formData: Masterparameter | any;

  constructor(public service: MasterparameterService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();

    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });

    if (id != null) {
      this.service.getMasterparameterById(id).subscribe(masterparameter => {
        this.formData = masterparameter;
      }, error => {
        this.toastr.error('An error occurred on get the record.');
      });
    } else {
      this.resetForm();
    }
  }

  private resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }

    this.formData = {
      id: 0,
      name: ''
    }
  }

  public onSubmit(form: NgForm) {
    if (form.value.id === 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }

  }

  public insertRecord(form: NgForm) {
    this.service.addMasterparameter(form.form.value).subscribe(() => {
      this.toastr.success('Registration successful');
      this.resetForm();
      this.router.navigate(['/masterparameter']);
    }, () => {
      this.toastr.error('An error occured on insert the record.');
    })
  }

  public updateRecord(form: NgForm) {
    debugger;
    this.service.updateMasterparameter(form.form.value.id, form.form.value).subscribe(() => {
      this.toastr.success('Updated successful');
      this.resetForm(form);
      this.router.navigate(['/masterparameter']);
    }, () => {
      this.toastr.error('An error occurred on update the record.');
    });
  }

  public cancel() {
    this.router.navigate(['/masterparameter']);
  }




}
