import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  result: number = 0;

  calculate(operator, num1, num2){  
  	switch(operator){
  		case '+':
  			this.result=parseFloat(num1)+parseFloat(num2);  
  		break;  
  		case '-':
  			this.result=parseFloat(num1)-parseFloat(num2);  
  		break;  	
  		case '*':
  			this.result=parseFloat(num1)*parseFloat(num2);  
  		break; 
  		case '/':
  			this.result=parseFloat(num1)/parseFloat(num2);  
  		break;   	
  	}	
  }  
}
