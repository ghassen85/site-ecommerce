import { FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  constructor( private http: HttpClient ) {

   }
  getproduit()
   {
return this.http.get( environment.host + '/produits/getproduit');
   }
   save(data:any){
     return this.http.post(environment.host+'/produits/addProduitimage',data);
   }
   deleteproduit(id: any){
     return this.http.delete(environment.host+'/produits/deleteOne/'+id)
   }
   updateproduit(id: any,data :any){
     return this.http.put(environment.host+'/produits/put/'+id,data)
   }
   getOneproduit(id : any)
   {
return this.http.get( environment.host + '/produits/find/'+id);
   }
   getAllsouscollection(){
     return this.http.get(environment.host+'/scs/getAll');
   }
}
