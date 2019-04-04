import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
    ],
    exports:[
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
    ]
})

export class MaterialModule{}