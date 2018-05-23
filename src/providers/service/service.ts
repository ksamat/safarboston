import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  services = [
    {
      header: "STYLING",
      menus: [
        {
          name: "Cut & Blowdry",
          value: "women/men"
        },
        {
          name: "– Creative Director",
          value: "95/75"
        },
        {
          name: "– Senior Stylist",
          value: "70/55"
        },
        {
          name: "– Top Stylist",
          value: "65/55"
        },
        {
          name: "– Stylist/First Time",
          value: "60/50"
        },
        {
          name: "Blowdry",
          value: "40+"
        },
        {
          name: "Updo Chingon",
          value: "85+"
        },
        {
          name: "Flat/Curling Iron",
          value: "25+"
        },
        {
          name: "Extensions",
          value: "call"
        }
      ]
    },
    {
      header: "COLOR",
      menus: [
        {
          name: "Single Process Color",
          value: "70+"
        },
        {
          name: "Colorance",
          value: "70+"
        },
        {
          name: "Men’s Single Process",
          value: "50"
        },
        {
          name: "Full Highlights",
          value: "175"
        },
        {
          name: "Half/Partial Highlights",
          value: "135"
        },
        {
          name: "Balayage",
          value: "175"
        }
      ]
    },
    {
      header: "TREATMENTS",
      menus: [
        {
          name: "Permanent",
          value: "135+"
        },
        {
          name: "Relaxer",
          value: "155+"
        },
        {
          name: "Keratin Full",
          value: "450+"
        },
        {
          name: "Keratin Mini",
          value: "350+"
        },
        {
          name: "Keratin Blow-Out",
          value: "255+"
        },
        {
          name: "Kerastase Treatment",
          value: "40"
        }
      ]
    },
    {
      header: "BRIDAL/ONSITE",
      menus: [
        {
          name: "Bridal Hair",
          value: "125"
        },
        {
          name: "Bridal Hair Trial",
          value: "95+"
        },
        {
          name: "Bridal Makeup",
          value: "95"
        },
        {
          name: "Bridal Makeup Trial",
          value: "75+"
        },
        {
          name: "Onsite Hair/Makeup",
          value: "call"
        }
      ]
    },
    {
      header: "MAKEUP",
      menus: [
        {
          name: "Application",
          value: "85"
        }
      ]
    },
    {
      header: "NAILCARE",
      menus: [
        {
          name: "Manicure",
          value: "22"
        },
        {
          name: "French Manicure",
          value: "25"
        },
        {
          name: "Pedicure",
          value: "45"
        },
        {
          name: "Manicure & Pedicure",
          value: "60"
        },
        {
          name: "Polish Change (hands/feet)",
          value: "10/15"
        }
      ]
    },
    {
      header: "WAXING",
      menus: [
        {
          name: "Full Face",
          value: "45"
        },
        {
          name: "Eyebrows",
          value: "20"
        },
        {
          name: "Upper Lip",
          value: "20"
        },
        {
          name: "Cheeks",
          value: "20"
        },
        {
          name: "Chin",
          value: "20"
        },
        {
          name: "Neck",
          value: "20"
        },
        {
          name: "Underarms",
          value: "25"
        },
        {
          name: "Full Arms",
          value: "45"
        },
        {
          name: "Half Arms",
          value: "35"
        },
        {
          name: "Full Legs",
          value: "60"
        },
        {
          name: "Half Legs",
          value: "40"
        },
        {
          name: "Upper Leg & Bikini",
          value: "60"
        },
        {
          name: "Upper Leg",
          value: "35"
        },
        {
          name: "Bikini",
          value: "30"
        },
        {
          name: "Playboy",
          value: "40"
        },
        {
          name: "Brazilian",
          value: "55"
        },
        {
          name: "Full Leg & Bikini",
          value: "85"
        },
        {
          name: "Stomach",
          value: "25"
        },
        {
          name: "Full Back",
          value: "55"
        }
      ]
    }
  ];

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getServices() {
    return this.services;
  }

}
