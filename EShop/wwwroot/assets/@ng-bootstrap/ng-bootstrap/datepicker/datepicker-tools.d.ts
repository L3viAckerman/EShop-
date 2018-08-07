import {NgbDate} from './ngb-date';
import {MonthViewModel, NgbMarkDisabled} from './datepicker-view-model';
import {NgbCalendar} from './ngb-calendar';

export declare function isChangedDate(prev: NgbDate, next: NgbDate): boolean;

export declare function dateComparator(prev: NgbDate, next: NgbDate): boolean;

export declare function checkMinBeforeMax(minDate: NgbDate, maxDate: NgbDate): void;

export declare function checkDateInRange(date: NgbDate, minDate: NgbDate, maxDate: NgbDate): NgbDate;

export declare function isDateSelectable(months: MonthViewModel[], date: NgbDate): boolean;

export declare function buildMonths(calendar: NgbCalendar, months: MonthViewModel[], date: NgbDate, minDate: NgbDate, maxDate: NgbDate, displayMonths: number, firstDayOfWeek: number, markDisabled: NgbMarkDisabled, force: boolean): MonthViewModel[];

export declare function buildMonth(calendar: NgbCalendar, date: NgbDate, minDate: NgbDate, maxDate: NgbDate, firstDayOfWeek: number, markDisabled: NgbMarkDisabled): MonthViewModel;

export declare function getFirstViewDate(calendar: NgbCalendar, date: NgbDate, firstDayOfWeek: number): NgbDate;
