import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percantage'
})
export class PersentagePipe implements PipeTransform {
    transform(value: any) {
        return value * value;
    }
}