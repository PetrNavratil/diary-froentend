import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearcherComponent } from './searcher/searcher.component';
import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './card/card.component';
import { NoPaddingCard } from './card/no-padding-card.directive';
import { MaterialModule } from '@angular/material';
import { EqualValidator } from './directives/formFieldEqual';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { BookStatusPipe } from './status.pipe';
import { CommentComponent } from './comment/comment.component';
import { DropdownRowComponent } from './dropdown-row/dropdown-row.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TruncatePipe } from './truncate.pipe';
import { MyInputComponent } from './my-input/my-input.component';
import { TrackingBarComponent } from './tracking-bar/tracking-bar.component';
import { NothingComponent } from './nothing/nothing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfService } from './pdf.service';
import { ToastrService } from './toastr.service';
import { AuthService } from './auth.service';
import { FriendRequestComponent } from './friend-request/friend-request.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ToolbarComponent,
    SearcherComponent,
    LoaderComponent,
    CardComponent,
    NoPaddingCard,
    EqualValidator,
    LoadingButtonComponent,
    BookStatusPipe,
    CommentComponent,
    DropdownRowComponent,
    DropdownComponent,
    TruncatePipe,
    MyInputComponent,
    TrackingBarComponent,
    NothingComponent,
    FriendRequestComponent
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    BrowserAnimationsModule,

    ToolbarComponent,
    SearcherComponent,
    LoaderComponent,
    CardComponent,
    NoPaddingCard,
    EqualValidator,
    LoadingButtonComponent,
    BookStatusPipe,
    CommentComponent,
    DropdownRowComponent,
    DropdownComponent,
    TruncatePipe,
    MyInputComponent,
    TrackingBarComponent,
    NothingComponent,
    FriendRequestComponent
  ],
  providers: [
    PdfService,
    ToastrService,
    AuthService
  ]
})
export class SharedModule {
}
