import * as THREE from "three";
import { useEffect } from "react";
import SceneInit from "./SceneInit";


export default function Game() {

    useEffect(async () => {
        // TODO: Understand this code later.
        let test = new SceneInit();
        test.initScene();

        const plane = new THREE.Mesh(
            new THREE.BoxGeometry(30, 1, 30, 1),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF
            })
        )
        plane.position.y = 0;

        test.scene.add(plane);
        test.render();

    }, []);


    return (
        <div>
            <canvas id="myThreeJsCanvas" />
        </div>
    );
}