<template>
  <editor v-model='content' @init='editorInit' :lang='lang' theme='monokai' width='100%' :style='{ "line-height": "12px" }' ></editor>
</template>

<script>
import editor from 'vue2-ace-editor'
export default {
  components: {
    editor
  },
  props: {
    value: {
      type: String
    },
    lang: {
      type: String,
      default: 'javascript'
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: this.value
    }
  },
  watch: {
    value () {
      this.content = this.value
    },
    content () {
      this.$emit('input', this.content)
    }
  },
  methods: {
    editorInit (editor) {
      editor.setShowPrintMargin(false)
      editor.setFontSize(14)
      editor.container.style.lineHeight = 1.3
      editor.setReadOnly(this.readonly)
      // language extension prerequsite...
      require('brace/ext/language_tools')
      // language
      require('brace/mode/html')
      require('brace/mode/javascript')
      // require('brace/mode/markdown')
      // theme
      require('brace/theme/monokai')
      // snippet
      require('brace/snippets/javascript')
      // require('brace/snippets/markdown')
      require('brace/snippets/html')
    }
  }
}
</script>
