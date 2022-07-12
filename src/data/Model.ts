export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

interface Name {
  first: string;
  last: string;
}

interface Login {
  username: string;
}

interface Picture {
  large: string;
}

export interface Follower {
  name: Name;
  login: Login;
  picture: Picture;
}
