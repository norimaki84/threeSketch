precision mediump float;

uniform sampler2D tDiffuse;
uniform float spacing;
uniform float size;
uniform float blur;
uniform vec2 u_resolution;

uniform float h;
uniform float v;

//const float halfSize = 4.0 * 0.5;

varying vec2 vUv;

void main() {

    vec2 count = vec2(u_resolution / spacing);
    vec2 p = floor(vUv * count) / count;

    vec4 color = texture2D(tDiffuse, p);

    vec2 pos = mod(gl_FragCoord.xy, vec2(spacing)) - vec2(spacing / 2.0);
    float dist_squared = dot(pos, pos);

    // HorizontalBlurShader
    vec4 sum = vec4( 0.0 );
    sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    // VerticalBlurShader
    vec4 sum02 = vec4( 0.0 );
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum02 += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    float amount = 0.9;
	gl_FragColor = mix(color, vec4(0.0), smoothstep(size, size + blur, dist_squared)) * sum * sum02;
	//* amount +
//	gl_FragColor = mix(vec4(1.0,1.0,1.0, 1.0), vec4(0.0), smoothstep(size, size + blur, dist_squared));


//    vec2 p = mod(gl_FragCoord.st, size) - halfSize;
//    float len = step(length(p), halfSize - 1.0);
//    float edge = 1.0 - smoothstep(halfSize - 2.5, halfSize, length(p));
//    len *= edge;
//    vec2 texCoord = floor(gl_FragCoord.st / size) * size;
//    vec4 samplerColor = texture2D(tDiffuse, texCoord / u_resolution);
//    gl_FragColor = samplerColor * vec4(vec3(len), 1.0);
}