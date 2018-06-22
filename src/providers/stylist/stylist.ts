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
      about: [
        "Hailing from the South of France, Serge’s hair techniques exhibit his European training and traditions passed on by his hairstylist father. His vision of beauty is timeless, but continuously evolving to adjust to the fast-paced world of fashion. Serge’s artistic ability has brought him recognition from acclaimed fashion houses such as Zac Posen, Prada, Rad Hourani, and Matthew Ames, to name a few.",
        "Whether he is spritzing the heads of models for runway shows, shaping the locks of Japan’s royalty, or simply giving a trim to a client at his salon, Serge’s ultimate goal is to bring joy to his clients by translating their own vision into a look that is versatile, modern and sophisticated while being effortless."
      ]
    },
    {
      name: "Sacha",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Sacha_edited_medium.jpg",
      about: [
        "Sacha is a multi-talented stylist with particular specialties in color and long hair.",
        "Sacha got his start alongside his father Serge at a young age. Growing up in the salon – with styling being the family business – Sacha has received exposure to, and training in, all of the specialties and techniques of the salon. One of the most sought after stylists in Boston, he regularly styles fashion week events in New York, Paris and Boston, and is responsible for many of the high-profile events that Safar is involved with.",
        "A jack-of-all-trades, Sacha splits his time between the family’s real estate development company and the salon, which adds the perfect balance to his busy lifestyle."
      ]
    },
    {
      name: "Wendy",
      position: "Creative Director",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Wendy_medium.jpg",
      about: [
        "Shortly after graduating from Blaine Beauty School in Boston, Wendy began working at Safar Coiffure as an apprentice to Serge Safar. It was Serge who encouraged her to express her artistic creativity. She then attended the Vidal Sassoon Master Academy in London specializing in creative, edgy cutting and coloring techniques, now the Creative Director for Safar Coiffure, she specializes in editorial photo shoots as well as clients looking for a major change in style."
      ]
    },
    {
      name: "Omid",
      position: "Senior Stylist/Salon Coordinator",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Omid.jpg",
      about: [
        "Omid is a Master Stylist, and specializes in women’s hair. He serves as the Public Relations & Marketing Director at Safar.",
        "Omid has a degree in Communications from Northeastern University and received his beauty training from the prestigious Vidal Sassoon Academy in Santa Monica, CA. He has extensive training, and as such, has been widely recognized for his talents; he is responsible for styling some of the hottest heads in Boston, including professional athletes, TV personalities, fashion figures, and more. In addition, Omid has worked on numerous shows and events, including for BCBG, Ted Baker, Ellie Tahari, Ellie Kai, Zac Posen, Carmen Marc Valvo, Michael DePaulo, Saks Fifth Avenue, NY Fashion Week, Boston Fashion Week and L’Oreal. He has been featured as a beauty and lifestyle expert by a number of television networks including NBC Universal, Style Network, Powder House Productions, FOX and NBC Boston."
      ]
    },
    {
      name: "Ahmed",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Ahmed_medium.jpg",
      about: [
        "Ahmed specializes keratin treatments, blonde and brunette coloring, men’s cuts, and is particularly adept at working with difficult and unruly hair.",
        "Ahmed spent nearly a decade honing his skills in Europe, working as a stylist in France, Amsterdam and Germany before starting his career at Safar approximately 15 years ago. He is always adding to his vast array of techniques, and is recognized for it; he has a loyal clientele, and he has styled fashion week and celebrity events in New York and Boston, including with Oribe, Nicky Romano, Nick Arrojo, Fashion’s Night Out, and Boston Fashion Week."
      ]
    },
    {
      name: "Horacio",
      position: "Creative Director",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Horacio3_Medium.jpg",
      about: [
        "Horacio specializes in women’s long and short haircuts, men’s haircuts, Keratin treatments, coloring and curly hair.",
        "He has been at Safar for 15 years. He has extensive training, including creative courses at the Sassoon Academy in Miami and London. He is a Goldwell certified colorist, and regularly teaches cutting classes at Safar. He has been featured in both Allure Magazine and Harper’s Bazaar.",
        "In his free time, Horacio is also an English/Spanish teacher."
      ]
    },
    {
      name: "Lia",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Lia_medium.jpg",
      about: [
        "Lia exceeds in cutting, coloring, multi-dimensional foiling, Keratin treatments, and updos. She serves as a salon educator for the team, training the staff in cutting and coloring techniques.",
        "Lia started at Safar 12 years ago, after finishing Blaine Beauty School in Boston and Toni&Guy. In addition, she has received specialty training from Kerastase, Moroccan Oil, and Rene Furterer. This experience has garnered her acclaim; she has been featured in Allure Magazine, and styles hair for TV personalities on the New England Cable News."
      ]
    },
    {
      name: "Monique",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Monique2_medium.jpg",
      about: [
        "Not only a Newbury Street style staple, but also a Safar family member, Monique is practiced in all specialties, and is particularly adept with women’s hair cuts and coloring.",
        "Monique is an experienced Senior Stylist at the salon. She has an impressive roster of specialized training, including with Goldwell Color, Wella, Rene Furterer, Kerastase, Moroccan Oil, Bumble & Bumble, and Oribe. Her extensive experience has earned her a loyal and dedicated clientele at the salon."
      ]
    },
    {
      name: "Sonila",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Sonila_medium.jpg",
      about: [
        "Sonila is a multi-talented stylist particularly adept at cutting, coloring, short hair, updos, finishes and handling challenging/difficult requests.",
        "Sonila has been at Safar for nine years, after finishing beauty school in Albania, with additional instruction at Empire Beauty School in Boston. She has done extensive training both in and out of the salon, including with Goldwell (for cutting and color), Wella, Oribe, Moroccan Oil, and Kerastase.",
        "Sonila is focused on the transformative aspects of hair stylizing, and uses her creative energies and knowledge of current trends to bring bold new looks to her clients. These talents have brought her wide recognition; she has styled fashion shows for Ellie Tahari, Michael Depaulo, Saks Fifth Avenue, Boston Fashion Week, and Fashion’s Night Out. She also serves as a stylist for hosts on the E! Network."
      ]
    },
    {
      name: "Lori",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Lori2_medium.jpg",
      about: [
        "Lori specializes in cutting, coloring, curly hair, men’s cuts, relaxing, perms, mature hair and Keratin treatments.",
        "Lori started at Safar over 20 years ago as an apprentice before becoming a Master Stylist. She has taken many courses over the years, both in and out of the salon, including with Goldwell, Wella Color, Rene Furterer, and Oribe to name a few, and she is a Goldwell master colorist. This training and experience makes her an invaluable resource in salon fashion shows. Her main goal continues to be utilizing her expertise to make sure her clients leave feeling satisfied and beautiful."
      ]    
    },
    {
      name: "Andy",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Andy2_Medium.jpg",
      about: [
        "An experienced practitioner, Andy’s specialties include classic styles, men’s and women’s cuts, and coloring.",
        "Andy has been with Safar for over 25 years and is a staple of the salon. His vast array of experience and precision styling has earned him a dedicated clientele, including a number of celebrities other big names."
      ]
    },
    {
      name: "Jude",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Jude_medium.jpg",
      about: [
        "Jude is an experienced and multi-talented practitioner who, in addition, has become the go-to stylist for relaxers, perms, extensions, and color correction.",
        "Hailing from Paris, Jude has been with Safar for over 25 years, and is skilled in all specialties of the salon. This experience has earned him acclaim, and he has styled for many of Boston’s premiere fashion events, including those of Oribe, Nicky Romano, Fashion’s Night Out, and Boston Fashion Week.",
        "But Jude takes the most pride with his one-on-one client relationships. His warm personality has earned him a loyal clientele who’s always coming back for more. For Jude, the most rewarding aspect of his job is not only to make his clients happy with their look, but also to make them feel special and important."
      ]
    },
    {
      name: "Judy",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Judy_medium.jpg",
      about: [
        "Judy began her career apprenticing under Serge Safar. Now a Master Stylist, Judy has been with Safar for over 20 years. She specializes in cutting and coloring, especially European and Middle Eastern hair. Judy has participated in many local fashion shows and loves to take part in charitable causes. She is always looking to update her skills and hopes to continue her work with local charities."
      ]
    },
    {
      name: "Trisha",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Trisha_medium.jpg",
      about: [
        "Trisha serves as the color director for the Safar team, training the staff color application, techniques, and color trends. In addition to color, she specializes in styling, highlighting, and Keratin treatments.",
        "Trisha joined Safar in 1993 after finishing at Empire Beauty School in Boston. Originally starting as an apprentice for Serge, she now is a master stylist and master colorist. She has an impressive roster of classes and training, including with Bumble & Bumble, Vidal Sassoon, Moroccan Oil, Rene Furterer, Oribe, and Kerastase. She is a Goldwell master colorist, a Wella colorist, and certified in Keratin treatments.",
        "Trisha is also a co-founder of “Safar Gives Back” a charity cut-a-thon to raise money and provide gifts for homeless families during the holidays. She was one of the hairstylists for Fashion’s Night Out in Boston and is continuously working to increase Safar Coiffure’s participation in local charity events."
      ]
    },
    {
      name: "Robbie",
      position: "Creative Director",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Robbie_medium.jpg",
      about: [
        "Robbie is a specialist in all coloring, foiling, and cutting techniques. She has been at Safar for over 20 years. She is a Goldwell Certified Master Color Specialist, and trains the staff in cutting and coloring techniques.",
        "She also has training with Wella color and cutting, Goldwell, Rene Furterer, and Kerastase. This extensive experience makes her in-demand for high-profile events; she has worked on fashion week shows in New York and Boston, including Rad Hourani, Cynthia Rowley, Oribe, and Fashion’s Night Out.",
        "Robbie is a participant in, and proponent of, continuing education; she loves to build upon her knowledge of cutting and coloring styles, and stays in-sync with the latest styling trends. As she states, “Knowledge is power!”, and she uses that idiom to drive her continued development. In her spare time, she also works with a number of local charities."
      ]
    },
    {
      name: "Juliana",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Juliana_medium.jpg",
      about: [
        "Juliana specializes in men’s and women’s cuts, highlighting, updos, Keratin treatments, and specialty styling such as balayage and ombré.",
        "She started at Safar over 7 years ago, after receiving her training from Tony&Guy in New York. She has supplemented this with additional training through Kerastase and Goldwell.",
        "She has worked on a number of fashion shows, photo shoots, and other high-profile events, and continuously trains to acquire the newest skills and stay ahead of the burgeoning trends."
      ]
    },
    {
      name: "Stephanie",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Stephanie_medium.jpg",
      about: [
        "Stephanie specializes in color – especially blondes – as well as foils, and cutting for both men and women. She started at Safar over 9 years ago, originally as an assistant.",
        "She received her training at the Paul Mitchell School in Rhode Island, and has advanced training from Goldwell in coloring and formulation, as well as with Wella, Oribe, Moroccan Oil, and Kerastase.",
        "Stephanie loves to donate her talents to local charities. She provides haircuts during mission trips to Mexico, and styles hair for an organization called Operation Blessing."
      ]
    },
    {
      name: "Tyzza",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Tyzza2_medium.jpg",
      about: [
        "Tyzza’s specialties include color, highlights, updos, and men’s cuts, and she excels in the newest color trends, such as balayage, ombré, creative hair painting, and color correction.",
        "Tyzza has extensive training and certification in Goldwell cutting and coloring techniques, with additional training through Wella, Moroccan Oil, Kerastase, and Oribe. She supplements this with workshops by celebrity stylists demonstrating advanced techniques, such as balayage, highlights, and cuts.",
        "Tyzza takes pride in her creative abilities, and thinks her role of stylist as secondary to that of artist. As such, she can handle difficult and challenging requests, productively using constraints to give the client what they’re looking for."
      ]
    },
    {
      name: "Brianna",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Brianna_medium.jpg",
      about: [
        "Brianna specializes in both men’s and women’s styling, Keratin treatments, upods, balayage, and hair for special events and weddings.",
        "Brianna joined Safar after completing her training at the Toni&Guy Hairdressing Academy. She also has extensive specialized training, including through Wella, Goldwell, Kerastase, Moroccan Oil, and Rene Furterer. She regularly works on fashion shows, hair shows, and other high-profile events, where she regularly gets to express her creative skills and styling abilities."
      ]
    },
    {
      name: "Jordan",
      position: "Senior Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Jordan_medium.jpg",
      about: [
        "Jordan specializes in cuts and color for both men and women, and is particularly skilled in styling long hair and precision highlights.",
        "Jordan perfected the classic styles with her extensive training, including with Toni&Guy in London and Bumble & Bumble in New York. She has appeared on the E! Channel numerous times, showcasing her fashion expertise and styling knowledge.",
        "Jordan is known as the comedian of the Salon. Clients appreciate not only her warm enthusiasm, but also her precision and attention to detail."
      ]
    },
    {
      name: "Bridget",
      position: "Stylist",
      img: "http://safarboston.com/wp-content/uploads/2017/06/Bridget.jpg",
      about: [
        "Bridget’s specialties include men’s cuts, coloring, and wide range of finishes, including blow-drys, flat irons, and various treatments.",
        "Bridget joined Safar after finishing at Empire Beauty School in Boston. She has an extensive roster of in-salon specialty training, including with Kerastase, Wella, Goldwell, Moroccan Oil, and Rene Furterer. With this experience, she has styled many high profile events, including Boston’s Fashions Night Out."
      ]
    },
    {
      name: "Ana",
      position: "Stylist",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Ana_medium.jpg",
      about: [
        "Ana is particularly skilled with women’s hair, and her specialties include cutting, coloring, blowouts, and Ombre.",
        "She joined Safar after graduating from Empire Beauty School in Boston. She has extensive in-salon training, including with Goldwell, Wella, Rene Furterer, and Kerastase. With this training, and a continuous drive to perfect new styles, she aims to keep ahead of the latest trends for women’s hair."
      ]
    },
    {
      name: "Mariya",
      position: "Esthetician",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Mariya_medium.jpg",
      about: [
        "Mariya likes to think of her clients at Safar as her family, where she has been working for over 20 years. She has taken many advanced classes over the years in skincare, waxing and nail techniques. She loves perfecting brows and facials, as well as helping her clients to choose the right skincare routine. Mariya’s clients come from all over the east coast just to see her."
      ]
    },
    {
      name: "Tanya",
      position: "Esthetician",
      img: "http://safarboston.com/wp-content/uploads/2016/03/Tanya_medium.jpg",
      about: [
        "Tanya has been part of Safar for over 23 years. She started as a manicurist and then continued her education to become an esthetician as well. She has taken advanced classes with Pevonia Botanica skin care and worked on many projects throughout the years. Tanya has also been featured in Vogue Magazine and would like to continue working with her faithful clientele."
      ]
    },
    {
      name: "Amanda",
      position: "Stylist",
      img: "http://safarboston.com/wp-content/uploads/2017/06/IMG_1395.JPG.jpg",
      about: [
        "A graduate of Empire Beauty School in Boston, MA, Amanda has been with Safar for over three years.",
        "Amanda specializes in women’s hair color, foil, and balayage. She has training in René Furterer, Kérastase, Goldwell, Scharphof, and Brazilian blowouts. She has also assisted in the creation of various fashion shoots and shows for Safar."
      ]
    }
  ];

  constructor(public http: HttpClient) {
  }

  getStylists() {
    return this.stylists;
  }

}
