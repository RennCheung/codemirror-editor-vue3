import{_ as p}from"./chunks/preload-helper.0411efad.js";import{_ as o,s as e,c,a as u,b as l,r as i,d as k,e as t,o as s}from"./app.2c0f7f11.js";const r={data(){return{dynamicComponent:null}},mounted(){p(()=>import("./chunks/mergeDemo.7b6637d9.js"),["assets/chunks/mergeDemo.7b6637d9.js","assets/chunks/index.dc9b9984.js","assets/app.2c0f7f11.js","assets/chunks/javascript.9c254a99.js"]).then(n=>{this.dynamicComponent=e(n.default)})}},C='{"title":"merge \u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":3,"title":"merge \u6A21\u5F0F","slug":"merge-\u6A21\u5F0F"}],"relativePath":"merge/index.md"}',d=t('<h3 id="merge-\u6A21\u5F0F" tabindex="-1">merge \u6A21\u5F0F <a class="header-anchor" href="#merge-\u6A21\u5F0F" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7EC4\u4EF6\u5185\u90E8\u5DF2\u7ECF\u5F15\u5165 merge \u6A21\u5F0F\u76F8\u5173\u4F9D\u8D56\uFF0C\u53EA\u9700\u8981\u5F15\u5165\u9700\u8981\u4F7F\u7528\u7684\u8BED\u8A00\u6A21\u5F0F\u548C\u6837\u5F0F\u6587\u4EF6\u5373\u53EF\u3002</p></div><h4 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h4><p>merge \u6A21\u5F0F\u9700\u8981\u914D\u5408<a href="https://github.com/JackuB/diff-match-patch" target="_blank" rel="noopener noreferrer">diff-match-patch</a>\u63D2\u4EF6\u4F7F\u7528\uFF08\u538B\u7F29\u540E\u53EA\u5360\u7528 6.3k\uFF09\uFF0C\u5B89\u88C5<code>codemirror-editor-vue3</code>\u65F6\u4F1A\u81EA\u52A8\u5F15\u5165\u8BE5\u4F9D\u8D56</p>',4),m=t(`<div class="language-vue merge-mode-demo"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo-preview</span>
    <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ ...$attrs, ...$props }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Merge Mode\uFF1A<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>merge-mode-demo<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Codemirror</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMounted<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:merge</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cmOptions<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cm-component<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo-preview</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Codemirror <span class="token keyword">from</span> <span class="token string">&quot;codemirror-editor-vue3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;codemirror/mode/htmlmixed/htmlmixed.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    Codemirror<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isMounted <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;head&gt;
  &lt;title&gt;codemirror-editor-vue&lt;/title&gt;
  &lt;meta data-n-head=&quot;ssr&quot; charset=&quot;utf-8&quot;&gt;
&lt;/head&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> orig2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;head&gt;
  &lt;title&gt;test title&lt;/title&gt;
  &lt;meta data-n-head=&quot;ssr&quot; charset=&quot;utf-8&quot;&gt;
&lt;/head&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      isMounted<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      isMounted<span class="token punctuation">,</span>
      <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> cminstance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cminstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      cmOptions<span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        value<span class="token operator">:</span> code<span class="token punctuation">,</span>
        origLeft<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        orig<span class="token operator">:</span> orig2<span class="token punctuation">,</span>
        connect<span class="token operator">:</span> <span class="token string">&quot;align&quot;</span><span class="token punctuation">,</span>
        mode<span class="token operator">:</span> <span class="token string">&quot;text/html&quot;</span><span class="token punctuation">,</span>
        lineNumbers<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        collapseIdentical<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        highlightDifferences<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1);function g(n,_,h,f,a,q){return s(),c("div",null,[d,u("p",null,[a.dynamicComponent?(s(),l(i(a.dynamicComponent),{key:0})):k("",!0)]),m])}var w=o(r,[["render",g]]);export{C as __pageData,w as default};
