import generateGUID from "./utils.js";

class User {
    constructor(userName) {
        this._id = generateGUID();
        this._userName = userName;
        this._details = null;
    }

    get id() {
        return this._id;
    }

    get userName() {
        return this._userName;
    }

    get details() {
        return this._details;
    }


    set userName(value) {
        this._userName = value;
    }

    set details(value) {
        if (value instanceof UserDetails) {
            this._details = value;
        }
        else {
            throw new Error("Details must be an instance of UserDetails.");
        }
    }

    getProfile() {
        return {
            id: this.id,
            userName: this.userName,
            ...this._details?.getDetails() 
        };
    }
}

export default User;