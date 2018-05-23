import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StylistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StylistProvider {

  stylists = [
    {
      name: "Serge",
      position: "Creative Director",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Serge_medium.jpg",
      about: "Hailing from the South of France, Serge’s hair techniques exhibit his European training and traditions passed on by his hairstylist father. His vision of beauty is timeless, but continuously evolving to adjust to the fast-paced world of fashion. Serge’s artistic ability has brought him recognition from acclaimed fashion houses such as Zac Posen, Prada, Rad Hourani, and Matthew Ames, to name a few.Whether he is spritzing the heads of models for runway shows, shaping the locks of Japan’s royalty, or simply giving a trim to a client at his salon, Serge’s ultimate goal is to bring joy to his clients by translating their own vision into a look that is versatile, modern and sophisticated while being effortless."
    },
    {
      name: "Wendy",
      position: "Creative Director",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Wendy_medium.jpg",
      about: "Shortly after graduating from Blaine Beauty School in Boston, Wendy began working at Safar Coiffure as an apprentice to Serge Safar. It was Serge who encouraged her to express her artistic creativity. She then attended the Vidal Sassoon Master Academy in London specializing in creative, edgy cutting and coloring techniques, now the Creative Director for Safar Coiffure, she specializes in editorial photo shoots as well as clients looking for a major change in style."
    },
    {
      name: "Horacio",
      position: "Creative Director",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Horacio3_Medium.jpg",
      about: "Horacio specializes in women’s long and short haircuts, men’s haircuts, Keratin treatments, coloring and curly hair. He has been at Safar for 15 years. He has extensive training, including creative courses at the Sassoon Academy in Miami and London. He is a Goldwell certified colorist, and regularly teaches cutting classes at Safar. He has been featured in both Allure Magazine and Harper’s Bazaar. In his free time, Horacio is also an English/Spanish teacher."
    },
    {
      name: "Robbie",
      position: "Creative Director",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Robbie_medium.jpg",
      about: "Robbie is a specialist in all coloring, foiling, and cutting techniques. She has been at Safar for over 20 years. She is a Goldwell Certified Master Color Specialist, and trains the staff in cutting and coloring techniques. She also has training with Wella color and cutting, Goldwell, Rene Furterer, and Kerastase. This extensive experience makes her in-demand for high-profile events; she has worked on fashion week shows in New York and Boston, including Rad Hourani, Cynthia Rowley, Oribe, and Fashion’s Night Out. Robbie is a participant in, and proponent of, continuing education; she loves to build upon her knowledge of cutting and coloring styles, and stays in-sync with the latest styling trends. As she states, “Knowledge is power!”, and she uses that idiom to drive her continued development. In her spare time, she also works with a number of local charities."
    }
  ];

  constructor(public http: HttpClient) {
    console.log('Hello StylistProvider Provider');
  }

  getStylists() {
    return this.stylists;
  }

}
