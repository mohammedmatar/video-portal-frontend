'use strict';

export class ToastService {
  constructor (toastr){
    'ngInject';

    this.toastr = toastr;
  }
  success (title, body){
    this.toastr.success(body, title);
  }
  info (title, body){
    this.toastr.info(body, title);
  }
  error (title, body) {
    this.toastr.error(body, title);
  }
}
