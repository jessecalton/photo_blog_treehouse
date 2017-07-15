import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntryService } from '../shared/entry.service';

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    name: string = "";
    comment: string = "";
    @Input() entryId: number;
    @Output() onCommentAdded = new EventEmitter<{name: string; comment:string;}>(); //emitting a comment
    @ViewChild('commentForm') commentForm: NgForm; // binding ViewChild decorator to the local variable we just created
    
    constructor(private entryService: EntryService) {}

    onSubmit(commentForm: NgForm) {
        // the commentForm var we pass into the submit function will be an instance of NgForm
        if (this.commentForm.invalid) return;
        let comment = { name: this.name, comment: this.comment }; // create the comment
        this.entryService.addComment(this.entryId, comment)
            .then(() => {
                this.onCommentAdded.emit(comment); // emit the comment!
                this.commentForm.resetForm();
            });
    }
}