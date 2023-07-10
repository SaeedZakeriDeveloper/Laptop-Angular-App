import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {LaptopData} from './laptop.model';

@Component({
  selector: 'app-laptop-dash',
  templateUrl: './laptop-dash.component.html',
  styleUrls: ['./laptop-dash.component.css']
})

export class LaptopDashComponent implements OnInit {

  formValue!: FormGroup
  laptopModelObj: LaptopData = new LaptopData;
  allLaptopData: any;
  showAdd!: boolean;
  showBtn!: boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {
  }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Model: [''],
      Processor: [''],
      Ram: [''],
      Display: [''],
      Price: ['']
    })
    this.getAllData();
  }

  clickAddLaptop() {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  addLaptop() {
    this.laptopModelObj.Model = this.formValue.value.Model;
    this.laptopModelObj.Processor = this.formValue.value.Processor;
    this.laptopModelObj.Ram = this.formValue.value.Ram;
    this.laptopModelObj.Display = this.formValue.value.Display;
    this.laptopModelObj.Price = this.formValue.value.Price;

    this.api.postLaptop(this.laptopModelObj).subscribe(res => {
      console.log(res);
      alert("Laptop Added Successfully");
      this.formValue.reset();

      let ref = document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, err => {
      console.log(err);
      alert("laptop Added Failed!");
    })
  }

  getAllData() {
    this.api.getLaptop().subscribe(res => {
      this.allLaptopData = res;
    }, err => {
      console.log(err);
    })
  }

  deleteLaptop(data: any) {
    this.api.deleteLaptop(data).subscribe((res: any) => {
      console.log(res);
      alert("Laptop Deleted Successfully");
      this.getAllData();
    })
  }

  onEditLaptop(data: any) {
    this.showAdd = false;
    this.showBtn = true;

    this.laptopModelObj.id = data.id;

    this.formValue.controls['Model'].setValue(data.Model);
    this.formValue.controls['Processor'].setValue(data.Processor);
    this.formValue.controls['Ram'].setValue(data.Ram);
    this.formValue.controls['Display'].setValue(data.Display);
    this.formValue.controls['Price'].setValue(data.Price);
  }

  updateLaptop() {
    this.laptopModelObj.Model = this.formValue.value.Model;
    this.laptopModelObj.Processor = this.formValue.value.Processor;
    this.laptopModelObj.Ram = this.formValue.value.Ram
    this.laptopModelObj.Display = this.formValue.value.Display;
    this.laptopModelObj.Price = this.formValue.value.Price;

    this.api.updateLaptop(this.laptopModelObj.id, this.laptopModelObj).subscribe((res: any) => {
      alert("Laptop Updated Successfully");
      this.formValue.reset();
      let ref = document.getElementById('close');
      ref?.click();
      this.getAllData();
    })
  }

}
