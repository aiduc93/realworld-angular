interface Author {
    bio: string;
    following: boolean;
    image: string;
    username: string;
}

export class AuthorModel implements Author {
    bio: string;
    following: boolean;
    image: string;
    username: string;
    constructor(author: Author) {
        this.bio = author.bio;
        this.following = author.following;
        this.image = author.image;
        this.username = author.username;
    }
}