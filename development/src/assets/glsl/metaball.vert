#pragma glslify: cnoise = require(glsl-noise/classic/3d)

precision mediump float;
precision mediump int;

varying float noise;
uniform float u_time;
uniform vec2 u_resolution;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec4 color;

//グネグネの振り幅
const float amplitude = 0.5;
//グネグネのスピード
const float speed = 0.25;

void main()	{

    noise = cnoise( vec3(normal * amplitude + time * speed));

    vec3 p = position + normal * noise * 0.2;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}