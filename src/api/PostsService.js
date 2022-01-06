const API_URL = process.env.REACT_APP_API_URL
console.log(`API_URL`, API_URL)

export class PostsService {
    static getPosts() {
        return fetch(`${API_URL}/posts`)
    }
}