import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[showIcon]'
})
export class ShowIconDirective {

  @Input()
  showIcon!: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener("mouseover") onMousover(): void {
    if (this.showIcon) this.getIcon().classList.add(...this.showIcon.split(" "));
  }

  @HostListener("mouseleave") onMouseleave(): void {
    if (this.showIcon) this.getIcon().classList.remove(...this.showIcon.split(" "));
  }

  private getIcon(): HTMLElement {
    return this.elementRef.nativeElement.children[0]
  }

}
