precision mediump float;

uniform float u_time;
uniform sampler2D textureUnit;
varying vec2 vUv;


void main()	{

    float frequency = 0.01; // 周波数
    float amplitude = 0.1; // 振幅
    float speed = 0.01; // スピード
    float offset = sin(gl_FragCoord.x * frequency + u_time * speed) * amplitude;
    //vec4 dest = texture2D(texture, vec2(vUv.x, vUv.y + offset));

    gl_FragColor = texture2D(textureUnit, vUv);
    
}