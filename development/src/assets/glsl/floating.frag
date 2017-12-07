//precision mediump float;
//precision mediump int;
//
//uniform float u_time;
//
////varying vec3 vPosition;
////varying vec4 vColor;
//
//void main()	{
////    vec4 color = vec4( vColor );
////    color.r += sin( vPosition.x * 10.0 + u_time ) * 0.5;
////    gl_FragColor = color;
//    gl_FragColor = vec4(1.0,0.0,1.0,1.0);
//}

//precision mediump float;
//precision mediump int;
//uniform sampler2D textureUnit;
//varying vec2 vUv;
//
//void main(){
//    gl_FragColor = texture2D(textureUnit, vUv);
//}

precision mediump float;
uniform sampler2D textureUnit;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 vUv;

const vec4 greenColor = vec4(0.2, 1.0, 0.5, 1.0);

// ホワイトノイズを生成する乱数生成関数
float rnd(vec2 n){
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

void main(){

    // スクリーン上の座標（0.0 ~ u_resolution）を正規化（-1.0 ~ 1.0）する @@@
    // gl_FragCoord == スクリーン上のピクセル位置 0.0 ~ スクリーンの横幅ピクセル数 => 0.0 ~ 1.0
//    vec2 p = (gl_FragCoord.st * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec2 p = (gl_FragCoord.st * 1.0 - u_resolution) / min(u_resolution.x, u_resolution.y);

    // フレームバッファの描画結果をテクスチャから読み出す
    vec4 samplerColor = texture2D(textureUnit, vUv);

    // 簡単なモノクロ化 @@@
    float dest = (samplerColor.r + samplerColor.g + samplerColor.b) / 3.0;

    // ビネット（四隅が暗くなるような演出） @@@
    // length == ベクトルの長さを測る
    float vignette = 0.9 - length(p);
//    float vignette = 1.5 / length(p);
//    float vignette = 1.5 * length(p);
    dest *= vignette;

    // ホワイトノイズを生成 @@@
    float noise = rnd(gl_FragCoord.st + mod(u_time, 10.0));
    dest *= noise * 0.5 + 0.5; // ノイズの値をマイルド化

    // ブラウン管モニタのような走査線 @@@
    // abs == 絶対値を取る（全部プラスにする）
    float scanLine = abs(sin(p.y * 30.0 + u_time * 5.0)) * 0.5 + 0.5;
    dest *= scanLine;

    // 様々なポストプロセスを乗算して出力する
    gl_FragColor = greenColor * vec4(vec3(dest), 1.0);

    //    gl_FragColor = texture2D(textureUnit, vUv);
}