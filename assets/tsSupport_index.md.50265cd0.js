import{_ as n,c as s,o as a,e as t}from"./app.2c0f7f11.js";const g='{"title":"\u524D\u7F6E\u5DE5\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u7F6E\u5DE5\u4F5C","slug":"\u524D\u7F6E\u5DE5\u4F5C"},{"level":2,"title":"Demo","slug":"demo"}],"relativePath":"tsSupport/index.md"}',p={},o=t(`<h2 id="\u524D\u7F6E\u5DE5\u4F5C" tabindex="-1">\u524D\u7F6E\u5DE5\u4F5C <a class="header-anchor" href="#\u524D\u7F6E\u5DE5\u4F5C" aria-hidden="true">#</a></h2><ul><li>\u786E\u4FDD\u4F60\u7684\u9879\u76EE\u652F\u6301 ts</li><li>\u63A8\u8350\u5B89\u88C5 <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">volar</a> \u83B7\u53D6\u66F4\u597D\u7684\u6A21\u677F\u63D0\u793A</li><li>\u5B89\u88C5\u4F9D\u8D56 <a href="https://www.npmjs.com/package/@types/codemirror" target="_blank" rel="noopener noreferrer">@types/codemirror</a></li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Codemirror</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cmOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">border</span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@ready</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onReady<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFocus<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Codemirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Codemirror <span class="token keyword">from</span> <span class="token string">&quot;codemirror-editor-vue3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// @types/codemirror</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Editor<span class="token punctuation">,</span> EditorConfiguration <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;codemirror&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// language</span>
<span class="token keyword">import</span> <span class="token string">&quot;codemirror/mode/javascript/javascript.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    Codemirror<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cminstance <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Editor<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">const ary = []</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> cmOptions<span class="token operator">:</span> EditorConfiguration <span class="token operator">=</span> <span class="token punctuation">{</span>
      mode<span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
      lineWrapping<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token punctuation">,</span>
      cmOptions<span class="token punctuation">,</span>
      <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token parameter">cm<span class="token operator">:</span> Editor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cminstance<span class="token punctuation">.</span>value <span class="token operator">=</span> cm<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token operator">:</span> string<span class="token punctuation">,</span> cm<span class="token operator">:</span> Editor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> cm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">onFocus</span><span class="token punctuation">(</span><span class="token parameter">cm<span class="token operator">:</span> Editor<span class="token punctuation">,</span> event<span class="token operator">:</span> FocusEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onFocus&quot;</span><span class="token punctuation">,</span> cm<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cm<span class="token punctuation">.</span><span class="token function">getDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;beforeChange&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">instance<span class="token operator">:</span> Doc<span class="token punctuation">,</span> obj<span class="token operator">:</span> EditorChange</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeChange&quot;</span><span class="token punctuation">,</span> instance<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};
