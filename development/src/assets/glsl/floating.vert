//precision mediump float;
//precision mediump int;
//
//uniform mat4 modelViewMatrix; // optional
//uniform mat4 projectionMatrix; // optional
//
//attribute vec3 position;
////attribute vec4 color;
//
////varying vec3 vPosition;
////varying vec4 vColor;
//
//void main()	{
////    vPosition = position;
////    vColor = color;
//    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
//}

precision mediump float;
precision mediump int;

attribute vec3  position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;

void main(){

  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

//  vUv = (position.xy + 1.0) * 0.5;

}