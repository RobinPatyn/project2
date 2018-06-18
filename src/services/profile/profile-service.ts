import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Profile } from "../../models/profile";

@Injectable()
export class ProfileService {

    private ProfileRef = this.db.list<Profile>
    ('profile');

    constructor(private db: AngularFireDatabase) {}

    getProfile() {
        return this.ProfileRef;
    }
}