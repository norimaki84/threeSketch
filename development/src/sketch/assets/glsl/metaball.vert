#pragma glslify: cnoise = require(glsl-noise/classic/3d)

precision mediump float;
precision mediump int;

varying float noise;
varying vec2 vUv;

uniform float u_time;
uniform vec2 u_resolution;
uniform mat4 modelViewMatrix;  // モデルビュー行列。ローカル座標から視点系座標の変換します。modelViewMatrix = viewMatrix * modelViewMatrix
uniform mat4 projectionMatrix; // カメラのプロジェクション行列。日本語で透視変換行列とも呼びます。視点系座標からクリッピング座標に変換します。

// 頂点情報
attribute vec3 position; // 頂点のローカル座標
attribute vec3 normal;   // 頂点のローカル座標での法線の向き
attribute vec2 uv;       // 頂点のUV

attribute vec4 color;

const float amplitude = 0.5; // ウネウネの振り幅
const float speed = 0.25; // ウネウネのスピード

void main()	{

    vUv = uv;

    noise = cnoise(vec3(normal * amplitude + u_time * speed));

    vec3 p = position + normal * noise * 0.2;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);

}