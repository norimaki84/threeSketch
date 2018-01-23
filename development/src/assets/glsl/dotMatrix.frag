precision mediump float;

uniform sampler2D tDiffuse;
uniform float spacing;
uniform float size;
uniform float blur;
uniform vec2 u_resolution;

//const float halfSize = 4.0 * 0.5;

varying vec2 vUv;

void main() {

    vec2 count = vec2(u_resolution / spacing);
    vec2 p = floor(vUv * count) / count;

    vec4 color = texture2D(tDiffuse, p);

    vec2 pos = mod(gl_FragCoord.xy, vec2(spacing)) - vec2(spacing / 2.0);
    float dist_squared = dot(pos, pos);

//	gl_FragColor = mix(color, vec4(0.0), smoothstep(size, size + blur, dist_squared));
	gl_FragColor = mix(vec4(1.0,1.0,1.0, 1.0), vec4(0.0), smoothstep(size, size + blur, dist_squared));

//    gl_FragColor = vec4(1.0,0.0,1.0,1.0);



//    vec2 p = mod(gl_FragCoord.st, size) - halfSize;
//    float len = step(length(p), halfSize - 1.0);
//    float edge = 1.0 - smoothstep(halfSize - 2.5, halfSize, length(p));
//    len *= edge;
//    vec2 texCoord = floor(gl_FragCoord.st / size) * size;
//    vec4 samplerColor = texture2D(tDiffuse, texCoord / u_resolution);
//    gl_FragColor = samplerColor * vec4(vec3(len), 1.0);
}