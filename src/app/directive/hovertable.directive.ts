import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHovertable]'
})
export class HovertableDirective {

    @HostListener('mouseenter') onmouseenter() {
        this.changerowColor('lightgray');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.changerowColor(null);
    }


    changerowColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
    constructor(public el: ElementRef) {
         this.el.nativeElement.style.backgroundColor = 'green';
    }
}

