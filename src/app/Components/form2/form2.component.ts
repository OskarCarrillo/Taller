import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  addressForm = this.fb.group({
    marca: [null, Validators.required],
    modelo: [null, Validators.required],
    color: [null, [Validators.required, Validators.maxLength(2)]],
    placa: [null, [Validators.required, Validators.pattern("^[a-zA-z]{3}\-?[0-9]{2}[a-zA-Z0-9]$")]],
  });

  marcas = [
    {name: 'Abarth'},
    {name: 'Alfa Romeo'},
    {name: 'Aston Martin'},
    {name: 'Audi'},
    {name: 'Bentley'},
    {name: 'BMW'},
    {name: 'Cadillac'},
    {name: 'Caterham'},
    {name: 'Chevrolet'},
    {name: 'Citroen'},
    {name: 'Dacia'},
    {name: 'Ferrari'},
    {name: 'Fiat'},
    {name: 'Ford'},
    {name: 'Honda'},
    {name: 'Infiniti'},
    {name: 'Isuzu'},
    {name: 'Iveco'},
    {name: 'Jaguar'},
    {name: 'Jeep'},
    {name: 'Kia'},
    {name: 'KTM'},
    {name: 'Lada'},
    {name: 'Lamborghini'},
    {name: 'Lancia'},
    {name: 'Land Rover'},
    {name: 'Lexus'},
    {name: 'Lotus'},
    {name: 'Maserati'},
    {name: 'Mazda'},
    {name: 'Mercedes-Benz'},
    {name: 'Mini'},
    {name: 'Mitsubishi'},
    {name: 'Morgan'},
    {name: 'Nissan'},
    {name: 'Opel'},
    {name: 'Peugeot'},
    {name: 'Piaggio'},
    {name: 'Porsche'},
    {name: 'Renault'},
    {name: 'Rolls-Royce'},
    {name: 'Seat'},
    {name: 'Skoda'},
    {name: 'Smart'},
    {name: 'SsangYong'},
    {name: 'Subaru'},
    {name: 'Suzuki'},
    {name: 'Tata'},
    {name: 'Tesla'},
    {name: 'Toyota'},
    {name: 'Volkswagen'},
    {name: 'Volvo'},
  ];

  modelos = [
    {name: '2000', value:2000},
    {name: '2001', value:2001},
    {name: '2002', value:2002},
    {name: '2003', value:2003},
    {name: '2004', value:2004},
    {name: '2005', value:2005},
    {name: '2006', value:2006},
    {name: '2007', value:2007},
    {name: '2008', value:2008},
    {name: '2009', value:2009},
    {name: '2010', value:2010},
    {name: '2011', value:2011},
    {name: '2012', value:2012},
    {name: '2013', value:2013},
    {name: '2014', value:2014},
    {name: '2015', value:2015},
    {name: '2016', value:2016},
    {name: '2017', value:2017},
    {name: '2018', value:2018},
    {name: '2019', value:2019},
    {name: '2020', value:2020},
    {name: '2021', value:2021},
    {name: '2022', value:2022},
    {name: '2023', value:2023},
  ];
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
