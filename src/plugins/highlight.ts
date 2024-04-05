import "highlight.js/styles/stackoverflow-light.css";
import hljs          from "highlight.js/lib/core";
import bash          from "highlight.js/lib/languages/bash";
import cpp           from "highlight.js/lib/languages/cpp";
import plaintext     from "highlight.js/lib/languages/plaintext";
import x86asm        from "highlight.js/lib/languages/x86asm";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("x86asm", x86asm);

export default hljsVuePlugin;

