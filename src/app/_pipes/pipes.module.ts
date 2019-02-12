import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipeMy } from './th.separator.pipe';

@NgModule({
    declarations: [DecimalPipeMy],
    imports: [ CommonModule ],
    exports: [DecimalPipeMy],
    providers: [],
})
export class PipesModule {}