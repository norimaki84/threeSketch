precision mediump float;
precision mediump int;

uniform float u_time;

//varying vec3 vPosition;
//varying vec4 vColor;

void main()	{
//    vec4 color = vec4( vColor );
//    color.r += sin( vPosition.x * 10.0 + u_time ) * 0.5;
//    gl_FragColor = color;
    gl_FragColor = vec4(1.0,0.0,1.0,1.0);
}

//precision mediump float;
//uniform vec4      globalColor; // グローバルカラー
//uniform sampler2D textureUnit; // テクスチャユニット @@@
//varying vec4      vColor;      // 頂点シェーダから送られてきた色
//varying vec2      vTexCoord;   // 頂点シェーダから送られてきたテクスチャ座標 @@@
//void main(){
//    // テクスチャから色を読み出し利用する @@@
//    // texture2D関数は第一引数にテクスチャ(画像)のソース、第二引数にテクスチャ座標
//    vec4 samplerColor = texture2D(textureUnit, vTexCoord);
//    gl_FragColor = vColor * samplerColor * globalColor;
//}
