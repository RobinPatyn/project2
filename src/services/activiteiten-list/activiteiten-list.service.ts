import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Activiteit } from "../../models/activiteit/activiteit.model";

@Injectable()
export class ActiviteitenListService {

    private activiteitenListRef = this.db.list<Activiteit>
    ('activiteiten-list');

    constructor(private db: AngularFireDatabase) {}

    getActiviteitenList() {
        return this.activiteitenListRef;
    }

    addActiviteit(activiteit: Activiteit) {
        return this.activiteitenListRef.push(activiteit);
    }
}