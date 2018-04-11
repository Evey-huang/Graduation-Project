<template>
  <el-row class="editor" :gutter="10">
    <el-col :span="4">
      <el-form label-position="top" :model="article">
        <el-form-item label="缩略图">
          <el-upload multiple drag accept="image/*" :show-file-list="false" action="/api/upload/singleFile"
          :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess">
            <img v-if="article.thumb" :src="article.thumb" class="avatar">
            <div v-else class="el-upload__text">
              <span><em>拖拽上传</em> 或 <em>点击上传</em><br>图片比例为7:5</span>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-select v-model="article.tag" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in this.options"
              :key="item._id"
              :label="item.name"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input v-model="article.keywords"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="article.description"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="20">
      <no-ssr>
        <mavon-editor ref="md" v-model="article.content" @imgAdd="imgAdd" @save="save"></mavon-editor>
      </no-ssr>
    </el-col>
  </el-row>

</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import axios from "~/plugins/axios";

export default {
  components: {
    mavonEditor
  },
  async asyncData({ query }) {
    let res = await axios.get("/tag");
    let article = {
      title: "",
      keywords: "",
      description: "",
      content: "",
      thumb: "",
      tag: []
    };
    if (query.articleId) {
      let res2 = await axios.get(`/article/${query.articleId}`, {});
      res2.data.article.tag.forEach((item, index) => {
        res2.data.article.tag[index] = item._id;
      });
      article = res2.data.article;
    }
    return {
      options: res.data.success ? res.data.tags : [],
      article
    };
  },
  beforeRouteUpdate(to, from, next) {
    if (!to.query.articleId) {
      this.article = {
        title: "",
        keywords: "",
        description: "",
        content: "",
        thumb: "",
        tag: []
      };
    }
    next();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      // this.article.thumb = URL.createObjectURL(file.raw);
      this.article.thumb = res.path;
    },
    beforeAvatarUpload(file) {
      //加载图片获取图片真实宽度和高度
      // const image = new Image();
      // image.onload = () => {
      //   const width = image.width;
      //   const height = image.height;
      //   if (width / 7 === height / 5) {
      //     return true;
      //   } else {
      //     this.$message.error('上传的图片比例必须为 7:5 !');
      //   }
      // };
      // image.src = URL.createObjectURL(file);

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    imgAdd(pos, $file) {
      let formData = new FormData();
      formData.append("file", $file);
      axios
        .post("/upload/singleFile", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          this.$refs.md.$img2Url(pos, res.data.path);
        });
    },
    save(value, render) {
      if (!this.$route.query.articleId) {
        axios.post("/article", this.article).then(res => {
          if (res.data.success) {
            this.$router.push("/admin/article");
          }
        });
      } else {
        axios.put(`/article/${this.article._id}`, this.article).then(res => {
          if (res.data.success) {
            this.$router.push("/admin/article");
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
.editor {
  height: 100%;
  .header {
    display: flex;
    justify-content: flex-end;
  }
  .el-col-20 {
    height: calc(100vh - 20px);
    .v-note-wrapper {
      height: 100%;
    }
    [type="button"] {
      -webkit-appearance: button-bevel;
    }
    .v-note-img-wrapper {
      img {
        height: 100%;
      }
    }
  }
  .el-upload {
    .el-upload-dragger {
      display: block;
      width: 168px;
      height: 120px;
      .avatar {
        display: block;
        width: 100%;
        height: 100%;
      }
      .el-upload__text {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
