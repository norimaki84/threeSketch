precision mediump float;
precision mediump int;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec4 color;

varying vec2 vUv;

void main()	{

//  vUv = uvs;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}
