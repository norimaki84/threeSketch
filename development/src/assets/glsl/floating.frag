precision mediump float;

uniform sampler2D texture;
uniform float u_time;
uniform vec2 u_resolution;

varying vec2 vUv;

//float rings(vec2 p)
//{
//  return sin(length(p)*16.0);
//}

void main()	{

    // 正規化
    vec2 pos = (gl_FragCoord.xy * 2.0 - u_resolution) / u_resolution.y;
    float vignette = 1.0 - length(pos);

    float frequency = 0.01; // 周波数
    float amplitude = 0.01; // 振幅
    float speed = 0.5; // スピード
    float offset = sin(gl_FragCoord.x * frequency + u_time * speed) * amplitude;
    vec4 dest = texture2D(texture, vec2(vUv.x, vUv.y) + (offset * vignette));
    gl_FragColor = dest;

    //gl_FragColor = texture2D(texture, vUv);
    
}