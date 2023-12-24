import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  constructor(private offerService: DataService) { }
  bool: any = false;
  id: any
  offers: any[] = [];
  showTag: string;
  search: string
  @ViewChild('btn') btntag: ElementRef<any>

  ngOnInit() {
    this.offers = this.offerService.offer;
    this.offerService.countQuantity()
  }

  showOverFlow(btn: HTMLSpanElement) {
    this.bool = !this.bool
    this.id = btn.id
    if (this.bool) {
      this.showTag = 'Show Less'
    }
  }







}
