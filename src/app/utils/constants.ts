import { NavLink } from "../models/navigation.model";

export var NAVIGATION_LINKS = [
    {
      isActive: true,
      linkName: 'Custom Mode',
      route: ['/custom']
    },
    {
      isActive: false,
      linkName: 'Quick Mode',
      route: ['/quick']
    }
] as NavLink[];

export var GITHUB_LINK = 'https://github.com/NorskJoe';