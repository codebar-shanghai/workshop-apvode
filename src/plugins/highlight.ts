import "highlight.js/styles/stackoverflow-dark.css";
import hljs          from "highlight.js/lib/core";
import cpp           from "highlight.js/lib/languages/cpp";
import plaintext     from "highlight.js/lib/languages/plaintext";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("plaintext", plaintext);

export default hljsVuePlugin;

