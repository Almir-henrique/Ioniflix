import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[efeitoAumentar]',
  standalone: true,
})
export class efeitoAumentar {
  @HostBinding('style.transform')
  scale: string = 'scale(1)';

  // Desktop
  @HostListener('mouseenter')
  onMouseEnter() {
    this.scale = 'scale(1.2)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.scale = 'scale(1)';
  }

  // Mobile
  @HostListener('touchstart')
  onTouchStart() {
    this.scale = 'scale(1.2)';
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.scale = 'scale(1)';
  }
}
