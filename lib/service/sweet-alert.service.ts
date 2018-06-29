import { Injectable } from '@angular/core';
import { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import swal from 'sweetalert2';

@Injectable()
export class SweetAlertService {

  constructor() { }

  swal( options: SweetAlertOptions ) {
    return swal(options);
  }

  confirm(options : SweetAlertOptions): Promise<SweetAlertResult> {
    let defaultOptions : SweetAlertOptions= {
      confirmButtonText: 'Confirm',
      showCancelButton: true,
      type: 'warning'
    };
    return this.swal(Object.assign(defaultOptions, options));
  }

  prompt(options: SweetAlertOptions): Promise<SweetAlertResult> {
    let defaultOptions: SweetAlertOptions = {
      confirmButtonText: 'Submit',
      showCancelButton: true,
      input: 'text'
    };
    return this.swal(Object.assign(defaultOptions, options));
  }

  alert(options: SweetAlertOptions): Promise<SweetAlertResult> {
    let defaultOptions = {
      confirmButtonText: 'OK',
      type: 'info'
    };
    return this.swal(Object.assign(defaultOptions, options));
  }

  question(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return this.alert(
      Object.assign({
        type: 'question'
      }, options));
  }

  success(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return this.alert(Object.assign({
      type: 'success'
    }, options));
  }

  warning(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return this.alert(Object.assign({
      type: 'warning'
    }, options));
  }

  error(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return this.alert(Object.assign({
      type: 'error'
    }, options));
  }

  info(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return this.alert(Object.assign({
      type: 'info'
    }, options));
  }

}