import axios from 'axios';
import { ref } from 'vue';

export default function (props) {
  let repositories = ref([]);
  const getUserRepositories = async () => {
    const { data } = await axios.get('https://hn.algolia.com/api/v1/search?query=vue');
    repositories.value = data.hits;
  };

  return {
    repositories,
    getUserRepositories // 返回的函数与方法的行为相同
  };
}
