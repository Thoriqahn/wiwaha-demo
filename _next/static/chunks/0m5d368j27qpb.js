(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32841,e=>{"use strict";var t=e.i(8359),r=e.i(27919);let i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var a=t;class s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let o=new a.OrthographicCamera(-1,1,1,-1,0,1);class n extends a.BufferGeometry{constructor(){super(),this.setAttribute("position",new a.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new a.Float32BufferAttribute([0,2,0,0,2,0],2))}}let l=new n;class u{constructor(e){this._mesh=new a.Mesh(l,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class h extends s{constructor(e,r="tDiffuse"){super(),this.textureID=r,this.uniforms=null,this.material=null,e instanceof t.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=t.UniformsUtils.clone(e.uniforms),this.material=new t.ShaderMaterial({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new u(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class d extends s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,a,s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(i=0,a=1):(i=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,i,0xffffffff),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,0xffffffff),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class f extends s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class m{constructor(e,r){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===r){const i=e.getSize(new t.Vector2);this._width=i.width,this._height=i.height,(r=new t.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:t.HalfFloatType})).texture.name="EffectComposer.rt1"}else this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new h(i),this.copyPass.material.blending=t.NoBlending,this.timer=new t.Timer}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),void 0===e&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==d&&(i instanceof d?r=!0:i instanceof f&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let r=this.renderer.getSize(new t.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=r.width,this._height=r.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}let c={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class g extends s{constructor(){super(),this.isOutputPass=!0,this.uniforms=t.UniformsUtils.clone(c.uniforms),this.material=new t.RawShaderMaterial({name:c.name,uniforms:this.uniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this._fsQuad=new u(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,r,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},t.ColorManagement.getTransfer(this._outputColorSpace)===t.SRGBTransfer&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===t.LinearToneMapping?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===t.ReinhardToneMapping?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===t.CineonToneMapping?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===t.ACESFilmicToneMapping?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===t.AgXToneMapping?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===t.NeutralToneMapping?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===t.CustomToneMapping&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class p extends s{constructor(e,r,i=null,a=null,s=null){super(),this.scene=e,this.camera=r,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t.Color}render(e,t,r){let i,a,s=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(i),null!==this.overrideMaterial&&(this.scene.overrideMaterial=a),e.autoClear=s}}let v={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t.Color(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class b extends s{constructor(e,r=1,a,s){super(),this.strength=r,this.radius=a,this.threshold=s,this.resolution=void 0!==e?new t.Vector2(e.x,e.y):new t.Vector2(256,256),this.clearColor=new t.Color(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new t.WebGLRenderTarget(o,n,{type:t.HalfFloatType,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){const r=new t.WebGLRenderTarget(o,n,{type:t.HalfFloatType,depthBuffer:!1});r.texture.name="UnrealBloomPass.h"+e,r.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(r);const i=new t.WebGLRenderTarget(o,n,{type:t.HalfFloatType,depthBuffer:!1});i.texture.name="UnrealBloomPass.v"+e,i.texture.generateMipmaps=!1,this.renderTargetsVertical.push(i),o=Math.round(o/2),n=Math.round(n/2)}this.highPassUniforms=t.UniformsUtils.clone(v.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new t.ShaderMaterial({uniforms:this.highPassUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];o=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new t.Vector2(1/o,1/n),o=Math.round(o/2),n=Math.round(n/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=t.UniformsUtils.clone(i.uniforms),this.blendMaterial=new t.ShaderMaterial({uniforms:this.copyUniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,premultipliedAlpha:!0,blending:t.AdditiveBlending,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t.Color,this._oldClearAlpha=1,this._basic=new t.MeshBasicMaterial,this._fsQuad=new u(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,r){let i=Math.round(e/2),a=Math.round(r/2);this.renderTargetBright.setSize(i,a);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(i,a),this.renderTargetsVertical[e].setSize(i,a),this.separableBlurMaterials[e].uniforms.invSize.value=new t.Vector2(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(e,t,r,i,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this._fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[t].uniforms.direction.value=b.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=b.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[t];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let r=[],i=e/3;for(let t=0;t<e;t++)r.push(.39894*Math.exp(-.5*t*t/(i*i))/i);let a=[],s=[];for(let t=1;t<e;t+=2){let i=r[t],o=t+1<e?r[t+1]:0,n=i+o;a.push((t*i+(t+1)*o)/n),s.push(n)}return new t.ShaderMaterial({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new t.Vector2(.5,.5)},direction:{value:new t.Vector2(.5,.5)},centerWeight:{value:r[0]},gaussianOffsets:{value:a},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new t.ShaderMaterial({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}b.BlurDirectionX=new t.Vector2(1,0),b.BlurDirectionY=new t.Vector2(0,1),globalThis.__wiwahaThree=!0;let T=()=>window.innerWidth<768||matchMedia("(pointer: coarse)").matches,w={uniforms:{tDiffuse:{value:null},uWaktu:{value:0},uGrain:{value:.045},uHangat:{value:new t.Color("#2a1408")}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uWaktu; uniform float uGrain; uniform vec3 uHangat;
    varying vec2 vUv;
    float acak(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // angkat bagian gelap ke arah hangat (gaya film), lalu grain halus
      c.rgb = c.rgb + uHangat * (1.0 - smoothstep(0.0, 0.35, c.rgb));
      float n = acak(vUv * vec2(1920.0, 1080.0) + uWaktu * 60.0) - 0.5;
      c.rgb += n * uGrain;
      gl_FragColor = c;
    }`};function x(e,t,r){let i=Math.min(1,1024/Math.max(e,t)),a=document.createElement("canvas");return a.width=Math.round(e*i),a.height=Math.round(t*i),r(a.getContext("2d",{willReadFrequently:!0}),a.width,a.height),a}function M(e,r=!0){let i=new t.CanvasTexture(e);return i.colorSpace=r?t.SRGBColorSpace:t.NoColorSpace,i.anisotropy=8,i}function C(e,t,r){return M(x(e,t,r))}e.s(["bokeh",0,function(e,r,i=60){let a=C(128,128,(e,t,r)=>{let i=e.createRadialGradient(t/2,r/2,0,t/2,r/2,t/2);i.addColorStop(0,"rgba(255,255,255,0.55)"),i.addColorStop(.72,"rgba(255,255,255,0.4)"),i.addColorStop(.86,"rgba(255,255,255,0.6)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,t,r)}),s=[];for(let[o,n]of[.35,.6,1].entries()){let l=Math.round(i/3*(T()?.7:1)),u=new Float32Array(3*l);for(let e=0;e<l;e++)u[3*e]=(Math.random()-.5)*r.x,u[3*e+1]=(Math.random()-.5)*r.y,u[3*e+2]=r.z[0]+Math.random()*(r.z[1]-r.z[0]);let h=new t.BufferGeometry;h.setAttribute("position",new t.BufferAttribute(u,3)),s.push(new t.Points(h,new t.PointsMaterial({color:new t.Color(e[o%e.length]),size:n,map:a,transparent:!0,opacity:.35,depthWrite:!1,blending:t.AdditiveBlending,fog:!1})))}return s},"diHP",0,T,"kanvas",0,x,"muatSvg",0,function(e){return new Promise(t=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>t(null),r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`})},"normalDari",0,function(e,t=2){let r=e.width,i=e.height,a=e.getContext("2d").getImageData(0,0,r,i).data,s=document.createElement("canvas");s.width=r,s.height=i;let o=s.getContext("2d"),n=o.createImageData(r,i),l=(e,t)=>a[((t+i)%i*r+(e+r)%r)*4]/255;for(let e=0;e<i;e++)for(let i=0;i<r;i++){let a=(l(i+1,e)-l(i-1,e))*t,s=(l(i,e+1)-l(i,e-1))*t,o=1/Math.sqrt(a*a+s*s+1),u=(e*r+i)*4;n.data[u]=(-a*o*.5+.5)*255,n.data[u+1]=(s*o*.5+.5)*255,n.data[u+2]=(.5*o+.5)*255,n.data[u+3]=255}return o.putImageData(n,0,0),M(s,!1)},"partikel",0,function(e,r,i,a=.05,s=.7){let o=Math.min(e,T()?300:e),n=new Float32Array(3*o);for(let e=0;e<o;e++)n[3*e]=(Math.random()-.5)*i.x,n[3*e+1]=(Math.random()-.5)*i.y,n[3*e+2]=i.z[0]+Math.random()*(i.z[1]-i.z[0]);let l=new t.BufferGeometry;l.setAttribute("position",new t.BufferAttribute(n,3));let u=new t.PointsMaterial({color:new t.Color(r),size:a,map:C(64,64,(e,t,r)=>{let i=e.createRadialGradient(t/2,r/2,0,t/2,r/2,t/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,t,r)}),transparent:!0,opacity:s,depthWrite:!1,blending:t.AdditiveBlending,fog:!1});return new t.Points(l,u)},"seratKertas",0,function(e,t,r,i=1,a=1){let s=9301*a+49297,o=()=>(s=(9301*s+49297)%233280)/233280;for(let a=0;a<t*r/90;a++){let a=o()*t,s=o()*r,n=o()*Math.PI,l=2+9*o();e.strokeStyle=`rgba(${.5>o()?"0,0,0":"255,255,255"},${.035*i})`,e.lineWidth=.6,e.beginPath(),e.moveTo(a,s),e.lineTo(a+Math.cos(n)*l,s+Math.sin(n)*l),e.stroke()}},"siapkan",0,function(e,i,a={}){var s,o,n;let l,u,d,f,c,v,x,M,C=function(){let e=new URLSearchParams(window.location.search).get("kualitas");if("tinggi"===e||"sedang"===e)return e;if(!T())return"tinggi";let t=navigator,r=t.deviceMemory;return(void 0===r||r>=6)&&(t.hardwareConcurrency??8)>=6?"tinggi":"sedang"}();try{l=new r.WebGLRenderer({antialias:"sedang"===C,alpha:!1,powerPreference:"high-performance"})}catch{return null}let _=(d=(u=new t.Color(i.ink)).clone().lerp(new t.Color("#050302"),.72),{latar:d,latar2:new t.Color(i.ac).lerp(new t.Color("#0b0605"),.62),emas:new t.Color(i.ac2).lerp(new t.Color("#f4dca0"),.2),kertas:new t.Color(i.sf).lerp(new t.Color("#fffaf0"),.35),aksen:new t.Color(i.ac),tinta:u});l.outputColorSpace=t.SRGBColorSpace,l.toneMapping=t.ACESFilmicToneMapping,l.toneMappingExposure=a.eksposur??1;let S=Math.min(window.devicePixelRatio||1,"tinggi"===C?2:1.5);l.setPixelRatio(S),l.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),l.setClearColor(_.latar,1),e.appendChild(l.domElement);let y=new t.Scene;y.background=_.latar.clone(),y.fog=new t.FogExp2(_.latar.clone(),a.kabut??.045);let R=(s=l,o=new t.Color("#ffd9a8"),n=new t.Color("#9fb4ff"),f=new t.Scene,c=new t.Mesh(new t.BoxGeometry(20,20,20),new t.MeshBasicMaterial({color:new t.Color("#0c0907"),side:t.BackSide})),f.add(c),(v=(e,r,i,a,s,o,n)=>{let l=new t.Mesh(new t.PlaneGeometry(e,r),new t.MeshBasicMaterial({color:i.clone().multiplyScalar(a),side:t.BackSide}));l.position.set(s,o,n),l.lookAt(0,0,0),f.add(l)})(8,4,o,5,-4,7,4),v(3,9,n,1.6,9,1,-2),v(10,2,o,1.2,0,-8,3),M=(x=new r.PMREMGenerator(s)).fromScene(f,.035).texture,x.dispose(),f.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()}),M);y.environment=R;let A=new t.PerspectiveCamera(a.fov??45,(e.clientWidth||window.innerWidth)/(e.clientHeight||window.innerHeight),.05,120),P=null,B=null,E=null,U=null;if("tinggi"===C){U=new t.WebGLRenderTarget((e.clientWidth||window.innerWidth)*S,(e.clientHeight||window.innerHeight)*S,{type:t.HalfFloatType,samples:4}),(P=new m(l,U)).setPixelRatio(S),P.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),P.addPass(new p(y,A));let r=a.bloom??{kuat:.55,radius:.6,ambang:.82};B=new b(new t.Vector2(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),r.kuat,r.radius,r.ambang),P.addPass(B),P.addPass(new g),E=new h(w),P.addPass(E)}let F=0,G=()=>{l.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),P?.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),A.aspect=(e.clientWidth||window.innerWidth)/(e.clientHeight||window.innerHeight),A.updateProjectionMatrix()};return{renderer:l,scene:y,kamera:A,kualitas:C,malam:_,ukur:G,aturBloom(e){B&&(B.strength=e)},render(e){F+=e,P&&E?(E.uniforms.uWaktu.value=F%100,P.render(e)):l.render(y,A)},hemat(){P?.dispose(),U?.dispose(),P=null,E=null,S=1,l.setPixelRatio(1),G()},info:()=>({drawCalls:l.info.render.calls,segitiga:l.info.render.triangles,pixelRatio:l.getPixelRatio(),kualitas:P?"tinggi":"sedang"}),hancurkan(){P?.dispose(),U?.dispose(),R.dispose(),function(e,t){let r=new Set;for(let t of(e.traverse(e=>{for(let t of(e.geometry?.dispose(),Array.isArray(e.material)?e.material:e.material?[e.material]:[])){for(let e of Object.values(t))e&&e.isTexture&&r.add(e);t.dispose()}}),r))t.dispose();t.dispose(),t.forceContextLoss(),t.domElement.remove()}(y,l)}}},"teksPas",0,function(e,t,r,i,a,s,o,n="400"){let l=s;for(e.font=`${n} ${l}px ${o}`;l>8&&e.measureText(t).width>a;)l-=2,e.font=`${n} ${l}px ${o}`;e.fillText(t,r,i)},"teksRenggang",0,function(e,t,r,i,a,s,o=.3,n="500"){e.font=`${n} ${a}px ${s}`;let l=[...t],u=r-(l.reduce((t,r)=>t+e.measureText(r).width,0)+o*a*(l.length-1))/2,h=e.textAlign;for(let t of(e.textAlign="left",l))e.fillText(t,u,i),u+=e.measureText(t).width+o*a;e.textAlign=h},"teksturDari",0,M,"teksturKanvas",0,C,"ulang",0,function(e,r,i){return e.wrapS=e.wrapT=t.RepeatWrapping,e.repeat.set(r,i),e}],32841)},87073,e=>{"use strict";var t=e.i(8359);function r(e){let r,i,a,s=-1,o=0;for(let t=0;t<e.length;++t){let n=e[t];if(void 0===r&&(r=n.array.constructor),r!==n.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===i&&(i=n.itemSize),i!==n.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===a&&(a=n.normalized),a!==n.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(-1===s&&(s=n.gpuType),s!==n.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=n.count*i}let n=new r(o),l=new t.BufferAttribute(n,i,a),u=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=u/i;for(let t=0,a=r.count;t<a;t++)for(let a=0;a<i;a++){let i=r.getComponent(t,a);l.setComponent(t+e,a,i)}}else n.set(r.array,u);u+=r.count*i}return void 0!==s&&(l.gpuType=s),l}e.s(["mergeGeometries",0,function(e,i=!1){let a=null!==e[0].index,s=new Set(Object.keys(e[0].attributes)),o=new Set(Object.keys(e[0].morphAttributes)),n={},l={},u=e[0].morphTargetsRelative,h=new t.BufferGeometry,d=0;for(let t=0;t<e.length;++t){let r=e[t],f=0;if(a!==(null!==r.index))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let e in r.attributes){if(!s.has(e))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+'. All geometries must have compatible attributes; make sure "'+e+'" attribute exists among all geometries, or in none of them.'),null;void 0===n[e]&&(n[e]=[]),n[e].push(r.attributes[e]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+". Make sure all geometries have the same number of attributes."),null;if(u!==r.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let e in r.morphAttributes){if(!o.has(e))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===l[e]&&(l[e]=[]),l[e].push(r.morphAttributes[e])}if(i){let e;if(a)e=r.index.count;else{if(void 0===r.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+t+". The geometry must have either an index or a position attribute"),null;e=r.attributes.position.count}h.addGroup(d,e,t),d+=e}}if(a){let t=0,r=[];for(let i=0;i<e.length;++i){let a=e[i].index;for(let e=0;e<a.count;++e)r.push(a.getX(e)+t);t+=e[i].attributes.position.count}h.setIndex(r)}for(let e in n){let t=r(n[e]);if(!t)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+e+" attribute."),null;h.setAttribute(e,t)}for(let e in l){let t=l[e][0].length;if(0!==t){h.morphAttributes=h.morphAttributes||{},h.morphAttributes[e]=[];for(let i=0;i<t;++i){let t=[];for(let r=0;r<l[e].length;++r)t.push(l[e][r][i]);let a=r(t);if(!a)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+e+" morphAttribute."),null;h.morphAttributes[e].push(a)}}}return h}])}]);