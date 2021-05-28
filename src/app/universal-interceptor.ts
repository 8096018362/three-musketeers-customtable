import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DialogService } from './shared/services/dialog.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(
    @Optional() @Inject(REQUEST) protected request: Request,
    private ngxLoader: NgxUiLoaderService,
    private dialogService: DialogService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let serverReq: HttpRequest<any> = req;
    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
      if (!req.url.startsWith('/')) {
        newUrl += '/';
      }
      newUrl += req.url;
      serverReq = req.clone({ url: newUrl });
    }
    this.ngxLoader.start();
    return next.handle(serverReq).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.ngxLoader.stop();
      }
    },
      (err: Error) => {
        this.ngxLoader.stop();
        this.dialogService.showError(err.message);
        console.error(err);
      }));
  }
}
