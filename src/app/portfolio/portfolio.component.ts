import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  data = [
    {
      id: 1,
      image: 'assets/adminE-commerce.jpg',
      title: "Indian Market Admin",
      github: "https://github.com/pprashantsingh/indianMarketAdmin",
      // demo: "https://lucknowmetrobundler.netlify.app/",
    },
    {
      id: 2,
      image: 'assets/userE-coomerce.jpg',
      title: "Indian Market Public",
      github: "https://github.com/pprashantsingh/indianMarketPublic",
      // demo: "https://vijay-javascript-weather-app.netlify.app/",
    },
    {
      id: 3,
      image: 'assets/threeuserlogin.jpg',
      title: "Three User Login",
      github: "https://github.com/pprashantsingh/threeUserLogin",
      // demo: 'https://figma.com'
    },
    {
      id: 4,
      image: 'assets/travelling.jpg',
      title: "Trawel Website",
      github: "https://github.com/pprashantsingh/trawelWebsite",
      demo: "https://prashant-travelerwebsite.netlify.app",
    },
    {
      id: 5,
      image: 'assets/logo.jpg',
      title: "Spotify Clone",
      github: "https://github.com/pprashantsingh/spotifyClone",
      demo: "https://prashant-music-project.netlify.app/",
    },
  ];
}
