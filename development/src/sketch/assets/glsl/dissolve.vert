precision mediump float;
precision mediump int;

attribute vec3 position;
attribute vec2 uvs;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;

void main() {

    vUv = uvs;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}