<template>
  <div id="app">
    <a-row class="header" type="flex" align="middle">
      <a-col flex="160px" style="margin: 0 auto">
        <RouterLink to="/">
          <a-row align="middle">
            <img src="./assets/logo.png" alt="SQL快打" class="logo" />
            <span class="title">SQL快打</span>
          </a-row>
        </RouterLink>
      </a-col>
      <a-col flex="auto">
        <a-menu
          :selected-keys="selectedKeys"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          @click="doClickMenu"
        >
          <a-menu-item key="/learn">学习</a-menu-item>
          <a-menu-item key="/levels">关卡</a-menu-item>
          <a-menu-item key="/playground">广场</a-menu-item>
          <a-menu-item>
            <a href="https://www.qschatdata.tech" target="_blank">
              数据分析学习
            </a>
          </a-menu-item>
          <a-menu-item>饼干哥哥微信号：binggandata</a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
    <div class="content">
      <router-view />
    </div>
    <div class="wechat-btn">
      <a-button shape="circle" size="large" @click="showModal"><wechat-outlined /></a-button>
      <a-modal v-model:visible="visible" title="找饼干哥哥玩" @ok="handleOk">
        <p>关注饼干哥哥公众号，学习更多数据分析知识。</p>
        <img src="./assets/mp.jpg" alt="饼干哥哥数据分析公众号" />
      </a-modal>
    </div>
    <div class="footer">
      网站开源作者：
      <a href="https://github.com/liyupi" target="_blank">程序员鱼皮</a>
    </div>
    <a-back-top :style="{ right: '24px' }" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import {
  WechatOutlined,
} from '@ant-design/icons-vue';


const route = useRoute();
const router = useRouter();
const selectedKeys = computed(() => [route.path]);

/**
 * 点击菜单跳转
 * @param key
 */
const doClickMenu = ({ key }: any) => {
  if (key) {
    router.push({
      path: key,
    });
  }
};



const visible = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};



</script>
<style scoped>
.header {
  border-bottom: 1px solid #f0f0f0;
  padding: 0 24px;
}

.ant-menu-horizontal {
  border-bottom: none !important;
}

.logo {
  width: 56px;
}

.title {
  margin-left: 8px;
  font-size: 20px;
  color: #000;
}

.content {
  padding: 24px;
}

.footer {
  padding: 12px;
  text-align: right;
  background: #efefef;
}


.wechat-btn {
  position: fixed;
  right: 3%;
  transform: translateX(50%);
  top: 1%;
  width: 100px;
  height: 100px;
  border-radius: 25px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.wechat-btn img {
  width: 60px;
  height: 60px;
}

</style>
