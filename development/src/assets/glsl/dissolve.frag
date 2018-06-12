precision mediump float;

varying vec2 vUv;
uniform sampler2D frontMap;
uniform sampler2D backMap;
uniform sampler2D heightMap;
uniform float uTime;
uniform float range;

void main() {

   vec4 frontColor = texture2D(frontMap, vUv);
   vec4 backColor = texture2D(backMap, vUv);
   vec4 heightColor = texture2D(heightMap, vUv);
   vec4 destColor = frontColor;

   float height = heightColor.r;

   float rate = mod(uTime / range, 1.0);

   if(height < rate) {
       destColor = backColor;
   } else {
       float offset = rate + 5.08; // 0.04
       if(height < offset) {
           vec4 orange = vec4(254.0 / 255.0, 99.0 / 255.0, 6.0 / 255.0, 1.0);
           vec4 black = vec4(0.0, 0.0, 0.0, 0.6);
           float step = smoothstep(0., offset - rate, offset - height);
           //destColor = mix(black, orange, step);
       }
   }

   gl_FragColor = destColor;

}