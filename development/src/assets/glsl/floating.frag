precision mediump float;

uniform sampler2D texture;
uniform float u_time;

varying vec2 vUv;

void main()	{

    float frequency = 0.01; // 周波数
    float amplitude = 0.01; // 振幅
    float speed = 0.5; // スピード
    float offset = sin(gl_FragCoord.x * frequency + u_time * speed) * amplitude;
    vec4 dest = texture2D(texture, vec2(vUv.x, vUv.y + offset));
    gl_FragColor = dest;

    //gl_FragColor = texture2D(texture, vUv);
    
}