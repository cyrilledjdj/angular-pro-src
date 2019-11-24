import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(size: number, extension: string = 'MB', ...args: any[]): any {
    console.log(size, extension, args);
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }

}
