precision mediump float;

uniform sampler2D textureUnit;
uniform float u_time;
//uniform float strength;
//uniform vec2 u_resolution;
//uniform float u_ratio;
//uniform float animationParam;

varying vec2 vUv;


void main(){

    //    vec4 color = vec4( vColor );
    //    color.r += sin( vPosition.x * 10.0 + u_time ) * 0.5;
    //    gl_FragColor = color;
    //    gl_FragColor = vec4(1.0,0.0,1.0,1.0);

    gl_FragColor = texture2D(textureUnit, vUv);

}