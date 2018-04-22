precision mediump float;
precision mediump int;

uniform float u_time;

void main() {

    gl_FragColor = vec4(vUv, sin(time), 1.0);
	gl_FragColor = vec4( sin( u_time ), 0.0, 0.0, 1.0 );

}