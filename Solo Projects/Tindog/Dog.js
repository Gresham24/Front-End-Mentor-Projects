// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    renderUserInfo() {
        const { name, age, bio } = this;
        return `
        <h3>${name}, ${age}</h3>
        <p>${bio}</p>
        `
    }

    renderPostImg() {
        const { avatar } = this;
        document.getElementById('post-img').innerHTML = `<img src="${avatar}" alt="dog post picture">`;
    }
}

export { Dog };