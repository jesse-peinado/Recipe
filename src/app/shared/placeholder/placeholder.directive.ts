import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
    viewContainerRef: ViewContainerRef
    contructor(_viewContainerRef: ViewContainerRef){
        this.viewContainerRef = _viewContainerRef;
    }


}