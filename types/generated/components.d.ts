import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_slides';
  info: {
    displayName: 'hero-slide';
  };
  attributes: {
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheadline: Schema.Attribute.Text;
  };
}

export interface HomepagePopularDestination extends Struct.ComponentSchema {
  collectionName: 'components_homepage_popular_destinations';
  info: {
    displayName: 'popular-destination';
  };
  attributes: {
    destinations: Schema.Attribute.Relation<
      'oneToMany',
      'api::destination.destination'
    >;
    featuredDestinationsTitle: Schema.Attribute.String;
  };
}

export interface HomepagePopularTours extends Struct.ComponentSchema {
  collectionName: 'components_homepage_popular_tours';
  info: {
    displayName: 'popular-tours';
  };
  attributes: {
    featuredToursTitle: Schema.Attribute.String;
    tours: Schema.Attribute.Relation<'oneToMany', 'api::tour.tour'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.hero-slide': HomepageHeroSlide;
      'homepage.popular-destination': HomepagePopularDestination;
      'homepage.popular-tours': HomepagePopularTours;
    }
  }
}
