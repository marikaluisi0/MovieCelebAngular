import { Component, EventEmitter, Output } from "@angular/core";
import { RangeCustomEvent, RangeValue } from "@ionic/core";

@Component({
    selector:'app-range',
    templateUrl:'range.html',
    styleUrls: ['bar.scss']

})
export class RangeBarComponent{
    @Output() sliderValueChanged = new EventEmitter<RangeValue>
    sliderColor:string="danger";
    constructor(){}
    
    RatingSliderChangeEmit(e:Event){
        this.setRangeColor(Number((e as RangeCustomEvent).detail.value))
        this.sliderValueChanged.emit((e as RangeCustomEvent).detail.value);
    }

    setRangeColor(value:number) {
        if (value < 40) {
            this.sliderColor = 'danger'
        }else if(value >= 40 && value < 70) {
            this.sliderColor = 'warning'
        }else {
            this.sliderColor = 'primary'
        }
    }
}