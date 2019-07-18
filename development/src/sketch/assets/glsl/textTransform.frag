precision mediump float;

uniform sampler2D texture;
uniform float u_time;
//uniform float strength;
//uniform vec2 u_resolution;
//uniform float u_ratio;
//uniform float animationParam;

varying vec2 vUv;

void main(){

    float frequency = 0.02; // 周波数
    float amplitude = 0.1; // 振幅
    float speed = 0.01; // スピード
    float offset = sin(gl_FragCoord.x * frequency + u_time * speed) * amplitude;
//    vec4 dest = texture2D(texture, vec2(vUv.x, vUv.y + offset));

    vec2 zure = vec2(sin(vUv.y * 12.0 + u_time * 0.1) * 0.02, 0.0);
    vec4 dest = texture2D(texture, vUv + zure + offset);
//    vec4 dest = texture2D(texture, vUv);

    gl_FragColor = dest;

}
