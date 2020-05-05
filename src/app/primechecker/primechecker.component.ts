import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrimecheckerService } from "../primechecker.service";
import {FormControl, Validators} from "@angular/forms";
import {PrimeResponse} from "../model/prime-response";

@Component({
  selector: 'app-primechecker',
  templateUrl: './primechecker.component.html',
  styleUrls: ['./primechecker.component.css']
})
export class PrimecheckerComponent implements OnInit {

  responseMessage: PrimeResponse =  null;
  submitted = false;
  inputNumber = new FormControl('', [Validators.required, Validators.min(2), Validators.pattern('[0-9]*')]);

  constructor(private route: ActivatedRoute,
              private router: Router, private primecheckerService: PrimecheckerService) { }

  ngOnInit(): void {
    this.inputNumber.valueChanges.subscribe(newValue => {
      this.responseMessage = null;
    });
  }

  sendNumber() {
    if (this.inputNumber.invalid) {
      this.submitted = true;
      return;
    }

    console.log("given number to send: " + this.inputNumber.value);
    this.primecheckerService.executePrimeCheckerService(this.inputNumber.value).subscribe((res) => {
      console.log("Response, prime: " + res.prime + " nextPrime: " + res.nextPrime)
      this.responseMessage = res;
      this.submitted = false;
    });
  }

}
