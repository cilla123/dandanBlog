<template>
  <div id="app">
    <table>
      <th>电话</th>
      <th>昵称</th>
      <th>年龄</th>
      <tbody>
        <tr v-for="user in userList">
          <td>{{ user.phone }}</td>
          <td>{{ user.nickName }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
    return {
      userList: []
    }
  },
  mounted(){
    this.$ajax.get('/api/v1/users', {
      // phone: '15217681427',
      // nickName: 'Ben',
      // age: '22',
    }).then((response) => {
      console.log(response.data);
      this.userList = response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
}
</script>

<style>

</style>
