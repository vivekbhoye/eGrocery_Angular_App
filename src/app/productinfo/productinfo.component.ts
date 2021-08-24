import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  [x: string]: any;
  @Input()
  productDetails = {
    product_Name: '',
    product_Category: '',
    product_img: '',
    product_Price: '',
    product_Review: '',
    product_Description: ''
  }

  constructor(public resturl :ProductserviceService, public router : Router) { }

  ngOnInit(): void {
  }
  getValues(val:any){
    console.warn(val)
  }

  addProduct(){
    this.resturl.addProduct(this.productDetails).subscribe((data:{} )=>{
      this.router.navigate(['/products']);
    })

  }
  
  http: any;

// onFileUpload(event:any ){
//   document.getElementById("yourFileInput");
// this.selectedFile = event.target.files[0];
// }
// OnUploadFile() {
// //Upload file here send a binary data
// this.http.post('src/assets/Products_Images', this.selectedFile)
// .subscribe();
// }

// readUrl(event:any) {
//   if (event.target.files && event.target.files[0]) {
//     var reader = new FileReader();

//     reader.onload = (event: ProgressEvent) => {
//       this.url = (<FileReader>event.target).result;
//     }

//     reader.readAsDataURL(event.target.files[0]);
//   }
// }
}
