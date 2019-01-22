<template>
  <div class="photoinfo">
    <h3>{{info.title || 123}}</h3>
    <p>
      <span>发表时间：{{info.add_time}}</span>
      <span>点击：{{info.click}}次</span>
    </p>
    <hr>
    <div class="content">{{info.content}}</div>
    <hr>图片区域
    <div class="hadle">
      <img v-for="(item,index) in imglst" :key="item.id" :src="item.src" @click="view(index)">
    </div>
    <comment :to="id"></comment>
  </div>
</template>

<script>
import { Toast } from "vant";
import comment from "../subcom/comment";
import { ImagePreview } from "vant";

export default {
  data() {
    return { id: this.$route.params.id, info: "", imglst: [] };
  },
  created() {
    this.getinfo(), this.gethub();
  },
  methods: {
    async getinfo() {
      const {
        data: { status, message }
      } = await this.$http.get(`api/getimageInfo/${this.id}`);
      if (status == 0) {
        this.info = message;
        console.log(this.info);
      } else {
        Toast("404");
      }
    },
    gethub() {
      this.$http.get(`api/getthumimages/${this.id}`).then(res => {
        const {
          data: { status, message }
        } = res;
        if (status == 0) {
          console.log(message);
          this.imglst = message;
        }
      });
    },
    view(startPosition) {
      let images = [];
      this.imglst.forEach(item => {
        images.push(item.src);
      });
      ImagePreview({
        images,
        startPosition,
        onClose() {
          // do something
        }
      });
    }
  },
  components: { comment }
};
</script>

<style lang='less'  scoped>
.photoinfo {
  h3 {
    text-align: center;
  }
  span {
    font-size: 12px;
  }
  .content {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    text-indent: 2em;
  }
}
.hadle {
  img {
    width: 100px;
    height: 100px;
  }
}
</style>