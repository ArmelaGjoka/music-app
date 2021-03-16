import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatSelectModule } from "@angular/material";
import { ConcatPipe, SharedModule } from "projects/shared/src/public-api";
import { CalendarRoutingModule } from "./calendar-routing.module";
import { DayViewComponent } from "./components/day-view/day-view.component";
import { SongsDialogComponent } from "./components/songs-dialog/songs-dialog.component";
import { CalendarViewComponent } from "./container/calendar-view/calendar-view.component";


@NgModule({
    declarations: [    
        CalendarViewComponent,
        DayViewComponent,
        SongsDialogComponent
    ],
    imports: [
        CommonModule,
        CalendarRoutingModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
        MatIconModule,
        MatDialogModule,
        DragDropModule,
        SharedModule,
        MatListModule
    ],
    entryComponents: [SongsDialogComponent]
})
export class CalendarModule {}