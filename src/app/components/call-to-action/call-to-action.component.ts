import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent implements OnInit {
  backgroundUrl!: string;
  

  ngOnInit(): void {
    this.backgroundUrl =
      'https://s3-alpha-sig.figma.com/img/c6e1/0f87/2ceae496fa4c08868dbe7e92f0c15f0c?Expires=1693180800&Signature=mPhqe4PINKxDTTlG~6aFcFmc4BUjJF7LFAyafGAIumC0Y8IVNQU78xeFMSCxDHG7OXTcAlj1lWTzfvhlAePQh6EcQt7BssTePYdpq-OCB433f--B92TH4e0-BmzqY5naxCcAY9eNSAo~UHjKMTT5nBbS0S0dIy0rhXstXyqunEG0UBtiTRBIo6HHs19nfS9cthSSMjd-EMDGCGpSQ3ApGYESUd-IDlRNaIRoz23ttnuIUMHUdmp4LJzc3P-FYNkDgE5Tr2pgOcsg8pz52bXgqe8IavnMimKjuYod~WINDTQTZYhbyFRAI4za2~2kuO8MKYaxQbZFngcxlAljh-eZMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
    }

  handleclick () {
    console.log("click")
  }
}
