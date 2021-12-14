import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  public sizes: string[] = ['Small', 'Medium', 'Large'];

  //FormControls
  profileForm = this.fb.group({
    vorname: new FormControl('keine Zahlen, nur -', [Validators.pattern('[-a-zA-Z ]*'), Validators.required]), //['keine Zahlen, nur -', [Validators.pattern('[-a-zA-Z ]*'), Validators.required]],
    nachname: ['keine Zahlen, nur -', [Validators.pattern('[-a-zA-Z ]*'), Validators.required]],
    street1: ['required', Validators.required],
    postcode1: ['4 zahlen', [Validators.required, Validators.pattern('[0-9]{4}')]],
    location1: ['keine zahlen', [Validators.required, Validators.pattern('[A-Za-z]*')]],
    size: ['', Validators.required],
    street2: ['', [Validators.required]],
    postcode2: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
    location2: ['keine zahlen', [Validators.required, Validators.pattern('[A-Za-z]*')]],
    // password: ['', Validators.required],
    // email: ['', Validators.required]
  });


  get vorname() { return this.profileForm.get('vorname'); }

}
