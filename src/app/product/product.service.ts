import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        name: 'God of War™ Ragnarok – PC',
        description: 'From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Brought to PC by Jetpack Interactive.',
        price: 59.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/GOWR-PC-Hero-1-Main?$Catalog_Desktop$',
       
      },
      {
        name: 'God of War™ Ragnarok Digital Deluxe Edition – PC',
        description: 'From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Brought to PC by Jetpack Interactive.',
        price: 69.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/GOWR-DDE-PC-Hero-1?$Catalog_Desktop$',
      },
      {
        name: 'Ghost of Tsushima™ Director Cut - PC',
        description: ' For the very first time on PC, play through Jin Sakai’s journey and discover the complete Ghost of Tsushima experience in this Director’s Cut.',
        price: 59.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/ps5-ghostoftsushima-directorscut-game-box-front?$Background_Large$',
      },
      {
        name: 'Stellar Blade™ – PS5',
        description: 'Save humanity from extinction in this electrifying story-driven action adventure, made by Korean developer SHIFT UP, exclusively for PlayStation®5.',
        price: 49.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/StellarBlade-Hero-1-US?$Background_Large$',
      },
      {
        name: 'Marvels Spider-Man 2 – PS5',
        description: 'Swing, jump, and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city, and the ones they love.',
        price: 39.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/ps5-msm2-box-front?$Background_Large$',
      },
      {
        name: 'God of War - PC',
        description: 'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.',
        price: 49.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/pc-god-of-war-hero2?$Background_Large$',
      },
      {
        name: 'Horizon Zero Dawn™ Remastered - PS5',
        description: 'Experience the critically acclaimed Horizon Zero Dawn™ with stunning new visuals and upgraded features.',
        price: 49.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/Horizon-ZDR-Hero-1-US?$Background_Large$',
      },
      {
        name: 'Rise of the Ronin™ - PS5',
        description: 'Japan, 1863. Amidst the chaos of a country ravaged by war, disease, and political unrest, a Ronin steps forth – holding the nation’s fate in their hands. ',
        price: 39.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/Rise-of-ronin-hero-1-US-New?$Background_Large$',
      },
      {
        name: 'HELLDIVERS™ 2 - PS5 ',
        description: 'Join the Helldivers and fight for freedom with friends across a hostile galaxy in this fast, frantic third-person shooter.',
        price: 29.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/PS5-HD2-pksht-en-us?$Background_Large$',
      },
      {
        name: 'DEATH STRANDING™ Directors Cut - PS5',
        description: 'From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded and remastered for the PlayStation®5 console in this definitive Director’s Cut.',
        price: 19.99,
        imageUrl: 'https://media.direct.playstation.com/is/image/sierialto/death-stranding-directorscut-ps5-game-box-front?$Background_Large$',
       
      },

 
 
    ];
  }
}
