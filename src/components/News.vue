<template>
  <div>News</div>
  <ul>
    <li v-for="item of repositories" :key="item.objectID">
      <a :href="item.url">{{ item.title }}</a>
    </li>
  </ul>
  <button @click="getUserRepositories">获取</button>
</template>

<script>
import useNews from './useNews';

export default {
  name: 'News',
  components: [useNews],
  setup(props) {
    const { repositories, getUserRepositories } = useNews(props);
    return {
      repositories,
      getUserRepositories // 返回的函数与方法的行为相同
    };
  }
};
</script>
