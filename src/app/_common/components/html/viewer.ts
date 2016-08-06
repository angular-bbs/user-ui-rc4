import { Component, OnInit, Input } from "@angular/core";
import { SafeHtml, DomSanitizationService } from "@angular/platform-browser";

@Component({
  selector: 'html-viewer',
  template: require('./viewer.html'),
  styles: [
    require('./viewer.scss')
  ],
})
export class HtmlViewer implements OnInit {
  constructor(private sanitizer: DomSanitizationService) {
  }

  _content: string;

  html: SafeHtml;

  @Input() set content(value: string) {
    this.html = this.sanitizer.bypassSecurityTrustHtml(value);
  }

  get content(): string {
    return this._content;
  }

  ngOnInit() {
  }
}
