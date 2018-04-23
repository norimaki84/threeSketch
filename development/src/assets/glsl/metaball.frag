precision mediump float;
precision mediump int;

uniform float u_time;

varying vec2 vUv;

void main() {

    gl_FragColor = vec4(vUv, sin(u_time), 1.0);

}