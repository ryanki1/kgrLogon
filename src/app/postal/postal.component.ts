import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostalQuery} from './state/postal.query';
import {Postal, createPostal} from './state/postal.model';
import {PostalService} from './state/postal.service';
import {PersistNgFormPlugin} from '@datorama/akita';
import {PostalStore} from './state/postal.store';

@Component({
  selector: 'app-postal',
  templateUrl: './postal.component.html',
  styleUrls: ['./postal.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PostalComponent implements OnInit {

  public postalForm: FormGroup = this.fb.group({
    id: [0],
    line1: ['', Validators.required],
    line2: ['', Validators.required],
    line3: [''],
    city: ['', Validators.required],
    postcode: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
  });
  private persistForm: PersistNgFormPlugin<Postal>;

  constructor(private fb: FormBuilder,
              private postalQuery: PostalQuery,
              private postalStore: PostalStore,
              private postalService: PostalService) {
  }

  ngOnInit(): void {
    this.persistForm = new PersistNgFormPlugin(this.postalQuery, createPostal).setForm(this.postalForm);
    this.checkFormControlsForErrors();
  }

  checkFormControlsForErrors() {
    Object.keys(this.postalForm.controls).forEach((key: string) => {
      if (key === 'id') {
        return;
      }
      this.postalForm.controls[key].markAsTouched();
    });
  }

  submitPostal(e: any) {
    const postal: Postal = this.postalForm.value;
    this.postalService.upsert(this.postalForm.get('id').value, postal);
  }

}
