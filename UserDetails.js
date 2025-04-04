class UserDetails {
    constructor(age, location, bio) {
        this._age = age;
        this._location = location;
        this._bio = bio;
    }

    get age() {
        return this._age;
    }
    get location() {
        return this._location;
    }

    get bio() {
        return this._bio;
    }    

    set age(value) {
        this._age = value;
    }

    set location(value) {
        this._location = value;
    }

    set bio(value) {
        this._bio = value;
    }

    getDetails() {
        return {
            age: this.age,
            location: this.location,
            bio: this.bio
        }
    }


}

export default UserDetails;