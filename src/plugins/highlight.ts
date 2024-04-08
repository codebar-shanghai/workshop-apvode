import "highlight.js/styles/stackoverflow-light.css";
import hljs          from "highlight.js/lib/core";
import bash          from "highlight.js/lib/languages/bash";
import c             from "highlight.js/lib/languages/c";
import csharp        from "highlight.js/lib/languages/csharp";
import java          from "highlight.js/lib/languages/java";
import javascript    from "highlight.js/lib/languages/javascript";
import plaintext     from "highlight.js/lib/languages/plaintext";
import python        from "highlight.js/lib/languages/python";
import x86asm        from "highlight.js/lib/languages/x86asm";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("c", c);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("java",java);
hljs.registerLanguage("javascript",javascript);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("python", python);
hljs.registerLanguage("x86asm", x86asm);

export default hljsVuePlugin;

