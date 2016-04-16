## API Basejump: Image Search Abstraction Layer

Written by: [Nicholas Asimov](https://www.freecodecamp.com/nicholasasimov)  
[FreeCodeCamp](https://www.freecodecamp.com) - [API Project: Image Search Abstraction Layer](https://www.freecodecamp.com/challenges/image-search-abstraction-layer)

### User stories
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

### Example query usage
```
https://imagefinder.herokuapp.com/api/imagesearch/mit%20campus?offset=10
https://imagefinder.herokuapp.com/api/latest/imagesearch/
```
*__offset__: paginate through results, i.e. offset=0 – 1-10 images, offset=1 – 11-20 images etc.*

### Example query output
```
[
  {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Simmons_Hall,_MIT,_Cambridge,_Massachusetts.JPG",
    "snippet": "Simmons Hall, MIT, Cambridge,",
    "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-q3diiv3vSfIyDq4egoTUF6suHo_SOEQ9_FuCPA5Yb4KCGB1Lbni6ZMU",
    "context": "https://en.wikipedia.org/wiki/Campus_of_the_Massachusetts_Institute_of_Technology"
  },
  {
    "url": "https://libraries.mit.edu/archives/exhibits/cartoon-map/img/cartoon-map-lg.jpg",
    "snippet": "Drawing of Campus, late 1960s?",
    "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNXLBB2YiDk-TPkS1HLwhAkGG7o0lQVU5jE-nttKk_wMc4rbWzcxl7ajMI",
    "context": "https://libraries.mit.edu/archives/exhibits/cartoon-map/"
  },
  {
    "url": "https://dc.mit.edu/sites/default/files/feature/dome.jpg",
    "snippet": "MIT Washington Office",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScq9RwI9i4Cp4lymhOVbRRhgK43lLtj45Zxx3pkYu0w-Y29Wsn00BhXn7k",
    "context": "https://dc.mit.edu/"
  }
]
```

### Example latest output
```
[
  {
    "term": "funny cats",
    "when": "2016-04-16T14:49:10.481Z"
  },
  {
    "term": "john oliver",
    "when": "2016-04-16T14:52:44.778Z"
  },
  {
    "term": "mit campus",
    "when": "2016-04-16T19:24:06.258Z"
  }
]
```

### [Live Website](https://imagefinder.herokuapp.com)
