import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    name: string = "";
    comment: string = "";
    @Output() onCommentAdded = new EventEmitter<{name: string; comment:string;}>(); //emitting a comment
    @ViewChild('commentForm') commentForm: NgForm; // binding ViewChild decorator to the local variable we just created
    onSubmit(commentForm: NgForm) {
        // the commentForm var we pass into the submit function will be an instance of NgForm
        let comment = { name: this.name, comment: this.comment }; // create the comment
        this.onCommentAdded.emit(comment); // emit the comment!
        this.commentForm.resetForm();
    }
}