import{_ as n,c as s,o as a,e as t}from"./app.2c0f7f11.js";const g='{"title":"\u901A\u8FC7 ref \u83B7\u53D6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u901A\u8FC7 ref \u83B7\u53D6","slug":"\u901A\u8FC7-ref-\u83B7\u53D6"},{"level":3,"title":"\u901A\u8FC7\u94A9\u5B50\u51FD\u6570\u83B7\u53D6","slug":"\u901A\u8FC7\u94A9\u5B50\u51FD\u6570\u83B7\u53D6"}],"relativePath":"instructions/cminstance.md"}',p={},o=t(`<h3 id="\u901A\u8FC7-ref-\u83B7\u53D6" tabindex="-1">\u901A\u8FC7 ref \u83B7\u53D6 <a class="header-anchor" href="#\u901A\u8FC7-ref-\u83B7\u53D6" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Codemirror</span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cmRefDom<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cmOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">border</span>
    <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Codemirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Editor<span class="token punctuation">,</span> EditorConfiguration <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;codemirror&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Codemirror<span class="token punctuation">,</span> <span class="token punctuation">{</span> CmComponentRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;codemirror-editor-vue3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// language</span>
<span class="token keyword">import</span> <span class="token string">&quot;codemirror/mode/javascript/javascript.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    Codemirror<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">const ary = []</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cmRefDom <span class="token operator">=</span> ref<span class="token operator">&lt;</span>CmComponentRef<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cminstance <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Editor<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> cmOptions<span class="token operator">:</span> EditorConfiguration <span class="token operator">=</span> <span class="token punctuation">{</span>
      mode<span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      cminstance<span class="token punctuation">.</span>value <span class="token operator">=</span> cmRefDom<span class="token punctuation">.</span>value<span class="token operator">?.</span>cminstance<span class="token punctuation">;</span>
      cminstance<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// or</span>
    <span class="token comment">// nextTick(() =&gt; {</span>
    <span class="token comment">//   cminstance.value = cmRefDom.value?.cminstance;</span>
    <span class="token comment">//   cminstance.value?.focus();</span>
    <span class="token comment">// });</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      cmRefDom<span class="token punctuation">,</span>
      code<span class="token punctuation">,</span>
      cmOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u901A\u8FC7\u94A9\u5B50\u51FD\u6570\u83B7\u53D6" tabindex="-1">\u901A\u8FC7\u94A9\u5B50\u51FD\u6570\u83B7\u53D6 <a class="header-anchor" href="#\u901A\u8FC7\u94A9\u5B50\u51FD\u6570\u83B7\u53D6" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Codemirror</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cmOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">border</span>
    <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@ready</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onReady<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Codemirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Editor<span class="token punctuation">,</span> EditorConfiguration <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;codemirror&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Codemirror <span class="token keyword">from</span> <span class="token string">&quot;codemirror-editor-vue3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// language</span>
<span class="token keyword">import</span> <span class="token string">&quot;codemirror/mode/javascript/javascript.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    Codemirror<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">const ary = []</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cminstance <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Editor<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> cmOptions<span class="token operator">:</span> EditorConfiguration <span class="token operator">=</span> <span class="token punctuation">{</span>
      mode<span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onReady</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cm<span class="token operator">:</span> Editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      cminstance<span class="token punctuation">.</span>value <span class="token operator">=</span> cm<span class="token punctuation">;</span>
      cminstance<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token operator">:</span> string<span class="token punctuation">,</span> cm<span class="token operator">:</span> Editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      cminstance<span class="token punctuation">.</span>value <span class="token operator">=</span> cm<span class="token punctuation">;</span>
      cminstance<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token punctuation">,</span>
      cmOptions<span class="token punctuation">,</span>
      onReady<span class="token punctuation">,</span>
      onChange<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var f=n(p,[["render",e]]);export{g as __pageData,f as default};
