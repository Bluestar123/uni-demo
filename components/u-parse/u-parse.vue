<!--**
 * forked from：https://github.com/F-loat/mpvue-wxParse
 *
 * github地址: https://github.com/dcloudio/uParse
 *
 * for: uni-app框架下 富文本解析
 */-->

<template>
<!--基础元素-->
<div class="wxParse" :class="className" v-if="!loading">
  <block v-for="(node,index) of nodes" :key="index">
    <wxParseTemplate :node="node" />
  </block>
</div>
</template>

<script>
import HtmlToJson from './libs/html2json';
import wxParseTemplate from './components/wxParseTemplate0';

export default {
  name: 'wxParse',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    noData: {
      type: String,
      default: '<div style="color: red;">加载中</div>',
    },
    startHandler: {
      type: Function,
      default() {
        return (node) => {
          node.attr.class = null;
          node.attr.style = null;
        };
      },
    },
    endHandler: {
      type: Function,
      default: null,
    },
    charsHandler: {
      type: Function,
      default: null,
    },
    imageProp: {
      type: Object,
      default() {
        return {
          mode: 'aspectFit',
          padding: 0,
          lazyLoad: false,
          domain: '',
        };
      },
    },
  },
  components: {
    wxParseTemplate,
  },
  data() {
    return {
      imageUrls: [],
			isBack:true
    };
  },
  computed: {
    nodes() {
      const {
        content,
        noData,
        imageProp,
        startHandler,
        endHandler,
        charsHandler,
      } = this;
      const parseData = content || noData;
      const customHandler = {
        start: startHandler,
        end: endHandler,
        chars: charsHandler,
      };
      const results = HtmlToJson(parseData, customHandler, imageProp, this);
      this.imageUrls = results.imageUrls;

      return results.nodes;
    },
  },
  methods: {
    
    removeImageUrl(src) {
      const { imageUrls } = this;
      imageUrls.splice(imageUrls.indexOf(src), 1);
    },
  },
};
</script>
