import {Directive, ElementRef, forwardRef, HostListener, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


const TT_HIDDEN_INPUT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TtInputDirective),
  multi: true,
};

@Directive({
  selector: 'tt-input',
  providers: [TT_HIDDEN_INPUT_VALUE_ACCESSOR]
})
export class TtInputDirective implements ControlValueAccessor
{
  val = "";
  onChange: any = () => {};
  onTouch: any = () => {};

  set value(value: string){
    if(!value) return;
    this.val = value;
    this.elRef.nativeElement.value = this.value;

    this.onChange(value);
    this.onTouch(value);
  }

  @HostListener("valueChange", ['$event.detail'])
  onHostChange(value: string){
    this.value = value;
  }

  constructor(private elRef : ElementRef) {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: string): void {
    this.val = value;
    this.elRef.nativeElement.value = value;
  }


}
