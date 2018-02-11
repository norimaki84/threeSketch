precision mediump float;

uniform sampler2D u_texture1;
uniform sampler2D u_texture2;
uniform float u_time;
uniform float u_mixFactor;

varying vec2 vUv;

#pragma glslify: perlinNoise = require(./utils/perlinNoise)

void main () {
    vec2 newUv = vUv;

    newUv.x += perlinNoise(vec2(cos(newUv.x * 0.25 + newUv.y * 0.2) * 60.0, 1.0 + u_time)) * (0.02 + u_mixFactor * 0.05);
    newUv.y += perlinNoise(vec2(sin(newUv.x * 20.0 + newUv.y * 0.6) * 20.0, u_time)) * (0.002 + u_mixFactor * 0.05) * 3.0;

    vec4 texColor1 = texture2D(u_texture1, newUv);
    vec4 texColor2 = texture2D(u_texture2, newUv);
    gl_FragColor = mix(texColor1, texColor2, u_mixFactor);

}