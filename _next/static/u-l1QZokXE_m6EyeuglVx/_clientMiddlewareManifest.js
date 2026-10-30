self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/qaztracker-vision-landing(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json|\\/?index(?:\\.rsc|\\.segments\\/.+\\.segment\\.rsc)))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^\\/qaztracker-vision-landing(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|admin|_next|media|3d|video|img|favicon|icon|apple-icon|robots.txt|sitemap.xml|manifest|.*\\..*).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api|admin|_next|media|3d|video|img|favicon|icon|apple-icon|robots.txt|sitemap.xml|manifest|.*\\..*).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()