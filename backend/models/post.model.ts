type coordinates = { lat: number; lng: number };

type location = { name: string; coordinates: coordinates };

export class Post {
  location: location;
  userId: number;
  story: string;

  constructor(location: location, userId: number, story: string) {
    this.location = location;
    this.userId = userId;
    this.story = story;
  }
}
