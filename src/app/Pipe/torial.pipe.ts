import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'toRial' })
export class TorialPipe implements PipeTransform {
    transform(value: string) {
        return value + 'ریال';
    }
}
