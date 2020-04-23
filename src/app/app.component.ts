import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  spreadFunction(transformString:boolean, copyArray:boolean, concatArray:boolean) {

    if (transformString) {

      let pepito = 'HOLIS-K-ASE'
      let nowArray = [...pepito];

      console.log(nowArray);
    }

    if (copyArray) {

      let arr1 = [1, 2, 3];
      let arr2 = [...arr1];

      arr2.push(34);

      console.log(arr2);
      console.log(arr1);
      
    }

    if (concatArray) {
      let ob1 = [{
        name: 'pepe',
        lasName: 'vetri'
      }];

      let obj2 = [{
        name: 'luiggi',
        lasName: 'Ochoa'
      }]

      let obj3 = [...ob1, ...obj2];
      let obj3Method = ob1.concat(obj2);
      console.log(obj3.length);
      console.log(obj3Method.length);
    }

  }

  
}
