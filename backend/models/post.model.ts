type coordinates = [lat: number, lng: number];

type location = { name: string; coordinates: coordinates };

export class Post {
  location: location;
  userId: number;
  story: string;

  constructor(location: location | string, userId: number, story: string) {
    this.location = setLocation(location);
    this.userId = userId;
    this.story = story;
  }
}

const setLocation = (input: location | string) => {
  if (typeof input === "string") {
    console.log();
    return JSON.stringify(input) as unknown as location;
  }

  return input;
};
