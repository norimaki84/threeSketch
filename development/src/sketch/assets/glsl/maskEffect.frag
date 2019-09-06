uniform sampler2D tDiffuse;
uniform sampler2D tMask;
varying vec2 vUv;
void main() {
	vec4 dest = texture2D(tDiffuse, vUv);
	vec4 mask = texture2D(tMask, vUv);
	if(mask.a > 0.0) {
		dest.rgb = 1.0 - dest.rgb;
	}
	gl_FragColor = dest;
}
