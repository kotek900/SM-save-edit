import * as THREE from 'three';

import { editor } from "editor";
import { readFloatFromData, writeFloatToData } from "utils";

export class Joint {
    constructor(data) {
        this.id = data[0];

        this.childShapeIdA = data[1];
        this.childShapeIdB = data[2];

        this.data = data[3];
    }
}
