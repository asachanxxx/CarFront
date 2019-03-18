import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from './Facade.Service';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule 
    ],
    exports: [],
    providers: [
        FacadeService
    ],
})
export class ServiceModule {}