import { Injectable } from '@angular/core';

import { Animal } from '../animal.model';

import { PyramidRow } from './pyramid-row.model';

@Injectable()

export class PyramidRowService 
{
  constructor() { }

  getPyramidRows(): PyramidRow[] 
  {
    return [
      new PyramidRow([
        new Animal('Mountain Lion', 1, 'http://extension.illinois.edu/photolib/lib1523/E000811R.jpg'),
        new Animal('Coyote', 1, 'http://www.spiritanimal.info/pictures/coyote/Coyote-Spirit-Animal-5.jpg'),
        new Animal('Bobcat', 1, 'http://extension.illinois.edu/photolib/lib1523/Bobcat-3.jpg')
      ], 1),
      new PyramidRow([
        new Animal('Red Tailed Hawk', 2, 'https://musicbirdblog.files.wordpress.com/2014/08/juv-rtha-portage-8-17-2014-3265.jpg'),
        new Animal('Barn Owl', 2, 'https://birdsandbeyond.files.wordpress.com/2015/03/screenshot-2015-03-10-11-40-40.png?w=640&h=412'),
        new Animal('Barred Owl', 2, 'https://birdsandbeyond.files.wordpress.com/2015/02/screenshot-2015-02-20-10-34-45.png?w=640')
      ], 2),
      new PyramidRow([
        new Animal('Groundhog', 3, 'http://extension.illinois.edu/photolib/lib1523/101_6519.jpg'),
        new Animal('Raccoon', 3, 'http://extension.illinois.edu/photolib/lib1523/raccoon_on_snow.jpg'),
        new Animal('Beaver', 3, 'https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg')
      ], 3),
      new PyramidRow([
        new Animal('Garter Snake', 4, 'http://www.californiaherps.com/snakes/images/teeleganspl411.jpg'),
        new Animal('American Toad', 4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/American_toad_-_Bufo_americanus_-_3.JPG/1200px-American_toad_-_Bufo_americanus_-_3.JPG'),
        new Animal('Painted Turtle', 4, 'http://rivista-cdn.reptilesmagazine.com/images/cache/cache_7/cache_7/cache_a/painted-turtle1-a7673a77.jpeg?ver=1503612482&aspectratio=1.4201183431953')
      ], 4),
      new PyramidRow([
        new Animal('Crayfish', 5, 'http://abcnewspapers.ecmpublishers.com/wp-content/uploads/sites/19/2016/07/SpOutdoor7.08.16.jpg'),
        new Animal('Dobsonfly Larvae', 5, 'http://bugguide.net/images/raw/90Q/080/90Q080YQM0Z020S0N0ORKQWR3KVRG0VR40WRZQ3Q80VRI01RIQDRU0OR0QZ0SQS0XQK0E0TRSQURJK.jpg'),
        new Animal('Water Penny Beetle larva', 5, 'http://www.troutnut.com/im_regspec/picture_1413_large.jpg')
      ], 5)
    ];
  }
}