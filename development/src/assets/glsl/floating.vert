precision mediump float;
precision mediump int;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional

attribute vec3 position;
//attribute vec4 color;

//varying vec3 vPosition;
//varying vec4 vColor;

void main()	{
//    vPosition = position;
//    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}

//attribute vec3  position;  // 頂点座標
//attribute vec4  color;     // 頂点カラー
//attribute vec2  texCoord;  // 頂点のテクスチャ座標 @@@
////uniform   mat4  mvpMatrix; // 座標変換行列
//uniform mat4 modelViewMatrix; // optional
//uniform mat4 projectionMatrix; // optional
//varying   vec4  vColor;    // フラグメントシェーダへ送る色
//varying   vec2  vTexCoord; // フラグメントシェーダへ送るテクスチャ座標 @@@
//
//void main(){
//    vColor = color;
//    vTexCoord = texCoord; // JSから送られてきたテクスチャ座標をそのまま使いたいのでtexCoordをvarying変数のvTexCoordに代入
////    gl_Position = mvpMatrix * vec4(position, 1.0);
//    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
//    gl_PointSize = 8.0;
//}
