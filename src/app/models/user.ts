interface User {
    bio: string;
    createdAt: string;
    email: string;
    id: number;
    image: string;
    token: string;
    updatedAt: string;
    username: string;
}

export class UserResponse implements User {
    bio: string;
    createdAt: string;
    email: string;
    id: number;
    image: string;
    token: string;
    updatedAt: string;
    username: string;
    constructor(user: User) {
        if (user) {
            this.bio = user.bio;
            this.createdAt = user.createdAt;
            this.email = user.email;
            this.id = user.id;
            this.image = user.image;
            this.token = user.token;
            this.updatedAt = user.updatedAt;
            this.username = user.username;
        }
    }
}

export class UserPost {
    user: UserResponse
    constructor(user: UserResponse) {
        this.user = user;
    }
}