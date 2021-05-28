import { Injectable } from '@angular/core';
import { IDropDown } from '../interfaces/drop-down.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public getYears(startYear?: number): Array<IDropDown> {
    const currentYear = new Date().getFullYear();
    const years: Array<IDropDown> = [];
    startYear = startYear || 1900;
    while (startYear <= currentYear) {
      years.push({ text: startYear.toString(), value: startYear.toString() });
      startYear++;
    }
    return years;
  }

  public getRatings(): Array<IDropDown> {
    const ratings: Array<IDropDown> = [];
    let start = 1;
    while (start <= 5) {
      ratings.push({ text: start.toString(), value: start.toString() });
      start++;
    }
    return ratings;
  }

  public getCriticalities(): Array<IDropDown> {
    return [
      { text: 'High', value: 1 },
      { text: 'Meduim', value: 2 },
      { text: 'Low', value: 3 },
    ] as Array<IDropDown>;
  }
}
