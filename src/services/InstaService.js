export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3003'
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('/posts/');
        return res.map(this._transformPosts);
    }

    getProfileUsers= async () => {
        const res = await this.getResource('/users/');
        return res;
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }
}