import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/shared/interfaces/hotels-list-interface';
@Pipe({
  name: 'searchingHotel'
})
export class SearchingHotelPipe implements PipeTransform {
  transform(hotelsArr: Hotel[], findByName: string, findByDescription: string, Stars: number): Hotel[] {

    if (findByName) {hotelsArr = [...hotelsArr.filter(hotel => hotel.title.includes(findByName))]}
    if (findByDescription) {hotelsArr = [...hotelsArr.filter(hotel => hotel.description.includes(findByDescription))]}
    if (Stars) {hotelsArr = [...hotelsArr.filter(hotel => hotel.stars === Stars)]}
    return hotelsArr; 
  }
}
