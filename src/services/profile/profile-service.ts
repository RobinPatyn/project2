import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Profile } from "../../models/profile";

@Injectable()
export class ProfileService {

    private ProfileRef = this.afDatabase.object<Profile>
    ('profile');

    constructor(private afDatabase: AngularFireDatabase) {}

    getProfile() {
        return this.ProfileRef;
    }
}